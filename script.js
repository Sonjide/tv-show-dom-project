//You can edit ALL of the code here
/*

*/

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

let h1Elm = document.createElement("h1");
let pElm= document.createElement("p");
rootElem.appendChild(h1Elm);
rootElem.appendChild(pElm); 

h1Elm.innerText = makePageForEpisodes(episodeList); 
console.log(makePageForEpisodes(episodeList));


//styling 
document.body.style.backgroundColor = "grey";

rootElem.style.border = "200px solid red";
h1Elm.style.border = "15px solid yellow";
pElm.style.border = "5px solid pink";

}






window.onload = setup;
/*need a grey background - css
div contains several divs following
- <h1> episode info, 
- src = image 
- p tag movie info
*/


