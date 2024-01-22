const firstname = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const number = document.getElementById("number");


const submit = () =>{
    if(firstname.value.trim() && lastname.value.trim() && email.value.trim() && number.value.trim()){
        localStorage.setItem("form" , JSON.stringify({name: firstname.value , lastname: lastname.value , email: email.value , number: number.value}));
        localStorage.setItem("signTF","true");
        window.location.href = "todo.html"

 }

}
// let signTF = localStorage.getItem("SignTF");
// if( signTF == "false"){
//    window.location.href = "index.html"
// }

let signTF = localStorage.getItem("signTF");
if(signTF == "true"){
   window.location.href = "todo.html";
}
console.log(signTF)