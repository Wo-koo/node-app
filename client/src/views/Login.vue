<template>
  <div class="form" id="login">
    <ul class="tab-group">
      <li class="tab" v-bind:class="{active: loginTabIsActived}">
        <a href="#login" v-on:click="tabClick('loginTab')">login</a>
      </li>
      <li class="tab" v-bind:class="{active: signUpTabIsActived}">
        <a href="#signup" @click="tabClick('signUpTab')">signup</a>
      </li>
    </ul>
    <div class="tab-content">
      <div id="login" v-bind:hidden="!loginTabIsActived">
        <h1>Welcome back!</h1>
        <form action="/" method="post">
          <div class="field-wrap">
            <label>
              Email Address
              <span class="req">*</span>
            </label>
            <input type="email" required="off" @blur="blured" @focus="focused" v-model="model.email"/>
          </div>
          <div class="field-wrap">
            <label>
              Password
              <span class="req">*</span>
            </label>
            <input type="password" @blur="blured" @focus="focused" v-model="model.password"/>
          </div>
          <button type="submit" @click.prevent="logIn">LOG IN</button>
        </form>
      </div>
      <div id="signup" v-bind:hidden="!signUpTabIsActived">
        <h1>Sign up for Z</h1>
        <div class="field-wrap">
          <label>
            Name
            <span class="req">*</span>
          </label>
          <input type="text" @blur="blured" @focus="focused"/>
        </div>
        <div class="field-wrap">
          <label>
            Email Address
            <span class="req">*</span>
          </label>
          <input type="text" @blur="blured" @focus="focused"/>
        </div>
        <div class="field-wrap">
          <label>
            Set Password
            <span class="req">*</span>
          </label>
          <input type="text" @blur="blured" @focus="focused"/>
        </div>
        <button @click="regist">GET STARTED</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "login",
    data:function(){
        return{
            loginTabIsActived: true,
            signUpTabIsActived: false,
            model:{},
        };
    },
    components: {},
    methods:{
      tabClick: function(tabName){
          if(tabName == 'loginTab')
          {
              this.loginTabIsActived = true;
              this.signUpTabIsActived = false;
          }else if(tabName == 'signUpTab'){
              this.loginTabIsActived = false;
              this.signUpTabIsActived =  true;
          }
      },
      focused: function(event){
          var el = event.currentTarget;          
          el.parentNode.firstChild.className = 'active';
      },
      blured: function(event){
           var el = event.currentTarget;
           if(el.value == el.defaultValue){
               el.parentNode.firstChild.className = null;
           }
      },
      logIn(){
        // to do
        this.$http.post('/login',this.model).then(
          this.$message({
            type: 'success',
            message: 'login success'
          })
        );       
      },
      regist: function(){
        // to do
      },
  },
};
</script>