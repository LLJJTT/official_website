<template>
	<div id="shortest">
    <div id="re_div">
      <button class="btn1" @click="reStart">Restart</button>
    </div>
		<div id="score">{{score}}</div>
		<div id="rule" v-if="showRule">
      <h1>找到最近的黄点</h1>
      <button class="btn" @click="startGame">PLAY</button>
    </div>
    <div id="svg_div">
      <svg id="svg"  preserveAspectRatio="none"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      </svg>
    </div>
  </div>
</template>
<script>
  
	export default{
		data () {
	    return {
	    	score:'0',
	    	showRule:true,
        x:1500,
        y:600,
        x1:0,
        y1:0,
	    }
	  },
	  methods: {
	  	// 点击开始游戏
	  	startGame(){
        this.showRule =false
        this.initCircle()
	  	},
      // 重新开始
      reStart(){
        this.showRule =true
        this.score = 0
      },
      // 初始化小圆圈
      initCircle(){
        var svg = document.getElementById("svg");

        // 生成初始位置
        var dot1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.x = Math.floor(Math.random() * 1500 + 1);
        this.y = Math.floor(Math.random() * 800 + 1);
        this.x1 = this.x
        this.y1 = this.y
        dot1.setAttribute("r", 14);
        dot1.setAttribute("cx", this.x);
        dot1.setAttribute("cy", this.y);
        dot1.setAttribute("id","firstDot");
        dot1.setAttribute("style","fill:rgba(46, 204, 113,1.0); transform-origin: " + this.x + 'px ' + this.y + 'px;');
        svg.appendChild(dot1)

        // 随机产生圆圈
        for(var i=0;i<40;i++){
          var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
          this.x = Math.floor(Math.random() * 1500 + 1);
          this.y = Math.floor(Math.random() * 800 + 1);
          dot.setAttribute("r", 8);
          dot.setAttribute("cx", this.x);
          dot.setAttribute("cy", this.y);
          dot.setAttribute("style","fill:#e9ff03;transform-origin: " + this.x + 'px ' + this.y + 'px;');
          dot.setAttribute("class","dotted")
          svg.appendChild(dot)

          // 初始化线段
          var line  = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1",this.x1);
          line.setAttribute("y1",this.y1);
          line.setAttribute("x2",this.x);
          line.setAttribute("y2",this.y);
          line.setAttribute("class","line");
          svg.appendChild(line)
        }
      },
     
	  },
	  created(){

	  },
    mounted(){

    }
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
</style>