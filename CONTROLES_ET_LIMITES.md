# Contrôles techniques – Refonte consultant V6

Date : 23 octobre 2026.

## Évolutions mises à disposition
- Accueil orienté conseil, présentation des services et prise de contact via WhatsApp selon le besoin.
- Quatre études SQL avec problème métier, méthode, KPI, interprétations, recommandations et limites sur données simulées.
- **24 requêtes SQL** opérationnelles sur quatre bases SQLite fictives, interface SQL dans le navigateur via sql.js et repli vers des aperçus JSON pré-calculés lorsque le moteur externe ne se charge pas.
- Projet Excel bancaire avec données agrégées et classeur anonymisé (aucune donnée individuelle du fichier original dans cette archive).
- Rapport Power BI, deux tableaux Tableau, profil Tableau Public, Upwork, Zando Consulting et Zando Digital.
- Landing page anglaise `/en/`, liens alternatifs de langue, balisage SEO et plan de site XML.

## Tests réalisés hors ligne
- Les huit pages HTML ont leurs liens locaux et ancres internes vérifiés.
- Trois scripts JavaScript passent le contrôle syntaxique `node --check`.
- Quatre bases SQLite : `PRAGMA integrity_check = ok` et `PRAGMA foreign_key_check` sans anomalie.
- Six requêtes analytiques par base exécutées sans erreur, soit **24/24**.
- Six présélections SQL disponibles dans chaque laboratoire.

## Limites
- Le rendu mobile et la fonctionnalité JavaScript n'ont pas pu être certifiés dans un vrai navigateur : la navigation de Chromium en environnement de test est bloquée par des règles d'administration.
- Le moteur SQL WebAssembly est chargé depuis un CDN. Le comportement réseau en production et la compatibilité Safari doivent être testés après publication.
- Les chiffres sont pédagogiques et ne doivent pas être assimilés à des résultats de missions réalisées pour des banques ou entreprises identifiables.
- Les pages Power BI et Tableau utilisent des ressources externes : disponibilité/autorisation d'incorporation non garantie par la validation locale.
- Le site a été préparé, **pas déployé** par cet outil sur GitHub. Il faut copier son contenu à la racine du dépôt local dans GitHub Desktop, puis Commit et Push.
