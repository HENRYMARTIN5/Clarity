const container = document.querySelector('#container');
const sizeEl = document.querySelector('.size')
let size = sizeEl.value
const resetBtn = document.querySelector('.btn')
const tile = document.querySelector("#chooseStuff")
const exportbtn = document.querySelector("#exportlvl")

let draw = false;

       //      keys: [
       //        // Void
       //          {id: 0, colour: '#333', solid: 0},
       //        // Air
       //          {id: 1, colour: '#888', solid: 0, img:airimg},
       //        // Platform
       //          {id: 2,colour: '#555',solid: 1,bounce: 0.35, img: wallimg},
       //        // Swim
       //          {id: 3,colour: 'rgba(121, 220, 242, 0.4)',friction: {x: 0.9,y: 0.9},gravity: {x: 0,y: 0.1},jump: 1,fore: 1, img:waterimg},
       //        // Elevator
       //          {id: 4,colour: '#b37859', gravity: {x: 0,y: -0.1}, jump: 1, img:elevatorimg},
       //        // Bounce
       //          {id: 5,colour: '#E373FA',solid: 1,bounce: 1.1, img:bouncerimg},
       //        // AntiBounce
       //          {id: 6,colour: '#666',solid: 1,bounce: 0, img:antibounceimg},
       //        // Color Changer Random
       //          {id: 7,colour: '#73C6FA',solid: 0,script: 'change_colour'},
       //        // Goal
       //          {id: 8,colour: '#FADF73',solid: 0,script: 'next_level', img:goalimg},
       //        // Die
       //          {id: 9,colour: '#C93232',solid: 0,script: 'death', img:deathimg},
       //        // Unlockable Wall
       //          {id: 10,colour: '#555',solid: 1, img:wallimg},
       //        // Unlock Tile
       //          {id: 11,colour: '#0FF',solid: 0,script: 'unlock', img:unlockimg},
       //        // Saltwater
       //          {id: 12, colour: 'rgba(121, 220, 242, 0.4)', friction: {x: 0.9,y: 0.95}, gravity: {x: 0,y: -0.07},jump: 1,fore: 1, img:saltwaterimg},
       //        // Speed Zone
       //          {id: 13, colour: 'rgb(255, 255, 0)', solid:0, fore: 1, boost:1, img:spedimg},
							// //Tar
							//   {id: 14, colour: '#453a4f',  friction: {x:0.3, y: 0.1}, gravity: {x: 0,y: 2}, jump: 1, fore: 1, img:tarimg},
							// //Quick Sand
							// 	{id: 15, colour: '#edb06e',  friction: {x:0.6, y: 0.5}, gravity: {x: 0,y: 0.3}, jump: 1, fore: 1, img:sandimg},
       //   ],

      var wallimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADNJREFUOE9j9PT0/M9AAWAEGcDDw0OWEV++fGEYNWA0DIZLOvD19f3PwcExwHmBLOuhmgCrKEex0FtLIQAAAABJRU5ErkJgggAA';
     
			var elevatorimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAG5JREFUOE9jbPJX/W+jwsdADjhy5xMD4+A2AOREEMDlRbxegGmGhQ02Q3AagK4ZlyFYDYBpfvD6C4OCKA9YLzIb2SVYDVhy/BlYU4ylFANyGCCLw1xEMBopCkSQLcPAAGwBh5xnCAYioQw2OAwAAKSneWF2TERPAAAAAElFTkSuQmCC'
      
			var bouncerimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAL1JREFUWEdjnOSx6D/DAALGQeeAQO0ImobH+qsrUMzHCIEBcwCtLUYPVlhIwENg1AFDJgTQUzF63BLrEbLTwIA5gJDFpIYEySEwYA4g1WJiQ4LoEBh1wGgIDHgITDvRC07YkrzSJLUTnn9+ClafZVGMVR/RuWDAHQBzPrEOIeRzmHlEh8CgcQC6Q3AlCFxxTrUWESwqBswBJGUFPIpJTgPUspjsRDj8HQDzIbFtOnJDZPD2jMj1EaX6Brx3DACes9+BlKvVwAAAAABJRU5ErkJgggAA'
      
			var unlockimg = new Image();
      unlockimg.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAHNJREFUOE9jVIlo/89AAWAEGaDmkkiWEbf2zGcYNQBLGGwNkwAHqPeqFwQDFiMQQZo3bYPo8/PCrR9mOFYDYJLIhsEMBBkOMhinAek8EnCbQYpnfkF4AyQH4sNokKFY0wFIAQgga8blmdGEhBSIBFMMHgUAXTVqMR7uNBMAAAAASUVORK5CYIIA'
      
			var waterimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAANBJREFUWEftVrEWQDAM1MnGD9n8mtlg95FsJqYYSuQO1fJ07TW9XC9pXNU2cxZw5WVxGN19noAlbnAFYALyVtMwHp5BcdbFsr8qgAZGcTQBOWC51lIIvXijQDIE2Ayu4tOpAjYT1owa/rQC0QmgphWcVj2nFUiGAOsdH39ZgZ9AMAXYMkOJ+HFVDzxGoO673Znw7l/PV0gSdNEJhB5KLW+8pw+gpkRx6kSkSYYGRnE0AfTzYauH9sDdQytNwHI1ux+fgDQi9u2sTFEzrp0wFoEF5tyeUaMzMqsAAAAASUVORK5CYIIA';
      
			var goalimg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAK9JREFUWEdjbI6R/c8wgIBx0DmgpoydpuHR0vUTxXyMEBgwB9DaYvRghYUEPASGnAPUL78Be8p6AQeYntfLQ1LaoTgE6O4AmIXo3qRbCNDdAf9+vwV7VvMG/oKSZiEw4A7AlaTRo4JmITBoHYDusKTiLwNTDsAcMuqA0RAYDYHREBiwEIBZjF4yEtsyorhFNOAOIKkBiEUxxSFAdQfADKR183zw9owoDVJy9Q947xgAE4XdgWlb6HsAAAAASUVORK5CYIIA';
			
			var deathimg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAb9JREFUWEfNlz1OxDAQhWNptQ0H2JZqRQMNRwAajsDeggZuQMctOAI0cARooKOi3SugSF4Rz3OULxpZkVCcFOs4drxv3rz5SYgXTWz+rk332zR7Gy9t1PBmN7fbdPP4nUabt9c/3XT1oXOOhwdoP44NywEgZLL8zCwF4my5GNP6brjfZQRM9AxUByDfCsgm+TRfe/MpfJ/XP00T1AoZ1NzO6RlYDACzvD0fQs/q9iwiQ9zHKLP1MQNLA7B6QTyXtCHL6dIn08ipbTCtFBmYD4CHnBmMlnnq95hyo6AagAerBQKgOKaKnRqQM6O3v5BXQqwO4H2dqqHiGD5qrDa09+tuJYtSPtZ70oLHpBiENkJcDAD68PV3+OQqMaAMqcyY58wXjA5H5D0D1QA8b5MGqNaj9KA9IbLhnDVixIjTCemUEKsDUE/oJSISMLVYSUtOfhl3REy1swNQT/iFf1YVQ6+o3k+7c55QFOgc9Iy9BuiC2QEoEQnSHeJfgEo1ghnUc6WbCasBmBoFXn+gjke+Zj8gA1FzpkfBvwNgImLfX+ps6PtSPhl9GVUHcGMdkXxX6gFLvuX7/MoWQ5YfQqwM4ADxGE162R2WywAAAABJRU5ErkJgggAA'
      
			var saltwaterimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABOFJREFUWEeNV01PHFcQ7F4MKzNrJUQsx7XhT/kOl/BPcssfMDdI5Bu/COQcTcQe2EUClH1RV1f36wFhvELs7Mz76NddVV2jJxdnTaQJPk3tH36pirSmYndEeQ/DFH8xxZ75td2PdURWN/9iyV8OF7KlKq2J6EZFtmytiUjbYLweX3yJbXwQ1/JALABfFEFhLxXNTRmzzWo+GsE2kTUD2Dv6KLqxhVU2TWVic224rWSXx+cWQElA7qaijUFgfdvAU2MbZJwZKCeW7NiwCIRbvPjSk4svsZ6fgGnIm5ziuUAemBXPDUrlBfCpGaxHEqV4NYDj8zNkYGe2iwWe1vd+JluJh2pRW1GZDrtY+GF175sSEnbhAVkJfHNfgdjAQIbK06FoyEBTBGBjn1ZrBx+B1wHmR5x+GEQ2Ig/rewcRNo7NIhX8DgQxq3mOkg4G0Gv129FCWpskzJGIhj0R1PLqH0wfDvZxP0CLQ6nhJhJnWSSTSlacRJ4bxGUgtB+J2sMFq9wXiFVt8dtrD2A238cxrTwJ4lEQzcvD1HtcMTJ2Fy9B5fHqu/P3tc+AjXkKrOe089M7Cl+AMYHaJYfpET05P3OyEVGrm5ufCKALVKaSBAqdSqECUDkeO401S0/OnYY+JAjVZciP+0wpVWQ6DGLC9nS35swuWnE6n+uRvdsdRCcij+t1lgWPnYbBcA/Py1YUsFDJQ2yyDdaoPN05G7pCUBGzzI7UnWEXmTCWVWYhA13cmQWit9O4ZyaaQAjM3qeFHxK1D/G270mXbG1yS/YAvNlnrBeYFCddHFQc8QwLISh+OwL49fCjs52p9qelnOgbKsvrbyP2xD7MAPcsTYVwcXQjnVRHAJmgFZXV9x+DNk4xO9gnW6oOIAOOgfwUqsZJxs2nJkblLdZkAPM5LkPWHdcmxRSiZEJy2+TYkRRNx1coAWTnc+BGm8wGRdp7W+HgmM+DlgyUPlqz4CV02Q1whh8IbwIY9zzCL0SscBtR0I4N3LP5kQGfwFOjO77Hb+N5NDIIClUjeQEKdqFxkobw+oY1g9vopgo9yBK4Unm+SAnw3O6Ct8GNFH2mNJsMw6/Pg5ZVIZvK9vBeNhOR/6AfInp6+Xc/k4rAPYnIMpvOnDbL880+lsLT/WRgo4+Ap6hupdA3vCICGKPTO1y03dnBnH7wGRgtZ2Mv1elfdCHKE2UM1kA/jNqf//yj4johbrztiC8ARfZ7bfEzXGUxMdnzYVqIr+IfI5DXA5jv024xjQmmonLVWo36SRVTChnpHa4s2j67YT9htOWw1/FkZzYgO7BsrG23bd2qo0kRvM6ahHC3boEN48/xxVnrnc/1nsF219tUprZws3Z67y4oRIaEgBHVhq5n4Hs0lNceQZMb9j7cktY3o3Qy1WZTwbL7HS2ynUJwNiqwkPwsr9h0DEMEaggh6dZblTHupSEpzClvYWtatT10v6KsIakm2boly6trhDJQ+6t2W2b8kNSc6AXdsrtqPFe+fG7d7w3LFl0v9H/sEaiSFD7Yf5QgG4QbzExZUqwz9a03nW5aO11j/c5Wui4D4e+XX+H6IbnZhEI/O53Cb3hwHBjeoL79sMlMZ4O/aRlrikGJN6doWHp6+ReO97gydBO4nDB6Ey5alG/NjKq38qitNTOnLZpOmj72nDxAk/8BxWkkNI6CRLAAAAAASUVORK5CYII=";
			
			var antibounceimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALFJREFUWEftl0EOhTAIRPUaPWFP3mt8E5O64Ie8QWPFWLcN8DoMqGut9bc8+KxpAEopQ3Vore31DgUmQDoFeo+6MaKAFI8eoATkWIoPA6hK2MJeXH6ATh69kW2N5x1UIA0AgXhmpKmRFUgDoILQzW2e8LvAM6U6phPgtAIkvTr/7wP47iZUb257r8bhJlQTDQNQN5y3MW18WIHhAPTJdfUcFbhagOInwJ8CJNld54//HW99A/sBTxqtNwAAAABJRU5ErkJgggAA';
			
			var spedimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALNJREFUWEftl0sKwCAMBeNle4PSHqHgEXsYS5FsBHlN/CRCXXRTIePkGTAcGyUiomt/v/PWGXOtYA6Q7mzAaoUfYFkDnGKUHXS71BlwD4BOzuaGGRgGgNR/Law24BZAevLuBoYD1NRrC4sNuAWYNglR+msgqEXqQcQFW1uzLkDrycW3oOyxOwAUtlpI1RkoDUwD6FVYnQE3AFrlZRbEGWADZgBo9kv/iw1IC6D99o9T69fxAyaci01twl6CAAAAAElFTkSuQmCC'

			var airimg ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADJJREFUOE9jrK+v/8/JyclADvj+/TsDY0dHx39yNMP0jBrAMBqIDKNhAMoPlOcFSrMzAD6dL0uPtm9RAAAAAElFTkSuQmCC'

			var tarimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAQBJREFUOE+NU10LgkAQ9BQCKRQii6AIol4K+gvS//8LvfUQUgQGIQRqzMKe231o+7LHns7Ozs6p1ezQpuMsQJTvO2UZfMc18xvlAlgvd8H1drHA4jAL4klI9bpuKDsBrD89BQASAA6juBthmiyoQxSFupNrPM3gn5kBini+CsqsjdrP87ZqOvFM0Rj8UwXEUgZqNAKKUjgJ4qPOQBaAqQd/KBvIMwGYawMDs7OPlWbAncAAmnCWgkkz8b06bvJ2aE6XU/UWWESTtmTALJIktRyqRxhS3qULGem0PdMaYZC+R8VG4jfAY/+I6OsizYPREGw+vcZHUZLT4H/52nDuE/kLky2YbjxyP0sAAAAASUVORK5CYIIA'

			var sandimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAQ5JREFUOE9jPD4p4r+anBgDCNx69ApMIwOYHEwMXQ0jNgP4+fgZPn76iGHY0zdfGYLNRMHi7/7wgGmsBmDoxCEAMhBsAIjhaKQI94KFEhfYBiGWL3CbsHkP7gJi/AwyFARO3PsGpmFhw7imzve/tAg33Az0QINJ7D93H+xKZAASA3sBJIgccMiG4HI6zCAMA9DDA6YQ2QJkNtgA9GgDuQDdZlyugrsAZhPIBaAwgdHIAYacmGDyjG835P0n5E9sKRUeC7BARHc2sgtgrnj54SdGCoV7gVDIYwsXcEL6vyUJHI2gBIIvU8ESEiwPwLyNEoi4bEFOPCCvgQAs8cGj8dq9Z+CUBkr/yLkNxMYXyAB6KrirkPXw4QAAAABJRU5ErkJgggAA'



function load(){
  var loadstr = "<b>Choose a level to load:</b><br/><i>Your levels:</i><br/>";
  var lvls = JSON.parse(JSON.stringify(localStorage));
  
  for (const key in lvls){
    if(key != "user"){
      loadstr = loadstr + `
      <button class="btn w3-btn	w3-ripple w3-blue w3-round-large"onclick="importFromCall('{code}');alertify.closeAll();" title="Loads your saved level" alt="Loads your saved level">{name}</button>
    `.replace("{code}", localStorage.getItem(key)).replace("{name}", key)
    }
  }
  loadstr = loadstr + `<br><br><button class="btn w3-btn	w3-ripple w3-green w3-round-large"onclick="importFromBase64();" title="Warning: WILL DELETE LEVEL" alt="Warning: WILL DELETE LEVEL">Import Level from Clipboard
  </button><br><br><button class="btn w3-btn	w3-ripple w3-red w3-round-large"onclick="deletesave();" title="Warning: WILL DELETE LEVEL" alt="Warning: WILL DELETE LEVEL">Delete Save
  </button><br><br>`

  var templates = {
    "Original Default Level": "NoKABBldbATAGjI5SXrZ12PYAxIFhEmFnHmkXVW2X00N2MvNtMc0C6C4M/EeEgCMIsWFETxkmdKztWnBcqWrF6lRrUkefATCFSjs43NNGUmq9pta71+7dq79/QyY9nPFp78f+HQL9Al1dody9I8xNLYLiA+KCE5LxQsMgI6KjvSViUxIL8oqTnXnSoTJzsszySwrri+qc08srqrPNapsaehr6lFvS2jqrO7v7e8aniQbDh0YX5aYcUADYkdbBN7aXJveVZ13n20a792xRF/GWbmbLywUuT5+vz5KeR3YnvgfuH48+gLOP38H1OtxBpT0rTBL3BbxWWCuuGBEOCh30AKu3lRCIYsMBMTR+wxAixcPEuMh+KwuAALLSkV9iSVSW4CdiolSWTSwAzsDieb02QYORSxnieih+R8UUK+iLwmLCVz5RckDLKWqSX8YeLkdrNNKma9qZLUrqhsrORKzQ1jQLmebxoqKtb9U67eq+Sbuc7iq6Mu6VbbDZwHbKw8LLXNgzbclGFBGtf67YHHh6gYnwxrfdmAzGjnHxX6vepkz5U8t07BiyGE1X3rnHab81Ya4Y5ThGd2W13+z2B72h/S843IR26/CG/HMwafX22+jC5ip6rK7P6yXm5Hh4P93vzZOU5vd5vz+0Kw2Rz34WmV2Td2vF1vX6edymb7279WH+zPya06AXOIGVpqlZfrgP4IseEG3i8z4Xq+4HXgeXYABzrve0JWgBh5DpsiHrsqkFjqR+Efkef6inh5FdkhqHYAAnEgLFgGxlxEMIXE8SIvFviIjGjq2Oo4bGoEMcRaG3kQdHSRRvbgdhDwZgJanznJL6adpWBKb+YlFhJRkKeRQnyTpinmQeBzUUqGxWSZDkWUOZmOW5Q4oQh2g1lABmrk5AXuYFLnBaFh78u+9iwZJ6nGYKQUJc58EiVCKm1jUYVJVs9nZQlhEHjFhUZVFtlusV9FxZVCVFbFHSltFtFVTVkVEolmXyTZfmPuVTW9a+RFqaWy5df+ErNcZX5AbV87KSp5LTX1IV1X18Wzf8A3jYNyXxQArEge0tjVQ0pA1C1nZFwaTRNEKnZtd3rvCV21cdISlUGK0fctWbVZmL3NG9qn3edXnfZpkVrXqwNQ5FADMSBw2ACMI1luBI/D6MpfUt2fUDDZo4jGMo1g+P439ATY9DOMpiThPtb2NME5j0YjTRlNs/ODPI3TqMY6TN0A+l7NUxKnO82LjOixL4t81RLN2ULCvxZLyvS6rUvq2T7YC/NuNmAd+sgyr6tGybtOy2lnbc1bbU20TblpnLXBAA==="
  }

  loadstr = loadstr + "<br/><i>Templates:</i><br/>"

  for(const key in templates){
    loadstr = loadstr + `
    <button class="btn w3-btn	w3-ripple w3-blue w3-round-large"onclick="importFromCall('{code}');alertify.closeAll();" title="Loads your saved level" alt="Loads your saved level">{name}</button>
  `.replace("{code}", templates[key]).replace("{name}", key)
  }

  alertify.alert('Load Level', loadstr, function(){  });

}

function deletesave(){
  var lvls = JSON.parse(JSON.stringify(localStorage));
  var loadstr = "<b>Choose a level to delete:</b><br/><i>Your levels:</i><br/>";
  for (const key in lvls){
    if(key != "user"){
      loadstr = loadstr + `
      <button class="btn w3-btn	w3-ripple w3-red w3-round-large"onclick="alertify.closeAll(); deleteLvl('{name}')" title="Deletes your saved level" alt="Deletes your saved level">{name}</button>
    `.replace("{name}", key).replace("{name}", key)
    }
  }
  alertify.alert('Delete Level', loadstr, function(){  });
}

function deleteLvl(name){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem(name);
    }
  })
}

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

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function save(){
  var code = exportReturn();
  if (storageAvailable('localStorage')) {
  alertify.prompt( 'Save Level', 'Please enter the name you would like to save your level under<br><br>Or, <button id="exportlvl" class="btn w3-btn	w3-ripple w3-green w3-round-large"onclick="exportLvl()" title="Copy the level code" alt="Copy level code">Export Level</button><br><br>', 'Unnamed Level'
               , function(evt, value) {
                 if(localStorage.getItem(value) === null)                 {
                   if(value != "user"){
                    localStorage.setItem(value, code);

                   } else {
                     swal.fire("Error!", "Levels cannot use the name 'user' due to an bug.", "error");
                   }
                   
                 } else {
                   alertify.confirm('Save Level', 'Are you sure you would like to override your already-existing save with this name?', function(){ alertify.success('Saved level!');if(value != "user"){localStorage.setItem(value, code);}else{swal.fire("Error!", "Levels cannot use the name 'user' due to an bug.", "error");} }
                , function(){ alertify.error('Cancelled saving!');return;});

                 }
               }
               , function() { alertify.error('Cancelled saving!');return;});

  }
  else {
  alert("Error! Cannot save level! Error code: InternetExplorerGoBrr");
  }
}

function idToColor(id){

  if(id == 2){
    return "rgb(85, 85, 85)"
  } else if(id == 1){
    return "rgb(136, 136, 136)"
  } else if(id == 0){
    return "rgb(51, 51, 51)"
  } else if(id == 3){
    return "rgba(121, 220, 242, 0.4)"
  } else if(id == 4){
    return "rgb(179, 120, 89)"
  } else if(id == 5){
    return "rgb(227, 115, 250)"
  } else if(id == 6){
    return "rgb(102, 102, 102)"
  } else if(id == 9){
    return "rgb(201, 50, 50)"
  } else if(id == 12){
    return "rgb(115, 198, 250)"
  } else if(id == 11){
    return "rgb(0, 255, 255)"
  } else if(id == 10){
    return "rgb(85, 85, 102)"
  } else if(id == 8){
    return "rgb(250, 223, 115)"
  } else if(id == 14){
    return "rgb(69, 58, 79)"
  } else if(id == 15){
    return "rgb(237, 176, 110)"
  } else if(id == 13){
    return "rgb(255, 255, 0)"
  } else if(id==16) {
    return "rgb(15, 29, 51)"
  } else if(id==17) {
    return "rgb(17, 34, 51)"
  } else if(id==18) {
    return "rgb(85, 85, 136)"
  } else if(id==20) {
    return "rgb(85, 85, 17)"
  } else if (id==23) {
    return "rgb(53, 84, 50)"
  }
}

function exportLvl(){
  alertify.closeAll();
  var c = container.children;
const arr = Array.prototype.slice.call(c)
var arr2 = [];
  
arr.forEach(v => {

  if(v.style.backgroundColor){
    //Conversion into tile ids
    if(v.style.backgroundColor == "rgb(85, 85, 85)"){
      arr2.push(2);
    } else if(v.style.backgroundColor == "rgb(136, 136, 136)") {
      arr2.push(1)
    } else if(v.style.backgroundColor == "rgb(51, 51, 51)"){
      arr2.push(0);
    } else if(v.style.backgroundColor == "rgba(121, 220, 242, 0.4)"){
      arr2.push(3);
    } else if(v.style.backgroundColor == "rgb(179, 120, 89)"){
      arr2.push(4);
    } else if(v.style.backgroundColor == "rgb(227, 115, 250)"){
      arr2.push(5);
    } else if (v.style.backgroundColor == "rgb(102, 102, 102)"){
      arr2.push(6)
    } else if (v.style.backgroundColor == "rgb(201, 50, 50)"){
      arr2.push(9)
    } else if (v.style.backgroundColor == "rgb(115, 198, 250)"){
      arr2.push(12);
    } else if (v.style.backgroundColor == "rgb(0, 255, 255)"){
      arr2.push(11);
    } else if (v.style.backgroundColor == "rgb(85, 85, 102)") {
      arr2.push(10);
    } else if (v.style.backgroundColor == "rgb(250, 223, 115)"){
      arr2.push(8);
    } else if (v.style.backgroundColor == "rgb(69, 58, 79)"){
      arr2.push(14);	
		} else if (v.style.backgroundColor == "rgb(237, 176, 110)"){
			arr2.push(15);
    } else if (v.style.backgroundColor == "rgb(255, 255, 0)"){
			arr2.push(13);
		} else if (v.style.backgroundColor == "rgb(15, 29, 51)") {
      arr2.push(16);
    } else if (v.style.backgroundColor == "rgb(17, 34, 51)") {
      arr2.push(17);
    }else if (v.style.backgroundColor == "rgb(85, 85, 136)") {
      arr2.push(18);
    }else if (v.style.backgroundColor == "rgb(85, 85, 17)"){
      arr2.push(20);
    } else if (v.style.backgroundColor == "rgb(53, 84, 50)"){
      arr2.push(23);
    }
 
	} else {
    arr2.push(0);
  }
  
});

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
// Split stuff
var arr3 = splitIntoChunk(arr2, size || 30)
  var string = JSON.stringify(arr3);
 console.log(string);
 
   var compressed = LZString.compressToBase64(string);

  navigator.clipboard.writeText(compressed).then(function() {
  alertify.success('Copied to clipboard!');

}, function() {
  alertify.error("Error! Could not copy code to clipboard!");
});
}

function exportReturn(){
    var c = container.children;
const arr = Array.prototype.slice.call(c)
var arr2 = [];
  
arr.forEach(v => {

  if(v.style.backgroundColor){
    //Conversion into tile ids
    if(v.style.backgroundColor == "rgb(85, 85, 85)"){
      arr2.push(2);
    } else if(v.style.backgroundColor == "rgb(136, 136, 136)") {
      arr2.push(1)
    } else if(v.style.backgroundColor == "rgb(51, 51, 51)"){
      arr2.push(0);
    } else if(v.style.backgroundColor == "rgba(121, 220, 242, 0.4)"){
      arr2.push(3)
    } else if(v.style.backgroundColor == "rgb(179, 120, 89)"){
      arr2.push(4);
    } else if(v.style.backgroundColor == "rgb(227, 115, 250)"){
      arr2.push(5);
    } else if (v.style.backgroundColor == "rgb(102, 102, 102)"){
      arr2.push(6)
    } else if (v.style.backgroundColor == "rgb(201, 50, 50)"){
      arr2.push(9)
    } else if (v.style.backgroundColor == "rgb(115, 198, 250)"){
      arr2.push(12);
    } else if (v.style.backgroundColor == "rgb(0, 255, 255)"){
      arr2.push(11);
    } else if (v.style.backgroundColor == "rgb(85, 85, 102)") {
      arr2.push(10);
    } else if (v.style.backgroundColor == "rgb(250, 223, 115)"){
      arr2.push(8);
    } else if (v.style.backgroundColor == "rgb(69, 58, 79)"){
      arr2.push(14);	
		} else if (v.style.backgroundColor == "rgb(237, 176, 110)"){
			arr2.push(15);
    } else if (v.style.backgroundColor == "rgb(255, 255, 0)"){
			arr2.push(13);
		} else if (v.style.backgroundColor == "rgb(15, 29, 51)") {
      arr2.push(16);
    } else if (v.style.backgroundColor == "rgb(17, 34, 51)") {
      arr2.push(17);
    }else if (v.style.backgroundColor == "rgb(85, 85, 136)") {
      arr2.push(18);
    }else if (v.style.backgroundColor == "rgb(85, 85, 17)"){
      arr2.push(20);
    }else if (v.style.backgroundColor == "rgb(53, 84, 50)"){
      arr2.push(23);
    }
 
	} else {
    arr2.push(0);
  }
  
});
// Split stuff
var arr3 = splitIntoChunk(arr2, size || 30)
  var string = JSON.stringify(arr3);
 console.log(string);
 
   var compressed = LZString.compressToBase64(string);

return compressed;
}

function sendJSON(data) {


    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://clarityworkshop.n3rdl0rd.repl.co/add");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function publish(){
  var code = exportReturn();
  window.location.href=`upload.html?lvl=${encodeURIComponent(code)}`;
  return;
}

function fillAll(color){
  const arr = Array.prototype.slice.call(container.children)

  arr.forEach(v => {
    v.style.backgroundColor = color;
    var arr2 = [];
    var color2 = v.style.backgroundColor;
      if(color2){
    //Conversion into tile ids
    if(color2 == "rgb(85, 85, 85)"){
      arr2.push(2);
    } else if(color2 == "rgb(136, 136, 136)") {
      arr2.push(1)
    } else if(color2 == "rgb(51, 51, 51)"){
      arr2.push(0);
    } else if(color2 == "rgba(121, 220, 242, 0.4)"){
      arr2.push(3)
    } else if(color2 == "rgb(179, 120, 89)"){
      arr2.push(4);
    } else if(color2 == "rgb(227, 115, 250)"){
      arr2.push(5);
    } else if (color2 == "rgb(102, 102, 102)"){
      arr2.push(6)
    } else if (color2 == "rgb(201, 50, 50)"){
      arr2.push(9)
    } else if (color2 == "rgb(115, 198, 250)"){
      arr2.push(12);
    } else if (color2 == "rgb(0, 255, 255)"){
      arr2.push(11);
    } else if (color2 == "rgb(85, 85, 102)") {
      arr2.push(10);
    } else if (color2 == "rgb(250, 223, 115)"){
      arr2.push(8);
    } else if (color2 == "rgb(69, 58, 79)"){
      arr2.push(14);	
		} else if (color2 == "rgb(237, 176, 110)"){
			arr2.push(15);
    } else if (color2 == "rgb(255, 255, 0)"){
			arr2.push(13);
		} else if (color2 == "rgb(15, 29, 51)") {
      arr2.push(16);
    } else if (v.style.backgroundColor == "rgb(17, 34, 51)") {
      arr2.push(17);
    } else if (v.style.backgroundColor == "rgb(85, 85, 136)"){
      arr2.push(18);
    }else if (v.style.backgroundColor == "rgb(85, 85, 17)"){
      arr2.push(20);
    }else if (v.style.backgroundColor == "rgb(53, 84, 50)"){
      arr2.push(23);
    }
 
	} else {
    arr2.push(0);
  }

  v.setAttribute("id", arr2[0].toString());
  });
}

function settings(){
  // dropdown to select tile size
  swal.fire({
    title: 'Settings',
    html: `
    <span>Tile Size:</span><br>
    <select id="tileSize" onchange="doPixelSizeUpdate()">
      
      <option value="pixel-med">32px</option>
      <option value="pixel-small">16px</option>
      <option value="pixel-large">64px</option>
    </select>
    `,
  })
}

function doPixelSizeUpdate(){
  var x = document.getElementById("tileSize").value;
  Array.prototype.forEach.call(document.getElementsByClassName("pixel"), v=>{
    v.className = "pixel";
    v.classList.add(x);
  });
}

function importFromBase64(){
  navigator.clipboard.readText()
  .then(text => {
    
    console.log('Pasted content: ', text);
   var decompressed = LZString.decompressFromBase64(text);
   var level = JSON.parse(decompressed);
   var dimensions = level[0].length;
    container.innerHTML = "";
   populate(dimensions);
    sizeEl.value = dimensions;
    size = dimensions;
    var merged = [];

    level.forEach(v=>{
      v.forEach(z=>{
        merged.push(z);
      })
    })
    console.log(merged);

    var i = 0;
    Array.prototype.slice.call(container.children).forEach(v=>{
      v.style.backgroundColor = idToColor(merged[i])
      v.setAttribute("id", merged[i])
      i++;
    })
   
  })
  .catch(err => {
    console.log( err);
    alert('Error: Failed to read level data (Error Code: Baka)');
  }); 
}

function importFromCall(text){
   
    
    console.log('Pasted content: ', text);
   var decompressed = LZString.decompressFromBase64(text);
   var level = JSON.parse(decompressed);
   var dimensions = level[0].length;
    container.innerHTML = "";
   populate(dimensions);
    sizeEl.value = dimensions;
    size = dimensions;
    var merged = [];

    level.forEach(v=>{
      v.forEach(z=>{
        merged.push(z);
      })
    })
    console.log(merged);

    var i = 0;
    Array.prototype.slice.call(container.children).forEach(v=>{
      v.style.backgroundColor = idToColor(merged[i]);
      v.setAttribute("id", merged[i].toString());
      i++;
    })
   
}

function blockIdToTag(id, div){
  if(id == 2){
    div.wall = true;
  }
}

function populate(size) {
  if (document.getElementsByClassName("pixel")[0]){
    var pixelSize = document.getElementsByClassName("pixel")[0].classList.value;
  } else {
    pixelSize = "pixel pixel-med";
  }
  

  container.style.setProperty('--size', size)
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div')
    div.className = pixelSize

    div.addEventListener('mouseover', function(){
        if(!draw) return
        div.style.backgroundColor = tile.value;
        var arr2 = [];
          if(div.style.backgroundColor){
    //Conversion into tile ids
    if(div.style.backgroundColor == "rgb(85, 85, 85)"){
      arr2.push(2);
    } else if(div.style.backgroundColor == "rgb(136, 136, 136)") {
      arr2.push(1)
    } else if(div.style.backgroundColor == "rgb(51, 51, 51)"){
      arr2.push(0);
    } else if(div.style.backgroundColor == "rgba(121, 220, 242, 0.4)"){
      arr2.push(3)
    } else if(div.style.backgroundColor == "rgb(179, 120, 89)"){
      arr2.push(4);
    } else if(div.style.backgroundColor == "rgb(227, 115, 250)"){
      arr2.push(5);
    } else if (div.style.backgroundColor == "rgb(102, 102, 102)"){
      arr2.push(6)
    } else if (div.style.backgroundColor == "rgb(201, 50, 50)"){
      arr2.push(9)
    } else if (div.style.backgroundColor == "rgb(115, 198, 250)"){
      arr2.push(12);
    } else if (div.style.backgroundColor == "rgb(0, 255, 255)"){
      arr2.push(11);
    } else if (div.style.backgroundColor == "rgb(85, 85, 102)") {
      arr2.push(10);
    } else if (div.style.backgroundColor == "rgb(250, 223, 115)"){
      arr2.push(8);
    } else if (div.style.backgroundColor == "rgb(69, 58, 79)"){
      arr2.push(14);	
		} else if (div.style.backgroundColor == "rgb(237, 176, 110)"){
			arr2.push(15);
    } else if (div.style.backgroundColor == "rgb(255, 255, 0)"){
			arr2.push(13);
		} else if (div.style.backgroundColor == "rgb(15, 29, 51)") {
      arr2.push(16);
    } else if (div.style.backgroundColor == "rgb(17, 34, 51)") {
      arr2.push(17);
    } else if (div.style.backgroundColor == "rgb(85, 85, 136)") {
      arr2.push(18);
    }else if (div.style.backgroundColor == "rgb(85, 85, 17)"){
      arr2.push(20);
    }else if (div.style.backgroundColor == "rgb(53, 84, 50)"){
      arr2.push(23);
    }
 
	} else {
    arr2.push(0);
  }
      var id = arr2[0];
      div.setAttribute("id", id.toString());
    })
    div.addEventListener('mousedown', function(){
        div.style.backgroundColor = tile.value;
              var arr2 = [];
          if(div.style.backgroundColor){
    //Conversion into tile ids
    if(div.style.backgroundColor == "rgb(85, 85, 85)"){
      arr2.push(2);
    } else if(div.style.backgroundColor == "rgb(136, 136, 136)") {
      arr2.push(1)
    } else if(div.style.backgroundColor == "rgb(51, 51, 51)"){
      arr2.push(0);
    } else if(div.style.backgroundColor == "rgba(121, 220, 242, 0.4)"){
      arr2.push(3)
    } else if(div.style.backgroundColor == "rgb(179, 120, 89)"){
      arr2.push(4);
    } else if(div.style.backgroundColor == "rgb(227, 115, 250)"){
      arr2.push(5);
    } else if (div.style.backgroundColor == "rgb(102, 102, 102)"){
      arr2.push(6)
    } else if (div.style.backgroundColor == "rgb(201, 50, 50)"){
      arr2.push(9)
    } else if (div.style.backgroundColor == "rgb(115, 198, 250)"){
      arr2.push(12);
    } else if (div.style.backgroundColor == "rgb(0, 255, 255)"){
      arr2.push(11);
    } else if (div.style.backgroundColor == "rgb(85, 85, 102)") {
      arr2.push(10);
    } else if (div.style.backgroundColor == "rgb(250, 223, 115)"){
      arr2.push(8);
    } else if (div.style.backgroundColor == "rgb(69, 58, 79)"){
      arr2.push(14);	
		} else if (div.style.backgroundColor == "rgb(237, 176, 110)"){
			arr2.push(15);
    } else if (div.style.backgroundColor == "rgb(255, 255, 0)"){
			arr2.push(13);
		} else if (div.style.backgroundColor == "rgb(15, 29, 51)") {
      arr2.push(16);
    } else if (div.style.backgroundColor == "rgb(17, 34, 51)") {
      arr2.push(17);
    }else if (div.style.backgroundColor == "rgb(85, 85, 136)") {
      arr2.push(18);
    }else if (div.style.backgroundColor == "rgb(85, 85, 17)"){
      arr2.push(20);
    }else if (div.style.backgroundColor == "rgb(53, 84, 50)"){
      arr2.push(23);
    }
 
	} else {
    arr2.push(0);
  }
      var id = arr2[0];
      div.setAttribute("id", id.toString());

    })

    container.appendChild(div)
  }
}

window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})

function reset(){
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click', reset)

sizeEl.addEventListener('keyup', function(){
    size = sizeEl.value
  
    if (document.getElementsByClassName("pixel")[0]){
      var pixelSize = document.getElementsByClassName("pixel")[0].classList.value;
    } else {
      pixelSize = "pixel pixel-med";
    }
    if ((size >= 30 && (pixelSize == "pixel" || pixelSize == "pixel pixel-med")) || (size <= 58 && pixelSize == "pixel pixel-small")){
      document.getElementById("container").classList.add("container-large");
      document.getElementById("container").classList.remove("container");
    } else {
      document.getElementById("container").classList.add("container");
      document.getElementById("container").classList.remove("container-large");
    }
    reset()
})

populate(size);