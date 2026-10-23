# Frédéric (Freddy) ASIANI MUBIALA

**Data Analyst · Business Intelligence · Économiste · Auteur · Inspecteur du travail**  
Kinshasa, République démocratique du Congo.

## Portfolio et réseaux

- Site web GitHub Pages : https://frederic-asiani.github.io/
- LinkedIn : https://cd.linkedin.com/in/freddy-asiani/en
- GitHub : https://github.com/Frederic-Asiani
- Portfolio initial : https://asiani.carrd.co

## Compétences

SQL, Excel (Power Query), Power BI, Tableau, Python, R, statistique, économétrie, modélisation économique, reporting et développement web.

## 3 projets SQL bancaires **réalisés sur données synthétiques**

| Projet | Base | Requêtes exécutées |
| --- | --- | --- |
| [Surveillance des transactions](projets/01-surveillance-transactions/) | 2 012 transactions | 6 |
| [Risque de crédit](projets/02-risque-credit/) | 290 prêts | 6 |
| [Agences et segmentation](projets/03-agences-clientele/) | 7 agences et 300 clients | 6 |

Chaque projet fournit un `.sqlite`, des `.csv`, un `schema.sql`, un `analyses.sql`, ses résultats et sa documentation. **Ce sont des cas de portfolio réellement codés et exécutés, pas des missions menées dans des établissements bancaires réels.**

## Publications MPRA (8)

- [2020 — La sensibilité de l’économie congolaise face aux chocs monétaire et budgétaire : une approche en modèle VAR standard](https://mpra.ub.uni-muenchen.de/101255/) — MPRA 101255
- [2024 — Analyse des conditions et normes de travail en République démocratique du Congo : défis et perspectives d’amélioration](https://mpra.ub.uni-muenchen.de/121254/) — MPRA 121254
- [2024 — Analyse des contrats de travail et de l’emploi dans la ville de Kinshasa : impact du secteur informel et perspectives d’évolution](https://mpra.ub.uni-muenchen.de/121276/) — MPRA 121276
- [2024 — L’Inspection Générale du Travail en République démocratique du Congo : enjeux, défis et perspectives de réforme](https://mpra.ub.uni-muenchen.de/121371/) — MPRA 121371
- [2024 — Théorème de la diversification industrielle en République démocratique du Congo : une analyse théorique et mathématique](https://mpra.ub.uni-muenchen.de/121440/) — MPRA 121440
- [2024 — Relations professionnelles, syndicalisme et conflits sociaux dans le capitalisme en République démocratique du Congo](https://mpra.ub.uni-muenchen.de/121626/) — MPRA 121626
- [2024 — Inspection Générale du Travail en République démocratique du Congo et le paradoxe du chat de Schrödinger : une analyse de la dualité dans l’application des normes du travail](https://mpra.ub.uni-muenchen.de/122269/) — MPRA 122269
- [2024 — Théorie de la diversification endogène en République démocratique du Congo](https://mpra.ub.uni-muenchen.de/122276/) — MPRA 122276

## Ouvrages

- *L’essentiel de l’économie congolaise et la prévision en R* (2020), ISBN 9786202537438.
- *La législation sociale en République démocratique du Congo : Principes, Applications et Évolution* (2024) et cinq traductions (anglais, allemand, portugais, espagnol, italien) — six éditions linguistiques vérifiées.

## Instructions de mise en ligne

Consulter `DEPLOIEMENT_GITHUB.md`.

## Notes

Les SQL ont été testés sur SQLite 3.46. Les indicateurs de risque (NPL, pertes attendues, etc.) sont des simplifications pédagogiques sur données fictives. Les citations bibliographiques et les liens d'édition sont consultables dans `docs/SOURCES.md`.


## Mise à jour portfolio responsive
- Navigation mobile hamburger accessible (ARIA, Échap, fermeture au clic).
- Upwork, 2 projets Tableau, recherche du profil Tableau (URL auteur non confirmée).
- Zando Consulting, Zando Digital et formation Data / droit du travail.
- 4e projet SQL : gestion des stocks et des ventes, 650 ventes fictives, 6 requêtes SQL testées.


## Ateliers SQL interactifs dans le portfolio

Quatre projets SQL s'exécutent **entièrement dans le navigateur**, à partir de fichiers SQLite fictifs.
Ouvrir le portfolio sur GitHub Pages, puis choisir **Exécuter le projet SQL**. Dans la page du projet :
1. Sélectionner l’une des six analyses proposées.
2. Cliquer sur **Exécuter SQL** et consulter les lignes, indicateurs et graphique généré.
3. Modifier la requête en lecture seule (SELECT / WITH), puis relancer.
4. Exporter le résultat en CSV.

**Moteur :** sql.js 1.13.0 (WebAssembly, chargé sur cdnjs, licence MIT) ; chaque fichier `.sqlite` est chargé dans la mémoire du navigateur. Aucune base côté serveur, aucun identifiant nécessaire et aucune modification persistante. En l'absence du moteur, le site affiche les résultats pré-calculés et signale explicitement le mode aperçu. La première utilisation nécessite un accès à cdnjs.

Pour tester localement, lancer un serveur HTTP dans le dossier racine :

```bash
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000` (ne pas ouvrir les fichiers HTML via `file://`).


## Version V5 — Études de cas orientées décisions (2026-10-23)
- Quatre analyses métier avec problème, méthode, résultats issus des bases simulées, graphiques, recommandations et limites.
- Laboratoires SQL interactifs existants conservés (24 requêtes, 4 bases SQLite, mode aperçu).
- Page française enrichie : synthèse des résultats, offres de prestations, démarche d’intervention, FAQ et boutons de contact.
- Nouvelle page anglaise `/en/` : présentation synthétique pour les visiteurs internationaux.
- Livrables produits sans ajout de données bancaires personnelles dans les fichiers publics.


## Version Premium V7 (octobre 2026)
- Nouveau module graphique d’accueil : cinq observations mensuelles du projet bancaire fictif (223, 204, 222, 189, 223 transactions validées). Les observations proviennent du projet SQL, pas de vrais clients.
- Navigation mobile à deux colonnes, boutons tactiles et carte analytique adaptative.
- Toutes les fonctionnalités et ressources de la V6 sont conservées (SQL, Excel anonymisé, Tableau, Power BI, WhatsApp, recherches, formation, anglais).
