function splitIntoChunk(inputArray, perChunk) {
  var result = inputArray.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return result;
}

window.onload = function () {
  var request = new XMLHttpRequest();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has("page")) {
    var page = urlParams.get("page");
  } else {
    var page = 1;
  }
  request.open(
    "GET",
    "https://clarityworkshop.n3rdl0rd.repl.co/getpage/" + page.toString(),
    false
  ); // `false` makes the request synchronous
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
      <div class="w3-container level w3-hover-opacity" style= "cursor: pointer;" onclick="loadLevelById(122);">
        <p><b>S.S.S.S (Single Screen Suffering Squared)</b></p>
        <p>By <i>@TdubMorris</i>, the co-creator of Clarity</p>
      </div>
    </div>




    <br></br>
      </div>
      <p>Other Levels</p>
    </div>`;

    //   <div class="w3-third w3-container w3-margin-bottom">
    //   <div class="w3-container level w3-hover-opacity" style= "cursor:
    //   pointer;" onclick="alert('haha u thought')">
    //     <p><b>Campaign Mode</b></p>
    //     <p>The official story campaign for Clarity</p>
    //   </div>
    // </div>

    splitLvlJson.forEach((levels) => {
      console.log(levels);
      const container = document.getElementById("container");
      var newRow = document.createElement("div");
      newRow.class = "w3-row-padding";

      levels.forEach((level) => {
        console.log(level);
        var newelem = `
    <div class="w3-third w3-container w3-margin-bottom w3-hover-opacity" style= "cursor: pointer;" onclick="loadLevelById({levelId});">
      <div class="w3-container level">
        <p><b>{level}</b></p>
        <p>By {author}</p>
      </div>
    </div>`
          .replace("{level}", level["name"])
          .replace("{author}", level["author"])
          .replace("{levelId}", level["id"]);
        newRow.innerHTML = newRow.innerHTML + newelem;
      });
      newRow.innerHTML = newRow.innerHTML + "</br>";
      container.appendChild(newRow);
    });
    // append pagination buttons (back, fwd, etc)
    container.innerHTML =
      container.innerHTML +
      `
    <center>
    <div id="pagination" class="w3-row-padding">
      <div class="w3-button w3-black" style= "cursor: pointer;" onclick="loadPage(` +
      (parseInt(page) - 1).toString() +
      `);">
        <p>Back</p>
      </div>
      <div class="w3-button w3-black" style= "cursor: pointer;" onclick="loadPage(` +
      (parseInt(page) + 1).toString() +
      `);">
        <p>Forward</p>
      </div>
    </div>
    </center>`;
  }
};

function loadPage(page) {
  window.location.href =
    "https://henrymartin5.github.io/Clarity/workshop.html?page=" +
    page.toString();
}

function loadLevelById(id) {
  window.location.href =
    "https://henrymartin5.github.io/Clarity/level.html?id=" + id.toString();
}
