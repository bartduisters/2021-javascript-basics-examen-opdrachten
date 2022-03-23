# Nederlands

Het startpunt van de oefening kan worden gevonden in de map `begin`.

Er is een array met drie objecten in. Elk object stelt een Pokémon voor. Deze data komt zogezegd uit de database. De array en de objecten erin mogen niet gewijzigd worden.

Onder de array wordt de oefening gemaakt. Het doel van de oefening is om de data uit de array om te vormen tot data die gebruikt kan worden om het volgende uit te printen:

```
Pokémon #1 is bulbasaur. bulbasaur weegt 69 en heeft de volgende types: grass en poison
Pokémon #4 is charmander. charmander weegt 85 en heeft de volgende types: fire
Pokémon #7 is squirtle. squirtle weegt 90 en heeft de volgende types: water
```

**Beperking**: Indien er iteraties nodig zijn, mag er géén gebruik gemaakt worden van `for`, `while` of `do-while`!

Tips bij het omzetten van de data:
    - `#1`, `#4` en `#7` zijn de `id` van de Pokémon.
    - `bulbasaur`, `charmander` en `squirtle` zijn de `name` van de Pokémon.
    - `69`, `85` en `90` zijn de `weight` van de Pokémon.
    - hetgeen achter `types:` staat is informatie die bekomen kan worden uit de `types` array die terug te vinden is op het object in de originele array.

Er moet een functie genaamd `info` aangeroepen kunnen worden op elk omgezet object, die de informatie zal uitprinten.