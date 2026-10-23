# Rapport de validation — Portfolio V11 Executive Responsive

**Statut : prêt pour revue avant publication.** Ce rapport distingue les contrôles effectués de ceux qui nécessitent encore un navigateur public.

## Problèmes corrigés

- **Marges latérales manquantes sur iPhone** : plusieurs déclarations `.section{padding:… 0}` annulaient les marges de `.container`. Correction du CSS via `padding-block` et règles explicites sur `.section.container` et `.section.band > .container`.
- **Contenu visible derrière l'en-tête pendant le défilement** : remplacement du fond semi-transparent par un fond opaque, cohérent avec chaque thème. Suppression du `backdrop-filter` qui amplifiait le problème.
- **Rythme visuel sur petit écran** : tailles des titres, disposition du portrait biographique, espacements des études de cas, boutons et contrastes ajustés.

## Validation automatisée

| Test | Résultat |
|---|---|
| Pages HTML contrôlées | **8** (accueil FR, EN, 4 SQL, Excel, Power BI) |
| Rendus responsive isolés | **64** combinaisons page × largeur, sans débordement horizontal |
| Largeurs contrôlées | 320, 360, 375, 390, 414, 768, 1024, 1280 px |
| Thème sombre | 8 pages testées après clic sur soleil/lune : fond sombre et en-tête opaques |
| Menu mobile | Ouverture et fermeture vérifiées |
| Liens locaux et ancres | Aucun lien introuvable détecté |
| JavaScript | Contrôle de syntaxe de tous les fichiers `.js` réussi |
| Bases SQLite | Intégrité `PRAGMA integrity_check` sur 4 bases : OK |
| Requêtes SQL | **24/24** exécutées avec succès directement sur les bases avec SQLite |
| Scripts, schémas, bases et résultats SQL | **16/16 fichiers de données comparés inchangés** par rapport à la V10 |
| Fichiers ZIP | Test d'intégrité effectué après empaquetage |

### Vérification visuelle sur la page d'accueil

| Largeur | Document | Marge de la section Expertises | Fond en-tête |
|---|---|---|---|
| 320 px | 320 px | 16px | rgb(247, 246, 242) |
| 360 px | 360 px | 16px | rgb(247, 246, 242) |
| 375 px | 375 px | 20px | rgb(247, 246, 242) |
| 390 px | 390 px | 20px | rgb(247, 246, 242) |
| 414 px | 414 px | 20px | rgb(247, 246, 242) |
| 768 px | 768 px | 22px | rgb(247, 246, 242) |
| 1024 px | 1024 px | 30px | rgb(247, 246, 242) |
| 1280 px | 1280 px | 30px | rgb(247, 246, 242) |

## Limites clairement identifiées

- Les rendus ont été validés dans **Chromium isolé** en injectant le CSS, les scripts et les images locales. L'environnement bloque l'ouverture des URL HTTP locales et du site public ; cela ne constitue pas un test sur Safari iOS réel.
- Le moteur SQLite WebAssembly `sql.js` télécharge ses fichiers depuis un CDN. Les scripts et les requêtes ont été conservés, mais la connexion CDN/exécution live dans GitHub Pages nécessite un test **après mise en ligne**.
- Les liens externes Tableau, Power BI, Upwork et WhatsApp sont conservés ; leur contenu n'a pas été retesté dans les services tiers.
- Aucun classement mondial objectif de portfolios n'a été établi ; la V11 vise une qualité comparable aux références haut de gamme sans revendiquer un « top 5 » certifié.

## Déploiement GitHub Pages

Aucune publication n'a été effectuée pendant la refonte. Dans Chrome sur ton téléphone, remplace le fichier `portfolio-v7.zip` dans la branche `main` par l'archive de compatibilité fournie avec la V11. Le workflow GitHub existant l'extrait vers `gh-pages` ; paramètres Pages : **gh-pages** / **/(root)**.

Après publication, vérifier l'accueil en clair et sombre, le menu mobile et un projet SQL affichant « SQLite prêt · 100 % navigateur ».
