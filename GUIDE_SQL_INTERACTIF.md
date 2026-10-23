# Portfolio — Laboratoire SQL interactif

## Ce que la version contient

- 4 études SQL (3 bancaires et 1 commerciale).
- 6 analyses SQL sélectionnables dans chaque étude (24 analyses).
- Exécution SQLite directement dans le navigateur avec WebAssembly **sql.js 1.13.0**, via CDN.
- Résultats tabulaires et graphiques, téléchargement CSV, modification de requêtes en lecture seule.
- Données 100 % fictives. Aucun backend, aucune connexion bancaire.

## Déploiement sur GitHub Pages

1. Extraire ce ZIP : ne pas téléverser seulement le fichier ZIP.
2. Ouvrir GitHub Desktop et sélectionner `Frederic-Asiani/Frederic-Asiani.github.io`.
3. Menu **Repository > Show in Explorer** : copier tous les fichiers extraits dans ce dossier, en conservant les sous-dossiers.
4. Vérifier les changements ; puis **Commit to main** et **Push origin**.
5. Le workflow existant dans `.github/workflows/deploy.yml` republie `main` dans `gh-pages`. Vérifier sa bonne exécution dans **Actions** et consulter **Settings > Pages** pour vérifier la source réellement configurée. Ne pas modifier les paramètres Pages si tout fonctionne déjà.
6. Ouvrir `https://frederic-asiani.github.io`, visiter la section Projets, puis chacune des pages SQL.

## Tester le laboratoire

- Ouvrir une page SQL du site **publié** (pas `file:///.../index.html`).
- Attendre le badge `SQLite prêt · 100 % navigateur`. Cela indique que le moteur SQL est initialisé.
- Choisir une des 6 requêtes, cliquer `Exécuter SQL` et exporter un CSV.
- Modifier une requête de lecture `SELECT` pour une expérience personnelle. Exemple : `SELECT COUNT(*) AS total FROM transactions;` (pour le projet de transactions).
- Une commande `DELETE`, `DROP`, `INSERT`, `UPDATE` ou `ALTER` doit être rejetée ; la base chargée est en lecture seule et ne conserve aucune modification.

## Dépendance Internet

Le moteur SQLite WebAssembly et son script sont chargés depuis `cdnjs.cloudflare.com` (sql.js 1.13.0). Le visiteur doit être en ligne et le CDN accessible. En cas d'échec, le site propose un aperçu des résultats pré-calculés mais **n'exécute pas de SQL personnalisé**. Les résultats ne doivent pas être présentés comme exécutés si le badge `SQLite prêt` n'est pas visible.

## Étendue des vérifications

- Les 24 requêtes proposées ont été exécutées sur leurs bases SQLite locales, sans erreur.
- L'interface, le menu mobile, le choix de requêtes et la protection des commandes d'écriture ont été testés dans Chromium, avec un moteur SQLite simulé pour les tests d'interface.
- Le chargement effectif du script et du binaire WebAssembly depuis le CDN **n'a pas pu être testé dans l'environnement actuel** : il devra être confirmé après publication.
- Les démonstrations utilisent des bases inventées ; elles ne représentent ni clients ni transactions réels.
