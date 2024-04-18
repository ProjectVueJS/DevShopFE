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
export function getToken() {
    return VueCookies.get('token');
}

// // Xóa cookie
// export function removeCookie(name) {
//   Vue.$cookies.remove(name);
// }
