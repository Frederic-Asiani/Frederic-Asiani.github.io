# Déploiement V11 sur GitHub Pages depuis Chrome (téléphone)

1. Télécharger l’archive `portfolio-v7.zip` (elle contient la V11 ; nom conservé pour le workflow existant).
2. Ouvrir le dépôt GitHub `Frederic-Asiani/Frederic-Asiani.github.io`, branche `main`.
3. Supprimer l’ancienne archive `portfolio-v7.zip` (commit), puis importer le nouveau `portfolio-v7.zip` (commit). Ne pas décompresser le fichier sur le téléphone.
4. Ouvrir Actions : le workflow `Publier portfolio V7` doit afficher un succès.
5. Paramètres Pages : Source `Deploy from a branch`, Branch `gh-pages`, Folder `/(root)`.
6. Vérifier l’accueil, le menu, le double thème et exécuter une requête sur `projets/01-surveillance-transactions/index.html` : statut attendu `SQLite prêt · 100 % navigateur`.

La V11 n’a pas été envoyée sur GitHub pendant sa préparation.
