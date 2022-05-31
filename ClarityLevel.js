window.onload = function(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if(urlParams.has('id')){
    const gameId = urlParams.get('id');
    const lvl = JSON.parse(httpGet("https://clarityworkshop.n3rdl0rd.repl.co/levelDataById/"+gameId));
    
    const Name = lvl["name"];
    const Author = lvl["author"];
    const Description = lvl["desc"];

    document.getElementById("container").innerHTML = "Level: "+Name;
    
  }
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

$(function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  if (!urlParams.has('id')){
    alert("Failed to get level data. Error code: hahaUthought")
  }
  $(".heart").on("click", function() {
    
    if(!$(this).hasClass("is-active")){
      if (signedin()){
        var user = signedin();
        httpGet("https://clarityworkshop.n3rdl0rd.repl.co/like/"+urlParams.get('id').toString()+"/"+user);
        $(this).toggleClass("is-active");
      } else {
        signin();
      }
    } else {
      if (signedin()){
        var user = signedin();
        httpGet("https://clarityworkshop.n3rdl0rd.repl.co/dislike/"+urlParams.get('id').toString()+"/"+user);
        $(this).toggleClass("is-active");
      } else {
        signin();
      }
    }
  });
});

function signout(){
  localStorage.setItem("user", null);

  
 window.location.href=window.location.href;
}

function signedin(){
  return localStorage.getItem("user");
}

function signin(){
  Swal.fire({
title: 'Login to Clarity',
html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
<input type="password" id="password" class="swal2-input" placeholder="Password"><br><a href="account.html">No account? Sign up instead!</a>`,
confirmButtonText: 'Login',
focusConfirm: true,
preConfirm: () => {
  const login = Swal.getPopup().querySelector('#login').value
  const password = Swal.getPopup().querySelector('#password').value
  if (!login || !password) {
    Swal.showValidationMessage(`Please enter login and password`)
  }
  return { login: login, password: password }
}
}).then((result) => {
  var res = httpGet("https://clarityworkshop.n3rdl0rd.repl.co/login/"+result.value.login+"/"+result.value.password);
  if(res == "ok"){
    localStorage.setItem('user', result.value.login);
    window.location.href=window.location.href;
  }
    
})
      }