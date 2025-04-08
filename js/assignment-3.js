console.log("--- Page 3 ---");
//Opdracht 3 - Local Storage & JSON
//Doel: Vraag aan de gebruiker om zijn/haar naam en leeftijd. Maak een object met deze data en sla deze op in localStorage.

//Als de gebruiker de pagina verlaat en weer terugkomt, moet deze data worden gelezen uit localStorage en in een alert worden getoond. 
//Voor extra punten: maak een knop die de data uit localStorage verwijdert.

//Jouw naam
 
//Jouw leeftijd
//Opslaan btn
//verwijder btn


// Selecteer de invoervelden en knoppen met querySelector
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const saveBtn = document.querySelector("#saveBtn");
const deleteBtn = document.querySelector("#deleteBtn");

// Controleer of er al opgeslagen data is in localStorage
window.onload = function () {
    const opgeslagenData = localStorage.getItem("gebruiker");

    if (opgeslagenData) {
        const gebruiker = JSON.parse(opgeslagenData);
        alert(`Welkom terug, ${gebruiker.naam}! Je bent ${gebruiker.leeftijd} jaar oud.`);
        
        // Vul de velden automatisch in
        nameInput.value = gebruiker.naam;
        ageInput.value = gebruiker.leeftijd;
    }
};

// Opslaan van de gegevens in localStorage
saveBtn.addEventListener("click", function () {
    const gebruiker = {
        naam: nameInput.value,
        leeftijd: ageInput.value
    };

    if (gebruiker.naam && gebruiker.leeftijd) {
        localStorage.setItem("gebruiker", JSON.stringify(gebruiker));
        alert("Gegevens opgeslagen!");
    } else {
        alert("Vul zowel je naam als leeftijd in.");
    }
});

// Verwijderen van de gegevens uit localStorage
deleteBtn.addEventListener("click", function () {
    localStorage.removeItem("gebruiker");
    alert("Gegevens verwijderd!");
    nameInput.value = "";
    ageInput.value = "";
});

