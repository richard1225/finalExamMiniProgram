<template>
  <div>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >

      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
      >
        <img
          class="inner-img"
          :src="image"
        />
      </van-swipe-item>
    </van-swipe>

    <van-grid :column-num="2">
      <van-grid-item
        v-for="item in homeGrid"
        @click="handleClickGrid(item)"
        :key="item.value"
        :icon="item.icon"
        :text="item.label"
      />
    </van-grid>
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
      images: [
        img1, img2, img3, img4, img5, img6
      ],
      homeGrid: [
        { label: '我要买书', value: 'buy', icon: 'goods-collect-o' },
        { label: '我要卖书', value: 'sell', icon: 'refund-o' },
        { label: '查看旧书店库存', value: 'viewStore', icon: 'shop-o' },
        { label: '查看我的发布', value: 'myPublish', icon: 'upgrade' }
      ]
    }
  },
  methods: {
    handleClickGrid (item) {
      const val = item.value
      this.$router.push({
        path: '/' + val
      })
    }
  }
}
</script>

<style lang="scss">
.my-swipe {
  height: 250px;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 250px;
    text-align: center;
    background-color: #e7eae9;
    .inner-img {
      height: 100%;
    }
  }
}
</style>
