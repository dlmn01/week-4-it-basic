# Portfolio Sulaiman — Week 4: Eerst denken, dan bouwen

Uitbreiding van mijn portfolio (week 2) met een eigen **projectenpagina**.
Gebouwd met OpenCode als hulpmiddel, maar ikzelf heb de keuzes gemaakt.

## Structuur

```
week 4/
├── index.html          # Homepagina (met nav en knoppen naar de projectenpagina)
├── projecten.html      # Projectenpagina (3 projecten)
├── css/
│   └── style.css       # Opmaak, incl. week 4-uitbreiding
├── js/
│   └── script.js       # Contactformulier (onveranderd)
├── images/             # Afbeeldingen
├── SPECIFICATIE.md     # Specificatie (vóór het bouwen)
├── PLAN.md             # Stappenplan (vóór het bouwen)
└── README.md           # Dit bestand
```

## 1. Analyse van mijn bestaande project (vóór het bouwen)

Ik heb eerst mijn portfolio van week 2 geopend en bekeken voordat er code
geschreven werd:

- **`index.html`** — één pagina met: nav (Home, Over mij, Projecten, Contact),
  header, sectie "Over mij", sectie "Projecten", contactformulier en footer.
- **`css/style.css`** — donkere nav (#333), paarse gradient-header
  (#667eea → #764ba2), kaarten in een grid (`.project-grid`, `.project-card`).
- **`js/script.js`** — vangt het contactformulier op en toont een melding.

**Bijzonderheden die ik vond:**
- De oude projectsectie had twee kaarten met incomplete HTML (een `<p>` werd
  nooit gesloten) en geen duidelijke technieken.
- De nav-link "Projecten" wees naar een anker, niet naar een echte pagina.
- De pagina was niet ingericht op mobiel (nav kon overlopen op een smal scherm).

**Welke bestanden moesten veranderen?** `index.html` (nav, header,
projectensectie), `css/style.css` (nieuwe klassen) en een nieuw bestand
`projecten.html`. `js/script.js` hoefde niet te veranderen.

## 2. Bepaald wat ik wil bouwen (mijn beslissingen)

Voordat er code kwam, heeft OpenCode eerst aan mij gevraagd:

| Vraag | Mijn beslissing |
|---|---|
| Welke drie projecten? | Calculator, Todo List, Portfolio Website |
| Hoe navigeren naar de projecten? | Nav-link "Projecten" + knop in de header |
| Welke vormgeving? | Kaarten-raster in dezelfde stijl als mijn portfolio |
| Extra functionaliteit erbij? | **Nee, afgewezen** (zie §6) |

**Wijziging tijdens het bouwen:** ik begon met de projecten in `index.html`,
maar de docent gaf aan dat de projectenpagina een **eigen pagina** moet zijn.
Daarom heb ik het omgebouwd naar een echte `projecten.html` (stap 4 en 5 in
de Git-geschiedenis).

## 3. Specificatie en plan

- **`SPECIFICATIE.md`** — wat de pagina moet doen, welke bestanden veranderen
  en wanneer het klaar is (acceptatiecriteria).
- **`PLAN.md`** — zes kleine logische stappen met per stap: wat, welk bestand, waarom.

Ik heb beide documenten gecontroleerd vóór ik begon met bouwen. Pas daarna
mocht OpenCode code schrijven.

## 4. Stapsgewijs gebouwd

| Stap | Wat | Bestand | Git |
|---|---|---|---|
| 0 | Portfolio van week 2 overgenomen als veilig startpunt | alle | `f65e221` |
| 1 | Specificatie en plan opgesteld | SPECIFICATIE.md, PLAN.md | `4d32ef9` |
| 2 | Projectensectie met drie projecten + navigatie | index.html | `8db5274` |
| 3 | CSS: knop, techniek-tokens, responsive nav | css/style.css | `943e6cd` |
| 4 | README met proces en keuzes | README.md | `36b8e7a` |
| 5 | Eigen projectenpagina + navigatie vanuit index | projecten.html, index.html | `d3b3f1b` |
| 6 | CSS voor de projectenpagina | css/style.css | `4684c42` |

Na iedere stap heb ik met `git status` en `git diff` gekeken wat er veranderd is
en de pagina in de browser getest voordat ik doorging.

## 5. Keuzes die ik vóór het programmeren heb gemaakt

1. **Een eigen pagina `projecten.html`** in plaats van een sectie op de
   homepagina — de docent wil een echte pagina.
2. **Drie vaste projecten** die kloppen met wat er al op mijn site stond.
3. **Zelfde stijl** (donkere nav, paarse accenten, kaarten) zodat de pagina bij
   mijn portfolio past.

## 6. Voorstel van OpenCode dat ik heb afgewezen

OpenCode stelde voor om extra functionaliteit toe te voegen:

- filterknoppen per techniek (bijv. alleen HTML-projecten tonen), en
- een aparte detailpagina per project.

**Ik ben het hier niet mee eens geweest.** De opdracht vraagt minimaal drie
projecten met naam, omschrijving en technieken; filterknoppen en extra pagina's
zijn niet nodig, maken de site ingewikkelder en dan moet ik uitleggen wat er
allemaal bij komt kijken. Ik koos voor een rustige, werkende pagina.

> "OpenCode stelde filterknoppen en detailpagina's voor, maar ik koos voor
> alleen de drie projectkaarten, omdat de opdracht dat vraagt en ik de site
> simpel wil houden."

## 7. Waarom ik niet alles in één keer liet bouwen

Als OpenCode meteen de hele pagina maakt, zie ik niet wat er veranderd en kan
ik het resultaat niet controleren. Door klein te werken (eerst navigatie, dan
de nieuwe pagina, dan CSS) wist ik na elke stap precies wat er gebeurde en kon
ik terug als er iets misging.

## 8. Wat de belangrijkste nieuwe code doet

- **Knop in de header** (`index.html`):
  `<a class="btn" href="projecten.html">Bekijk mijn projecten</a>` — een link
  die als knop wordt gestyled en naar de projectenpagina gaat.
- **Projectkaart** (`projecten.html`): een `div.project-card` met `<h3>` (naam),
  `<p>` (omschrijving) en een `<ul class="tech-list">` met de technieken.
- **Navigatie op de projectenpagina**: de links wijzen naar `index.html#home`
  enzovoort, zodat je vanaf de projectenpagina toch bij de andere secties komt.
  De actieve pagina krijgt `class="active"` zodat je ziet waar je bent.
- **Techniek-tokens** (`css/style.css`, `.tech-tag`): afgeronde pills met de
  paarse gradient, zodat de technieken opvallen maar bij de stijl passen.
- **Paginakop** (`.page-header`): dezelfde gradient als de homepagina, maar
  korter (40vh) zodat de projecten meteen in beeld komen.
- **Responsive nav** (`@media (max-width: 600px)`): de nav klapt verticaal
  zodat de links op een telefoon niet overlopen.

## 9. Hoe te gebruiken

1. Open `index.html` in je browser.
2. Klik op "Bekijk mijn projecten", op de knop in de projectensectie of op
   **Projecten** in de nav.
3. Gebruik "Terug naar home" of de nav om weer terug te gaan.
