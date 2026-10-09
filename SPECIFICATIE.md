# Specificatie: projectenpagina (`projecten.html`)

## 1. Doel van de pagina

Een **eigen HTML-pagina** (`projecten.html`) waarop ik minimaal drie van mijn
projecten presenteer, zodat een bezoeker (en mijn docent) snel ziet welke
projecten ik heb gebouwd en met welke technieken.

**Keuze van mij:** een echte aparte pagina in plaats van een sectie in
`index.html`. De docent heeft aangegeven dat de projectenpagina een eigen
pagina moet zijn.

## 2. Wat moet een bezoeker kunnen zien of doen?

- Zien: een duidelijke paginatitel "Projecten" (h1).
- Zien: minimaal drie projecten, elk met:
  - de naam van het project;
  - een korte omschrijving;
  - de gebruikte technieken (HTML, CSS, JavaScript).
- Doen: vanaf de homepagina naar de projectenpagina navigeren via de
  **nav-link "Projecten"**.
- Doen: vanaf de homepagina navigeren via een **knop in de header**.
- Doen: vanaf de homepagina navigeren via een **knop in de projectensectie**.
- Doen: vanaf de projectenpagina terug naar home (nav-links + "Terug"-link).
- Doen: op een telefoon goed navigeren en lezen (nav klapt om).

## 3. Onderdelen die gebouwd worden

| Onderdeel | Nieuw of aangepast |
|---|---|
| Eigen pagina met nav, titel, drie projectkaarten, teruglink en footer | nieuw → `projecten.html` |
| Nav-link "Projecten" → `projecten.html` | aangepast (`index.html`) |
| Knop in de header → `projecten.html` | aangepast (`index.html`) |
| Projectensectie op home: korte tekst + knop → `projecten.html` | aangepast (`index.html`) |
| CSS: paginakop, knop op lichte achtergrond, actieve nav-link, teruglink | aangepast (`css/style.css`) |
| CSS: techniek-tokens, knop in header, responsive nav | aangepast (`css/style.css`) |

## 4. Welke bestaande bestanden veranderen?

- `index.html` — alleen de nav, de header-knop en de projectensectie.
- `css/style.css` — alleen nieuwe klassen toevoegen, geen bestaande regels
  overschrijven zodat de rest van de pagina blijft werken.

## 5. Welke nieuwe bestanden zijn nodig?

- `projecten.html` — de nieuwe projectenpagina.
- Documenten: `SPECIFICATIE.md`, `PLAN.md`, `README.md`.

## 6. Wanneer is de projectenpagina klaar? (acceptatiecriteria)

- [x] Eigen pagina met duidelijke titel "Projecten".
- [x] Minimaal drie projecten aanwezig.
- [x] Ieder project heeft naam, korte omschrijving en gebruikte technieken.
- [x] Werkende navigatie vanuit de bestaande website naar de projectenpagina
      (nav-link, knop in de header, knop in de projectensectie).
- [x] Vormgeving sluit aan bij het bestaande portfolio (zelfde nav, footer,
      kleuren en kaartstijl).
- [x] De bestaande homepagina werkt nog (contactformulier en overige secties).
- [x] Werkt op een smal scherm (mobiel).

## 7. Buiten scope (bewust niet gedaan)

- Filterknoppen per techniek;
- Een aparte detailpagina per project.

Beide zijn **voorstellen van OpenCode die ik heb afgewezen**: het is niet nodig
voor de opdracht en ik houd de site liever simpel.
