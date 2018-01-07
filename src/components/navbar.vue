<template>
	<div id="navbar">
				<!-- logo -->
  			<h1 class="fl_l bl">
  					<img title="logo" class="logo " src="../assets/alibaba.png" alt="logo">
  			</h1>
	  		<div class="fl_r tab">
	  			<ul>
	  				<li @click = "goProduct">
	  					<a href="javascript:void(0)">作品</a>
	  			    </li>
	  				<li>
	  					<router-link to="/aboutus">关于我</router-link>
	  				</li>
	  				<li>
	  					<router-link to="/contactus">技能</router-link>
	  				</li>
	  				<li>
	  					<router-link to="/homepage">首页</router-link>
	  				</li>
	  				<li @click ="goContact">
	  					<a href="javascript:void(0)">联系我</a>
	  				</li>
	  			</ul>
	  		</div>
			<div style="clear:both"></div>
	</div>
</template>
<script>
export default {
   name:'navbar',
   data:function(){
   		return{

   		}
   },
   methods:{
   		goContact:function(){
			  window.scrollTo(1000,9000);
   		},
   		goProduct:function(){
   			window.scrollTo(500,700);
   		}
   }

}
</script>

<style lang="scss" scoped>
    #navbar{
  		width: 100%;
  		// background:rgba(0,0,0,0.1);
  		// opacity: 0.5;
  		position:absolute;
  		margin-top: 20px;
  		z-index: 2;
  		.bl{
			display: block;
			margin-left: 50px;
			position: relative;
			.logo{
				width: 150px;
				height: 60px;
				vertical-align: middle;
				margin-top: 10px;
				cursor: pointer;
				border: none;
				border-radius: 3px;
			}
		}
		.fl_r{
			float: right;
		}
		.fl_l{
			float: left;
		}
		.tab{
			margin-right: 10%;
			 ul li{
				display: block;
				float: left;
				margin-left: 15px;
				color: #ddd6d6;
				font-weight: bold;
				font-size: 16px;
				height: 80px;
				text-align: center;
				line-height: 80px;
				padding: 0 10px;
				cursor: pointer;
				a:hover{
					transition:.5s;
					border-bottom:3px solid #fff;
				}
				/*自动切换class*/
				.router-link-active{
					color: #DD812E;
				}
				li:last-child{

				}
			}
		}
    }
    @media(max-width:410px){
		#navbar{
			.fl_l{
				float:none;
				margin-left:0;
			}
			.tab{
				margin-left:0!important;
				ul li{
					margin-left:0;
				}
			}
		}
    }
</style>




