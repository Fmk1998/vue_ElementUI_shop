<template>
  <div>
    <el-container style="height: 100%; width: 100%;">
      <el-header>
        <div class="logo">
          <img class="logo-img" src="../assets/logo.png" alt="logo" width="30"/>
          <span>电商管理系统</span>
        </div>
        <el-button class="logout" type="info" @click="logout">退出</el-button>
      </el-header>
      <el-container style="width: 100%">
        <el-aside style=" width: 20%;">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">选项4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-menu-item index="3-4">选项4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main style="width: 80%">
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      return {
        tableData: Array(5).fill(item)
      }
    },
    methods: {
      logout () {
        window.sessionStorage.clear()
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    color: #fff;
    line-height: 60px;
    font-size: 20px;
    .logo{
      display: inline;
      .logo-img{
        position: relative;
        top: 10px;
        width: 30px;
        height: 30px;
        margin: 0 10px;
        background-color: #333333;
        border: 1px solid #222222;
        border-radius: 50%;
      }
    }
  }

  .el-aside {
    color: #333;
  }
</style>
