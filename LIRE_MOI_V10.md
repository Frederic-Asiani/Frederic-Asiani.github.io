# Frédéric Asiani — V10 Premium éditoriale

Cette version est une évolution non destructive de la V9. Elle conserve les fichiers SQLite, les quatre laboratoires SQL, la page Excel et les pages Power BI.

## Changements importants
- Le portrait mobile est disposé horizontalement, dans un encart biographique intégré.
- Les numéros des études SQL ne sont plus séparés sur plusieurs lignes.
- Les titres, espacements et boutons sont adaptés aux écrans de 320 à 430 px.
- Les liens de navigation et les légendes d’études ont été clarifiés pour les lecteurs d’écran.
- Les métadonnées et le balisage Person ont été complétés pour le référencement.
- Aucun résultat client inventé, aucune fausse capture de Power BI ou de Tableau.

## Publication depuis Chrome sur mobile
Le workflow actuel GitHub Pages décompresse un fichier `portfolio-v7.zip` depuis la branche `main`, puis publie vers `gh-pages`. Le fichier `portfolio-v7.zip` livré séparément contient la **V10** sous ce nom de compatibilité.

Dans GitHub, sur `main`, remplacer l'ancien ZIP par le nouveau puis vérifier Actions > workflow `Publier portfolio V7` et Pages > branch `gh-pages` (root). Ne pas modifier l'ancien `index.html` de `main` : seul le contenu du ZIP est publié.

## Limites de vérification
L'intégrité des bases et les requêtes SQL sont testées en local avec SQLite. La présence du moteur WebAssembly dans le navigateur est préservée, mais son chargement via CDN doit être vérifié sur l'adresse publique après déploiement. Les liens externes peuvent avoir leurs propres restrictions.

## Source du portrait
Le portrait local a été recadré à partir de la photographie visible dans la capture de ton propre portfolio fournie dans la conversation. Il est authentique mais n'a pas la pleine résolution de l'original. Remplacer `assets/portrait-frederic-asiani.jpg` par ton fichier photo original améliorera encore la netteté sans changer le HTML.
