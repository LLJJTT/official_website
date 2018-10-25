<template>
	<div id="login">
		<img class="bg" src="static/login_bg.jpeg" alt="">
		<div id="box">
			<div class="show_name">Background Management System</div>
			<div class="inp_fa">
				<input class="user_name" v-model="username" type="text" placeholder="用户名">
			</div>
			<div class="inp_fa">
				<input class="pass_word" v-model="password" type="password" placeholder="密码">
			</div>
			<div class="inp_fa">
				<button @click="goLogin" class="sure_login">登录</button>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import { Loading } from 'element-ui';
export default {
   name:'navbar',
   data:function(){
   		return{
   			username:'',
   			password:'',
   			url:'https://persional.lijinghuan.com/back_end/admin_login.php'
   		}
   },
   methods:{
   		goLogin(){
   			if (this.username==''||this.password=='') {
   				this.$message({
						message:'账户、密码不能为空',
						type:'error',
						duration:3000
					})
   			}
   			else{
   				var loadingInstance = Loading.service({ 
						fullscreen: true,
						background:'rgba(0, 0, 0, 0.8)',
						text:'登录中！请等待！' 
					});
   				var formData = new FormData()
					formData.append("username",this.username)
					formData.append("password",this.password)
   				axios({
						url:this.url,
						method:'post',
						data:formData
					})
					.then(res =>{
						if (res.data.code==200) {
							sessionStorage.setItem("login","1")
							var _this = this
							setTimeout(res =>{
								_this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
								  loadingInstance.close();
								});
								_this.$message({
									message:'登录成功！',
									type:'success',
									duration:5000
								})
								_this.$router.push({
			            name:'leave_info',
			          }); 
							},2000)
						}
						else{
							var _this = this
							setTimeout(res =>{
								_this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
								  loadingInstance.close();
								});
								_this.$message({
									message:'账号或者密码错误',
									type:'error',
									duration:5000
								})
							},2000)
						}
					})
					.catch(res =>{
						console.log(res)
					})
   			}
   		}
   }

}
</script>

<style lang="scss" scoped>
	.bg{
		width: 100%;
		height: 100%;
	}
	#login{
		position: relative;
	}
	#box{
		width: 400px;
		height: 400px;
		background: #fff;
		border-radius: 40px;
		border: none;
		position:absolute;
		left:50%;
		top:50%;
		margin-left:-200px;
		margin-top:-200px;
	}
	.show_name{
		position: relative;
		font-size: 20px;
		margin-top: 40px;
		color: #9a9595; 
		font-weight: bolder;
	}
	.inp_fa{
		margin-top: 40px;
	}
	.user_name{
		width: 70%;
		height: 40px;
		line-height: 40px;
		outline: none;
		border-radius: 4px;
		text-align: center;
		text-indent: 10px;
		color: #0062ad;
		border:1px solid #9682bb;
	}
	.pass_word{
		width: 70%;
		height: 40px;
		line-height: 40px;
		outline: none;
		border-radius: 4px;
		text-align: center;
		text-indent: 10px;
		color: #0062ad;
		border:1px solid #9682bb;
	}
	.sure_login{
		width: 70%;
		padding: 10px 0;
		outline: none;
		border-radius: 4px;
		text-align: center;
		color: #0062ad;
	}
</style>




