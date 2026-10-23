# Rapport de refonte et de validation — Frédéric Asiani Mubiala

**Édition : 23 octobre 2026 · Livraison soumise à validation, non publiée sur GitHub**

## 1. Synthèse de l’audit

La version de référence s’appuyait sur une interface sombre, des cartes répétitives et plusieurs rubriques très longues. Le nouveau site opte pour une architecture éditoriale, une identité personnelle minimaliste et une séparation claire entre expertise, publications, études de cas et services privés. L’ancien workflow GitHub Pages publie une archive `portfolio-v7.zip` sur la branche `gh-pages`, ce qui explique qu’un simple remplacement des fichiers de `main` ne publie pas forcément les changements.

## 2. Refonte livrée

- Direction artistique sur mesure : bleu marine, blanc cassé, pétrole discret, sérif éditoriale + sans-serif de lecture, espacements structurés, repères typographiques discrets et absence de halos décoratifs.
- Deux thèmes de même architecture et de même contenu, initialisés avant le chargement du CSS selon le système puis le choix enregistré.
- Commutateur clavier/lecteur d’écran (`aria-label`, `aria-pressed`) ; contraste des couleurs principales contrôlé.
- Parcours éditorial : accueil, expertises, études de cas, parcours, recherche, conseil et formation, contact.
- Navigation responsive, lien d’évitement clavier, menu accessible, états de focus visibles.
- Quatre projets SQL conservés : schéma, SQLite, 24 requêtes, laboratoire WebAssembly et aperçu JSON en secours.
- Projets Excel bancaire anonymisé et rapport Power BI conservés ; liens Tableau et Upwork intégrés.
- Huit références MPRA, ouvrages, Zando Consulting et Zando Digital préservés.
- Distinction explicitement affichée entre les fonctions publiques et les prestations privées.
- Métadonnées SEO, Open Graph, sitemap et favicon ; version synthétique en anglais.

## 3. Contrôles exécutés dans cette session

| Test | Résultat |
|---|---|
| Intégrité SQLite de quatre bases | `ok` pour 4/4 |
| Exécution des analyses dans SQLite local | 24/24 réussies |
| Syntaxe JavaScript (`node --check`) | Aucune erreur détectée |
| Liens internes et ancres sur 8 pages | Aucun lien manquant détecté |
| Identifiants HTML dupliqués | Aucun détecté |
| Mise en page des 8 pages à 320, 360, 390, 768, 1024 et 1440 px (Chromium isolé) | 48/48 sans débordement horizontal |
| Thème système clair et sombre, et bascule au clavier sur 8 pages | 16/16 cas conformes en navigateur isolé |
| Bouton menu mobile : ouverture, fermeture, ARIA | Conforme dans les tests isolés |
| SQL fallback : six requêtes disponibles et résultats pré-calculés pour quatre laboratoires | 4/4 conformes |

### Contrastes ponctuels (calcul WCAG)

- Texte principal sur fond clair : **13,54:1**.
- Texte secondaire sur fond clair : **5,82:1**.
- Texte principal sur fond sombre : **15,99:1**.
- Texte secondaire sur fond sombre : **10,50:1**.
- Bouton principal clair : **7,79:1**.
- Bouton principal sombre : **10,69:1**.

Ces combinaisons dépassent le seuil WCAG AA de 4,5:1 pour le texte courant. Ce contrôle ponctuel ne constitue **pas** une certification de conformité WCAG 2.2 AA de toutes les interfaces.

## 4. Limites et points à contrôler avant publication

1. Le navigateur de test bloque les navigations vers les serveurs locaux et les dépendances réseau. Les pages ont été rendues en mode isolé avec CSS/JS intégrés en mémoire. **Aucun essai de bout en bout du moteur SQL WebAssembly chargé depuis Cloudflare n’a été possible** : le traitement SQL est vérifié côté SQLite local et le fallback est testé, mais l’exécution dans les navigateurs de tes visiteurs reste à contrôler.
2. Les captures d’écran de prévisualisation utilisent les initiales de secours à la place de l’avatar GitHub distant, qui n’a pas pu être récupéré dans le navigateur isolé. La version livrée conserve la référence à la vraie photo de ton profil GitHub public ; aucune photo n’a été inventée.
3. Le rapport Power BI intégré et les visualisations externes Tableau exigent une vérification sur Internet : leurs autorisations, chargement et disponibilité dépendent de services tiers.
4. Le choix de thème est implémenté avec `localStorage` et logique système. La bascule et le thème initial ont été testés dans Chromium isolé ; la persistance en contexte GitHub Pages réel reste à confirmer après mise en ligne.
5. Les tests n’ont pas été exécutés dans Safari iOS réel, Chrome Android réel ni sur un lecteur d’écran. La qualité responsive et l’accessibilité finale doivent être confirmées sur ces plateformes.
6. Les performances réelles (LCP, CLS, INP, Lighthouse) n’ont pas été mesurées sur l’URL publique. La police web et les avatars externes peuvent influencer le chargement.
7. Les projets SQL reposent sur des **données fictives**, et aucun effet ou résultat client réel n’est revendiqué.

## 5. Procédure de validation et de publication

Ouvrir les prévisualisations fournies ; contrôler les contenus et le positionnement. Après approbation explicite, remplacer uniquement `portfolio-v7.zip` dans la branche `main` du dépôt existant. Le workflow GitHub Actions actuellement en place extraira cette archive sur `gh-pages`. Voir `DEPLOIEMENT_GITHUB.md` pour les instructions Chrome mobile/GitHub Desktop et la stratégie de retour arrière.

**Statut : REFONTE PRÉPARÉE ET TESTÉE EN ENVIRONNEMENT ISOLÉ — PAS ENCORE PUBLIÉE.**
