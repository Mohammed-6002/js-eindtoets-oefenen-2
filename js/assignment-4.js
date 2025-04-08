console.log("--- Page 4 ---");
//Opdracht 4 - Films Favoriet Maken (classList)
//Doel: Je hebt een lijst van films in de HTML. Bij elke film staat een knop "Favoriet". 
//Wanneer je op die knop klikt, voeg of verwijder je de class favorite van het bijbehorende film-item. 
//Hierdoor verandert de achtergrondkleur (zoals in de CSS).

//Stappenplan:

//Stap (a): Gebruik document.querySelectorAll om alle buttons met class "fav-btn" te selecteren.
//Stap (b): Zet een click-event op elke button met een for-loop. In deze event listener toggle je de class "favorite" op de button.
//Stap (c): (Optioneel) Toon een alert of console.log om te laten weten dat de film nu favoriet is, of niet meer.
//The Godfather: Favorite
//Titanic: Favorite
//Avengers, Endgame: Favorite
//Inception: Favorite

const buttons = document.querySelectorAll(".fav-btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const filmItem = this.parentElement;
        filmItem.classList.toggle("favorite");
        const filmName = filmItem.querySelector("span").textContent;
        console.log(`${filmName} is nu ${filmItem.classList.contains("favorite") ? "favoriet" : "geen favoriet meer"}.`);
    });
}

