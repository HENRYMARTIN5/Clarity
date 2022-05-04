

function splitIntoChunk(inputArray, perChunk) {
var result = inputArray.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])
  return result
}


window.onload = function(){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://clarityworkshop.n3rdl0rd.repl.co/get', false);  // `false` makes the request synchronous
  request.send(null);
if (request.status === 200) {
    var currentLvls = request.responseText;
  var lvlJson = JSON.parse(currentLvls);
  console.log(lvlJson);
  var splitLvlJson = splitIntoChunk(lvlJson, 3);
  console.log(splitLvlJson);
  document.getElementById("container").innerHTML = "";
  const container = document.getElementById("container");
  container.innerHTML = `
    <div id="pinnedcontainer">
      <p>Featured</p>
      <div class="w3-row-padding">

        <div class="w3-third w3-container w3-margin-bottom">
      <div class="w3-container level w3-hover-opacity" style= "cursor: pointer;" onclick="loadLevelById(36);">
        <p><b>Official Clarity Tutorial</b></p>
        <p>By <i>N3rdL0rd</i>, the creator of Clarity</p>
      </div>
  
    </div>

        <div class="w3-third w3-container w3-margin-bottom">
      <div class="w3-container level w3-hover-opacity" style= "cursor: pointer;" onclick="loadLevelById(113);">
        <p><b>Spaceship Shutdown</b></p>
        <p>By <i>Liam</i>, our first-ever Creator-of-the-Week</p>
      </div>
    </div>

    <br></br>
      </div>
      <p>Other Levels</p>
    </div>`
  
  splitLvlJson.forEach(levels=>{
    console.log(levels);
    const container = document.getElementById("container");
    var newRow = document.createElement("div");
    newRow.class="w3-row-padding";
    
    levels.forEach(level=>{
      console.log(level);
      var newelem = `
    <div class="w3-third w3-container w3-margin-bottom w3-hover-opacity" style= "cursor: pointer;" onclick="loadLevelById({levelId});">
      <div class="w3-container level">
        <p><b>{level}</b></p>
        <p>By {author}</p>
      </div>
    </div>`.replace("{level}", level["name"]).replace("{author}", level["author"]).replace("{levelId}", level["id"])
      newRow.innerHTML = newRow.innerHTML + newelem;
    })
    newRow.innerHTML = newRow.innerHTML + "</br>";
    container.appendChild(newRow);
  })
}


}

function loadLevelById(id){
  window.location.href = "https://clarity.n3rdl0rd.repl.co/level.html?id=" + (id).toString();
}