# Étude de cas 04 — Pilotage des stocks et ventes de détail

**Projet SQL exécutable sur base SQLite, avec données 100 % synthétiques.** Scénario : trois magasins à Kinshasa, 12 articles, 650 ventes simulées. Aucune donnée client réelle.

## Objectifs
- Analyser le chiffre d’affaires et la marge brute par mois.
- Identifier les articles les plus vendus.
- Calculer le stock courant par magasin à partir des mouvements.
- Repérer les articles sous seuil de réapprovisionnement.
- Comparer la performance commerciale des magasins et des catégories.
- Détecter les incohérences entre mouvements et ventes.

## Utilisation
Ouvrir `commerce_demo.sqlite` dans DB Browser for SQLite, DBeaver ou Python `sqlite3`, puis exécuter `analyses.sql`. Les exports CSV et les résultats de référence sont inclus.

**Limites :** marges brutes estimées avant charges fixes et impôts, aucun retour ni transfert entre magasins, tarifs fictifs en USD.
