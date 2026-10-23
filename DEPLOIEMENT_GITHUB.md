# Mise en ligne sur GitHub Pages — Refonte institutionnelle

**Aucun changement n’a été poussé sur GitHub par cette livraison.** Vérifier la prévisualisation et approuver la mise en ligne avant de publier.

## Depuis Chrome sur téléphone (workflow actuel)

Le dépôt `Frederic-Asiani/Frederic-Asiani.github.io` a déjà un workflow `.github/workflows/deploy.yml` qui extrait **`portfolio-v7.zip`** sur `main` et publie les fichiers extraits sur `gh-pages`.

1. Télécharger l’archive dédiée **`portfolio-v7.zip`** jointe à cette livraison : elle contient directement `index.html`, `styles.css`, `main.js`, `en/`, `projets/` etc., à sa racine.
2. Ouvrir https://github.com/Frederic-Asiani/Frederic-Asiani.github.io (branche `main`) dans Chrome et passer au mode « Site pour ordinateur » si nécessaire.
3. Utiliser `Add file` → `Upload files` et remplacer **le fichier `portfolio-v7.zip` existant** par le nouveau. Si l’interface refuse un remplacement, supprimer d’abord l’ancien fichier puis envoyer le nouveau (deux commits) ; cette suppression temporaire peut générer un workflow échoué sans effet durable.
4. `Commit changes`. Le workflow « Publier portfolio V7 » extraira la nouvelle archive et déploiera `gh-pages`.
5. Vérifier https://github.com/Frederic-Asiani/Frederic-Asiani.github.io/actions . Les cases vertes ne suffisent pas : vérifier ensuite le contenu du site public.
6. Vérifier GitHub `Settings` → `Pages` : `Deploy from a branch` → `gh-pages` → `/(root)`.
7. Ouvrir en navigation privée `https://frederic-asiani.github.io/?edition=institut-2026` pour contourner le cache. Tester un atelier SQL, les deux thèmes, le menu et les liens.

**Ne pas sélectionner `main` comme branche Pages avec le workflow ZIP actuel** : elle contient potentiellement une ancienne page `index.html`, car c’est l’archive extraite sur `gh-pages` qui constitue la version finale.

## Depuis GitHub Desktop

Cloner le dépôt, remplacer l’archive `portfolio-v7.zip` à sa racine, faire `Commit to main` puis `Push origin`. Éviter de seulement copier les fichiers HTML : le workflow continuera de déployer le contenu de `portfolio-v7.zip` tant qu’il n’est pas remplacé.

## Retour arrière

Conserver la précédente archive `portfolio-v7.zip` en sauvegarde locale avant remplacement. Pour revenir à une version antérieure, restaurer cette archive dans `main` et faire un commit ; le workflow republiera la version restaurée. Ne pas faire de changement de branche Pages sans comprendre le mode de déploiement.

## Contrôles après publication

- Page d’accueil avec typographie éditoriale, thème clair/sombre et bouton lune/soleil.
- Menu mobile accessible et navigation vers les sections.
- Pages `projets/01..04` : message `SQLite prêt` avant d’annoncer l’exécution réelle ; sinon mode aperçu.
- Power BI/Tableau : embeds et liens soumis à leur disponibilité externe.
- Vérifier depuis un iPhone, Android et ordinateur lorsque disponibles.
