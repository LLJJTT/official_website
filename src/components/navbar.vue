<template>
	<div id="navbar">
				<!-- logo -->
  			<h1 class="fl_l bl">
  					<img title="logo" class="logo " src="../assets/logo.png" alt="logo">
  			</h1>
	  		<div class="fl_r tab">
	  			<ul>
	  				<li>
	  					<router-link to="/homepage" >回到首页</router-link>
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
   		
   }

}
</script>

<style lang="scss" scoped>
    #navbar{
  		width: 100%;
  		position:absolute;
  		margin-top: 20px;
  		z-index: 2;
  		.bl{
			display: block;
			margin-left: 50px;
			position: relative;
			.logo{
				width: 80px;
				height: 80px;
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




