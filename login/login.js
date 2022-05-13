// onload initialization
document.getElementById("username").value = "";
allowAccess(false)

// ENTER keypress
var input_un = document.getElementById("username");
input_un.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

// ENTER keypress
var input_pw = document.getElementById("password");
input_pw.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

function forgotCB() {
  alert("HAHAHA, ohh poor you");
}

function signinCB() {
  const uname = document.getElementById("username").value;
  const pw = document.getElementById("password").value
  let logged_in = false
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (uname == user.un) {
      if (pw == user.pw) {
        logged_in = true;
        break;
      }
    }
  }

  if (logged_in) {
    allowAccess(true)
    window.location = "ui.html";
  } else {
    alert("Denied access");
  }
}

function allowAccess(status) {
  if (status)
    sessionStorage.setItem('loginAccess', 'valid')
  else
    sessionStorage.removeItem('loginAccess')
}