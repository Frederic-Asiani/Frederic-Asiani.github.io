# Déployer V10 sur GitHub Pages

Le dépôt `Frederic-Asiani/Frederic-Asiani.github.io` a un workflow `.github/workflows/deploy.yml` qui décompresse `portfolio-v7.zip` sur `main` pour publier sur `gh-pages`.

## Sur téléphone (Chrome)
1. Télécharger l'archive spéciale **`portfolio-v7.zip`** (contenu = V10). Ne pas la décompresser.
2. Ouvrir le dépôt GitHub, branche `main`.
3. Supprimer **uniquement** l'ancien `portfolio-v7.zip`, puis créer un commit.
4. `Add file` → `Upload files` et importer le nouveau ZIP portant le même nom.
5. `Commit changes` sur `main`.
6. Ouvrir `Actions`, vérifier le workflow `Publier portfolio V7`.
7. Dans `Settings` → `Pages`, conserver `Deploy from a branch` → `gh-pages` → `/(root)`.
8. Tester sur `https://frederic-asiani.github.io/?v=10`, menu, deux thèmes, projets SQL.

**Ne pas téléverser l'archive descriptive V10 renommée au hasard**. Utiliser le fichier `portfolio-v7.zip` livré, prévu pour ton workflow. Ne rien modifier sur `gh-pages` directement ; c'est une branche générée.

## Sur GitHub Desktop
Extraire l'archive V10 complète (pas `portfolio-v7.zip`), copier les fichiers à la racine du dépôt cloné sans toucher à `.git` ou `.github`, puis Commit / Push. Toutefois le workflow continuera d'extraire l'archive `portfolio-v7.zip`; cette méthode nécessite donc également de mettre à jour l'archive dans `main`. La méthode mobile ci-dessus est la plus fiable dans ton cas.
