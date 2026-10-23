# Contrôles de la version V7 — 23 octobre 2026

## Contrôles automatisés
- **8 pages HTML** : liens internes, ressources locales et ancres contrôlés, **0 anomalie(s)**.
- Scripts JavaScript : syntaxe validée par `node --check`.
- 4 bases SQLite : `PRAGMA integrity_check = ok`, `foreign_key_check` sans anomalie.
- **24/24 requêtes SQL** exécutées sur SQLite ; 6 présélections dans chacun des 4 laboratoires.
- Interface responsive vérifiée dans Chromium sur **320, 360, 375, 390, 430, 768, 1024, 1280 et 1440 px** sur les pages clés (test visuel CSS/HTML).
- 8 pages vérifiées à 320, 360, 390, 768 et 1280 px : **pas de débordement horizontal du document**.
- Menu mobile : ouverture, fermeture par Échap et mise à jour de `aria-expanded` vérifiées à 320–768 px.
- L’accueil présente un mini-graphe **tiré du jeu fictif** : janvier–mai 2026, 223 / 204 / 222 / 189 / 223 transactions validées.
- La page anglaise et les six pages projets sont conservées. Le classeur `banque.xlsx` initial n'est pas livré.

## Limites et transparence
- La démonstration SQL s'appuie sur **sql.js/WebAssembly servi par CDN**. Son chargement réel en ligne et sur Safari n'a pas été vérifié ici ; les aperçus JSON restent disponibles sans le moteur.
- Certains rapports Tableau/Power BI peuvent empêcher l'incorporation dans un iframe ; les liens externes restent proposés.
- Les métriques des études SQL sont **fictives** et ne constituent pas des résultats de missions réalisées pour une banque.
- L'archive **n'est pas déployée** sur le dépôt GitHub ; publier via GitHub Desktop puis vérifier Pages en ligne.

## Anomalies restantes
- Aucune anomalie détectée par ces contrôles.
