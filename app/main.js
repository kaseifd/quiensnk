window.addEventListener('load', () => {
    renderGrid();
    getRandomCharacter()
    renderAnswer()
    newCharacter();
    flipCharacter();
    
    console.log(r(2));
  
});

let r = mulberry32(2); 
let randCharacterIndex = 0;


const renderGrid = () => {
    const gridHolder = document.querySelector(".home_grid")
    let htmlString = ""

    for (let i = 0; i < home.length; i++) {
        const characterHTMLString = `         
                    <div class="character_holder">
                        <div class="character">
                            <div class="front">
                                <img src="${home[i].img}" alt="">
                                <p class="name">${home[i].name}</p>
                            </div>
                            <div class="back">
                                <div class="bg">${home[i].name}</div>
                                <img src="${home[i].img}" alt="">                         
                            </div>
                        </div>
                    </div>
                    `




            ;
        htmlString += characterHTMLString;
    }

    gridHolder.innerHTML = htmlString


}

const getRandomCharacter = () => {
    const randomCharacter = Math.floor(Math.random() * home.length);
    randCharacterIndex = randomCharacter;
}


const renderAnswer = () => {
    const answer = document.querySelector(".answer")

    const characterHTMLString = `
                    <div class="character_holder">       
                        <div class="character">
                            <img src="${home[randCharacterIndex].img}" alt="">
                            <p class="name">${home[randCharacterIndex].name}</p>
                        </div>
                    </div>
                    <a href="#" class="button new_character">Nuevo personaje</a>`;

    answer.innerHTML = characterHTMLString;
}


const newCharacter = () => {
    const characterButton = document.querySelector(".new_character")
    characterButton.addEventListener("click", () => {
        getRandomCharacter();
        renderAnswer();
        newCharacter();
    })
}

const flipCharacter = () => {
    const characters = document.querySelectorAll(".home_grid .character_holder .character")
    
    characters.forEach(character => {
        character.addEventListener("click", () => {
            character.classList.toggle("flip")
            
            
        })
    })

}




function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}










// full stack con node





