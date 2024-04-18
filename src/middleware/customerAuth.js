// middleware/auth.js
import VueCookies from 'vue-cookies';

export default function (to, from, next) {
    // Thực hiện xác thực người dùng ở đây
    const isLogin = checkIfUserin
  
    if (isLogin) {
      // Nếu người dùng đã đăng nhập, cho phép tiếp tục
      next();
    } else {
      // Nếu không, chuyển hướng đến trang đăng nhập
      next('/login');
    }
  }
  