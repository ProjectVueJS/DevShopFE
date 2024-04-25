<template>
  <section :style="{ backgroundImage: `url(${bgLogin})` }" class="bg-no-repeat bg-center max-h-screen">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <a href="#" class="flex items-center mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-36 mr-2 rounded-md" src="../../assets/imgs/app/dev-logo.png" alt="logo" />
      </a>
      <div
        class="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
              <input type="text" v-model="account" id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 block w-full p-2.5"
                placeholder="Email Or Username" />
              <p class="text-red-600 text-sm" v-if="errors.account.length !== 0">{{ '* ' + errors.account[0] }}</p>
            </div>
            <div>
              <div class="flex justify-between relative">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <label class="block mb-2 text-sm font-medium text-blue-800 dark:text-white cursor-pointer">Forgot
                  Password ?</label>
                <span class="absolute right-0 bottom-[-41px] cursor-pointer p-2 pr-3" @click="showPass = !showPass">
                  <i :class="showPass ? 'pi pi-eye' : 'pi pi-eye-slash'" :title="showPass ? 'ẩn' : 'hiện'"></i>
                </span>

              </div>
              <input :type="showPass ? 'text' : 'password'" v-model="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 block w-full p-2.5" />
              <p class="text-red-600 text-sm" v-if="errors.password.length !== 0">{{ '* ' + errors.password[0] }}</p>
            </div>
            <!-- <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label
              >
              <input
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:outline-none focus:ring-4 focus:ring-blue-200 block w-full p-2.5"
                required=""
              />
            </div> -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" v-model="remember" type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-4 focus:ring-blue-200" />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="font-light text-gray-500 select-none cursor-pointer">
                  Remember Me!
                </label>
              </div>
            </div>
            <button type="submit"
              class="w-full text-white bg-blue-800 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-md text-sm px-5 py-2.5 text-center">
              Login
            </button>
            <!-- <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Login here</a
              >
            </p> -->
          </form>
        </div>
      </div>
      <!-- <pre class="text-red-700">{{ errors.length ? errors : '' }}</pre>
      <pre class="text-red-700">{{ response !== '' ? response : '' }}</pre> -->
    </div>
  </section>
  <AlertNotifice v-if="showNotifice" @resetAlertStatus="resetAlertStatus" :typeAlert="typeNotifice"
    :message="messageNotifice" />
</template>

<script>
import bgLogin from "@/assets/imgs/app/be-bg-login.png"
// import axios from "axios";
// import axios from "@/config/axios"
// import AlertNotifice from "@/common/AlertNotifice.vue";
import { setCookie, getUser, getToken } from "@/cookie/cookieManager";
import router from "@/router";
import form from "@/utilities/form"
import AuthService from "@/service/authService";
import "@/utilities/lang/authLang";

export default {
  name: "AdminLogin",
  // components: {
  //   AlertNotifice
  // },
  data() {
    return {
      errors: {
        account: [],
        password: [],
      },
      // response: '',
      account: "",
      password: "",
      remember: false,
      showPass: false,
      bgLogin: bgLogin,
      showNotifice: false,
      typeNotifice: 'success',
      messageNotifice: 'success',


    };
  },
  methods: {
    handleLogin() {

      console.log('error account: ' + this.errors.account.length);
      console.log('error password: ' + this.errors.password.length);
      // this.validate();


      if (this.errors.account.length !== 0 || !this.errors.password.length !== 0) this.resetErrors();
      this.errors = form.adminLoginValidate(this.account, this.password);

      if (this.errors.account.length !== 0 || this.errors.password.length !== 0) {
        return false;
      } else {
        this.login();
      }
    },
    async login() {
      this.resetErrors();
      try {
        let response = await AuthService.login({
          account: this.account,
          password: this.password,
          remember: this.remember,
        })
        if (response.status) {
          this.showNotifice = true;
          this.typeNotifice = 'success';
          this.messageNotifice = response.message;
          // setTimeout(() => {
          //   location.href = '/dashboard';
          // }, 1500);

          // let timeLife = parseInt(response.expires_in) === 7200 ? 7200 : (parseInt(response.expires_in) / 60) / 60 / 24 + 'd';
          // timeLife = response.expires_in
          setCookie('expired_login', response.expires_in, response.expires_in);
          setCookie('token', response.token, response.expires_in);
          setCookie('user', response.user, response.expires_in);
        } else {
          this.showNotifice = true;
          this.typeNotifice = 'error';
          this.messageNotifice = response.message;
        }
      } catch (errors) {
        let data = errors.data
        // console.log(data);
        this.showNotifice = true;
        this.typeNotifice = 'error';
        this.messageNotifice = data.message;

        if (errors.status == 422) {
          let error = data.data;
          console.log(error.account);
          console.log(error.password);
          if (error.account) {
            this.errors.account.push(error.account[0])
          }

          if (error.password) {
            this.errors.password.push(error.password[0])
          }
        }
        // console.log(data.data['account'][0]);
      }
    },
    resetErrors() {
      this.errors = {
        account: [],
        password: [],
      };
    },
    resetAlertStatus() {
      this.showNotifice = false
    }
  },
  beforeCreate() {
    // console.log('beforeCreate');
    // console.log(getUser());
    if (getToken() || getUser()) {
      console.log('logged');
      router.push('/dashboard')
    }

  },
  // created() {
  // }

}
</script>
