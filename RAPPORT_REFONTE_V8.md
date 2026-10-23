# Rapport de refonte — Portfolio Frédéric Asiani Mubiala

**Version :** V8 — Direction éditoriale institutionnelle  
**Date :** 23 octobre 2026  
**Déploiement :** **aucun déploiement effectué** ; version soumise à validation.

## 1. Objectif et direction artistique

Le site a été restructuré comme un portfolio de consultant en Data Analytics et en économie appliquée. L’identité visuelle est fondée sur une typographie éditoriale (DM Sans et Source Serif 4 avec typographies système en secours), une palette bleu marine / blanc cassé / vert pétrole, des espaces de lecture généreux et des séparateurs discrets. Les projets sont présentés dans une liste éditoriale, pas une accumulation de cartes génériques.

La photographie du bandeau utilise l’avatar public GitHub `avatars.githubusercontent.com/u/135480796` lorsqu’il est accessible. Une vignette typographique **FA** est prévue en cas d’absence d’image ; aucune photo personnelle n’a été créée artificiellement.

## 2. Structure livrée

- **Accueil :** présentation personnelle et accès directs aux études de cas et au contact.
- **Expertises :** BI, analyse financière, économie quantitative, recherche et connaissance institutionnelle.
- **Études de cas SQL :** quatre études reproductibles, données fictives, 24 requêtes et laboratoire SQLite côté navigateur préservés.
- **Réalisations BI :** liens d’origine Power BI et Tableau, page Excel et fichier de synthèse anonymisé.
- **Parcours :** IGT, Central Motors et formation à l’Université de Kinshasa.
- **Recherche :** huit références MPRA, livres et éditions linguistiques annoncées.
- **Conseil et formation :** Zando Consulting, Zando Digital, contact WhatsApp et distinction explicite entre activités privées et fonction publique.
- **Contact :** Upwork, LinkedIn, courriel et WhatsApp.
- **Version anglaise** conservée et navigation corrigée pour ne plus renvoyer inutilement vers la page française.

## 3. Thèmes

- Styles pilotés par variables CSS pour **mode clair** et **mode sombre**, sur les huit pages.
- Sélecteur soleil/lune dans l’en-tête, avec nom accessible et `aria-pressed`.
- Préférence système consultée au chargement ; choix explicite mémorisé sous la clé `asiani-color-theme` dans `localStorage`.
- Script de démarrage dans `<head>` avant le chargement des styles pour limiter le flash de thème incorrect.
- Bouton et menu accessibles au clavier ; fermeture du menu avec `Échap`.

## 4. Tests réalisés

| Contrôle | Résultat |
|---|---|
| Présence des 8 pages HTML et des sélecteurs de thème | OK |
| Présence d’un menu accessible sur chaque page | OK |
| Test isolé dans Chromium à 320, 390, 768 et 1440 px : 8 pages × 4 largeurs | **32/32 sans débordement horizontal** après correction |
| Bascule clair/sombre avec changement effectif des couleurs | OK dans l’environnement de test isolé |
| Ouverture/fermeture du menu mobile via clic et Échap | OK dans l’environnement de test isolé |
| Erreurs JavaScript lors des contrôles UI isolés | Aucune détectée |
| Liens internes / ancres | Aucun chemin manquant détecté |
| Identifiants HTML dupliqués | Aucun détecté |
| Images sans attribut `alt` | Aucune détectée |
| Vérification `node --check` des JavaScript | OK |
| Bases SQLite : `PRAGMA integrity_check` | **4/4 = ok** |
| Exécution réelle des requêtes sur SQLite | **24/24 sans erreur** |
| Données nominatives du classeur `banque.xlsx` source dans la publication | **Absentes** |
| Laboratoires SQL en mode aperçu sans moteur CDN (test isolé navigateur) | **4/4 : 6 choix et tableau visibles, exécution personnalisée désactivée** |
| Contraste couleur de base (texte, texte secondaire, actions, fonds) | > 4,5:1 sur les paires échantillonnées |

### Limites connues et validations restantes

- L’environnement bloque la navigation Chromium vers un serveur local et vers certains domaines externes. Le HTML/CSS/JS a été testé en **injection isolée dans Chromium**, ce qui n’équivaut pas à un test complet du site servi depuis une URL publique.
- **Persistance réelle de `localStorage` d’une visite à l’autre** et absence de flash sur un téléphone physique : code présent, **pas validés de bout en bout**.
- **Chargement WebAssembly sql.js depuis CDN**, exécution de SQL dans le navigateur public et export CSV : composants conservés mais **pas validés de bout en bout** à cette étape. Les 24 requêtes ont été contrôlées sur SQLite local ; le mode aperçu est disponible quand le moteur CDN ne charge pas.
- Disponibilité des rapports externes Power BI/Tableau, livraison des e-mails et ouverture WhatsApp : dépend de services tiers, **à valider en conditions réelles**.
- Contrôle WCAG 2.2 AA complet, audits assistifs, lecteurs d’écran réels et mesures Lighthouse (LCP, CLS, INP) : **non réalisés**. Les contrastes de la palette ont été échantillonnés, sans prétendre couvrir chaque état.
- La photographie provenant de GitHub nécessite une connexion au domaine externe ; l’avatar de remplacement s’affiche si la requête est refusée.

## 5. Publication (seulement après approbation)

Ton workflow GitHub Actions actuel extrait **`portfolio-v7.zip`** depuis la racine de `main` et publie son contenu vers `gh-pages`. Pour utiliser cette refonte sans changer le workflow, une archive de publication portant ce nom est fournie séparément. Il suffit de remplacer ce ZIP dans `main` après validation, puis de confirmer le résultat de GitHub Actions et de vérifier que GitHub Pages utilise `gh-pages/(root)`.

**Ne publie pas cette version avant de l’avoir validée.**
