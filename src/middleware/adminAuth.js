import VueCookies from 'vue-cookies';

export default function (to, from, next) {
    // Thực hiện xác thực người dùng ở đây
    const isAuthenticated = checkLogin();
  
    if (isAuthenticated) {
      next();
    } else {
      next('/admin');
    }

    function checkLogin() {
      const authToken = VueCookies.get('user');
      return authToken ? true : false
    }
  }
  