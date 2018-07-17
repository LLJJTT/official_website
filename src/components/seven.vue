<template>
  <div id="box">
    <p class="intro">此游戏移动方向是随机的，逃犯不会分析最短路径，只凭感觉走</p>
    <ul class="block_ul">
        <li class="block" 
        v-for="(item,index) in items"
        :key="item"
        @click="showWall(index)">
          <img class="man_img" src="static/man.png" alt="">
        </li>
    </ul>
    <el-dialog
      title="请选取一个逃犯的位置"
      :visible.sync="att"
      width="70%"
      center>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="att = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--  -->
    <el-dialog
      title="请选择方块阻挡逃犯逃脱!"
      :visible.sync="ttt"
      width="70%"
      center>
      <div style="text-align: center">
        <div class="word">现在逃犯可以向<i class="show">&nbsp;上&nbsp;下&nbsp;左&nbsp;右&nbsp;</i>四个方向逃跑</div>
        <div class="word">你可以在罪犯的逃跑线路上<i class="show">&nbsp;放&nbsp;障&nbsp;碍&nbsp;物</i>，直到罪犯<i class="show">&nbsp;动&nbsp;弹&nbsp;不&nbsp;得</i></div>
        <div class="word">围堵成功游戏成功，否则失败</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="ttt = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 游戏结束 -->
     <el-dialog
      title="你失败了,他已经逃之夭夭"
      :visible.sync="errord"
      width="70%"
      center>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="reset">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 游戏成功 -->
     <el-dialog
      title="恭喜你"
      :visible.sync="successStatus"
      width="70%"
      center>
      <div class="su">
        成功捉拿逃犯！
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="success">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items:[],
      att:true,
      ttt:false,
      selectCriminal:false,
      criminalPosition:'',
      // 上下左右距离
      margin:[
        {
          distance:'',
          name:'top'
        },
        {
          distance:'',
          name:'bottom'
        },
        {
          distance:'',
          name:'left'
        },
        {
          distance:'',
          name:'right'
        }
      ],
      // 上下左右围堵状态
      stop:{
        top:false,
        bottom:false,
        left:false,
        right:false,
      },
      // 
      rankList:[],
      newsArr:[],
      goArr:[],
      beforeIndex:'',
      // tree arr
      treeArr:[],
      errord:false,
      selectTrue:false,
      successStatus:false
    }
  },
  methods: {
    // 生成表格 10*7
    render(){
      let i=1
      for (i; i < 71; i++) {
        this.items.push(i)
      }
    },
    // 获取上下左右距离
    getMargin(){
      // 获取初始犯人坐标
      this.margin.map((item) =>{
        if (item.name == 'top') {
          item.distance = parseInt(this.criminalPosition/10)
        }
        else if(item.name == 'bottom'){
          item.distance = 7 - parseInt(this.criminalPosition/10) - 1 
        }
        else if (item.name == 'left') {
          item.distance = this.criminalPosition%10 
        }
        else{
          item.distance = 10 -this.criminalPosition%10  - 1
        }
        if (item.distance==0) {
          this.errord = true
        }
      })
    },
    // 获取上下围堵状态
    getStop(){
      // 获取上下左右img-src
      let oTop = document.querySelectorAll('.block')[this.criminalPosition - 10].querySelector('img')
      let oBottom = document.querySelectorAll('.block')[this.criminalPosition + 10].querySelector('img')
      let oLeft = document.querySelectorAll('.block')[this.criminalPosition - 1].querySelector('img')
      let oRight = document.querySelectorAll('.block')[this.criminalPosition + 1].querySelector('img')
      const InitSrc = "static/tree.png"
      let srcTop = oTop.getAttribute('src')
      let srcBottom = oBottom.getAttribute('src')
      let srcLeft = oLeft.getAttribute('src')
      let srcRight = oRight.getAttribute('src')
      this.goArr.push(this.criminalPosition - 10,this.criminalPosition + 10,this.criminalPosition - 1,this.criminalPosition + 1)
      // 上
      if (InitSrc == srcTop ) {
        this.stop.top = true
        this.rankList.push(this.criminalPosition - 10)
      }
      else{
        this.stop.top = false
      }
      // 下
      if (InitSrc == srcBottom ) {
        this.stop.bottom = true
        this.rankList.push(this.criminalPosition + 10)
      }
      else{
        this.stop.bottom = false
      }

      // 左
      if (InitSrc == srcLeft ) {
        this.stop.left = true
        this.rankList.push(this.criminalPosition - 1)
      }
      else{
        this.stop.left = false
      }
      // 右
      if (InitSrc == srcRight ) {
        this.stop.right = true
        this.rankList.push(this.criminalPosition + 1)
      }
      else{
        this.stop.right = false
      }



    },
    // 犯人移动
    escape(){
      if(this.stop.bottom===true&&this.stop.top===true&&this.stop.left===true&&this.stop.right===true){
          this.successStatus = true
          return
      }
      // 数组去重
      var set1 = new Set(this.rankList);
      var set2 = new Set(this.goArr);
      console.log("当前点击障碍位置  "+this.rankList)
      console.log("没移动之前，M的上-下-左-右的位置   "+this.goArr)
      var newArr1 = Array.from(set1);//去重之后
      var newArr2 = Array.from(set2);//去重之后

      // 数组相减法
      var arr1 = newArr2;
      var arr2 = newArr1;
      var arr3 = [];
      arr1.forEach((a)=>{
          let c = arr2.findIndex(b=>a == b);
          if (c > -1) {
            delete arr2[c]
          }
          else {
            arr3.push(a)
          }
      });

      // console.log(arr3)//减完之后
      // 随机数产生移动方向数字
      var q = arr3[Math.floor(Math.random()*arr3.length)]//随机获取可移动方向数字
      let oInitNew = document.querySelectorAll('.block')[q].querySelector('img')
      let oInitOld = document.querySelectorAll('.block')[this.criminalPosition].querySelector('img')
      oInitNew.style.opacity = '1'
      oInitNew.style.transition = '0.8s'
      oInitOld.style.opacity = '0'
      oInitOld.style.transition = '0.4s'
      this.criminalPosition = q
      console.log("M随机移动之后的位置"+q)
      this.goArr=[]
      this.getMargin()
      console.log(this.stop)
    },
    // 点击方块
    showWall(index){
      // 点击选取逃犯位置
      if (this.selectCriminal==false) {
        if (index==0||index==1||index==2||index==3||index==4||index==5||index==6||index==7||index==8||index==9||index==10||index==20||index==30||index==40||index==50||index==60||index==19||index==29||index==39||index==49||index==59||index==69) {
          this.$message({
              message:"当前选择无效",
              type:'error'
            })
        }
        else{
          this.criminalPosition = index
          console.log("M的位置   "+this.criminalPosition)
          // 展示犯人位置
          let oInit = document.querySelectorAll('.block')[index].querySelector('img')
          oInit.style.opacity = '1'
          this.selectCriminal = true
          this.ttt = true
          this.getMargin()
        }
        
      }
      else{
        this.beforeIndex = index
        // 判断点过的树、不可点
        for(let i = 0;i<this.treeArr.length;i++){
          if (this.beforeIndex==this.treeArr[i]) {
            this.$message({
              message:"此处不可点",
              type:'error'
            })
            return
          }
        }
        if (this.criminalPosition!=index) {
          let oInit = document.querySelectorAll('.block')[index].querySelector('img')
          this.treeArr.push(index)
          oInit.src = 'static/tree.png'
          oInit.style.opacity = '1'
          this.getStop()
          this.getMargin()
          this.escape()
        }
        else{
          this.$message({
              message:"此处不可点",
              type:'error'
          })
        }
        
      }
    },
    // 失败之后点确定
    reset(){
      this.errord = false
      window.location.reload()
    },
    // 成功之后点下一局
    success(){
      this.successStatus = false
      window.location.reload()
    }
  },
  created:function(){
    this.render()
  }
}
</script>

<style scoped>
 body {
  font-family: Arial, "Microsoft YaHei"; 
 }
 #box {
    width:100%;
    margin: 0 auto;
    background:#000;
    padding: 100px 0 50px 0;
 }
 .block{
    background: red;
     width: 100px;
    height: 100px;
    font-size: 20px;
    background: #000;
    text-align: center;
    line-height: 100px;
    border: 1px solid #ccc;
    cursor: pointer;
    color: #f2f2f2;
    display: inline-block;
    margin-left: 2px;
 }
 .block_ul{
    width: 1100px;
    height: 800px;
    padding: 0;
    list-style: none;
    margin: 0 auto;
 }
 .block:hover{
    transition: .9s;
    background: #DD812E;
    transform:scale(0.95);
    cursor:pointer;
 }
 .man_img{
    width: 100px;
    height: 100px;
    vertical-align: middle;
    text-align: center;
    display: inline-block;
    opacity: 0;
 }
 .man_img:hover{
  /* opacity: 1; */
  transition: .3s;
 }
 .word{
  font-size: 18px;
  font-weight: bold;
  color: red;
  margin-top: 20px;
 }
 .show{
  color: #0ba00b;
 }
 .intro{
  font-size: 20px;
  color: #50ed6b;
  margin-bottom: 20px;
 }
 .su{
  font-size: 30px;
  color: #3f8b4d;
  text-align: center;
  letter-spacing: 4px;
 }
</style>





