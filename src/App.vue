<template>
  <div id="app">
    <router-view />
    <van-tabbar
      v-model="active"
      @change="onChange"
      route
      v-if="shouldShowNav"
    >
      <van-tabbar-item
        replace
        to="/"
        icon="home-o"
      >主页</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/order"
        icon="orders-o"
      >订单</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/favorite"
        icon="like-o"
      >收藏</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/account"
        icon="user-circle-o"
      >个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { Notify } from 'vant'
export default {
  data () {
    return {
      active: ''
    }
  },
  methods: {
    onChange (index) {
      // Notify({ type: 'primary', message: index })
    }
  },
  computed: {
    shouldShowNav () {
      const route = this.$route
      return !(route.fullPath === '/login' || route.fullPath === '/regist')
    }
  }
}
</script>

<style lang="scss">
* body {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
