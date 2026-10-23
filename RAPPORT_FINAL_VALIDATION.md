# Rapport de finition et de validation technique — Portfolio premium

**Version finale V9 — 23 octobre 2026**  
**Livraison :** ZIP prêt pour GitHub Pages. Aucun changement à ton dépôt n’a été effectué dans cette livraison.

## Finition réellement effectuée

1. **Photographie authentique / secours fiable** : seule la photographie publique GitHub est utilisée ; elle apparaît uniquement après un chargement réussi. En son absence, un monogramme institutionnel lisible remplace le cadre vide. Aucune photo personnelle n’a été inventée.
2. **Études de cas étoffées** : quatre graphiques métier sont générés à partir des fichiers originaux de résultats SQL ; leurs légendes mentionnent expressément les données synthétiques et la requête source.
3. **Double thème** : application clair/sombre sur toutes les pages, métadonnée de couleur initialisée immédiatement, respect de la préférence système et sauvegarde utilisateur.
4. **Design responsive** : amélioration des figures en largeur réduite et maintien de la navigation mobile, des laboratoires SQL et des tableaux.
5. **Préservation** : projets SQL, Power BI, Tableau, synthèse Excel anonymisée, huit articles MPRA, livres, Upwork, LinkedIn, conseil, formation, WhatsApp et version anglaise.

## Tests réellement exécutés

| Contrôle | Résultat |
|---|---|
| Pages HTML analysées | 8 |
| Vérifications de largeur et thème (5 écrans × 2 modes × 8 pages) | **80/80** sans débordement ni erreur de thème |
| Ouverture et fermeture du menu sur mobile | **16/16** |
| Liens locaux et fichiers vérifiés | **144** références sans chemin manquant |
| Figures SQL calculées | **4/4** visibles |
| Bases SQLite | **4/4** : `integrity_check` = ok |
| Laboratoire SQL en mode de secours : sélecteur de 6 requêtes, tableaux, export CSV | **4/4** validés avec Chromium |
| Analyses SQL exécutées localement | **24/24** |
| Syntaxe JavaScript | 3 fichiers valides (`node --check`) |
| Données individuelles du classeur bancaire original | Absentes de cette publication |
| Tests de mise en page | Chromium headless, HTML/CSS/JS isolés en mémoire |

### Contraste des couleurs de base

- clair_texte : **13.54:1**
- clair_secondaire : **5.82:1**
- sombre_texte : **15.99:1**
- sombre_secondaire : **10.5:1**
- clair_bouton : **7.79:1**
- sombre_bouton : **10.69:1**

Les combinaisons de base contrôlées dépassent 4,5:1. Ceci ne constitue pas une certification exhaustive WCAG 2.2 AA de toutes les configurations.

## Points dépendant des services externes

- La photo authentique s'affiche uniquement si GitHub autorise son chargement. Le monogramme remplace proprement l’image lorsque le réseau ou le domaine est bloqué.
- Le moteur d’exécution SQL côté navigateur utilise `sql.js` chargé depuis un CDN. **Ce chargement réseau en production n’a pas été testé ici.** Les 24 requêtes ont été exécutées sur SQLite local et les laboratoires conservent le mode résultats pré-calculés de secours.
- Les rapports Power BI et Tableau sont des services tiers ; leurs liens originaux sont conservés, sans captures fictives.
- Aucun test physique Safari iOS, Chrome Android ou avec lecteur d’écran matériel n’a été réalisé dans cet environnement isolé.

## Mise en ligne

Le dépôt actuel publie une archive nommée `portfolio-v7.zip` sur la branche `gh-pages`. La présente livraison fournit **ce nom exact** pour la mise en ligne depuis Chrome sur téléphone, en plus du ZIP descriptif. Remplacer l’archive existante dans `main` déclenchera le workflow existant. Conserver une copie précédente avant remplacement. Publier uniquement après approbation du rendu fourni.
