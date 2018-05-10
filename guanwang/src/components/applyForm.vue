<template>
	<div>
		<div class="form-bg">
			<div class="contain">
			<div class="right try">
				<h3>申请试用</h3>
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
					<el-form-item label="单位全称：" prop="name">
					    <el-input v-model="ruleForm.name"></el-input>
					</el-form-item>
					<el-form-item label="称呼：" prop="age">
					    <el-input type="age" v-model.number="ruleForm.age" auto-complete="off"></el-input>
					  </el-form-item>
				</el-form>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
export default ({
 	data(){
      return {
        ruleForm: {
          name: '',
          age: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入完整名称', trigger: 'blur' },
            { min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' }
          ],
          age:[
		    { required: true, message: '年龄不能为空'},
		    { type: 'number', message: '年龄必须为数字值'}
		  ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  })
</script>

<style>
.form-bg {background: url(../assets/try_bg.png) no-repeat;height: 559px;box-sizing: border-box;background-position: top center;padding: 30px 0 36px 0;min-width: 1200px;}
.form-bg .contain {width: 1200px;margin: 0 auto;position: relative;}
.form-bg .try {
    display: inline-block;
    width: 630px;
    height: 530px;
    margin-right: 20px;
    background: #fff;
}
.form-bg .try h3 {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #fff;
    background: #0b9efe;
    font-weight: 100;
}
.try .form {
    height: 479px;
    overflow-y: scroll;
    padding: 30px;
}
</style>
