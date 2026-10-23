# Déployer la version V5 dans GitHub Desktop

1. Ouvrir `Frederic-Asiani.github.io` dans GitHub Desktop (branche `main`). Cliquer sur **Fetch origin** puis **Pull origin** si proposé.
2. Faire une copie de sauvegarde du dossier du dépôt (hors de ce dossier Git).
3. Décompresser l’archive V5 dans un dossier distinct. **Ne pas ouvrir le dépôt Git à l’intérieur de l’archive** : ce ZIP n’en contient pas.
4. Depuis GitHub Desktop : **Repository → Show in Explorer**. Copier le **contenu** de l’archive V5 dans la racine du dépôt (là où se trouve `.git` et `index.html`). Remplacer les fichiers, sans supprimer `.git` ou `.github`.
5. Dans l’onglet **Changes**, vérifier la présence des nouvelles pages HTML dans `projets/`, de `en/index.html`, de `styles.css` et `index.html`.
6. Commit : `Portfolio V5 - études de cas, conseil, anglais et résultats métiers` puis **Push origin**.
7. Dans GitHub : vérifier **Actions** et l’URL publique `https://frederic-asiani.github.io/`.
8. Tester les quatre boutons **Exécuter SQL**, le bouton mobile menu, les études de cas, les boutons WhatsApp et la page `/en/`.

**Note :** GitHub Pages est statique. Le moteur `sql.js` nécessite de télécharger un script et un fichier WebAssembly depuis un CDN ; un mode aperçu des résultats JSON est disponible si ce chargement échoue. Les données utilisées dans les projets SQL sont synthétiques. Les chiffres Excel sont diffusés uniquement sous forme agrégée.
