<template>
  <div>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="../assets/images/sequelize.jpg">
      <p class="lead">爱就好比骑马和学法语，如果不趁年轻时学会，以后想学会就难了。</p>
      <p class="lead">
        Love is like riding or speaking French,if you don not learn it young, it's hard to get the trick of it
        later.
      </p>
      <!-- 人这一生，总要心碎一两次的。

                We must have our heart broken once or twice before we are done.
                世事无常，我们要随遇而安。

                It just happens, and we should live with it.

                人生就是不断收集回忆的过程，最终陪伴我们的也只有回忆了。

                The business of life is the acquisition of memories.In the end that's all there is.

                亲爱的，人生总是会遇到各种麻烦，我们得尽力去解决它。
                My dear, all life is a series of problems which we must try and solve.

                没有翻不了的山，没有沉不了的船。
                Every mountain is unclimbable until someone climbs it.Every ship is unsinkable until it sinks.

                世道变了，我们也得跟着变。

                The world moves on, and we must move with it.

                当坏事发生时，仍希望未发生过是毫无意义的，当务之急是减少损失。

                When something bad happens,there is no point in wishing it had not happened.The only option is to minimize the damage.
      每种生活都有它自己的规矩，如果你不愿意遵守，那么这种生活就不适合你。-->
    </div>

    <div class="heading text-right mb">
      <div v-if="userInfo.uid">
        <a href>{{userInfo.username}}</a>
      </div>
      <div v-else>
        <a @click.prevent="register" href>注册</a>
        <span>|</span>
        <a @click.prevent="login" href>登录</a>
      </div>
    </div>

    <Modal :show="modelName=='Register'" @close="modelClose" title="注册">
      <form>
        <div class="form-group row">
          <label for="username" class="col-md-3 col-form-label">用户名</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              v-model="reg.username"
              id="username"
              placeholder="用户名"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-md-3 col-form-label">密码</label>
          <div class="col-md-9">
            <input
              type="password"
              class="form-control"
              v-model="reg.password"
              id="password"
              placeholder="密码"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="repassword" class="col-md-3 col-form-label">重复密码</label>
          <div class="col-md-9">
            <input
              type="password"
              class="form-control"
              id="repassword"
              v-model="reg.repassword"
              placeholder="重复密码"
            >
          </div>
        </div>
      </form>
      <template slot="footer">
        <button type="button" class="btn btn-primary" @click="registerSubmit">注册</button>
        <button type="button" class="btn btn-secondary">取消</button>
        <a href>我有账号，立即登录</a>
      </template>
    </Modal>

    <Modal :show="modelName=='Login'" @close="modelClose" title="登录">
      <form>
        <div class="form-group row">
          <label for="username" class="col-md-3 col-form-label">用户名</label>
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              v-model="log.username"
              id="username"
              placeholder="用户名"
            >
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-md-3 col-form-label">密码</label>
          <div class="col-md-9">
            <input
              type="password"
              class="form-control"
              v-model="log.password"
              id="password"
              placeholder="密码"
            >
          </div>
        </div>
      </form>
      <template slot="footer">
        <button type="button" class="btn btn-primary" @click="loginSubmit">登录</button>
        <button type="button" class="btn btn-secondary">取消</button>
        <a href>我有账号，立即登录</a>
      </template>
    </Modal>
  </div>
</template>
<script>
import axios from "axios";
import Modal from "./modal/Modal";
export default {
  data() {
    return {
      userInfo: {
        uid: 0,
        username: ""
      },

      modelName: "",
      reg: {
        username: "",
        password: "",
        repassword: ""
      },
      log: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    Modal
  },
  created() {
   // console.log('112230'+ document.cookie);
    //console.log('112230'+ document.cookie);
    
    //组件初始化的过程中 判断localStorage 中是否有值。有值直接显示出来
   // 这种方式极度的不安全 因为local中的数据可以修改
    /* if(window.localStorage.getItem('uid')){

      this.userInfo.uid=window.localStorage.getItem('uid');
      this.userInfo.username=window.localStorage.getItem('username');
    } */
      let arr1 = document.cookie.split('; ');
        arr1 = arr1.map( item => {
            let arr2 = item.split('='); //['uid', 1]
            return {
                [arr2[0]]: arr2[1]
            }
        } );
        let cookie = Object.assign({}, ...arr1);
        console.log(cookie)

        this.userInfo.username = cookie.username;
        this.userInfo.uid = cookie.uid;
  },
  methods: {
    register() {
      this.modelName = "Register";
    },
    modelClose() {
      this.modelName = "";
    },
     
    login() {
      this.modelName = "Login";
      // console.log(Login);
    },
    registerSubmit() {
      axios({
        method: "post",
        url: "http://localhost:8080/api/register",
        data: this.reg
      }).then(res => {
        if (res.data.code) {
          alert(res.data.data);
        } else {
          this.modelName = "Login";
        }
      });
    },
    loginSubmit() {
      axios({
        method: "post",
        url: "http://localhost:8080/api/login",
        data: this.log
        //withCredentials: true
      }).then(res => {
        if (res.data.code) {
          console.log(res.data.data)
          console.log(document.cookie)
         /*  alert(res.data.data);
          alert(document.cookie);  */
        } else {
          this.modelName = "";
          this.userInfo.uid = res.data.data.id;
          this.userInfo.username = res.data.data.username;
          //登录成功后将登录成功的信息写入localStorage中
         // window.localStorage.setItem("uid",res.data.data.id);
         // window.localStorage.setItem("username",res.data.data.username);
        }
      });
    }
  }
};
</script>
<style>
</style>


