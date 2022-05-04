  function signin(){
    var username = prompt("Username:");
    var password = prompt("Password:");

    var res = httpGet("https://clarityworkshop.n3rdl0rd.repl.co/login/"+username+"/"+password);
    if(res == "ok"){
      localStorage.setItem('user', username);
    }
      
  }

  function signout(){
    localStorage.setItem("user", null)
  }

  function signedin(){
    return localStorage.getItem("user")
  }
  