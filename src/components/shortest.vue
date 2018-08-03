<template>
	<div id="shortest">
    <div id="re_div">
      <span v-if="showCount">第&nbsp;<i>{{count-1}}</i>&nbsp;关</span>
      <button class="btn1" @click="reStart">Restart</button>
    </div>
		<div id="score">{{score}}</div>
		<div id="rule" v-if="showRule">
      <h1>找到最近的黄点</h1>
      <button class="btn" @click="startGame">PLAY</button>
    </div>
    <div  id="svg_div">
      <svg id="svg"  preserveAspectRatio="none"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <circle @click="clickCicle(item)" v-for="item in arry" r="8" :cx="item.cx" :cy="item.cy" class="dotted" :style="item.cstyle"></circle>
      </svg>
    </div>
    <!-- 游戏结束 -->
     <el-dialog
      title="赶紧把眼镜戴上！！！"
      :visible.sync="errord"
      width="70%"
      center>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="errord = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 游戏成功 -->
     <el-dialog
      title="过关，点确定进行下一关"
      :visible.sync="successStatus"
      width="70%"
      center>
      <div class="su">
        得分：<span>{{score}}</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="successStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  
	export default{
		data () {
	    return {
        count:2,
	    	score:'0',
	    	showRule:true,
        showSVG:false,
        x:1500,
        y:600,
        x1:0,
        y1:0,
        v_width:0,
        v_height:0,
        arry:[],
        circleStyle:'',
        minDistanceArr:[],
        topPaixu:[],
        twoDistance:'',
        errord:false,
        successStatus:false,
        showCount:false   
	    }
	  },
	  methods: {
	  	// 点击开始游戏
	  	startGame(){
        this.showRule =false
        this.showCount = true
        this.initCircle()
	  	},
      // 重新开始
      reStart(){
         window.location.reload()
      },
      // 初始化小圆圈
      initCircle(){
        this.arry = []
        this.topPaixu = []
        this.minDistanceArr =[]
        var svg = document.getElementById("svg");
        // 生成初始位置
        var dot1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.x = Math.floor(Math.random() * this.v_width + 1);
        this.y = Math.floor(Math.random() * this.v_height + 1);
        this.x1 = this.x
        this.y1 = this.y
        dot1.setAttribute("r", 14);
        dot1.setAttribute("cx", this.x);
        dot1.setAttribute("cy", this.y);
        dot1.setAttribute("id","firstDot");
        dot1.setAttribute("style","fill:rgba(46, 204, 113,1.0); transform-origin: " + this.x + 'px ' + this.y + 'px;');
        svg.appendChild(dot1)

        // 随机产生圆圈
        for(var i=0;i<this.count;i++){

          let cxx = Math.floor(Math.random() * this.v_width + 1)
          let cyy = Math.floor(Math.random() * this.v_height + 1)
          this.arry.push({cx:cxx,cy:cyy,cstyle:"fill:rgba(241, 196, 15,1.0);"+"transform-origin:" +cxx+ 'px ' +cyy+ 'px;'})
           // this.$set(this.arry,"index",{cx:cxx,cy:cyy,cstyle:"fill:rgba(241, 196, 15,1.0);"+"transform-origin:" +cxx+ 'px ' +cyy+ 'px;'})
        }
        console.log(this.arry)
        // 初始化线段
        this.arry.map((item,index) =>{
          var line  = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1",this.x1);
          line.setAttribute("y1",this.y1);
          line.setAttribute("x2",item.cx);
          line.setAttribute("y2",item.cy);
          line.setAttribute("class","line");
          svg.appendChild(line)
        })
        this.getSortArr()
        // 
      },
      // 成功之后移除
      removeCircle(){
        var firstDot = document.getElementById("firstDot");
        var svg = document.getElementById("svg");
        var dotted = document.getElementsByClassName('dotted')
        var line = document.getElementsByClassName('line')
        // 必须倒着删除
        for (var i = this.arry.length - 1; i >= 0; i--) {
          svg.removeChild(line[i])
        }
        this.arry = []
        svg.removeChild(firstDot)
      },
      //响应式显示
      getViewport(){
        this.v_width = document.body.clientWidth -330
        this.v_height = document.body.clientHeight -330
      },
      // 点黄圈
      clickCicle(item){
        // 获取点的黄圈到绿色距离
        let pfh = Math.abs(this.x-item.cx)*Math.abs(this.x-item.cx)+Math.abs(this.y-item.cy)*Math.abs(this.y-item.cy)//平方和
        this.twoDistance = Math.pow(pfh,0.5)
        if (this.twoDistance===this.minDistanceArr[0].value) {
          item.cstyle ="fill:rgba(228, 51, 51,1.0); transform-origin: " + item.cx + 'px ' + item.cy + 'px;'
          this.minDistanceArr.splice(0,1)//从start的位置开始向后删除delCount个元素
          this.score++
          // console.log(this.minDistanceArr)
          // 成功
          if(this.minDistanceArr.length==0){
            this.successStatus = true
            this.count++
            this.removeCircle()
            this.initCircle()
          }
        }
        // 失败
        else if(this.twoDistance!=this.minDistanceArr[0].value){
          this.errord = true
        }
        
      },
      // 获取最短路径排序数组
      getSortArr(){
        this.arry.map((item,index) =>{
          let pfh = Math.abs(this.x-item.cx)*Math.abs(this.x-item.cx)+Math.abs(this.y-item.cy)*Math.abs(this.y-item.cy)
          this.minDistanceArr.push({index:index,value:Math.pow(pfh,0.5)})
        })
        //升序排序
        var compare = function (a, b) {
          var x = a.value
          var y = b.value
          if (x < y) {
              return -1;
          } else if (x > y) {
              return 1;
          } else {
              return 0;
          }
        }
        this.topPaixu = this.minDistanceArr.sort(compare)
      },
	  },
	  created(){
      this.getViewport()
	  },
    mounted(){

    },
	}
	</script>

<style scoped>
#shortest{
	padding: 100px 0 0px 0;
	height: 100%;
	cursor: crosshair;
	user-select: none;
	background: #000;
}
 
 
@keyframes dotReveal {
  to  {opacity:1;}
}
 

svg{
  box-sizing: border-box;
  height:100%;
  width:100%;
  padding:0;
  margin:0;
  overflow:auto;
  position: relative;
  z-index:1111;
}
#score {
  position: fixed;
  z-index:0;
  top: 50%;
  left:50%;
  width: 100%;
  text-align:center;
  transform: translate(-50%, -50%);
  font-size:20em;
  color: rgba(46, 204, 113,0.2);
  font-family: 'Bungee Outline', cursive;
}
 
.btn {
  background: transparent;
  cursor:pointer;

  color:rgba(241, 196, 15,1.0);
  font-weight:bold;
  padding: 15px 60px;
  border-radius: 6px;
  border: 3px solid rgba(241, 196, 15,1.0);
  transition: all 0.3s ease-out;
}
 
.btn:hover {
  background: rgba(241, 196, 15,1.0);
  color: black;
}
.btn1 {
  background: transparent;
  cursor:pointer;
  color: #25cc71;
  font-weight:bold;
  padding: 8px 30px;
  border-radius: 6px;
  transition: all 0.3s ease-out;
  border: none;
  outline: none;
}
 
.btn1:hover {
  background: #25cc71;
  color: #fff;
}
#re_div{
  text-align: right;
  margin-right: 10%;
}
#re_div span{
  color: #fff;
  font-size: 24px;
}
#re_div i{
  color: #11f8af;
  font-size: 30px;
}
#rule {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 150px 50px 50px 50px;
  transform: scale(0.8);
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.320, 1.275);
}
#rule h1 {
  position: relative;
  font-family: 'Bungee Outline', cursive;
  color: rgba(46, 204, 113,1.0);
  font-size: 4em;
  margin: 0 0 0.4em 0;
}
#svg_div{
  width: 95%;
  height: 1000px;
  overflow: hidden;
  margin:0 auto ;
}
.su{
  font-size: 30px;
  color: #3f8b4d;
  text-align: center;
  letter-spacing: 4px;
 }
 .su span{
  font-size: 36px;
  color: #f51111;
  text-align: center;
 }
</style>