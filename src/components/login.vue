<template>
  <div class="login">
    <h3>用户登录</h3>
    <mu-text-field label="用户名" hintText="请输入用户名" v-model="userinfo.name"></mu-text-field></br>
    <mu-text-field label="密码" hintText="请输入密码" type="password" v-model="userinfo.password"></mu-text-field></br>
    <mu-select-field v-model='userinfo.userType' label='请选择用户类型' >
      <mu-menu-item value='producter' title='生产设备厂商'/>
      <mu-menu-item value='user' title='用户'/>
    </mu-select-field><br/>
    <mu-raised-button label="登录" class="demo-raised-button" primary  @click="userlogin"/>
    <div style="padding-top: 200px" class="link">
      <router-link to='/register'>注册账号</router-link>
      <router-link to='getpwd'>忘记密码</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userinfo: {
        userType: 'producter',
        name: '',
        password: '',
        
      }
    }
  },
  computed: {
    userinfo() {
      return {
        name: this.$store.state.user.name
      }
    }
  },
  methods: {
    userlogin() {
      console.log('用户名：' + this.userinfo.name);
      console.log('密码：' + this.userinfo.password);
      this.$store.dispatch('userLogin', this.userinfo).then(() => {
        console.log('登录成功！');
        this.$router.push({ path: '/monitor' });
      }).catch(err => {
        console.log('登录失败！');
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: blue;
}
*/
.link {
  color: lightblue;
}
</style>
