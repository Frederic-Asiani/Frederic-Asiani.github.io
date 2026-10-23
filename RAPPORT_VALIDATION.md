# Refonte premium — livraison de préproduction

## Contenu
- `index.html` : accueil éditorial, projets, parcours, recherche, prestations et contact.
- `premium.css` : identité visuelle et thèmes clair/sombre.
- `premium.js` : commutation accessible et persistance du thème.
- `apply_refonte.py` : intégration dans une copie locale du dépôt d’origine, sans publier.

## Intégration
1. Télécharger le dépôt GitHub existant dans son intégralité.
2. Décompresser cette archive dans un dossier séparé.
3. Exécuter `python apply_refonte.py --repo /chemin/vers/depot --dry-run` puis sans `--dry-run`.
4. Vérifier localement toutes les pages, le SQL interactif et les liens externes avant tout déploiement.
5. Ne pas envoyer le ZIP seul sur GitHub Pages : les bases SQLite et assets restent dans le dépôt existant.

## Vérifications réalisées
- Lecture des fichiers du dépôt via GitHub : index.html, styles.css, main.js, sql-lab.js et pages SQL/Excel/Power BI.
- Inspection statique de la structure de la nouvelle page et de ses liens internes.
- Tests automatisés Chromium tentés, mais navigation locale bloquée par la politique d'environnement (ERR_BLOCKED_BY_ADMINISTRATOR).

## Non vérifié
- Fonctionnement effectif des quatre moteurs SQL dans le navigateur.
- Contraste WCAG AA exhaustif, apparence iOS/Android et intégration complète des pages secondaires.
- Validité en direct de tous les liens externes et chargement des images distantes.

## Statut
Version de préproduction : aucune modification publiée ni poussée vers GitHub.
