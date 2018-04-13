<template>
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-header style="font-size: 12px">
      <div style="text-align: left">
        <img src="../assets/pic/logo2.jpg"/>
      </div>
      <div style="text-align: right">
        <el-button @click="Login">登录</el-button>
        <el-button @click="Register">注册</el-button>
      </div>
    </el-header>
    <el-main style="margin-top: 50px">
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in bannerList" :key="item.key">
          <img v-bind:src="item.url" style="width: 100%"/>
          <h3 class="title">{{ item.name }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-main>
  </el-container>
</template>

<script>
  import pic1 from '../assets/pic/pic1.jpg'
  import pic2 from '../assets/pic/pic2.jpg'
  import pic3 from '../assets/pic/pic3.jpg'
  import pic4 from '../assets/pic/pic4.jpg'
  import pic5 from '../assets/pic/pic5.jpg'

  export default {
    data () {
      return {
        bannerList: [
          {
            key: 1,
            name: '测试图片1',
            url: pic1
          },
          {
            key: 2,
            name: '测试图片2',
            url: pic2
          },
          {
            key: 3,
            name: '测试图片3',
            url: pic3
          },
          {
            key: 4,
            name: '测试图片4',
            url: pic4
          },
          {
            key: 5,
            name: '测试图片5',
            url: pic5
          },
        ],
      }
    },
    methods:{
      Login:function () {
        this.$router.push({path: "/login"});
      },
      Register:function () {
        this.$router.push({path: "/register"});
      }
    },
  }
</script>

<style>
  /**
  我真的不会写css啊。。。
  就知道那么一丢丢丢丢~
   */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__item .title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .64);
    padding: 0 0 0 0;
    color: #fff;
    font-size: 1.28rem;
    height: 2.58rem;
    line-height: 2.58rem;
  }
</style>
