<template>
  <div id="box">
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
      rankList:[],
      // 排序产生的最小方向
      minDirection:'',
      // 排序产生的最小距离
      minDistance:''
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
      })
      // 排序
      function compare(property){
        return function(a,b){
          var value1 = a[property];
          var value2 = b[property];
          return value1 - value2;
        }
      }
      // 按照distance 小到大 排序 
      this.rankList = this.margin.sort(compare('distance'))
      // 获取最小距离  +  方向名
      this.minDirection = this.rankList[0].name
      this.minDistance = this.rankList[0].distance
      console.log(this.rankList)
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
      // 上
      if (InitSrc == srcTop ) {
        this.stop.top = true
      }
      else{
        this.stop.top = false
      }
      // 下
      if (InitSrc == srcBottom ) {
        this.stop.bottom = true
      }
      else{
        this.stop.bottom = false
      }

      // 左
      if (InitSrc == srcLeft ) {
        this.stop.left = true
      }
      else{
        this.stop.left = false
      }
      // 右
      if (InitSrc == srcRight ) {
        this.stop.right = true
      }
      else{
        this.stop.right = false
      }
      console.log(this.stop)

    },
    // 犯人移动
    escape(){
      // 左移动 根据围堵方向状态 +  最短方向昵称
      if ( this.minDirection == 'left' && this.stop.left == false) {
        let oInitNew = document.querySelectorAll('.block')[this.criminalPosition-1].querySelector('img')
        let oInitOld = document.querySelectorAll('.block')[this.criminalPosition].querySelector('img')
        oInitNew.style.opacity = '1'
        oInitOld.style.opacity = '0'
        this.criminalPosition = this.criminalPosition - 1
      }
      // else if (this.minDirection == 'left' && this.stop.left == false) {}
    },
    // 点击方块
    showWall(index){
      if (this.selectCriminal==false) {
        this.criminalPosition = index
        // 展示犯人位置
        let oInit = document.querySelectorAll('.block')[index].querySelector('img')
        oInit.style.opacity = '1'
        this.selectCriminal = true
        this.ttt = true
        this.getMargin()
      }
      else{
        let oInit = document.querySelectorAll('.block')[index].querySelector('img')
        oInit.src = 'static/tree.png'
        oInit.style.opacity = '1'
        this.getStop()
        this.escape()
      }
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
</style>





