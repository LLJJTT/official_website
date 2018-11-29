<template>
    <div class="hotdog">
      <img class="fix" 
        :src="hotdog" 
        :style="{
          'right':rightDistance+'px',
          'transform': 'translateY('+topDistance+'px)'
        }"
        :class="topDistance>=526 ? 'remove_img':''"
      >
      <div id="core">{{core}}
      </div>
      <el-slider id="slid" :show-tooltip="false" v-model="value"></el-slider>
    </div>
</template>

<script>
export default {
    data () {
        return {
          value: 50,
          hotdog:'static/hotdog.jpg',
          randomNum:15,
          rightDistance:null,
          topDistance:-20,
          time:10,
          core:0,
          append_time:1000,
          newTop:-2
        }
    },
    methods: {
      // 初始化下坠
      initHot(){
        const _this = this
        _this.rightDistance = Math.round(Math.random()*100)/100*700 + 10;
        var k = setInterval((e) =>{
          _this.topDistance = _this.topDistance + 2
          if (_this.topDistance>526) {
            _this.$nextTick(() => { 
              _this.topDistance = -20
              _this.getButton()
              clearInterval(k)
            });
          }
        },_this.time)
      },
      // 吃hotdog
      getButton(){
        // console.log(this.rightDistance)
        var l = $('.el-slider__button-wrapper').css("left")
        var i = 800 - this.rightDistance - 50
        var s = l.split('px')[0]  //截取px前面的left长度
        var j = Number(s) - i
        var h = Math.abs(j)
        if (h>=0&&h<20) {//吃到了
          this.core +=1
        }
      },

    },
    mounted(){
      // this.initHot()
    },
    created(){
      const _this = this
      var t = setInterval((e) =>{
        _this.initHot()
      },2690)
      // this.initHot()
      // var datas = []
      // var dataObj = {}
      // dataObj.name = '张三'
      // dataObj.age = '28'
      // datas.push(dataObj)
      // datas.map((item,index) =>{
      //   // 比如说你想把张三改成李四
      //   item.name = '李四'
      // })
      //   console.log(datas)
    }
}
</script>

<style scoped>
    .hotdog{
      width: 800px;
      margin: 100px auto;
      height: 600px;
      overflow: hidden;
      background: #fff;
      position: relative;
      border: 1px solid #efecec;
      border-radius: 4px;
      padding: 0 10px;
    }
    .fix{
      position: absolute;
      width: 10px;
      height: 20px;
      user-select: none;
      z-index: 9999;
      /* right:788px; */
    }
    #slid{
      width: 700px;
      margin: 0 auto;
      position: relative;
      top: 520px;
    }
   #core{
    color: #f63300;
    position: relative;
    font-weight: bolder;
   }
    
</style>





