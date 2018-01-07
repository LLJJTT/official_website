<template>
	<div id="trust">
		<div class="title">
			<p>所谓的成长,就是能越来越接受自己本来的样子</p>
			<p>The So-called Growth Is To Be Able To Accept Myself More And More</p>
		</div>
		<div class="introduce">
			<div class="works">
				我<br>的<br>作<br>品<br>	
			</div>
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
			  				设计、制作、代理、发布广告、承办展览展示的网站
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<a href="http://finance.youth.cn/finance_food/201711/t20171120_11034647.htm">
			  				<img src="../assets/mishisenlin.png" alt="">
			  				</a>
			  			</li>
			  			<li>
			  				觅食森林web应用App&nbsp;(还没发版)
			  			</li>
			  			<li>
			  				全中国第一个新零售试验店的App,西单唯一食货综合体;<br><br>
			  				为其量身定做最合理App的开发方案;
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<a href="http://blog.sina.com.cn/u/2145289195">
			  				<img src="../assets/yuanxingtaiji.jpg" alt="">
			  				</a>
			  			</li>
			  			<li>
			  				袁兴太极道微信公众号&nbsp;(关注微信查看)
			  			</li>
			  			<li>
			  				按照成熟型的微型公众号开发;<br><br>
			  				为其实现购买、观看课程等功能.
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
			<el-row class="row_div">
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
			  				Js、Jquery、Css3实现
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
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
			  				适应不同分辨率、纯前端界面.
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
			  				模仿京东一号店静态网页;<br><br>
			  				100%还原了原版网页;
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			goSnack:function(){
				this.$router.push({path:'/snack'});
			}
		}
	}
</script>
i
<style lang="scss" scoped>
	#trust{
		// position: relative;
		// margin-top: 13%;
		color: #fff;
		background:rgba(0,0,0,0.9);
		padding-bottom:100px;
		.title{
			padding:240px 0 10px 0;
			font-weight:bold;
			p:first-child{
				color:#fff;
				font-size:38px;
			}
			p:last-child{
				color:#aaaaaa;
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
				margin-top:50px;
				padding-top:50px;
				border-top:1px solid #f5f5f5;
			}
			.row_div{
				width:90%;
				margin:0 auto;
				.wrapper{
						font-weight:bold;
						li:first-child{
							overflow: hidden;
							img{
								transition:1.6s;
								height:202px;
								width:370px; 
							}
							img:hover{
								cursor:pointer;
								transform:scale(1.3);
							}
						}
						li:nth-child(2){
							color:#fff;
							font-size:18px;
							padding:10px 0;
						}
						li:last-child{
							color:#aaaaaa;
							font-size:12px;
						}
						li:last-child:hover{
							transition:.8s;
							text-decoration:underline;
						}			
				}
			}
			
		}
	}
</style>