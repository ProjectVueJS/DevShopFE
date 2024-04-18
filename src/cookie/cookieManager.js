// cookieManager.js

// Lưu cookie
import VueCookies from 'vue-cookies';
export function setCookie(name, value, expires) {
  return VueCookies.set(name, value, expires);
}

// // Lấy cookie
export function getCookie(name) {
    return VueCookies.get(name);
}
export function getUser() {
    return VueCookies.get('user');
}

// // Xóa cookie
// export function removeCookie(name) {
//   Vue.$cookies.remove(name);
// }
