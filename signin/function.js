let fullname = document.getElementById('fullname')
let email = document.getElementById('email')
let password = document.getElementById('password')
let Confirmpass = document.getElementById('Confirmpass')
let checkbox = document.getElementById('checkbox')
let hidesndshow = document.getElementById('hideansshow')
let hideandshowconrfirm = document.getElementById('hideandshowconrfirm')
let tables = document.getElementById('tables')
let datas = [] && JSON.parse(localStorage.getItem("userdatas"))

function register() {

  if (fullname.value == "" || email.value == "" || password.value == "" || Confirmpass.value == "") {
    alert("All field are madatory")
  } else if (checkbox.checked !== true) {
    alert('Please agree to the terms and condition')
  }
  else if (password.value.length < 8) {
    alert('you password is too short')
  }
  else if (password.value !== Confirmpass.value) {
    alert("Password does not match")
  } else {
    let usernames = {
      fullname: fullname.value,
      email: email.value,
      password: password.value,
      term: checkbox.checked
    }
    const existuser = datas.find(usernames => usernames.email == email.value)
    console.log(existuser);
    if (existuser) {
      alert('email already exist')
    }else{
      datas.push(usernames)
      localStorage.setItem("userdatas",JSON.stringify(datas))
      alert(`Sign in successfully Welcome ${fullname.value} please login`)
  
      
      console.log(datas);
    }


   
  }
  

  tableDisplay()

  fullname.value = ""
  email.value = ""
  password.value = ""
  Confirmpass.value = ""
  checkbox.checked = false
}



function show() {
  password.type == 'password' ? password.type = 'text' : password.type = "password"
  hidesndshow.innerHTML == "show" ? hidesndshow.innerHTML = 'hide' : hidesndshow.innerHTML = 'show'
}
function shows() {
  Confirmpass.type == 'password' ? Confirmpass.type = 'text' : Confirmpass.type = "password"
  hideandshowconrfirm.innerHTML == `<i class="fa-solid fa-eye"></i>` ? hideandshowconrfirm.innerHTML = `<i class="fa-solid fa-eye-slash"></i>` : hideandshowconrfirm.innerHTML = `<i class="fa-solid fa-eye"></i>`
}

let tableDisplay = () => {
  // tables = ""

  datas.forEach(data => {
    tables.innerHTML += `
      
      <tr>
           <td>${data.fullname}</td>
           <td>${data.email}  </td>
           <td>${data.password}</td>
           <td>${data.term}</td>
       
           </tr>
      
      `
  });
}