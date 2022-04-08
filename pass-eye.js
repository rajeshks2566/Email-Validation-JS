let email=document.getElementById("email")
 let password=document.getElementById("Password").value


function validation(){
    let sname = new RegExp("^(?=.[a-z]) (?=.[@gmail.com])");
    let pass = new RegExp("^(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.{10,})");
    
    if((sname.value=="" || pass.value=="")){
        alert("enter value before sumbitting")
     }

     else if(sname.test!=(email.value)){
        alert(`Enter correct email-id`)
    }
}

function visible(){
    let password=document.getElementById("Password")
    if(password.type==="password"){
        password.type="text"
    }
    else{
        password.type="password"
}
}