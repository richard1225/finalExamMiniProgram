<template>
  <div>
    <div class="person-info">
      <van-button
        type="info"
        size="small"
        style="position: absolute; right: 2px; top: 2px"
        @click="show=true"
      >设 置</van-button>
      <img
        class="img-head"
        :src="img"
      />
      <span>用户名称: {{userName}}</span>
    </div>
    <van-cell value="个人信息" />
    <van-cell value="我的余额" />
    <van-cell value="意见反馈" />
    <van-cell value="联系客服" />

    <van-action-sheet
      v-model="show"
      :actions="actions"
      @select="onSelect"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import img from '@/assets/book/s33606278.jpg'

export default {
  data () {
    return {
      img,
      userName: '',

      show: false,
      actions: [{ name: '退出登录' }, { name: '选项二' }, { name: '选项三' }]
    }
  },
  mounted () {
    this.userName = localStorage.getItem('currentUser')
  },
  methods: {

    onSelect (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      if (item.name === '退出登录') {
        localStorage.setItem('currentUser', '')
        this.$router.push({
          path: 'login'
        })
      }
      this.show = false
      Toast(item.name)
    }
  }
}
</script>

<style lang="scss">
.van-cell,
.van-cell--center {
  .van-cell__value,
  .van-cell__value--alone {
    text-align: center;
  }
}
.person-info {
  position: relative;
  height: 200px;
  &:before {
    content: "";

    display: inline-block;

    height: 100%;

    vertical-align: middle;
  }
  .img-head {
    height: 150px;
    position: absolute;
    top: 25px;
    left: 10px;
    clip-path: circle();
  }
  span {
    display: inline-block;
    // height: 150px;
    vertical-align: middle;
  }
}
</style>
