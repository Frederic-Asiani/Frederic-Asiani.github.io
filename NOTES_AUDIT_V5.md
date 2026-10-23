# Refonte V5 — Audit éditorial et ergonomique

## Benchmark qualitatif
- Le portfolio met désormais la décision métier en premier, avant le code : problématique, méthode, constats, recommandations et limites.
- Le code et les bases restent vérifiables dans les laboratoires SQL interactifs. Les contenus pédagogiques sont explicitement distingués des résultats clients.
- Les offres et CTA WhatsApp sont définis par type de besoin, sans promesse commerciale irréaliste.
- Une landing page anglaise répond au besoin de visibilité internationale ; les laboratoires restent francophones.

## Contrôles à réaliser après publication
- Tester l’exécution WebAssembly SQLite sur réseau réel depuis Chrome et Safari (les pages locales utilisent un mode de secours quand le CDN est indisponible).
- Mesurer les indicateurs Core Web Vitals (LCP, INP, CLS) sur la version publique via PageSpeed Insights et Search Console ; ils ne sont pas mesurés ici.
- Ajouter à terme des études de cas clients documentées avec consentement, sans révéler de données confidentielles.
- Ajouter des liens directs vers les dépôts SQL individuels une fois tous les noms et contenus corrigés.

## Sources de référence
- INFORMS, Building an Analytics Portfolio and CV: https://careercenter.informs.org/career-resources/on-the-job-3/building-an-analytics-portfolio-and-cv-for-operations-research-analyst-2026-136
- Google, Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
