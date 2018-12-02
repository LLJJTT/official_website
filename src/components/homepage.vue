<template>
  	<div id="homepage">
  		<a-back-top>
  			<div class="ant-back-top-icon"></div>
	    </a-back-top>
  		<div class="banner">
  			<h1 class="look">访问量:<i>{{looks}}</i></h1>
  			<div class="item item0 focus"></div>
  			<div class="item item1"></div>
  			<div class="item item2"></div>
  		</div>
  		<div id="news">
  				<a-list
    itemLayout="horizontal"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta
        :description="item.passtime+'   '+item.username"
      >
        <a @click="playVideo(item.image,index)" slot="title" href="#">{{item.text}}</a>
        <a-avatar slot="avatar" :src="item.header" />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
  			</div>
  		<div class="intro">
  			<p class="p0">
  				<i v-for="item in textArr">{{item}}</i>
  			</p>
  			<p class="p1">{{date}}<br></p>
  		</div>
  		<embed id="time" wmode="transparent" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf" quality="high" bgcolor="#ffffff" width="400" height="300"  align="middle" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">
  		<Trust></Trust>
  		<Message></Message>
  		<el-dialog
  title="提示:如果图片发黑，请主动点击一下屏幕"
  :visible.sync="dialogVisible"
  width="60%"
  >
  <img class="toast_img" :src="image_src" alt="">
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  	</div>
</template>
<script>
import Trust from './trust.vue'
import Message from './message.vue'
import axios from 'axios'
import { Loading } from 'element-ui';
export default {
	data(){
		return{
			date:'2018-11-08',
			textArr:[],
			looks:'加载中',
			url:'https://persional.lijinghuan.com/back_end/looks.php',
			newstop:'https://www.apiopen.top/satinGodApi?type=1&page=4',
			data1:[],
			data:[],
			dialogVisible: false,
			image_src:''
		}
	},
	name:'homepage',
	components: {
		Trust,Message
	},
	mounted:function(){
		const aDiv = document.querySelectorAll('.banner div');
		let index = 0;
		setInterval(function(){
			index++;
			if (index==aDiv.length) {
				index=0;
			}
			for (var i = 0; i < aDiv.length; i++) {
				aDiv[i].style.opacity=0;
				aDiv[i].className = 'item ' + 'item'+index;
			}
			aDiv[index].style.opacity=1;
			aDiv[index].className += ' focus';
		},5000);
	},
	methods:{
		getDate(){
			var date = new Date()
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			this.date =  year + "`" + month + "`" + day;
		},
		// 获取搞笑段子
		getNews(){
			axios({
				url:this.newstop,
				method:'GET',
			})
			.then(res =>{
				res.data.data.map((item,index) =>{
					if (item.type=='image') {
						this.data1.push(item)
					}
				})
				this.data1.map((item,index) =>{
					if (index<5) {
						this.data.push(item)
					}
				})
			})
			.catch(res =>{
				console.log(res)
			})
		},
		playVideo(image,index){
			this.image_src = image
			this.dialogVisible = true
		}
	},
	created(){
		this.getNews()
		var loadingInstance = Loading.service({ 
			fullscreen: true,
			background:'rgba(0, 0, 0, 0.8)',
			text:'获取资源中！！！！！' 
		});
		this.getDate()
		// var str = 'W,e,l,c,o,m,e, ,t,o, ,L,i, ,J,i,n,g,’,s, ,p,e,r,s,i,o,n,a,l, ,w,e,b,s,i,t,e';
		var str = '精,彩,段,子'
		this.textArr = str.split(',');
		var formData = new FormData()
		formData.append("recode",'1')
		axios({
			url:this.url,
			method:'post',
			data:formData
		})
		.then(res =>{
			if (res.data.status==200) {
				this.looks = res.data.looks.look_number
				var _this = this
				setTimeout(res =>{
						_this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
						  loadingInstance.close();
						});
				},2000)
			}
			else{
				var _this = this
				setTimeout(res =>{
					_this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
					  loadingInstance.close();
					});
				},5000)
			}
		})
		.catch(res =>{
			console.log(res)
		})
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.look{
		position: absolute;
		top: 20px;
		left: 200px;
		font-size: 16px;
		color: #DD812E;
		font-weight: bolder;
		z-index: 999999999;
		height: 80px;
		line-height: 80px;
	}
	.look i{
		font-size: 40px;
		color:#fff;
		font-weight: 500;
	}
	#homepage{
		position: relative;
		top: 0;
		z-index:1;
		user-select: none;
		color: #333;
		/*height: 600px;*/
		.banner{
			width: 100%;
			height: 600px;
			position: relative;
			overflow: hidden;
			/*padding-bottom: 5px;*/
			background: #555367;
	  		border-bottom: 1px solid #fff;
			.item{
				transition: 1.3s;
				opacity: 0;
				position: absolute;
			    left: 50%;
			    top: 0;
			    margin-left: -50%;
			    width: 100%;
			    height: 100%;
				background-size: cover;
			    background-repeat: no-repeat;
			}
			.item0{
				background: url('../assets/ba1.jpg');
				background-size: cover;
		    background-repeat: no-repeat;
				// background-image: url('../assets/banner0.jpg');
			}
			.item1{
				background-image: url('../assets/ba2.jpg');
				background-size: cover;
			    background-repeat: no-repeat;
				// background-image: url('../assets/banner1.jpg');
			}
			.item2{
				background-size: cover;
			    background-repeat: no-repeat;
				background-image: url('../assets/ba3.png');

			}
			.focus{
				opacity:1 !important;
				animation: bigger 5s;
				animation-fill-mode: forwards;
				animation-timing-function:linear;
			}
			@keyframes bigger{
				from{
					width: 100%;
					height: 100%;
				}
				to{
					width: 120%;
					height: 130%;

				}
			}
		}
		.intro{
			position: relative;
			margin-top: -400px;
			color: #fff;
			z-index: 3;
			.p0{
				font-size: 50px;
			    color: #ffba1f;
			    text-align: center;
			    font-weight: 400;
			    position: relative;
			    margin-left: 400px;
			}
			.p0 i{
			}
			.p0 i:hover{
				transition: .2s;
				color: #fff;
			}
			.p1{
				font-size: 32px;
			    color: #fff;
			    text-align: center;
			    margin-top: 100px;
			}
		}
	}
	@media(max-width:600px){
		#homepage{
			position: relative;
			.banner{
				.focus{
					opacity:1 !important;
					animation: bigger 4s;
					animation-fill-mode: forwards;
					animation-timing-function:linear;
				}
				@keyframes bigger{
					from{
						width: 100%;
						height: 100%;
					}
					to{
						width: 100%;
						height: 116%;

					}
				}
			}
			.intro{
				.p0{
					font-size: 25px;
					padding:0 4px;
				}
				.p1{
					font-size: 22px;
				}
			}
		}
	}
	#time{
		z-index: 9;
		position: absolute;
		position:absolute;
		left:50%;
		margin-left:-200px;
		margin-top:-75px;
		border-radius: 10px;
		overflow: hidden;
	}
	.ant-back-top{
		right: 40px !important;
		border-radius: 40px;
		background:#1088e9;;
	}
	.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  #news{
  	position: absolute;
  	top: 140px;
  	left: 60px;
  	z-index: 10;
  }
  .ant-list-item-meta-title > a{
  	color: #e4dcdc !important;
  }
  .ant-list-item-meta-title > a:hover{
		color:#1890ff !important;
  }
  .ant-list-item-meta-description{
  	color: #aaa9a9 !important;
  }
  .ant-list-split .ant-list-item {
    border-bottom: 1px solid #8b8b8b !important;
}
a:focus{
	text-decoration: none;
}
.toast_img{
	width: 80%;
	height: 100%;
}

</style>






