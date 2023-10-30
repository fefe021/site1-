function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  localStorage.setItem("username", username)
  localStorage.setItem("password", password)
  alert("Senha Salva: "+localStorage.getItem("username") + " " + localStorage.getItem("password"))

}