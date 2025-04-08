console.log("--- Page 2 ---");
//Opdracht 2 - Object & If/Else
//Doel: Maak een object met de velden voornaam, leeftijd en favorieteFilm. 
//Vraag deze gegevens op via prompts en sla ze in het object op. Controleer of de gebruiker 18 jaar of ouder is. 
//Toon vervolgens een aparte boodschap in een alert wanneer de leeftijd groter of gelijk is aan 18, en een andere boodschap als die lager is.

// Vraag de gebruiker om gegevens
let gebruiker = {
    voornaam: prompt("Wat is je voornaam?"),
    leeftijd: parseInt(prompt("Wat is je leeftijd?"), 10),
    favorieteFilm: prompt("Wat is je favoriete film?")
};

// Controleer of de gebruiker 18 jaar of ouder is
if (gebruiker.leeftijd >= 18) {
    alert(`Hallo ${gebruiker.voornaam}, je bent ${gebruiker.leeftijd} jaar oud. Je mag alle films kijken!`);
} else {
    alert(`Hey ${gebruiker.voornaam}, je bent nog maar ${gebruiker.leeftijd} jaar oud. Sommige films zijn misschien niet geschikt voor jou.`);
}
