<template>
  <div style="background:black;height: 500px;">
    <!-- <img class="animated swing" style="width:60%;margin-left:20%;" src="../../static/bridge3b2.jpg" alt=""> -->
    <canvas id="canvas" width="480" height="500"></canvas>
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
    var ctx = canvas.getContext('2d')
    var paddle = {
      paddleHeight: 10,
      paddleWidth: 75,
      paddleX: (canvas.width - 75) / 2
    }
    var yuan = {
      x: canvas.width / 2,
      y: canvas.height - paddle.paddleHeight - 10,
      vx: -2,
      vy: -2,
      r: 10,
      color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')',
      draw: function () {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
      }
    }
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
      jianyin -= 0.005
      ctx.beginPath()
      ctx.font = '40px Verdana'
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('0.5', 'blue')
      gradient.addColorStop('1', 'red')
      ctx.fillStyle = gradient
      ctx.strokeStyle = gradient
      ctx.fillText('打砖块小游戏\n上开始，下暂停', 40, 230, 400)
      ctx.strokeText('按确认键开始', 140, 300, 200)
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
    function drawPaddle () {
      ctx.beginPath()
      ctx.rect(paddle.paddleX, canvas.height - paddle.paddleHeight, paddle.paddleWidth, paddle.paddleHeight)
      ctx.fillStyle = '#0095DD'
      ctx.fill()
      ctx.closePath()
    }
    var rightPressed = false
    var leftPressed = false
    var begin = false
    document.addEventListener('keydown', keyDownHandler, false)
    document.addEventListener('keyup', keyUpHandler, false)
    function keyDownHandler (e) {
      if (e.keyCode === 39) {
        rightPressed = true
      } else if (e.keyCode === 37) {
        leftPressed = true
      } else if (e.keyCode === 38) {
        try {
          window.cancelAnimationFrame(a)
          a = window.requestAnimationFrame(draw)
        } catch (e) {
          a = window.requestAnimationFrame(draw)
        }
      } else if (e.keyCode === 40) {
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
    function keyUpHandler (e) {
      if (e.keyCode === 39) {
        rightPressed = false
      } else if (e.keyCode === 37) {
        leftPressed = false
      }
    }
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
          // 游戏失败
          try {
            // 初始化数据
            yuan.x = canvas.width / 2
            yuan.y = canvas.height - paddle.paddleHeight - 10
            paddle.paddleX = (canvas.width - 75) / 2
            rightPressed = false
            leftPressed = false
            for (var c = 0; c < brick.columnCount; c++) {
              for (var r = 0; r < brick.rowCount; r++) {
                bricks[c][r].status = 1
              }
            }
            cancelAnimationFrame(a)
            draw()
          } catch (e) {
            draw()
          }
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
#canvas{background-color: white;margin: 0 auto;display: block;}
</style>
