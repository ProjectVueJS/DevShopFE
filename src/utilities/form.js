class form {
  static adminLoginValidate(account, password, lang = 'vi') {
    // console.log(account, password);
    let errors = {
        account: [],
        password: [],
      }

    if (!account)
    if (lang === 'vi') {
      errors.account.push("Tài khoản không được bỏ trống.");
    } else {
      errors.account.push("Account cannot be empty.");
    }
    if (!password) {
      if (lang === 'vi') {
        errors.account.push("Mật khẩu không được bỏ trống.");
      } else {
        errors.account.push("Password cannot be empty.");
      }
    } else if (password.length < 6) {
      if (lang === 'vi') {
        errors.password.push("Mật khẩu phải lớn hơn hoặc bằng 6 ký tự.");
      } else {
        errors.account.push("Password must be 6 characters or greater.");
      }
    }
    return errors;
  }
}
export default form;
