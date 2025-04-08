console.log("--- Page 1 ---");
//Opdracht 1 - Arrays & Loops
//Doel: Maak een array van namen, vraag via prompt telkens of de gebruiker nog een naam wil invoeren (ja/nee). 
//Blijf namen vragen en in de array plaatsen zolang het antwoord "ja" is.
//Toon daarna alle namen in een alert (of meerdere alerts) met een for-loop.

//Stap (a): Maak een lege array in de JavaScript code.
//Stap (b): Gebruik een while-loop om de gebruiker te vragen: "Wil je een naam invoeren? (ja/nee)". - Als de gebruiker "ja" invult, vraag om de naam en push deze in de array. - Als de gebruiker "nee" invult, stop dan de loop.
//Stap (c): Gebruik een for-loop om alle namen in een alert te tonen.


// Stap (a): Maak een lege array
let namen = [];

// Stap (b): Vraag de gebruiker om namen in te voeren
while (true) {
    let antwoord = prompt("Wil je een naam invoeren? (ja/nee)").toLowerCase();
    
    if (antwoord === "nee") {
        break;
    } else if (antwoord === "ja") {
        let naam = prompt("Voer een naam in:");
        if (naam) {
            namen.push(naam);
        }
    } else {
        alert("Ongeldig antwoord, typ 'ja' of 'nee'.");
    }
}

// Stap (c): Toon alle namen in een alert met een for-loop
for (let i = 0; i < namen.length; i++) {
    alert("Naam " + (i + 1) + ": " + namen[i]);
}
