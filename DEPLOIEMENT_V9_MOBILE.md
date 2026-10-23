# Déployer la V9 depuis Chrome sur téléphone

L’ancien workflow du dépôt GitHub `Frederic-Asiani/Frederic-Asiani.github.io` extrait **`portfolio-v7.zip`** de la branche `main` et publie son contenu sur `gh-pages`.

1. Faire une sauvegarde de l’archive existante sur GitHub (téléchargement) et conserver une copie du nouveau ZIP.
2. Télécharger le fichier de livraison **`portfolio-v7.zip`**, qui contient en réalité la nouvelle V9. Ce nom est maintenu pour la compatibilité.
3. Ouvrir le dépôt dans GitHub depuis Chrome ; passer en « Site pour ordinateur » si nécessaire.
4. Pour remplacer le fichier existant, le plus simple est de supprimer **uniquement** l’ancien `portfolio-v7.zip` puis, après validation du commit, d’ajouter le nouveau fichier via **Add file → Upload files** à la racine de `main`.
5. Vérifier `Actions` et confirmer le succès du workflow `Publier portfolio V7`. Son nom ancien ne signifie pas que le contenu est ancien.
6. Dans `Settings → Pages`, conserver `Deploy from a branch` et `gh-pages / (root)`.
7. Ouvrir `https://frederic-asiani.github.io/?v=9` et tester les menus, thèmes et projets SQL.

**Attention :** si les règles GitHub Pages changent, ne jamais republier depuis `main` sans vérification de la branche effective. Ne pas publier le fichier Excel source nominatif `banque.xlsx`.
