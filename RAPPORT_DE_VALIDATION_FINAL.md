# Portfolio Frédéric Asiani Mubiala — Livraison premium finale

**Date : 23 octobre 2026**  
**Statut : fichiers finalisés, non publiés sur GitHub.**

## Réalisation

- Direction artistique institutionnelle, palette bleu marine / blanc cassé / pétrole, typographie éditoriale.
- Mode clair et sombre avec variables CSS, initialisation anticipée pour éviter le flash de thème, préférences système et `localStorage`.
- Navigation responsive et accessible au clavier, menu mobile, états de focus et lien d'évitement.
- Parcours éditorial accueil, expertises, cas métiers, parcours, recherche/publications, conseil/formations, contact.
- Quatre démonstrations SQL conservées, avec indicateurs et graphiques issus **des résultats de bases fictives** et mode aperçu de secours.
- Power BI, Tableau Public, Upwork, projet Excel bancaire anonymisé, WhatsApp, Zando Consulting et Zando Digital conservés.
- Fallback graphique du portrait de profil afin de ne pas laisser un cadre vide si l'image distante est indisponible.
- Séparation visible entre fonctions officielles et activités de conseil privées.

## Contrôles automatisés effectués sur l'archive

| Contrôle | Résultat |
|---|---|
| Pages HTML inspectées | **8** |
| Liens locaux vers des fichiers manquants | **0** |
| Ancres internes non résolues | **0** |
| `id` HTML dupliqués | **0** |
| Images HTML sans attribut `alt` | **0** |
| Erreurs de syntaxe JS (`node --check`) | **0 sur 3 fichiers** |
| Bases SQLite (`PRAGMA integrity_check`) | **4/4 = ok** |
| Requêtes SQL exécutées avec Python SQLite | **24/24 réussies** |
| Accolades CSS | **379 ouvrantes / 379 fermantes** |
| Initialisation thème avant CSS | **Présente** |
| Détection du thème système | **Présente** |
| Mémoire du thème dans `localStorage` | **Présente** |

Les données bancaires et commerciales SQL sont synthétiques ; leurs indicateurs ne sont pas des résultats clients.

## Vérifications du rendu

Des essais isolés en Chromium ont été menés au cours des itérations précédentes sur différentes largeurs, et des captures de prévisualisation ont été produites. La répétition finale d'un parcours navigateur exhaustif n'a pas abouti dans cet environnement (navigations locales refusées, puis délai dépassé). **La compatibilité complète iOS/Android, la persistance réelle du thème sur GitHub Pages et l'exécution du moteur `sql.js` téléchargé depuis son CDN ne sont pas certifiées par ces tests.**

L'application SQL possède un mode secours sur résultats JSON déjà calculés lorsque WebAssembly/CDN est inaccessible. Ce mode ne doit pas être présenté comme l'exécution d'une requête personnalisée.

## Publication

Le dépôt GitHub existant publie l'archive nommée `portfolio-v7.zip` depuis la branche `main` vers `gh-pages` via GitHub Actions. Pour déployer cette version **après approbation**, remplacer cette archive par le fichier `portfolio-v7.zip` livré avec la présente version, puis contrôler les Actions et l'affichage du site.

Aucune modification du dépôt n'a été effectuée dans le cadre de cette livraison.
