window.addEventListener('load', () => {
    renderGrid();
    getRandomCharacter()
    renderAnswer()
    newCharacter();


});

let randCharacterIndex = 0;


const renderGrid = () => {
    const gridHolder = document.querySelector(".home_grid")
    let htmlString = ""

    for (let i = 0; i < home.length; i++) {
        const characterHTMLString = `
            <div class="character_holder">       
                        <div class="character">
                            <img src="${home[i].img}" alt="">
                            <p class="name">${home[i].name}</p>
                        </div>
                    </div>`;
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
    characterButton.addEventListener("click" , () => {
     getRandomCharacter();
     renderAnswer();
     newCharacter();
    }) 
}

// full stack con node





