<template>
  <el-main class="login-wrap">
    <el-form class="login-container" :model="ruleForm" :rules="rules" ref="ruleForm">
      <h2 class="login-title">公钥申请</h2>
      <el-form-item label="QQ" prop="qq">
        <el-input
          type="text"
          v-model="ruleForm.qq"
          placeholder="QQ号"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="证书名称" prop="name">
        <el-input
          type="password"
          v-model="ruleForm.name"
          placeholder="证书名称"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="国家" prop="country">
        <el-input
          type="text"
          v-model="ruleForm.country"
          placeholder="国家代码（两位）"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="组织名称" prop="organization">
        <el-input
          type="text"
          v-model="ruleForm.organization"
          placeholder="组织名称"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="姓" prop="surname">
        <el-input
          type="text"
          v-model="ruleForm.surname"
          placeholder="姓"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="名" prop="given_name">
        <el-input
          type="text"
          v-model="ruleForm.given_name"
          placeholder="名"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="电子邮箱" prop="email">
        <el-input
          type="text"
          v-model="ruleForm.email"
          placeholder="电子邮箱"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dosubmit('ruleForm')">
          下载证书
        </el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>

export default {
  data () {
    return {
      ruleForm: {
        qq: '',
        name: '',
        country: '',
        organization: '',
        surname: '',
        given_name: '',
        email: ''
      },
      rules: {
        qq: [
          {required: true, message: '请输入QQ', trigger: 'blur'},
          {min: 6, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '请输入证书名', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
        ],
        country: [
          {required: true, message: '请输入国家代码', trigger: 'blur'},
          {min: 2, max: 2, message: '该代码仅两位', trigger: 'blur'}
        ],
        organization: [
          {required: true, message: '请输入组织名', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
        ],
        surname: [
          {required: true, message: '请输入姓', trigger: 'blur'},
          {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
        ],
        given_name: [
          {required: true, message: '请输入名', trigger: 'blur'},
          {min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入电子邮箱', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    dosubmit: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          window.open(
            'https://ssl-cert-dax2kkkov-intothedark.vercel.app/?group_id=' + this.ruleForm.qq + '&&name=' + this.ruleForm.name + '&&country=' + this.ruleForm.country + '&&organization=' + this.ruleForm.organization + '&&surname=' + this.ruleForm.surname + '&&given_name=' + this.ruleForm.given_name + '&&email=' + this.ruleForm.email,
            '_self'
          )
        } else {
          return false
        }
      })
    }
  }
}
</script>
