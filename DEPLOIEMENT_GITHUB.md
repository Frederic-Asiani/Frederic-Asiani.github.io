# Publication GitHub Pages

1. Télécharger et décompresser le ZIP.
2. Dans https://github.com/Frederic-Asiani/Frederic-Asiani.github.io, utiliser **Add file → Upload files** et envoyer **les fichiers et sous-dossiers à la racine**, pas le ZIP lui-même.
3. Conserver la structure `projets/04-stocks-commerce/` et tous ses fichiers pour les téléchargements.
4. Commit sur `main`. Le workflow GitHub Actions déjà installé republie `main` sur la branche `gh-pages`. Dans Settings → Pages, vérifiez la source réellement utilisée ; conservez celle qui fonctionne déjà.
5. Vérifier sur https://Frederic-Asiani.github.io le menu mobile, les quatre études de cas et les liens externes.

**Ne supprimez pas les fichiers existants sans sauvegarde.**


## Déploiement des démonstrations SQL interactives

Copiez **l'intégralité** du contenu de l'archive dans le dépôt GitHub Pages, notamment `sql-lab.js`, `styles.css` et les dossiers `projets/01-*` à `projets/04-*` (bases SQLite, `queries.json`, `resultats_valides.json`).

Dans GitHub Desktop : **Repository → Show in Explorer**, collez les fichiers, puis **Commit to main → Push origin**. Vérifiez l'onglet Actions et les 4 liens « Exécuter le projet SQL ».

En ligne, le moteur SQLite en WebAssembly est récupéré depuis `cdnjs.cloudflare.com`. Il n'exige aucun hébergement PHP, Node.js ni serveur de base de données. Si ce CDN est bloqué, les résultats pré-calculés restent consultables mais l'éditeur SQL reste indisponible.

**Guide complémentaire :** `GUIDE_SQL_INTERACTIF.md` détaille les tests, le chargement du moteur et les limites du mode hors ligne.

**Guide complémentaire :** `GUIDE_SQL_INTERACTIF.md` détaille les tests, le chargement du moteur et les limites du mode hors ligne.


## Mise à jour du portfolio Power BI, Excel et WhatsApp
- Importer **tout le contenu** de cette archive à la racine du dépôt `Frederic-Asiani.github.io` en conservant les sous-dossiers `projets/` et les fichiers `main.js`, `sql-lab.js`, `styles.css`.
- Effectuer `Commit to main`, puis `Push origin` dans GitHub Desktop.
- Vérifier l'onglet Actions puis la page publique.
- Tester le menu ☰ sur téléphone, le laboratoire SQL, le tableau de bord Excel et le bouton WhatsApp.
- **Ne jamais téléverser le classeur source banque.xlsx** : il contient des données individuelles. Seul `Banque_Synthese_Anonymisee.xlsx` est inclus.
