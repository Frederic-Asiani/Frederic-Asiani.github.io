# Rapport de validation — V10 Premium éditoriale

Date : 23 octobre 2026. Aucune publication GitHub réalisée pour cette V10.

## Tests effectués
- Navigation mobile et bascule du thème dans **14 variantes navigateur isolées** : 320, 360, 390, 414, 768, 1024 et 1280 px, en clair et en sombre.
- Menu ouvert et refermé sur les formats mobiles, attributs `aria-expanded` contrôlés.
- Aucun débordement horizontal détecté sur les pages HTML inspectées en 320 px.
- Numérotation `01 / 04` maintenue sur une ligne sur les résolutions mobiles.
- Portrait local fourni dans `assets/portrait-frederic-asiani.jpg` chargé dans le navigateur isolé.
- **24/24 requêtes SQL** exécutées sous SQLite natif, quatre bases déclarées intègres.
- **38 fichiers de projets de données** (.sqlite, .sql, .json, .csv, .xlsx) comparés bit à bit à l'archive V9 : aucune modification.
- Tous les JavaScript vérifiés par `node --check`.
- Aucun lien local cassé ou ID HTML dupliqué détecté.
- Archive et ZIP spécial mobile testés avec la vérification d'intégrité ZIP.

## Limitations transparentes
- L'environnement a bloqué `http://127.0.0.1`, même pour le serveur local. Les pages ont donc été rendues en HTML/CSS/JS injectés dans Chromium pour les tests responsives.
- Les polices distantes et le CDN `sql.js` n'ont pas été chargés dans l'outil de rendu isolé. Le rendu sur Safari iOS/Chrome Android et l'exécution WASM en production doivent être vérifiés après déploiement.
- Il n'y a pas de captures authentiques intégrées des rapports externes Power BI/Tableau, leurs liens originaux sont conservés.
- Il n'est pas démontré que la V10 surpasse objectivement tous les dix sites de référence ; la comparaison est qualitative.

## Correction du design
- Portrait de démonstration authentique recadré à partir d'une capture fournie, maintenant hébergé localement, pour supprimer la dépendance à GitHub avatars.
- Sur smartphone, regroupement visuel portrait/identité, sans grand espace vide.
- Hiérarchie et espacements allégés, numérotation fixe des études SQL.
- Contrastes, interactions focus, textes alternatifs et double thème conservés.
