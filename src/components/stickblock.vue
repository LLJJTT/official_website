<template>
  <div class="box">
    <canvas id="canvas" width="480" height="500"></canvas>
    <div class="attention">注意<p class="content">如果你游戏失败会跳转到首页哦~<span>(bug尚未解决)</span></p></div>
     <div class="attention"><p class="content">如果你把所有砖块都打没~也不会跳转、也不会弹出提示<span>(bug尚未解决)</span></p></div>
  </div>
</template>

<script>
var a = null
// var b = null
export default {
  data () {
    return {

    }
  },
  mounted () {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')//2d
    var paddle = {
      paddleHeight: 10,
      paddleWidth: 160,
      paddleX: (canvas.width - 100) / 2
    }

    // 定义圆圈
    var yuan = {
      x: canvas.width / 2,
      y: canvas.height - paddle.paddleHeight - 10,
      vx: -3,
      vy: -3,
      r: 10,
      color: 'red',
      draw: function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
      }
    }
    // 定义被打砖头
    var brick = {
      rowCount: 3,
      columnCount: 5,
      width: 70,
      height: 20,
      padding: 10,
      offsetTop: 20,
      offsetLeft: 20
    }
    var bricks = []
    var jianyin = 1
    function gameIntroduce () {
      jianyin -= 0.01
      ctx.beginPath()
      ctx.font = '30px Verdana'
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop('0', '#333')
      ctx.fillStyle = gradient
      ctx.strokeStyle = gradient
      ctx.fillText('打砖块', 200, 150, 200)
      ctx.fillText('\n按W\n或\n回车键开始，空格暂停', 40, 260, 400)
      ctx.closePath()
      ctx.beginPath()
      ctx.fillStyle = 'rgba(255, 255, 255, ' + jianyin + ')'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.closePath()
      b = window.requestAnimationFrame(gameIntroduce)
    }
    function fuzhi () {
      for (var c = 0; c < brick.columnCount; c++) {
        bricks[c] = []
        for (var r = 0; r < brick.rowCount; r++) {
          var brickX = c * (brick.width + brick.offsetLeft) + brick.offsetLeft
          var brickY = r * (brick.height + brick.offsetTop) + brick.offsetTop
          bricks[c][r] = {x: brickX, y: brickY, status: 1}
        }
      }
    }
    fuzhi()

    // 生成砖头
    function drawBrick () {
      for (var c = 0; c < brick.columnCount; c++) {
        for (var r = 0; r < brick.rowCount; r++) {
          if (bricks[c][r].status === 1) {
            ctx.beginPath()
            ctx.rect(bricks[c][r].x, bricks[c][r].y, brick.width, brick.height)
            ctx.fill()
            ctx.closePath()
          }
        }
      }
    }
    // 碰撞机制
    function collisionDetection () {
      for (var c = 0; c < brick.columnCount; c++) {
        for (var r = 0; r < brick.rowCount; r++) {
          if (yuan.x > bricks[c][r].x - yuan.r && yuan.x < bricks[c][r].x + brick.width + yuan.r && yuan.y > bricks[c][r].y - yuan.r && yuan.y < bricks[c][r].y + brick.height + yuan.r && bricks[c][r].status === 1) {
            bricks[c][r].status = 0
            yuan.vy = -yuan.vy
          }
        }
      }
    }
    // 底部移动接板
    function drawPaddle () {
      ctx.beginPath()
      ctx.rect(paddle.paddleX, canvas.height - paddle.paddleHeight, paddle.paddleWidth, paddle.paddleHeight)
      ctx.fillStyle = '#e35e64'
      ctx.fill()
      ctx.closePath()
    }
    var rightPressed = false
    var leftPressed = false
    var begin = false
    document.addEventListener('keydown', keyDownHandler, false)
    document.addEventListener('keyup', keyUpHandler, false)
    // 键位判断
    function keyDownHandler (e) {
      if (e.keyCode === 68) {//右-D
        rightPressed = true
      } else if (e.keyCode === 65) {//左-A
        leftPressed = true
      } else if (e.keyCode === 87) {//上-W
        try {
          window.cancelAnimationFrame(a)
          a = window.requestAnimationFrame(draw)
        } catch (e) {
          a = window.requestAnimationFrame(draw)
        }
      } else if (e.keyCode === 32) {//暂停空格键
        try {
          window.cancelAnimationFrame(a)
        } catch (e) {
          console.log(e)
        }  
      } else if (e.keyCode === 13) {
        if (!begin) {
          try {
            yuan.x = canvas.width / 2
            yuan.y = canvas.height - paddle.paddleHeight - 10
            paddle.paddleX = (canvas.width - 75) / 2
            rightPressed = false
            leftPressed = false
            a = window.requestAnimationFrame(draw)
            window.cancelAnimationFrame(b)
          } catch (e) {
            console.log(e)
          }
        }
        begin = true
      }
    }
    // 左右移动
    function keyUpHandler (e) {
      if (e.keyCode === 68) {//右-D
        rightPressed = false
      } else if (e.keyCode === 65) {//左-A
        leftPressed = false
      }
    }
    // 左右移动画canvas
    function draw () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      yuan.draw()
      drawPaddle()
      drawBrick()
      collisionDetection()
      yuan.x += yuan.vx
      yuan.y += yuan.vy
      if (yuan.x >= (canvas.width - yuan.r) || yuan.x <= yuan.r) {
        yuan.vx = -yuan.vx
        yuan.color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
      }
      if (yuan.y <= yuan.r) {
        yuan.vy = -yuan.vy
        yuan.color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
      } else if (yuan.y > (canvas.height - yuan.r - paddle.paddleHeight)) {
        if (yuan.x >= paddle.paddleX - yuan.r && yuan.x <= (paddle.paddleX + paddle.paddleWidth + yuan.r)) {
          yuan.vy = -yuan.vy
        } else {
            window.location.href="https://persional.lijinghuan.com/#/homepage"
        }
      }
      if (rightPressed && paddle.paddleX < canvas.width - paddle.paddleWidth) {
        paddle.paddleX += 7
      } else if (leftPressed && paddle.paddleX > 0) {
        paddle.paddleX -= 7
      }
      a = window.requestAnimationFrame(draw)
    }
    var b = window.requestAnimationFrame(gameIntroduce)
  },
  methods: {}
}
</script>

<style scoped>
  #canvas{
    background-color: #f5f5f5;
    margin: 0 auto;
    display: block;
  }
  .box{
    width:100%;
    margin: 0 auto;
    background:#000;
    padding: 100px 0 100px 0;
  }
  .attention{
    margin-top: 40px;
    color: red;
    font-size: 40px;
  }
  .content{
    color: #fff;
    font-size: 20px;
    margin-top: 40px;
  }
  .content span{
    font-size: 16px;
    margin-left: 10px;
    color: #504d4d;
  }
</style>
