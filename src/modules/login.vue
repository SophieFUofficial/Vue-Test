<template>
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-header style="font-size: 12px">
      <div style="text-align: left">
        <img src="../assets/pic/logo2.jpg"/>
      </div>
    </el-header>
    <el-main style="margin-top: 50px">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    }

  }
</script>

<style>

</style>
