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


