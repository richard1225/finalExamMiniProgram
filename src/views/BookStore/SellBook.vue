<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <h4>卖书申请</h4>

      <template v-for="(book,key) in bookInfoList">
        <van-field
          :key="key"
          v-model="book.value"
          :label="book.label"
          :placeholder="book.label"
          :type="book.type === 'textarea'?'textarea': 'text'"
          :rules="[{ required: true, message: '请填写'+book.label }]"
        />
      </template>
      <h4>个人信息</h4>

      <template v-for="(book,key) in personInfoList">
        <van-field
          :key="key"
          v-model="book.value"
          :label="book.label"
          :placeholder="book.label"
          :type="book.type === 'textarea'?'textarea': 'text'"
          :rules="[{ required: true, message: '请填写'+book.label }]"
        />
      </template>
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          @click="handleSellBook"
        >
          提交卖书申请
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      bookInfoList: [
        { label: '图书信息', value: '' },
        { label: '图书版本', value: '' },
        { label: '图书价格', value: '' },
        { label: '图书新旧程度', value: '' },
        { label: '其他描述', type: 'textarea', value: '' }
      ],
      personInfoList: [
        { label: '姓名', value: '' },
        { label: '手机', value: '' },
        { label: '微信号', value: '' }
      ]
    }
  },
  methods: {
    handleSellBook () {
      let origin = localStorage.getItem('my-sell') || '[]'
      origin = JSON.parse(origin)
      const res = {}
      this.bookInfoList.map((info) => {
        res[info.label] = info.value
      })
      res['订单号'] = (new Date()).valueOf()
      origin.push(res)
      localStorage.setItem('my-sell', JSON.stringify(origin))
      Toast.success('提交成功!')
      this.$router.go(-1)
    },
    onSubmit (values) {
      console.log('submit', values)
    },

    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
