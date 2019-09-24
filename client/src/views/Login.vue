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

<style>

*,*::before,*::after{
    box-sizing: border-box;
}

body{
    background: #c1bdba;
    font-family: "Titillium Web", sans-serif;
}

a{
    text-decoration: none;
    color: #1ab188;
    transition: .5s ease;
}

a:hover{
    color: #1ab100;
}

.form{
    background: #13232f;
    padding: 40px;
    max-width: 600px;
    margin: 40px auto;
    border-radius: 4px;
    box-shadow: 0 4px 10px 4px rgba(red, green, blue, .3);
}

.tab-group{
    list-style-type: none;
    display:flex;
    padding: 0;
    width: 100%;
    margin: 0 0 40px 0;
}

.tab-group li{
    display: block;
    position: relative;
    width: 50%;
    background: gray;
}
.tab-group li a{
    display:block;
    position: relative;
    text-decoration: none;
    padding: 15px;
    background: gray;
    color: lightgray;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    transition: .5s ease;
}

.tab-group li a:hover{
    background: mediumseagreen;
    color: white;
}

.tab-group .active a{
    background:#1ab188;
    color: white;
}

.tab-group > div:last-child{
    display:none;
}

h1{
    text-align: center;
    color: white;
    font-weight: 300;
    margin: 0 0 40px;
}

.field-wrap{
    display:flex;
    position: relative;
    flex-flow: column wrap;
    margin-bottom: 40px;
}

.field-wrap label{
    position: absolute;
    color: white;
    left: 13px;
    transition: all 0.25s ease;
    font-size: 22px;    
}

.req{
    margin: 2px;
    color: #1ab188;
}

input,textarea{
    font-size: 22px;
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid lightgray;
    color:white;
    border-radius: 0;
    transition: .25s ease;

}

input:focus{
    border-color: #1ab188;
}

textarea{
    border: 2px solid lightgray;
    resize: vertical;
}

label{
    pointer-events: none;
    position: absolute;
    transform: translateY(6px);
    left: 13px;
    transition: all 0.25s ease;
    font-size: 22px;
}

label.active{
    transform: translateY(50px);
    left: 2px;
    font-size: 14px;
}

button{
    display: block;
    background: #1ab188;
    border: 0;
    outline: none;
    width: 100%;
    padding: 15px 0;
    letter-spacing: 0.1em;
    font-weight: bold;
    font-size: 32px;
    color: white;
}

button:hover,button:focus{
    background:#148565;

}
</style>