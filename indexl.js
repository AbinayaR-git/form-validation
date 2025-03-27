document.getElementById("Form-Validate").addEventListener("submit",function(event){
    event.preventDefault();
    let Uname=document.getElementById("UserName").value.trim()
    let email=document.getElementById("email").value.trim()
    let password=document.getElementById("password").value.trim()
    let Confirmpassword=document.getElementById("Confirm password").value.trim()

    var isvalid= true;

    let UnamePattern=/^[A-Za-z]+ [A-Za-z]$/;
    let emailPattern=/^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
    if(Uname ===""){
        document.getElementById("uName-error").innerText="*Name is Required!"
        isvalid=false;
    }
    else if(!UnamePattern.test(Uname)){
        document.getElementById("uName-error").innerText="*Enter Your Full Name"
        isvalid=false;
    }
    else if(UnamePattern.test(Uname)){
        document.getElementById("uName-error").innerText=""
        isvalid=true;
    }
    if(email ===""){
        document.getElementById("email-error").innerText="*Email is Required!"
        isvalid=false;
    }
    else if(!emailPattern.test(email)){
         document.getElementById("email-error").innerText="*Enter a valid email"
         isvalid=false;
    }
    else if(emailPattern.test(email)){
         document.getElementById("email-error").innerText=""
         isvalid=true;
    }
    if(password ===""){
        document.getElementById("password-error").innerText="*password is Required!"
        isvalid=false;
    }
    else if(password.length<=3 || password.length>=10){
        document.getElementById("password-error").innerText="*Enter a password Char between 3 to 10"
        isvalid=false;
    }
    else if(password.length>3 || password.length<10){
        document.getElementById("password-error").innerText=""
        isvalid=true;
    }
    if(Confirmpassword ===""){
        document.getElementById("confirm password-error").innerText="*Confirm Your Password"
        isvalid=false;
    }
    else if(Confirmpassword!==password){
        document.getElementById("confirm password-error").innerText="*Password not match"
        isvalid=false;
    }
    else if(Confirmpassword!==password){
        document.getElementById("confirm password-error").innerText=""
        isvalid=true;
    }
    if(isvalid){
        alert(`hi ${Uname},welcome to our website`)
        console.log(Uname,email,password)
    }

})