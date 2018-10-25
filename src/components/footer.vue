<template>
	<div id="footer">
		<div id="intro">
			<span><img class="beian" src="static/beian.png" alt="">&nbsp;&nbsp;黑ICP备&nbsp;18006539号&nbsp;&copy;&nbsp;2017&nbsp;个人网站&nbsp;&nbsp;李井欢所有</span>
		</div>
		<div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	#footer{
		background:rgba(0,0,0,0.9);
		padding-top:50px;
		padding-bottom:50px;
		#intro{
			width:400px;
			margin:0 auto;
			color:#747474;;
			font-size:14px;
			font-weight:bold;
			span{
				padding-bottom:10px;
			}
			span:hover{
				transition:1.2s;
				border-bottom:1px solid #fff;
			}
		}
		
	}
	.beian{
		vertical-align: middle;
		width: 20px;
		height: 20px;
	}
</style>