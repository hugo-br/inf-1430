<template>
  <div id="login-page" class="login container-fluid">
    <div id="login-container" class="col-lg-5 col-md-7 col-sm-10">
      <div class="wrap">
        <!-- Header -->
        <div class="login-top">
          <h1>CORTEX</h1>
          <img alt="Cortex" src="../assets/logo.png" />
          <small class="sub-title"></small>
          <p></p>
        </div>

        <!-- Bottom -->
        <div class="login-bottom">
          <button variant="primary" size="lg" @click="login()">
            Se connecter
          </button>
        </div>
      </div>
    </div>

    <div
      class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <!-- Heroicon name: solid/lock-closed -->
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {}
</script>

<style scoped lang="less">
#login-page {
  height: 100vh;
  width: 100vw;
  background-color: white;
  background-image: url("../assets/bg_pharma.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  #login-container {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 45vh;
    min-height: 450px;
    transform: translate(-50%, -55%);
    padding: 60px;
    background: rgb(2 16 42 / 87%);
    border: #293435 1px solid;
    border-radius: 7px;
    animation: fade-in 2.4s ease forwards;
    box-shadow: 5px 3px 14px 3px rgb(191 195 230 / 95%);

    * {
      color: white;
    }

    .wrap {
      position: relative;
      height: 100%;
      width: 100%;
    }

    .login-top {
      width: 100%;
      text-align: center;
      margin-top: 60px;

      * {
        font-family: "Arial Black";
      }

      h1 {
        font-size: 48px;
        font-weight: bold;
        display: inline-block;
        animation: fade-in 2.4s ease forwards;
        vertical-align: super;
      }

      img {
        display: inline-block;
        vertical-align: baseline;
        transform: scale(1);
        margin-left: 15px;
        animation: logoAnimationOpenLogin 0.4s ease-out 1s forwards;
        opacity: 0;
      }

      .sub-title {
        display: block;
        width: 100%;
        clear: both;
        font-size: 12px;
        font-family: "Arial";
        color: #babebf;
        position: relative;
        top: -12px;
      }

      p {
        display: block;
        clear: both;
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: bold;
        margin-top: -5px;
      }
    }

    .login-bottom {
      width: 100%;
      text-align: center;
      font-size: 14px;
      margin-top: 40px;

      button {
        background-color: #ee610f;
        border-color: white;
        font-size: 14px;

        &:hover {
          background-color: darken(#ee610f, 10%);
        }
      }
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0.2;
  }

  100% {
    opacity: 1;
  }
}
</style>
