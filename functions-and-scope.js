// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// stap 1: door een for loop die alle items uit de array langs gaat & door een if statement toe te voegen die checkt of grades[i] groter of gelijk is aan 8
// stap 2: dit kun je oplossen door in de conditie van de for loop de lengt property toe te wijzen aan grades(list).
// stap 3: door een variable te declareren met de waarde 0 (buiten de for loop). en dan in de if statement bij true deze te verhogen met 1

// ---- Verwachte uitkomst: 6
console.log("-Opdracht 1a-")

function getCumLaudeAmount(gradesList) {
    let isCumLaude = 0
    for (let i = 0; i < gradesList.length; i++) {

        if (gradesList[i] >= 8) {
            isCumLaude++;
        }
    }
    return isCumLaude;
}
console.log(getCumLaudeAmount(grades));
/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

console.log("-Opdracht 1b-");

function cumLaude(gradesList) {
    let isCumLaude = 0
    for (let i = 0; i < gradesList.length; i++) {

        if (gradesList[i] >= 8) {
            isCumLaude++;
        }
    }
    return isCumLaude;
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// stap 1: Een gemiddelde wordt berekend door de waardes bij elkaar op te tellen en te delen daar het aantal cijfers dus grades.length
// stap 2: de waarde van grades[i] + de huidige waarde opgeslagen in een ander variable * het aantal in de lengte van de array(de loop) en deze uiteindelijk delen met de lengte van de array.
// stap 3: door de length property te gebruiken in de for loop
// ---- Verwachte uitkomst: 6.642857142857143

console.log("-Opdracht 2a-");

    let gradesAdded = 0;
    for (let i = 0; i < grades.length; i++) {
        gradesAdded = grades[i] + gradesAdded;
    }
    const average = gradesAdded / grades.length;
    console.log(average);



/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft 5
// averageGrade([8, 9, 4, 6, 10]) geeft 7.4

console.log("-Opdracht 2b-");

function averageGrade(gradesArray) {
    let gradesAdded = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        gradesAdded = gradesArray[i] + gradesAdded;
    }
    return gradesAdded / gradesArray.length;
}
console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!
console.log("-Opdracht 2c-");

function averageGrades(gradesArray) {
    let gradesAdded = 0;
    for (let i = 0; i < gradesArray.length; i++) {
        gradesAdded = gradesArray[i] + gradesAdded;
    }
    let average = gradesAdded / gradesArray.length;
    average = Number(average.toFixed(2));  // krijg het alleen niet voor elkaar altijd 2 decimalen weer te geven
    return average;
}
console.log(averageGrades(grades));
console.log(averageGrades([6, 4, 5]));
console.log(averageGrades([8, 9, 4, 6, 10]));


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9
console.log("---Opdracht 3a---");

let highestGrades = grades[0];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrades) {
        highestGrades = grades[i];
    }
}
console.log(highestGrades);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

console.log("-Opdracht 3b-");

function highestGrade(array) {
    let highestGrade = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > highestGrade) {
            highestGrade = array[i];
        }
    }
    return highestGrade;
}
console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));