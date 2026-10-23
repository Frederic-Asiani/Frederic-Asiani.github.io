# Finition du portfolio institutionnel · Version finale

Cette livraison part de la refonte V8 et ne remplace aucun contenu métier vérifié. Aucune opération GitHub n’a été exécutée.

## Finitions réalisées

- Correction du bloc photographique : la photographie du GitHub public n’est affichée que si elle charge réellement ; un monogramme éditorial visible évite désormais tout bloc vide.
- Initialisation du thème couleur et de sa métadonnée dès le `<head>` afin de limiter tout flash de thème incorrect.
- Quatre figures de résultats SQL construites **uniquement** à partir de `resultats_valides.json`, avec légende explicite **données synthétiques**. Il ne s’agit ni de captures Tableau/Power BI ni de résultats clients.
- Couleurs et tableaux liés aux variables CSS des modes clair et sombre.
- Scripts existants d’exécution SQL, bases SQLite, projets BI, publications, contacts, URLs et fichiers Excel conservés.

## Vérifier avant publication

1. Consulter `RAPPORT_DE_VALIDATION_FINAL.md` pour les contrôles exécutés et leurs limites.
2. Publier uniquement après validation. Si le dépôt conserve le workflow d’extraction ZIP, remplacer `portfolio-v7.zip` sur `main` par l’archive de publication fournie, puis contrôler `gh-pages`.
3. Faire un essai du laboratoire SQL dans Chrome via le site publié : le moteur WebAssembly distant nécessite l’accès au CDN.
4. Les rapports Power BI et Tableau sont externes et conservent leurs liens de référence ; aucune capture externe n’a été fabriquée.
