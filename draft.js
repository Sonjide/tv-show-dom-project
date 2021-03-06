//You can edit ALL of the code here
/*

Level 100 - Minimal features:
All episodes must be shown    =    how ?
For each episode, AT LEAST following must be displayed:  forEach /// for loop
the episode's name            = 
the season number             =
the episode number            =
the episode's medium-sized image
the episode's summary text
You should combine season number and episode number into an episode code:
Each part should be zero-padded to two digits.
Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.

************** read it line by line, what is each line doing exactly ****************
*/


function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
    const rootElem = document.getElementById("root");

    const template = `<div class="episode col-4">
                <div class="episodeTitle">
                    <h5>Winter is Coming - S01E01</h5>
                </div>
                <div class="imageUrl">
                    <img src="http://static.tvmaze.com/uploads/images/large_landscape/1/2668.jpg" alt="imageUrl">
                </div>
                <div class="summery">
                    <p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son
                        Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>
                </div>
            </div>`;
    episodeList.forEach(element => {
        console.log(element);



    });

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

    // let episodetitle = document.getElementsByClassName("title");
    // let image = document.getElementsByClassName("imageUrl");
    // let paragraph= document.getElementsByClassName("paragraph");
    // let h1 = document.getElementsByClassName("h1");

    // rootElem.appendChild(h1Elm);
    // rootElem.appendChild(pElm); 

    //rootElem.textContent = `Got ${episodeList.length} episode(s)`;


    // h1Elm.innerText = makePageForEpisodes(episodeList); 
    // console.log(makePageForEpisodes(episodeList));


    //styling 
    // document.body.style.backgroundColor = "grey";

    // rootElem.style.border = "200px solid red";
    // h1Elm.style.border = "15px solid yellow";
    // pElm.style.border = "5px solid pink";

}






window.onload = setup;
/*need a grey background - css
div contains several divs following
- <h1> episode info, 
- src = image 
- p tag movie info
*/