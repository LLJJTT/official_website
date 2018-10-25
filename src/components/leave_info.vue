<template>
	<div id="leave_info">
		<el-table
		border
    ref="singleTable"
    :data="tableData"
    highlight-current-row
    style="width: 100%">
    <el-table-column
    	align="center"
      type="index"
      >
    </el-table-column>
    <el-table-column
    	align="center"
      property="nickname"
      label="用户名"
      >
    </el-table-column>
    <el-table-column
    	align="center"
      property="phone"
      label="手机号"
      >
    </el-table-column>
    <el-table-column
    	align="center"
      property="textval"
      label="留言">
    </el-table-column>
  </el-table>
	</div>
</template>
<script>
	import axios from 'axios'
	import { Loading } from 'element-ui';
	export default {
   name:'navbar',
   data:function(){
   		return{
   			tableData:[],
   			url:'https://persional.lijinghuan.com/back_end/query_info.php'
   		}
   },
  methods:{
		getData(){
			var loadingInstance = Loading.service({ 
			fullscreen: true,
			background:'rgba(0, 0, 0, 0.8)', 
			text:'数据加载中...' });
			axios({
				url:this.url,
				method:'get',
			})
			.then(res =>{
				var _this = this
				_this.tableData = res.data
				setTimeout(res =>{
					_this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
					  loadingInstance.close();
					});
				},2000)
			})
			.catch(res =>{
				console.log(res)
			})
		}
 	},
 	created(){
 		this.getData()
 	}

}
</script>

<style lang="scss" scoped>
	#leave_info{
		height: 100%;
		margin-top: 100px;
	}
	.el-table__body{
		height: 100%;
	}
</style>




