<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="shadow-sm rounded-sm p-3 sm:w-full sm:max-w-sm mx-auto">

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <!-- <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> -->
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit="checkForm" action="/admin" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Account</label>
            <div class="mt-2">
              <input id="email" name="email" type="text" v-model="account"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <!-- <div class="mt-2">
              <input id="password" name="password" type="password" v-model="password"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div> -->
            <div>
              <!-- <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label> -->
              <div class="relative mt-2 rounded-md shadow-sm">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div>
                <input type="text" name="price" id="price"
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="0.00" />
                <div class="absolute inset-y-0 right-0 flex items-center">
                  <!-- <label for="currency" class="sr-only">Currency</label>
                  <select id="currency" name="currency"
                    class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select> -->
                  <icon></icon>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
              in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import '@/assets/tailwind.css'
export default {
  data() {
    return {
      errors: [],
      account: '',
      password: '',
      showPass: false,
    }
  },
  methods: {
    checkForm: function (e) {
      alert('asd')
      if (this.account && this.password) return true;
      this.errors = [];
      if (!this.account) this.errors.push("Account required.");
      if (!this.password) this.errors.push("Password required.");
      e.preventDefault();
    }
  },
}
</script>