let userdatas = JSON.parse(localStorage.getItem('userdatas'))
console.log(userdatas)
let input1 = document.getElementById("input1");
let password1 = document.getElementById('password1')


function Login() {
    let logIn = userdatas.find(userdatas => userdatas.email == input1.value || userdatas.password == password1.value)
   
    if (input1.value == "" || password1.value == "") {
        alert("Please fill out both email and password fields or sign up if you haven't already.")
    } else if (logIn) {
        alert(`Login Sucessfull ${input1.value}`)
    } else {
        alert('Account not registered')
    }
    let details = {
        email: input1.value,
        password: password1.value
    }
    console.log(details);

    

    // console.log(logIn);



}
