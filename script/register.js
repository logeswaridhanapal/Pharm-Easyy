function sub(){
    let entermail=document.getElementById("mail").value 
    let entercmail=document.getElementById("cmail").value 
    let enterpword=document.getElementById("pword").value 
    let entercpword=document.getElementById("cpword").value 

    localStorage.setItem("email",JSON.stringify(entermail))
    localStorage.setItem("password",JSON.stringify(enterpword))

    window.location.href="login2.html"
}