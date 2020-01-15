<template>
  <div>
    <el-container style="height: 100%; width: 100%;">
      <el-header>
        <div class="logo">
          <img class="logo-img" src="../assets/logo.png" alt="logo" width="200"/>
          <span>电商管理系统</span>
        </div>
        <el-button class="logout" type="info" @click="logout">退出</el-button>
      </el-header>
      <!--页面主体区域-->
      <el-container style="width: 100%">
        <!--侧边栏-->
        <el-aside :width="isCollapse?'65px':'200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <!--侧边栏菜单区域-->
          <el-menu active-text-color="#409EFF" unique-opened :collapse="isCollapse"
          :collapse-transition="false" router :default-active="this.$route.path">
            <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
              <template slot="title">
                <!--图标-->
                <i :class="iconsObj[item.id]"></i>
                <!--文本-->
                <span>{{item.authName}}</span>
              </template>

              <!--二级菜单-->
              <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children"
                            :key="subItem.id">
                <template>
                  <!--图标-->
                  <i class="el-icon-menu"></i>
                  <!--文本-->
                  <span>{{subItem.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main style="width: 80%;height: 90vh;background-color: #E9EDF0;">
          <!--路由占位符-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    created () {
      this.getMenuList()
    },
    data () {
      return {
        //左侧菜单数据
        menuList: [],
        iconsObj: {
          '125': 'el-icon-user',
          '103': 'el-icon-house',
          '101': 'el-icon-shopping-bag-1',
          '102': 'el-icon-s-order',
          '145': 'el-icon-s-data'
        },
        //是否折叠
        isCollapse:false,
      }
    },
    methods: {
      logout () {
        window.sessionStorage.clear()
        this.$router.push('/login')
      },
      //获取所有的菜单
      async getMenuList () {
        const { data: res } = await this.$axios.get('/api/menus')
        if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
        this.menuList = res.data
        console.log(res)
      },
      //点击按钮，切换菜单的折叠与展开
      toggleCollapse () {
        this.isCollapse =! this.isCollapse;
      },
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

    .logo {
      display: inline;

      .logo-img {
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
    .el-menu{
      border-right: none;
    }
  }

  .toggle-button {
    background-color: #fff;
    font-size: 10px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
  .toggle-button:hover{
    background-color: #ECF5FF;
  }
</style>
