class form {
  static adminLoginValidate(account, password) {
    // console.log(account, password);
    let errors = {
        account: [],
        password: [],
      }
    if (!account)
      errors.account.push("Tài khoản không được bỏ trống.");
    if (!password) {
      errors.password.push("Mật khẩu không được bỏ trống.");
    } else if (password.length < 6) {
      errors.password.push("Mật khẩu phải lớn hơn hoặc bằng 6 ký tự.");
    }
    return errors;
  }
}
export default form;
