<template>
  	<div id="homepage">
  		<div class="banner">
  			<div class="item item0 focus"></div>
  			<div class="item item1"></div>
  			<div class="item item2"></div>
  		</div>
  		<div class="intro">
  			<p class="p0">Welcome to Li Jing's personal website</p>
  			<p class="p1">{{date}}<br></p>
  		</div>
  		<embed id="time" wmode="transparent" src="http://chabudai.sakura.ne.jp/blogparts/honehoneclock/honehone_clock_tr.swf" quality="high" bgcolor="#ffffff" width="400" height="300"  align="middle" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">
  		<Trust></Trust>
  		<Message></Message>
		<!-- 测试axios -->
  		<!-- <button v-on:click="httpRequest">click</button> -->
  	</div>
</template>
<script>
import Trust from './trust.vue'
import Message from './message.vue'
export default {
	data(){
		return{
			date:'2018-11-08'
		}
	},
	name:'homepage',
	components: {
		Trust,Message
		// 'v-trust': trust
	},
	mounted:function(){
		const aDiv = document.querySelectorAll('.banner div');
		let index = 0;
		// console.log(aDiv.length);
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
		},4000);
	},
	methods:{
		getDate(){
			var date = new Date()
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			this.date =  year + "`" + month + "`" + day;
		}
	},
	created(){
		this.getDate()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
		z-index: 999999;
		position: absolute;
		position:absolute;
		left:50%;
		margin-left:-200px;
		margin-top:-75px;
		// background:#35cc7c;
		border-radius: 10px;
		overflow: hidden;
	}
</style>






