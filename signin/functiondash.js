let authen = JSON.parse(localStorage.getItem('userdatas'))

// if (authen) {
//     window.location.href = "index.html"
// }else if (!authen){
//     alert(`Welcome ${fullname.value}`)

// }
if (!authen) {
    window.location.href = "index.html"
   
}else {
    alert(`Welcome ${fullname.value}`)
}