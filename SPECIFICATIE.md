# Specificatie: projectenonderdeel in index.html

## 1. Doel

De bestaande homepagina (`index.html`) bevat een volledig **projectenonderdeel**
waarop ik minimaal drie projecten presenteer, zodat een bezoeker (en mijn docent)
snel ziet welke projecten ik heb gebouwd en met welke technieken.

**Keuze van mij:** alles in één bestand (`index.html`) in plaats van een aparte
`projecten.html`. Reden: houdt het simpel en overzichtelijk en het bestaande
portfolio blijft één pagina. De projecten worden bereikbaar via ankerlinks.

## 2. Wat moet een bezoeker kunnen zien of doen?

- Zien: een duidelijke titel "Projecten" als kop van het onderdeel.
- Zien: minimaal drie projecten, elk met:
  - de naam van het project;
  - een korte omschrijving;
  - de gebruikte technieken (HTML, CSS, JavaScript).
- Doen: naar het projectenonderdeel navigeren via de **nav-link "Projecten"**.
- Doen: naar het projectenonderdeel springen via een **knop in de header**.
- Doen: op een telefoon goed kunnen navigeren en lezen (nav en kaarten klappen om).

## 3. Onderdelen die gebouwd worden

| Onderdeel | Nieuw of aangepast |
|---|---|
| Projectensectie met drie complete projectkaarten (naam, omschrijving, technieken) | aangepast (`index.html`) |
| Nav-link "Projecten" → `#projecten` | aangepast (`index.html`) |
| Knop in de header → `#projecten` | aangepast (`index.html`) |
| Opgeschoonde HTML (bestaande kaarten misten sluitende tags) | aangepast (`index.html`) |
| CSS: knop, techniek-tokens, responsive nav, vlotte ankerscroll | aangepast (`css/style.css`) |

## 4. Welke bestaande bestanden veranderen?

- `index.html` — de projectensectie, de nav-link en de header.
- `css/style.css` — alleen nieuwe klassen toevoegen, geen bestaande regels
  overschrijven zodat de rest van de pagina blijft werken.

## 5. Welke nieuwe bestanden zijn nodig?

- Geen nieuwe HTML-bestanden. Wel documenten: `SPECIFICATIE.md`, `PLAN.md`,
  `README.md`.

## 6. Wanneer is het klaar? (acceptatiecriteria)

- [x] Duidelijke titel "Projecten" aanwezig.
- [x] Minimaal drie projecten aanwezig.
- [x] Ieder project heeft naam, korte omschrijving en gebruikte technieken.
- [x] Werkende navigatie naar de projecten (nav-link én knop in de header).
- [x] Vormgeving sluit aan bij het bestaande portfolio (zelfde nav, footer,
      kleuren en kaartstijl).
- [x] De homepagina werkt nog (contactformulier, overige secties).
- [x] Werkt op een smal scherm (mobiel).

## 7. Buiten scope (bewust niet gedaen)

- aparte detailpagina per project;
- filterknoppen per techniek.

Beide zijn **voorstellen van OpenCode die ik heb afgewezen**: het is niet nodig
voor de opdracht en ik houd de site liever simpel.
