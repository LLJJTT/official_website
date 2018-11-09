<template>
	<div id="trust">
		<div class="title">
			<p><i v-for="item in textArr">{{item}}</i></p>
			<p>The So-called Growth Is To Be Able To Accept Myself More And More</p>
		</div>
		<div class="introduce">
			<div class="works">
				我<br>的<br>作<br>品<br>	
			</div>
			<el-row class="row_div" style="display: block">
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goTypingGame">
			  				<img src="static/dazi.jpg" alt="">
			  			</li>
			  			<li>
			  				打字游戏
			  			</li>
			  			<li>
			  				网页版的打字小游戏<br><br>
			  				vue2.x,es6
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goMouseFllow">
			  				<img src="static/mouse.png" alt="">
			  			</li>
			  			<li>
			  				新增鼠标跟随特效
			  			</li>
			  			<li>
			  				鼠标跟随特效<br><br>
			  				vue2.x,es6,canvas
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goFive">
			  				<img src="static/five.jpeg" alt="">
			  			</li>
			  			<li>
			  				五子棋(测试版)
			  			</li>
			  			<li>
			  				<br>五子棋算法可能含缺陷<br>
			  				vue2.x,es6,canvas
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
			<el-row class="row_div">
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goNumberGame">
			  				<img src="../assets/number.jpeg" alt="">
			  			</li>
			  			<li>
			  				数字华容道小游戏
			  			</li>
			  			<li>
			  				网页版的拼图小游戏<br><br>
			  				兼容移动端<br>
			  				vue2.x,原生Js,Vue-transition
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goStickBlock">
			  				<img src="../assets/dazhuankua.jpeg" alt="">
			  			</li>
			  			<li>
			  				打砖块小游戏
			  			</li>
			  			<li>
			  				小游戏<br><br>
			  				兼容移动端<br>
			  				H5,Canvas,原生Js
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goSnack">
			  				<img src="../assets/tanchishe.jpg" alt="">
			  			</li>
			  			<li>
			  				贪吃蛇小游戏
			  			</li>
			  			<li>
			  				网页版的贪吃蛇小游戏<br><br>
			  				兼容移动端<br>
			  				原生Js
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
			<el-row class="row_div">
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goSeven">
			  				<img src="static/seven.jpeg" alt="">
			  			</li>
			  			<li>
			  				围堵大逃亡
			  			</li>
			  			<li>
			  				网页版的小游戏<br><br>
			  				兼容移动端<br>
			  				vue2.x,原生Js,Vue-transition
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goCube">
			  				<img src="static/cube.png" alt="">
			  			</li>
			  			<li>
			  				旋转立方
			  			</li>
			  			<li>
			  				动画特效<br><br>
			  				figure、section、transform<br>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li @click="goShortest">
			  				<img src="static/zuiduan.png" alt="">
			  			</li>
			  			<li>
			  				找最短距离
			  			</li>
			  			<li>
			  				网页版的小游戏<br><br>
			  				svg、circle、line<br>
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>


			
			<div>
			    <a-collapse  @change="changeActivekey">
			      <a-collapse-panel header="获取更多" key="1">
			        <el-row class="row_div">
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<a href="http://www.wangdoukeji.com/"><img src="../assets/wangdoukeji.jpeg" alt=""></a>
			  			</li>
			  			<li>
			  				网豆科技公司官网、兼容移动端
			  			</li>
			  			<li>
			  				技术推广、技术开发、技术咨询、技术服务、软件开发<br><br>
			  				jQuery、Mint-ui、H5
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<img src="../assets/mishisenlin.png" alt="">
			  				</a>
			  			</li>
			  			<li>
			  				觅食森林web应用App&nbsp;(此处不可点)
			  			</li>
			  			<li>
			  				全中国第一个新零售试验店的App,西单唯一食货综合体;<br><br>
			  				Mint-ui、Vue.js
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI5MDcyNDAyNQ==&scene=124&#wechat_redirect">
			  				<img src="../assets/yuanxingtaiji.jpg" alt="">
			  				</a>
			  			</li>
			  			<li>
			  				袁兴太极道微信公众号&nbsp;(关注微信查看)
			  			</li>
			  			<li>
			  				按照成熟型的微型公众号开发;<br><br>
			  				前后端不分离项目（Tp5、jQuery）
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
			<el-row class="row_div">
			  
			  <el-col :span="8"><div class="wrapper">
			  		<ul>
			  			<li>
			  				<a href="https://github.com/LLJJTT/winter-weichuang/tree/master/zhengzhan/%E9%87%91%E8%9E%8D%E7%BD%91%E7%AB%99">
			  				<img src="../assets/jinrong.jpg" alt="">
			  				</a>
			  			</li>
			  			<li>
			  				仿写金融网站&nbsp;&nbsp;(☞github)
			  			</li>
			  			<li>
			  				按照模板要求仿写页面;<br><br>
			  				es5、css布局
			  			</li>
			  		</ul>
			  	</div>
			  	
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<a href="https://github.com/LLJJTT/winter-weichuang/tree/master/%E6%95%B4%E7%AB%99%E5%BC%80%E5%8F%91/%E4%BA%AC%E4%B8%9C1%E5%8F%B7%E5%BA%97">
			  				<img src="../assets/jingdong.jpeg" alt="">
			  				</a>
			  			</li>
			  			<li>
			  				模仿京东一号店&nbsp;&nbsp;(☞github)
			  			</li>
			  			<li>
			  				模仿京东一号店100%还原网页;;<br><br>
			  				css布局
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<a >
			  				<img src="static/hehe.png" alt="">
			  				</a>
			  			</li>
			  			<li>
			  				合和天下&nbsp;&nbsp;(多个网站)
			  			</li>
			  			<li>
			  				前端架构<br><br>
			  				Vue2.x、Axios、Element-ui、Mint-ui、es7、webpack、
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
			      </a-collapse-panel>
			    </a-collapse>
			  </div>
		</div>
		
	</div>
</template>

<script>
	import { Loading } from 'element-ui';
import axios from 'axios';
	export default{
		data(){
			return{
				textArr:[],
			}
		},
		methods:{
			goSnack:function(){
				this.$router.push({path:'/snack'});
			},
			goNumberGame:function(){
				this.$router.push({path:'/numbergame'});
			},
			goStickBlock:function(){
				this.$router.push({path:'/stickblock'});
			},
			goSeven:function(){
				this.$router.push({path:'/seven'});
			},
			goShortest(){
				this.$router.push({path:'/shortest'});
			},
			goCube(){
				this.$router.push({path:'/cube'});
			},
			goTypingGame(){
				this.$router.push({path:'/typing_game'});
			},
			goMouseFllow(){
				this.$router.push({path:'/mouse_fllow'});
			},
			goFive(){
				this.$router.push({path:'/five_game'});
			},
			changeActivekey (key) {
				if (key[0]==1) {
					const _this = this
					var loadingInstance = Loading.service({ 
							fullscreen: true,
							background:'rgba(0, 0, 0, 0.8)',
							text:'数据加载中！请等待！' 
						});
					setTimeout(res =>{
						_this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
						  loadingInstance.close();
						});
					},2000)
				}
				
	      	}
		},
		created:function(){
			var str ='所,谓,的,成,长, ,就,是,能,越,来,越,接,受,自,己,本,来,的,样,子' 
			this.textArr = str.split(',');
		}
	}
</script>
<style lang="scss" scoped>
@keyframes bigger{
				0%{
					transform:rotateZ(0deg);
				}
				33%{
					transform:rotateZ(2deg);
				}
				66%{
					transform:rotateZ(-2deg);
				}
				100%{
					transform:rotateZ(0deg);
				}
			}
	#trust{
		// position: relative;
		// margin-top: 13%;
		color: #fff;
		background:rgba(0,0,0,.8);
		padding-bottom:100px;
		.title{
			padding:240px 0 10px 0;
			font-weight:bold;
			p:first-child{
				color:#fff;
				font-size:38px;
			}
			p:first-child i:hover{
				color:#ffba1f;
				transition: .3s;
			}
			p:last-child{
				color:#bd5757;
				font-size:18px;
				margin-top:8px;
			}

		}
		.introduce{
			position: relative;
			margin-top: 60px;

			.works{
				position:absolute;
				margin-top: 30px;
				font-size:24px;
				margin-left: 20px;
				color:#ed8e46;

			}
			.row_div:last-child{
			    padding-bottom: 50px;
			    // border-bottom: 1px solid #f5f5f5;
			}
			.row_div{
				width:90%;
				margin:50px auto;
				.wrapper{
						font-weight:bold;
						li:first-child{
							// overflow: hidden;
							img{
								transition:1.6s;
								height:150px;
								width:320px; 
								border-radius: 6px;
							}
							img:hover{
								cursor:pointer;
								animation: bigger 1.6s;
								animation-fill-mode: forwards;
								animation-timing-function:linear;
							}
						}
						li:nth-child(2){
							color:#fff;
							font-size:18px;
							padding:10px 0;
						}
						li:nth-child(2):hover{
							font-size:24px;
							transition:.8s;
							color:#69e29b;
						}
						li:last-child{
							color:#f5f0f0;
							font-size:12px;
							display: inline-block;
							border-radius: 6px;
						}
						li:last-child:hover{
							transition:.4s;
							padding: 5px;
							color:#ffba1f;
							border: 2px solid #958c8c;
						}			
				}
			}
			
		}
	}
	@media(max-width:900px){
		#trust{
			.title{
				padding-top:300px;
				p:first-child{
					font-size:16px;
				}
				p:nth-child(2){
					font-size:14px;
				}
			}
			.introduce{
				.works{
					font-size:12px;
					margin-left: 5px;
				}
				.row_div{
					.wrapper{
						li:first-child{
							img{
								width:110px;
								height:60px;
							}
						}
						li:nth-child(2){
							font-size:8px;
						}
						li:last-child{
							font-size:6px;
						}
					}
				}
			}
		}
	}
	.wait_new{
		color: red;
		font-size: 20px;
	}
	.ant-collapse{
		 background-color: rgba(51, 51, 51,1) !important;
		 border-right: none;
		 border-left: none;
	}
	
</style>










