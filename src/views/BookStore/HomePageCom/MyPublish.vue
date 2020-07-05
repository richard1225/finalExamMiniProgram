<template>
  <div>
    <van-nav-bar
      left-text="返回"
      title="我的发布"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="bookActive">
      <van-tab title="我的卖书"></van-tab>
      <van-tab title="我的求书"></van-tab>
    </van-tabs>
    <van-tabs v-model="statusActive">
      <van-tab title="全部"></van-tab>
      <van-tab title="已完成"></van-tab>
      <van-tab title="进行中"></van-tab>
      <van-tab title="待求助"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
    <van-pull-refresh
      class="pull-detail"
      style="right: auto; left: 10px; width: calc(100% - 10px); top: 140px"
      v-model="refreshing"
      @refresh="onRefresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="book-item"
          :key="key"
          v-for="(img, key) in images"
        >
          <img
            class="img-item"
            :src="img"
          />
          <div class="book-detail">
            <div style=" font-weight: bold; color: #53bb8f;">书名:《xhXXxxxx》</div>
            <div style="font-size: 12px">作者: xx</div>
            <div style="font-size: 14px; color: red; margin-top: 60px">库存: xx</div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>

import img1 from '@/assets/book/s33606278.jpg'
import img2 from '@/assets/book/s33613557.jpg'
import img3 from '@/assets/book/s33646543.jpg'
import img4 from '@/assets/book/s33660541.jpg'
import img5 from '@/assets/book/s33666610.jpg'
import img6 from '@/assets/book/s33668175.jpg'
export default {
  data () {
    return {
      searchArea: '',
      images: [
        img1, img2, img3, img4, img5, img6
      ],
      bookActive: '',
      statusActive: '',
      active: '',
      sideActive: '',
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    onLoad () {
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      setTimeout(() => {
        if (this.refreshing) {
          this.refreshing = false
        }
        this.loading = false
      }, 1000)
    },
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.search-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
</style>
