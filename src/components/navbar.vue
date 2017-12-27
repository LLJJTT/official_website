<template>
	<div id="navbar">
				<!-- logo -->
  			<h1 class="fl_l bl">
  					<img class="logo " src="../assets/alibaba.png" alt="logo">
  			</h1>
	  		<div class="fl_r tab">
	  			<ul>
	  				<li>
	  					<router-link to="/yingyong">云应用</router-link>
	  			    </li>
	  				<li>
	  					<router-link to="/aboutus">关于我们</router-link>
	  				</li>
	  				<li>
	  					<router-link to="/contactus">联系我们</router-link>
	  				</li>
	  				<li>
	  					<router-link to="/homepage">首页</router-link>
	  				</li>
	  				<li>
	  					<a href="javascript:void(0)">010-6666-8888</a>
	  				</li>
	  			</ul>
	  		</div>
			<div style="clear:both"></div>
	</div>
</template>
<script>
export default {
   name:'navbar',

}
</script>

<style scoped>
    #navbar{
  		width: 100%;
  		background:rgba(0,0,0,0.1);
  		opacity: 0.5;
  		position:absolute;
  		margin-top: 20px;
  		z-index: 2;
    }
	.bl{
		display: block;
		margin-left: 50px;
		position: relative;
	}
	.logo{
		width: 150px;
		height: 60px;
		vertical-align: middle;
		margin-top: 10px;
		cursor: pointer;
		border: none;
		border-radius: 3px;
	}
	.fl_r{
		float: right;
	}
	.fl_l{
		float: left;
	}
	.tab{
		margin-right: 10%;
	}
	.tab ul li{
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
	}
	/*自动切换class*/
	.router-link-active{
		color: #DD812E;
	}
	/*.tab ul li a:hover{
		transition: .8s;
		color: #DD812E;
	}*/
</style>