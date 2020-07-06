<template>
  <div style="margin-top: 120px">
    <h3>{{loginDict[status]}}</h3>
    <van-form @submit="onSubmit">
      <van-field
        v-model="userName"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
        >
          {{loginDict[status]}}
        </van-button>
      </div>
      <van-button
        v-if="status === 'login'"
        style="margin-top: 10px"
        @click="$router.push({path: '/regist'})"
        round
        block
        type="primary"
      >
        去注册
      </van-button>
      <van-button
        v-if="status === 'regist'"
        style="margin-top: 10px"
        @click="$router.push({path: '/login'})"
        round
        block
        type="primary"
      >
        去登陆
      </van-button>
    </van-form>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      userName: '',
      password: '',
      loginDict: {
        login: '登 录',
        regist: '注 册'
      }
    }
  },
  methods: {
    onSubmit (values) {
      if (this.status === 'login') {
        const [isSuccess, reason] = this.findUser(this.userName, this.password)
        if (isSuccess) {
          localStorage.setItem('currentUser', this.userName)
          Toast.success('登录成功')
          this.$router.push({
            path: '/'
          })
        } else {
          Toast.fail(reason)
        }
      }
      if (this.status === 'regist') {
        const [isSucces, reason] = this.checkIfUserExist(this.userName)
        if (isSucces) {
          const info = JSON.parse(localStorage.getItem('userInfo'))
          info[this.userName] = this.password

          const infoStr = JSON.stringify(info)
          localStorage.setItem('userInfo', infoStr)
          localStorage.setItem('currentUser', this.userName)
          Toast.success('注册成功')
          this.$router.push({
            path: '/'
          })
        } else {
          Toast.fail(reason)
        }
      }
      console.log('submit', values)
    },
    checkIfUserExist (uname) {
      if (localStorage.getItem('userInfo')) {
        try {
          const info = JSON.parse(localStorage.getItem('userInfo'))
          if (info[uname]) {
            return [false, '用户已存在']
          } else {
            return [true, '成功']
          }
        } catch (e) {
          localStorage.setItem('userInfo', '{}')
          return [false, '数据库有误']
        }
      } else {
        localStorage.setItem('userInfo', '{}')
        return [false, '数据库初始化中,请再点一次注册']
      }
    },
    findUser (userName, userPasswd) {
      if (localStorage.getItem('userInfo')) {
        try {
          const info = JSON.parse(localStorage.getItem('userInfo'))
          if (info[userName]) {
            if (info[userName] === userPasswd) {
              return [true]
            } else {
              return [false, '密码错误']
            }
          } else {
            return [false, '用户不存在']
          }
        } catch (e) {
          return [false, '数据库有误']
        }
      } else {
        return [false, '用户不存在']
      }
    }
  },

  computed: {
    status () {
      // let fullP = this.$route.fu
      return this.$route.fullPath.split('/')[1]
    }
  }
}
</script>

<style>
</style>
