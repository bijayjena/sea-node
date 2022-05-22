function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin"){
        alert("Login success");
        return true;
    }else{
        alert("Login failed");
        return false;
    }
}