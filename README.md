# Frédéric Asiani Mubiala — Portfolio institutionnel

Portfolio professionnel statique compatible GitHub Pages. Refonte éditoriale sur mesure, avec thèmes clair et sombre, navigation responsive, pages bilingues et démonstrations SQL pédagogiques.

## Architecture

- `index.html` : accueil français, expertises, études de cas, parcours, publications, conseil et contact.
- `en/index.html` : présentation synthétique en anglais.
- `styles.css` : design system partagé, composants, media queries et deux thèmes via `[data-theme]`.
- `main.js` : gestion des thèmes, navigation mobile et recherche parmi les articles.
- `projets/01..04/` : quatre laboratoires SQL, jeux de données fictifs, scripts et résultats.
- `sql-lab.js` : moteur SQLite dans le navigateur via sql.js WebAssembly ; aperçu pré-calculé de secours.
- `projets/05-analyse-bancaire-excel/` : étude bancaire agrégée/anonymisée ; aucun nom, contact ou compte individuel diffusé.
- `projets/06-powerbi/` : intégration du rapport Power BI public.
- `docs/SOURCES.md` : sources de référence.
- `RAPPORT_AUDIT_ET_TESTS.md` : vérifications et limites.

## Publications et activités

- Huit références MPRA, deux ouvrages distincts dont un en six éditions linguistiques.
- Tableau Public : https://public.tableau.com/app/profile/frederic.asiani
- Upwork : https://www.upwork.com/freelancers/~019a6d23b828207a48
- Zando Consulting : https://consulting.marketgroup.pro
- Zando Digital : https://digital.marketgroup.pro
- WhatsApp formations : https://wa.me/243820249705

**Transparence :** les projets SQL et leurs performances sont des simulations pédagogiques. Les services privés sont distincts du poste public d’inspecteur du travail.

## Publication

Voir `DEPLOIEMENT_GITHUB.md`. La production existante utilise un workflow GitHub Actions qui extrait une archive `portfolio-v7.zip` depuis `main` pour publier sur `gh-pages` : ne pas pousser seulement les HTML sur `main` sans mettre à jour cette archive.
