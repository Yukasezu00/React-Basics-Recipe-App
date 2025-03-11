// https://vimeo.com/782267686    hier is een filmpje met uitleg over je eindopdracht over hoe t er ongeveer uit moet gaan zien!

/*
 zorg er sws voor at je de volgende extensions hebt geinstalleerd:

 - Prettier van Prettier 
 Next we would like VSCode to format our code when we save our files. Go to preferences (⌘/Ctrl + ,), search “format on save” and check the box.
 Now search for “default formatter” in preferences (⌘/Ctrl + ,). Set the default formatter to Prettier - Code formatter.
 - ESLint van Microsoft
 - npm intellisense van Christian Kohler
 - Auto Rename Tag van Jun Han
 - VSCode React Refactor van planbcoding
 - javascript console utils van whtouche
 */

/*
React Router is een hulpmiddel in React waarmee je verschillende pagina’s in je app kunt maken en navigeren zonder de hele pagina opnieuw te laden.
Het zorgt ervoor dat je meerdere "bladzijden" hebt in één enkele webapplicatie.

Stel je voor dat je op een website bent en je klikt op een link naar een andere pagina.
In een traditionele website wordt de hele pagina opnieuw geladen. Maar met React Router kun je gewoon van "pagina" wisselen zonder dat de app opnieuw laadt.
Het voelt voor de gebruiker alsof ze van pagina naar pagina springen, maar in werkelijkheid blijft de app draaien zonder dat alles opnieuw geladen wordt.

Kort voorbeeld:
Je hebt een app met twee pagina's: een homepagina en een detailpagina van een product.
React Router zorgt ervoor dat als je op een link klikt, de app de juiste component laadt zonder dat de hele pagina opnieuw wordt geladen.
Dit zorgt voor een veel snellere en soepelere ervaring voor de gebruiker!

Dus, kort gezegd: React Router helpt je om in je React-app verschillende schermen of pagina’s te maken en tussen die pagina’s te navigeren zonder dat de hele app
opnieuw geladen hoeft te worden.
*/

/*
Inleiding
Dit eindproject sluit de module over React Basics af.

Tijdens dit project wordt beoordeeld hoe goed je de leerdoelen van deze module hebt behaald en of je nu in staat bent om:

• Basis React-componenten te maken

• React props te gebruiken

• React state te gebruiken

• Condities in JSX toe te passen

• Een design-systeem te gebruiken

• Event handlers te maken

• Een eenvoudige webapplicatie in React te bouwen

• Lijsten, loops en keys in React te maken

Tijdens dit project ga je een eenvoudige React-applicatie ontwikkelen, gebaseerd op een set van vereisten.
Je moet alle concepten en vaardigheden die je hebt geleerd en beheerst in deze module toepassen:

• JSX

• Componenten renderen

• Props

• Condities

• State

• React Devtools in Chrome

• Lijsten, loops en keys

• Event handling

• Styling met een design-systeem

Is er een onderwerp in de bovenstaande lijst waar je je nog niet zeker over voelt?

Maak je geen zorgen!

Je kunt al het cursusmateriaal tot dit punt gebruiken terwijl je aan je project werkt.
Dus als je ergens tegenaan loopt, ga terug naar dat onderdeel en lees het cursusmateriaal opnieuw door.
Dat is geen valsspelen, we noemen het een slimme manier van leren 🤓 💡


Evaluatie:

Dit project wordt beoordeeld door onze mentoren, die je feedback geven over wat je goed hebt gedaan, wat je moet verbeteren (must-haves),
en/of wat leuk zou zijn om te verbeteren (nice-to-haves) en hoe je deze verbeteringen kunt aanbrengen.

Je kunt het project blijven verbeteren en voor evaluatie en feedback inleveren zo vaak als nodig is.
Je hebt een voldoende nodig voor dit project om je certificaat aan het einde van de cursus te ontvangen.
Veel studenten halen het eerste keer niet en leveren het project meerdere keren in, dus maak je geen zorgen als dat bij jou ook gebeurt.
Het hoort allemaal bij een leertraject 🎢 .


Makkelijker uitgelegd:
Je gaat een React-app maken en alles wat je in deze cursus hebt geleerd, moet je gaan toepassen.
De app die je maakt, moet dus basiscomponenten bevatten, props en state gebruiken, en je moet ervoor zorgen dat je de juiste condities toepast in de JSX-code.
Ook moet je event handlers gebruiken om interactie mogelijk te maken (bijvoorbeeld als iemand op een knop klikt).

Je zult werken met lijsten (zoals het weergeven van meerdere recepten), loops (om door die lijsten heen te gaan) en keys (om elke lijst-item uniek te maken).
Verder moet je de app stylen met een design-systeem (bijvoorbeeld Material-UI of iets anders) en het moet allemaal goed renderen in de browser.

De evaluatie van je project gaat over hoe goed je alles hebt toegepast. Als er dingen zijn die beter kunnen, krijg je feedback en kun je je werk verbeteren.
Geen zorgen als het niet in één keer lukt. Je kunt het project zo vaak verbeteren en opnieuw inleveren als nodig is!

Dus in het kort: Je maakt een React-app, en je moet alles wat je geleerd hebt (zoals componenten, props, state, lijsten en styling) toepassen.
Het project wordt beoordeeld en je kunt het verbeteren totdat je een voldoende krijgt.
*/

// PROJECT
/*
Aan het einde van deze oefening kun je een eenvoudige React-applicatie ontwikkelen.

Beschrijving
Het is tijd om een nieuwe React-app te bouwen! We geven je wat startcode en een dataset die je kunt gebruiken om je app te maken.
Vanaf daar kun je zelf verder gaan. Dit cursusproject biedt je de kans om jezelf te testen als een meer zelfstandige programmeur.

De app die je gaat maken is een recepten-app.
We willen ons restaurant Winc uitbreiden door meer maaltijden aan te bieden en tegemoet te komen aan meer dieetwensen van onze klanten.
We willen een app maken waarin je kunt zoeken naar recepten op basis van dieet- en gezondheidslabels (zoals vegan, vegetarisch, pescetarisch, glutenvrij, sesamvrij, etc.)
of op naam van recepten. Dit helpt ons ervoor te zorgen dat we per ongeluk geen verkeerde gerechten serveren aan mensen met allergieën of specifieke dieetwensen.

Voor dit project willen we twee verschillende pagina’s die de gebruiker kan zien:

Een overzichtspagina waar je de beschikbare recepten kunt bekijken.
Een detailpagina waar je de details van een enkel recept kunt zien.
In Jip en Janneke Taal: Je gaat een recepten-app maken voor een restaurant. De app moet twee schermen (pagina’s) hebben:

Overzicht van recepten: hier kan de gebruiker zien welke recepten er zijn en een beetje informatie over elk gerecht.
Details van een recept: wanneer de gebruiker op een recept klikt, zie je een nieuw scherm met meer details over dat recept, zoals de ingrediënten en bereidingswijze.
Je maakt dus een app waarin mensen kunnen zoeken naar recepten op basis van dieetwensen (bijvoorbeeld: vegan, glutenvrij) of de naam van een recept.
*/

// Download de opdracht via github repo genaamd react-basics-project-starter: https://github.com/WincAcademy/react-exercise-solutions/tree/main/react-basics-project-starter

/*
Instructies

Download de startbestanden hier op onze GitHub-repository (opens in a new tab).

Inspecteer het data object in utils/data.js om een idee te krijgen van de gegevens waarmee je gaat werken.

Het data object is een omgezette JSON-string die is opgehaald van een recepten-API genaamd Edamam (opens in a new tab).
Het bevat 20 recepten in de 'hit' sleutel die je kunt gebruiken voor de app.

Om toegang te krijgen tot gegevens, zoals receptlabels, moet je kijken naar de recipe key,
bijvoorbeeld data.hits[0].recipe.label heeft de volgende waarde "Paleo Chocolate Covered Caramels".
Gebruik console.log() in RecipeListPage.jsx om te experimenteren met de gegevens en te zien wat je kunt ophalen.

In App.jsx wil je de geselecteerde recipe item bijhouden in een state en een <RecipePage /> component tonen (je kunt voorlopig een tijdelijke placeholder gebruiken,
of een nieuwe component maken) als de gebruiker er een heeft geselecteerd. Anders toon je de <RecipeListPage /> die een overzicht van alle recepten zal bevatten.

In RecipeListPage.jsx kun je de geïmporteerde receptgegevens gebruiken en een lijst van alle recepten weergeven. Toon de volgende gegevens voor elk recept:

- Receptnaam
- Een afbeelding van het recept/maaltijd
- Dieetlabel (indien aanwezig)
- Waarschuwingen (indien aanwezig)
- Maaltijdtype
- Gerechttype

Toon bij elk item de volgende gezondheidslabels (indien aanwezig):

- Vegan
- Vegetarisch

LET OP: Aangezien de API geen ID’s voor de recepten verstrekt, kun je namen/labels als sleutels gebruiken in de lijstitems.

Bouw een zoekfunctie die filtert op naam en/of gezondheidslabels (vegan/vegetarisch/pescetarisch/glutenvrij/sesamvrij/etc.).

Maak de <RecipePage /> component en laat deze meer gedetailleerde informatie over een geselecteerd recept weergeven:

- Receptnaam
- Een afbeelding van het recept/maaltijd
- Maaltijdtype
- Gerechttype
- Totale kooktijd
- Dieetlabel
- Alle gezondheidslabels
- Waarschuwingen
- Ingrediënten
- Porties
- Totale voedingsstoffen (energie in kcal, eiwitten, vetten, koolhydraten, cholesterol, natrium)

De items in de lijst (<RecipeListPage />) moeten klikbaar zijn en zodra geselecteerd, moet een gedetailleerde <RecipePage /> component worden getoond.
De gebruiker kan ook op een terugknop in <RecipePage /> klikken om terug te gaan naar het receptenoverzicht.

Style de app en maak deze responsief met ChakraUI, wat al geïnstalleerd is.

Controleer de onderstaande vereisten om ervoor te zorgen dat je alles hebt geïmplementeerd.

Tips

• Vergeet niet regelmatig pauzes te nemen.

• Je kunt codevoorbeelden gebruiken van eerdere oefeningen.

• Gebruik console.log() om te zien hoe je props eruitzien in geval je data props niet op het scherm worden weergegeven.

• Je wilt geen willekeurige UUID's of indexnummers gebruiken bij het maken van een lijst van componenten.
Als je UUID's wilt gebruiken, kun je ze toevoegen aan het data bestand.


Vereisten

• De app is responsief en toegankelijk op zowel mobiele apparaten als desktop.

• De app bevat twee verschillende pagina's die door de gebruiker bekeken kunnen worden:

1. Een scherm waar de gebruiker een overzicht van beschikbare recepten kan zien.
2. Een scherm waar de gebruiker de details van een enkel recept kan bekijken.

• Op de receptoverzichtspagina is er een lijst van alle recepten.

Elk item op de lijst bevat de volgende gegevens over het recept:

- Receptnaam
- Een afbeelding van het recept/maaltijd
- Dieetlabel (indien aanwezig)
- Waarschuwingen (indien aanwezig)
- Maaltijdtype
- Gerechttype

Elk item op de lijst toont ook de volgende gezondheidslabels (pas deze aan als je wilt), indien van toepassing:

- Vegetarisch
- Veganistisch

Gebruikers kunnen recepten zoeken op basis van de receptnaam.

Gebruikers kunnen op een recept klikken en naar een ander scherm gaan dat alle details van het recept toont.

• Op de pagina van elk enkel recept worden de volgende gegevens weergegeven:

- Receptnaam
- Een afbeelding van het recept/maaltijd
- Maaltijdtype
- Gerechttype
- Totale kooktijd
- Dieetlabel
- Alle gezondheidslabels
- Waarschuwingen
- Ingrediënten
- Porties
- Totale voedingsstoffen (energie in kcal, eiwitten, vetten, koolhydraten, cholesterol, natrium)

• Gebruikers kunnen teruggaan naar de receptoverzichtspagina vanuit de detailpagina van elk recept.

• Gebruik alleen Chakra UI-componenten. Bijvoorbeeld, gebruik <Button> in plaats van <button> en <Box> in plaats van <div>. Vermijd het gebruik van ruwe HTML-elementen.


Extra Uitdaging

Dit is niet verplicht, maar als je wat extra oefening wilt, kun je de volgende functie implementeren:

• Gebruikers kunnen filteren op veganistisch/vegetarisch/pescetarisch.

Dit betekent dat je een zoek- of filterfunctie moet toevoegen waarmee de gebruiker kan kiezen om alleen recepten te zien die bij hun dieetwensen passen
(bijvoorbeeld veganistisch, vegetarisch of pescetarisch).
Het zou handig zijn om een dropdown-menu of checkboxen te gebruiken voor het filteren van de recepten op basis van deze labels.

Lever je opdracht in
*/
