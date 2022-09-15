<template>
  <form action="/aaa">
    username: <input type="text" name="username" v-model="username" />
    <br />
    password: <input type="text" name="password" v-model="password" />
    <br />
    <!-- <input type="submit" value="登录" /> -->
    <div @click="login">登录</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isShow:true
    };
  },
  methods: {
    login() {
      console.log(this.username + "----" + this.password);
      this.isShow = false;
      this.$router.push("home");
      console.log('Login-isShow: '+this.isShow)
    },
  },
  mounted() {
    this.$emit("func", this.isShow);
  },
};
</script>