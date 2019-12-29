const MIN_LOGIN_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 6;

let login = prompt('Login: ','');
if (!login) {
  alert('Canceled');
} else if (login.length < MIN_LOGIN_LENGTH) {
  alert('I don\'t know any emails having name length less than 5 symbols');
} else if (login === 'user@gmail.com' || login === 'admin@gmail.com'){
  let password = prompt('Password: ','');
  if (!password) {
    alert('Canceled');
  } else if (login === 'user@gmail.com' && password === 'UserPass' ||
            login === 'admin@gmail.com' && password === 'AdminPass') {
    let changeConfirm = confirm('Do you want to change your password?');
    if (changeConfirm) {
      let passControl = prompt('Password: ','');
      if (!passControl) {
        alert('Canceled');
      } else if (passControl === password) {
        let passNew = prompt('New password: ','');
        if (!passNew) {
          alert('Canceled');
        } else if (passNew.length < MIN_PASSWORD_LENGTH) {
          alert('It’s too short password. Sorry.');
        } else {
          let passNewControl = prompt('New password again:','');
          if (passNew === passNewControl) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    } else {
      alert('You have failed the change');
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don\'t know you');
}
