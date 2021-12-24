<template>
  <div class="background-login">
    <div
      id="login-form"
      class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div class="max-w-md w-full space-y-8">
        <div>
          <h1 class="page-title text-4xl">RUBYDOR</h1>
          <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
            {{ $t("login.sign_account") }}
          </h2>
          <!--
          <p class="mt-2 text-center text-sm text-gray-600">
            {{ $t("login.or") }}
            <a href="#" class="font-medium text-green-600 hover:text-green-500">
              {{ $t("login.register") }}
            </a>
          </p>
          -->
        </div>
        <div class="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">{{
                $t("login.email")
              }}</label>
              <input
                id="email-address"
                name="email"
                type="email"
                v-model="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                :placeholder="$t('login.email')"
              />
            </div>
            <div>
              <label for="password" class="sr-only">{{
                $t("login.password")
              }}</label>
              <input
                id="password"
                name="password"
                type="password"
                v-model="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                :placeholder="$t('login.password')"
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
                {{ $t("login.remember_me") }}
              </label>
            </div>

            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-green-600 hover:text-green-500"
              >
                {{ $t("login.forget_password") }}
              </a>
            </div>
          </div>

          <div>
            <button
              @click="adminLogin()"
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-green-800 group-hover:text-green-400"
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
              {{ $t("login.signin") }}
            </button>
            <div
              v-if="error != '' && error != 'undefined'"
              class="mt-2 space-y-3 text-sm text-center text-red-800"
            >
              {{ error }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { loginAdmin } from "../services/ConnexionService";
import { userStore } from "../store/store-accessor";

@Component
export default class LoginCMS extends Vue {
  public email = "admin@rubydor.ca";
  public password = "hsjhjkah";
  public isLoading = false;
  public error = "";

  public async adminLogin(): Promise<void> {
    this.isLoading = true;
    this.resetForm();

    const credentials = {
      email: this.email,
      password: this.password,
    };

    loginAdmin(credentials)
      .then((result: any) => {
        console.log(result);
        this.isLoading = false;
        if (result.confirm) {
          // Set the user in store
          userStore.setUser(result.user);

          // Redirect
          const path = "/cms/products"; //  process.env.REDIRECT_DASHBOARD;
          if (this.$route.path !== path) this.$router.push(path);
          window.location.href = path;
          return;
        }
        const err = `errors.${result.errorMsg}`;
        this.error = String(this.$t(err));
        return;
      })
      .catch((error: any) => {
        this.isLoading = false;
        this.error = "";
        return;
      });
  }

  public resetForm(): void {
    this.error = "";
  }
}
</script>

<style scoped lang="less">
@background: #111a21;

.background-login {
  width: 100vw;
  height: 100vh;
  background-color: lighten(@background, 10%);
}

#login-form {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  padding: 4%;
  border-radius: 5px;
  border: 2px solid #28a07a;
}
</style>
