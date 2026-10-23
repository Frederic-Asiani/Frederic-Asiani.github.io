# Audit responsive V11 — Frédéric Asiani

## Défauts observés dans les captures iPhone V10

1. Certains titres commencent à l’extrême gauche : la classe `.section` remettait `padding-left` et `padding-right` à zéro avec `padding:49px 0` et d’autres déclarations similaires. Correction structurelle via `padding-block` et déclaration explicite des gouttières pour `.section.container` et `.section.band > .container`.
2. L’entête laisse apparaître les textes pendant le défilement : `--header` était semi-transparent (`rgba(…, .97)`) et utilisait un flou. Correction : fond opaque lié au thème clair/sombre, sans blur.
3. Rythme typographique mobile : titres, interlignes, marges de la grille des études et photographie ajustés pour les écrans étroits.

## Fonctionnalités préservées

- 4 projets SQLite et 24 requêtes de démonstration ; contrôles d’intégrité des bases conservés.
- Basculement clair/sombre avec préférence système et `localStorage`.
- Menu mobile et langues française/anglaise.
- Liens vers Power BI, Tableau, Upwork, MPRA, WhatsApp ; projet bancaire Excel anonymisé.
- Aucune capture BI inventée ; graphiques SQL de démonstration étiquetés comme tels.

## Politique de diffusion

Aucun déploiement automatisé sur le compte de l’utilisateur. Archive complète et archive de compatibilité `portfolio-v7.zip` livrées pour revue avant publication. Le chargement CDN sql.js réel nécessite encore un essai depuis le site public.
