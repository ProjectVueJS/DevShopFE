import { textLang } from "./lang/textLang";
import { valiErrorLang } from "./lang/validateLang";
class form {

  static adminLoginValidate(account, password, lang = 'vi') {

    // console.log(account, password);
    let errors = {
      account: [],
      password: [],
    }

    if (!account)
      errors.account.push(valiErrorLang[lang].accountNotEmpty);
    if (!password) {
      errors.account.push(valiErrorLang[lang].passwordNotEmpty);
    } else if (password.length < 6) {
      errors.account.push(valiErrorLang[lang].passwordMinLeng);
    }
    return errors;
  }
  static userFilter(data, lang = 'vi') {
    let errors = {};
    // mail
    if (data.email) {
      if (!this.isEmail(data.email)) {
        errors.email = valiErrorLang[lang].formatEmail
      }
    }
    // phone
    if (data.phone) {
      if (!this.isNumber(data.phone)) {
        errors.phone = textLang[lang].phone + ' ' + valiErrorLang[lang].mustANumber
      } else {
        if (!this.isPhone(data.phone)) {
          errors.phone = valiErrorLang[lang].formatPhone
        }
      }
    }
    return errors;
  }

  static createUser(data, lang = 'vi') {
    let errors = {}


    // firstname 
    if (data.firstname == '') {
      errors.firstname = valiErrorLang[lang].FnameNotEmpty
    }

    // lastname 
    if (data.lastname == '') {
      errors.lastname = valiErrorLang[lang].LnameNotEmpty
    }

    // username
    if (data.username == '') {
      errors.username = valiErrorLang[lang].userNameNotEmpty
    }

    // password
    if (data.password == '') {
      errors.password = valiErrorLang[lang].passwordNotEmpty
    } else {
      if (data.password.length < 6) {
        errors.password = valiErrorLang[lang].passwordMinLeng
      }
    }

    // ConfirmPasswordNotEmpty
    if (data.password_confirmation == '') {
      errors.password_confirmation = valiErrorLang[lang].ConfirmPasswordNotEmpty
    } else if (data.password !== data.password_confirmation) {
      errors.password_confirmation = valiErrorLang[lang].confirmPassNotMatch
    }



    //email 
    if (data.email && data.email !== '') {
      if (!this.isEmail(data.email)) {
        errors.email = valiErrorLang[lang].formatEmail
      }
    } else {
      errors.email = valiErrorLang[lang].emailNotEmpty
    }

    // phone
    if (data.phone) {
      if (!this.isNumber(data.phone)) {
        errors.phone = textLang[lang].phone + ' ' + valiErrorLang[lang].mustANumber
      } else {
        if (!this.isPhone(data.phone)) {
          errors.phone = valiErrorLang[lang].formatPhone
        }
      }
    } else {
      errors.phone = valiErrorLang[lang].phoneNotEmpty
    }

    // address
    if (data.address == '') {
      errors.address = valiErrorLang[lang].addressNotEmpty
    }
    // role
    if (data.role == '') {
      errors.role = valiErrorLang[lang].roleNotEmpty
    }
    // gender
    if (data.gender == '') {
      errors.gender = valiErrorLang[lang].genderNotEmpty
    }
    // status
    if (data.status == '') {
      errors.status = valiErrorLang[lang].statusNotEmpty
    }

    return errors;
  }

  static isEmail(email) {
    return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }
  static isPhone(phone) {
    return (/^0[0-9]{8,9}$/.test(phone));
  }
  static isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }
}
export default form;
