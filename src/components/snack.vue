<template>
	<div id="snack">
		<div id="snack_div">
			<table>
				<tr v-for="(col,y) in cols"><td v-for="(row,x) in rows" :class="snackbody(x,y)||showfood(x,y)?'active':''"></td></tr>
				</table>

				<el-button :disabled="dis" class="el_btn_start" @click="start()" type="primary">开始</el-button>
				<el-button  class="el_btn_end" @click="end()" type="danger">结束</el-button>
		</div>
	</div>
</template>

<script>
	export default{
			data:function(){
				return{
					timer:'',//定时器
					rows:'',//横框
					cols:'',//竖框
					position:[[0,0],[1,0],[2,0],[3,0]],//蛇的初始位置
					direction:1,//方向
					food:[],//食物的位置
					dis:false
				}
			},
			mounted(){
				this.keyboard()
			    this.background() 
			    this.creatfood()
			},
			methods:{
				background(){//生成横框和竖框的函数
					this.rows=Array(40)
					this.cols=Array(20)
				},
				keyboard(){//键盘事件
					let _this = this;
				    document.onkeydown = function(e){
				    	if(e.keyCode===65){//A
				    		_this.change(-1)
				    	}else if(e.keyCode===87){//W
				    		_this.change(-2)
				    	}else if(e.keyCode===68){//D
				    		_this.change(1)
				    	}else{//S
				    		_this.change(2)
				    	}
				    }
				},
				creatfood(){//创造食物
					this.food[0]=Math.floor(Math.random()*40)
					this.food[1]=Math.floor(Math.random()*20)
				},
				showfood(x,y){//显示食物
					if(this.food[0]===x&&this.food[1]===y){
						return true
					}
				},
				snackbody(x,y){//显示身体
					let X,Y
					for(let i=0;i<this.position.length;i++){
						if(this.position[i][0]===x&&this.position[i][1]===y){
							return true
						}
					}
				},	
				start(){//开始按钮
					this.dis =true;
					this.timer=setInterval(()=>this.autorun(),300)
				},	
				end(){
					this.$message({
			          message: '游戏结束',
			          type: 'warning'
			        });
					clearInterval(this.timer)
					this.position=[[0,0],[1,0],[2,0],[3,0]]
					this.creatfood()
					this.direction=1
					this.dis =false
				},		
				change(dir){//改变方向
					if(Math.abs(dir)===Math.abs(this.direction)){//如果方向相同或者相反，不做任何操作
							return
					}else{
						this.direction=dir//否则改变方向
					}
				},
				autorun(){					
					let direction=this.direction//目前方向
					let headX,headY
						headX=this.position[this.position.length-1][0]//复制蛇头的X坐标
						headY=this.position[this.position.length-1][1]//复制蛇头的Y坐标
					if(direction===1||direction===-1){//如果方向是在左右跑动     						
							direction>0?headX++:headX--//往右跑X坐标+1，往左跑X坐标-1 										
					}else{
							direction>0?headY++:headY--//如果方向是在上下跑动，Y坐标做对应处理
					}//此时蛇头的下一个坐标位置就是[headX,headY]，接下来就可以判断是否结束游戏，如果结束了，蛇头就没必要添加了
					if(headX<0||headX>39||headY<0||headY>19){//当蛇头下一个位置出了边界或者这个位置是符合身体函数（即蛇头撞上了身体）
						this.$alert('Game Over')
						clearInterval(this.timer)
						this.position=[[0,0],[1,0],[2,0],[3,0]]
						this.creatfood()
						this.direction=1
						this.dis =false
					}
					else{//如果蛇头下一个位置是符合规则的						
						this.position.push([headX,headY])//将下一个位置添加进数组，头部长一节
						if(headX!==this.food[0]||headY!==this.food[1]){	//如果下一个头部位置不是食物的位置，即吃食物开始						
								this.position.shift()//将尾部去掉，一长一短实现了蛇的走动
						}else{//如果下一个头部位置是食物
							this.creatfood()//不去除尾部，再次创建食物（这里有个小bug，随机的食物有几率与身体重合）
						}
					}									
				}							
			}
	}
</script>

<style lang="scss" scoped>
		#snack{
			width:100%;
			background: #000;
			padding:100px 0 50px 0;
		}
		td{
			border: 1px solid #666;
			width: 20px !important;
			height: 20px !important;
		}
		table{
			border-collapse: collapse;
		}
		#snack_div{
			width:800px;
			margin:0 auto;
		}
		.active{
			background: #1e9259;
		}
		.el_btn_start{ 
			padding: 12px 40px;
			margin-top:20px;
		}
		.el_btn_end{
			padding: 12px 40px;
			margin-top:20px;
			margin-left: 100px;
		}
</style>


