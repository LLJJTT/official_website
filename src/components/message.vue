<template>
	<div id="message">
		<p>发<br>表<br>留<br>言</p>
		<div class="m_left">
			<div class="wrapper">
				<ul class="ul_img">
					<img src="../assets/pencil.png">
				</ul>
				<ul class="ul_intro">
					<li>
						告诉我您对我们之间的合作需求
					</li>
					<li>
						留下你想对我说的话，我将尽快主动联系你
					</li>
					<li>
						项目合作QQ:1072090332
					</li>
					<li>
						电话:18745708406
					</li>
					<li>
						工作时间 9:00 ~ 17:00<br>工作日（周一至周五）
					</li>
				</ul>
				<div style="clear:both"></div>
			</div>
		</div>
		<div class="m_right">
			<div class="wrapper1">
				<ul class="r_ul1">
					<li>
						<span>姓名：</span><input v-on:keyup="textChange0" v-model="nameVal" class="name" type="text"><i class="snow0">*</i>
					</li>
					<li>
						<span class="phone_n">手机号：</span><input class="num" v-on:keyup="textChange1" v-model="numVal" type="number"><i class="snow1">*</i>
					</li>
					<div style="clear:both"></div>
				</ul>
				<ul class="r_ul2">
					<li>
						<span class="content">内容：</span><textarea v-on:keyup="textChange2" v-model="textVal" id="inp_text"></textarea><i class="snow2">*</i>
						<div style="clear:both"></div>
					</li>
					<li>
						<button class="btn" :disabled="disabled" v-on:click="submitMessage">提交留言</button>
					</li>
				</ul>
				<div style="clear:both"></div>
			</div>
		</div>
		<div style="clear:both"></div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return{
				nameVal:'',
				numVal:'',
				textVal:'',
				disabled:true,
			}
		},
		methods:{
			textChange0:function(){

				const snow0 = document.getElementsByClassName('snow0')[0];
				if (this.nameVal!='') {
					snow0.style.opacity="0";
				}
				else{
					snow0.style.opacity="1";
				}
			},
			textChange1:function(){
				const reg = /^1[34578]\d{9}$/;
				const snow1 = document.getElementsByClassName('snow1')[0];
				if (reg.test(this.numVal)){
					snow1.style.opacity="0";
				}
				else if(this.numVal==''&&!reg.test(this.numVal)){
					snow1.style.opacity="1";
				}
				else{
					snow1.style.opacity="1";
				}
			},
			textChange2:function(){
				const reg = /^1[34578]\d{9}$/;
				const snow2 = document.getElementsByClassName('snow2')[0];
				const oBtn  = document.getElementsByClassName('btn')[0];
				if (this.textVal!=''&&reg.test(this.numVal)&&this.nameVal!='') {
					snow2.style.opacity="0";
					this.disabled = false;
					oBtn.style.background = '#5ab4ff';
					oBtn.style.cursor = 'pointer';
				}
				else{
					snow2.style.opacity="1";
				}
			},
			submitMessage:function(){
				if(this.nameVal!=''&&this.numVal!=''&&this.textVal!=''){
					this.$message({
						message:'您留言成功了，我会尽快联系你！',
						type:'warning'
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	#message{
		background-image: url('../assets/liuyan.jpg');
		background-repeat:no-repeat;
		background-size:cover;
		p{
				position:absolute;
				margin-top: 120px;
				font-size:24px;
				margin-left: 20px;
				color:#ed8e46;
		}
		.m_left{
			padding-top:40px;
			width:40%;
			float:left;
			.wrapper{
				width:90%;
				margin: 0 auto;
				ul{
					float:left;
				}
				.ul_img img{
					width:30px;
					height:30px;
					padding:80px 0 0 0 ;
					margin-left: 100px;
				}
				.ul_intro{
					padding:50px 0 50px 0;
					margin-left:50px;
					li:first-child{
						font-size:19px;
					}
					li{
						line-height:40px;
						text-align:left;
						color:#b8cbe2;
						font-size:16px;
						font-weight:bold;
					}
				}
			}
			
		}
		.m_right{
			padding-top:40px;
			width:60%;
			float:left;
			.wrapper1{
				padding:50px 0 100px 0;
				width:90%;
				margin: 0 auto;
				color:#fff;
				font-weight:bold;
				font-size:16px;
				.r_ul1{
					li{
						font-size:16px;
						input{
							display:inline-block;
							text-indent:10px;
							font-weight:bold;
							box-shadow:none;
							border:none;
							height:30px;
							background: #aaa;
							color:#fff;
							font-size:20px;
							text-align:center;
							border-radius:2px;

						}
						i{
							color:red;
						}
					}
					li:first-child{
						float:left;
						margin-left:50px;
						// margin-right:100px;
					}

				}
				.r_ul2{
					li{
						font-size:16px;
					}
					li:first-child{
						margin-top: 40px;
						#inp_text{
							width:80%;
							height:70px;
							background: #bbbbbb;
							box-shadow:none;
							text-indent:10px;
							font-weight:bold;
							color:#fff;
							font-size:20px;
							border-radius:2px;
							overflow:hidden;
						}
						span:first-child{
							padding-left:50px;
						}
						span,textarea{
							float:left;
						}
						i{ 
							color:red;
							line-height:70px;
							float:left;

						}
					}
					li:last-child{
						margin-top: 40px;
						float:left;
						padding-left:100px;
						button{
							box-shadow:none;
							border:none;
							padding:16px 100px;
							color:#fff;
							background: #aaa;
							// background: #5ab4ff;
							font-weight:bold;
							border-radius:2px;
							color:#fff;
						}
					}
				}

			}
		}
	}
	@media(max-width:900px){
		#message{
			p{
				font-size:12px;
				margin-left: 5px;
				padding-top:200px;
			}
			.m_left{
				float:none;
				width:100%;
				.wrapper{
					width:100%;
					text-align:center;
					ul{
						float:none;
					}
					.ul_intro{
						padding:20px 0 50px 0;
						margin-left:100px;
						li:first-child{
							font-size:12px;
						}
						li{
							line-height:30px;
							text-align:left;
							color:#b8cbe2;
							font-size:10px;
							font-weight:bold;
						}
					}
					.ul_img img{
						display:none;
					}
				}
			}
			.m_right{
				float:none;
				width:100%;
				padding-top:0;
				.wrapper1{
					padding:0 0 100px 0;
					.r_ul1{
						li{
							float:none;
							display:inline-block;
							width:100%;
							font-size:12px;
							span{
								position:absolute;
								right:280px;
								line-height:40px;
							}
							.phone_n{
								position:absolute;
								margin-top:20px;
							}
							input{
								display:inline-block;
								text-indent:10px;
								font-weight:bold;
								box-shadow:none;
								border:none;
								background: #aaa;
								color:#fff;
								font-size:10px;
								height:30px;
								text-align:center;
								border-radius:2px;
							}
						}
						li:first-child{
							margin:0;
							float:none;
							i{
								color:red;
								position:absolute;
								right:100px;
								line-height:40px;
							}
								
						}
						.snow1{
							color:red;
							position:absolute;
							right:100px;
							margin-top:20px;
							line-height:40px;

						}
						.num{
							position:absolute;
							right:140px;
							margin-top:20px;
						}
						.name{
							position:absolute;
							right:140px;
						}
					}
					.r_ul2{
						li{
							font-size:12px;
						}
						.content{
							position:absolute;
							right:280px;
						}
						li:first-child{
							margin-top: 60px;
							#inp_text{
								width:145px;
								height:30px;
								background: #bbbbbb;
								box-shadow:none;
								text-indent:10px;
								font-weight:bold;
								color:#fff;
								font-size:20px;
								border-radius:2px;
								overflow:hidden;
								position:absolute;
								right:136px;
							}
							span:first-child{
								padding-left:50px;
							}
							span,textarea{
								float:left;
							}
							.snow2{ 
								position:absolute;
								right:100px;
								color:red;
								line-height:40px;
								float:none;

							}
						}
						li:last-child{
							display:block;
							width:90%;
							margin:0 auto;
							margin-top: 60px;
							float:left;
							padding-left:0;
							button{
								padding:12px 30px;
								box-shadow:none;
								border:none;
								color:#fff;
								background: #aaa;
								font-weight:bold;
								border-radius:2px;
								color:#fff;
							}
						}
					}

				}
			}
		}
	}
</style>





