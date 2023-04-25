function login(){
    let enteremail1=document.getElementById("mail1")
    let enterpword1=document.getElementById("pword1")

    enteremaills=JSON.parse(localStorage.getItem("email"))
    enterpwordls=JSON.parse(localStorage.getItem("password"))

    if(enteremaills==enteremail1)&&(enterpwordls==enterpword1)
    {
        alert("Login successful!")
    }
    else
      {
        alert("incorrect Password or Email id")
      }
}