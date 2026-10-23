# Rapport de validation — portfolio V9

## Bilan

La V9 est une amélioration de la V8 sans modification des quatre bases SQLite ni des laboratoires SQL. L’identité clair/sombre est conservée. 

| Contrôle | Résultat |
|---|---|
| Pages HTML | 8 |
| Liens locaux et ancres analysés | 169 |
| Liens internes manquants | 0 |
| Identifiants dupliqués | 0 |
| Scripts JavaScript (syntaxe Node) | 3/3 |
| Requêtes SQL | 24/24 exécutées sur quatre bases intègres |
| Dimensions testées, thèmes | 320, 360, 390, 768, 1280 px ; clair et sombre |
| Débordement horizontal détecté | Aucun, dans le navigateur isolé |
| Menu mobile | Ouverture/fermeture testées dans le navigateur isolé |
| Contrastes clés fond/texte | Tous les couples échantillonnés >= 4,5:1 |

## Contrastes échantillonnés (WCAG)

- **light** : texte 13.54:1, secondaire 5.82:1, accent 7.21:1, bouton 7.79:1.
- **dark** : texte 15.99:1, secondaire 10.5:1, accent 11.53:1, bouton 10.69:1.

## Limites de vérification

- Le navigateur isolé utilise le HTML et CSS locaux mais bloque les ressources HTTP(S) ; il ne valide pas le chargement du moteur SQLite WebAssembly depuis le CDN.
- Les 24 requêtes SQL ont été exécutées séparément via SQLite local, et non depuis GitHub Pages.
- Le rendu exact de la photo depuis GitHub, les polices externes et les lecteurs d’écran physiques restent à vérifier après publication.
- Les contrastes testés constituent un échantillonnage, pas une certification globale WCAG 2.2 AA.
- La version V9 n’a pas été publiée ni transférée sur le dépôt de l’utilisateur.

## Pièces complémentaires

- `BENCHMARK_10_PORTFOLIOS_ET_AMELIORATIONS.md` : sources de comparaison et décisions de conception.
- `RAPPORT_VALIDATION_V9.json` : contrôles reproductibles et résultats.
- `DEPLOIEMENT_V9_MOBILE.md` : installation via Chrome mobile et le workflow GitHub existant.
