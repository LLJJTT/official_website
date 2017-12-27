<template>
	<div id="trust">
		<div class="title">
			<p>值得信赖的大型软件开发综合性企业</p>
			<p>Trustworthy Software Development Enterprise</p>
		</div>
		<div class="introduce">
			<el-row class="row_div">
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<img src="../assets/computer1.jpg" alt="">
			  			</li>
			  			<li>
			  				方案合理、质量可靠
			  			</li>
			  			<li>
			  				按照全球公认的ISO质量体系，精心打磨产品的每一个细节;<br><br>
			  				量身定做最合理的开发方案.
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<img src="../assets/computer2.jpg" alt="">
			  			</li>
			  			<li>
			  				交付准时、服务贴心
			  			</li>
			  			<li>
			  				按照全球公认的ISO质量体系，精心打磨产品的每一个细节;<br><br>
			  				量身定做最合理的开发方案.
			  			</li>
			  		</ul>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="wrapper">
			  		<ul>
			  			<li>
			  				<img src="../assets/computer3.jpg" alt="">
			  			</li>
			  			<li>
			  				策划优势、价值密度高
			  			</li>
			  			<li>
			  				按照全球公认的ISO质量体系，精心打磨产品的每一个细节;<br><br>
			  				量身定做最合理的开发方案.
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

	}
</script>

<style lang="scss" scoped>
	#trust{
		margin-top: 240px;
		color: #fff;
		background:rgba(0,0,0,0.9);
		padding-bottom:100px;
		.title{
			padding:50px 0 10px 0;
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
			margin-top: 60px;
			.row_div{
				width:90%;
				margin:0 auto;
				.wrapper{
						font-weight:bold;
						li:first-child{
							overflow: hidden;
							img{
								transition:1.6s;  
							}
							img:hover{
								cursor:pointer;
								transform:scale(1.2);
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