export function validateEmail(email) {
    /* simple email regex*/
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }