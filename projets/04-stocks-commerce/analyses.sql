-- 01_ventes_par_mois
SELECT substr(m.date_operation,1,7) AS mois,ROUND(SUM(m.quantite*p.prix*(1-v.remise)),2) AS chiffre_affaires,ROUND(SUM(m.quantite*(p.prix*(1-v.remise)-p.cout)),2) AS marge_brute FROM ventes v JOIN mouvements m ON m.id=v.mouvement_id JOIN produits p ON p.id=m.produit_id GROUP BY mois ORDER BY mois;

-- 02_top_produits
SELECT p.nom,SUM(m.quantite) AS unites_vendues,ROUND(SUM(m.quantite*p.prix*(1-v.remise)),2) AS chiffre_affaires FROM ventes v JOIN mouvements m ON m.id=v.mouvement_id JOIN produits p ON p.id=m.produit_id GROUP BY p.id ORDER BY chiffre_affaires DESC LIMIT 10;

-- 03_stock_par_magasin
SELECT g.nom AS magasin,p.nom AS produit,SUM(CASE WHEN m.type='ENTREE' THEN m.quantite ELSE -m.quantite END) AS stock_actuel,p.seuil,CASE WHEN SUM(CASE WHEN m.type='ENTREE' THEN m.quantite ELSE -m.quantite END)<p.seuil THEN 'ALERTE' ELSE 'OK' END AS statut FROM mouvements m JOIN produits p ON m.produit_id=p.id JOIN magasins g ON g.id=m.magasin_id GROUP BY g.id,p.id ORDER BY magasin,stock_actuel;

-- 04_performance_magasin
SELECT g.nom AS magasin,COUNT(v.id) AS lignes_de_vente,SUM(m.quantite) AS articles_vendus,ROUND(SUM(m.quantite*p.prix*(1-v.remise)),2) AS chiffre_affaires FROM ventes v JOIN mouvements m ON m.id=v.mouvement_id JOIN produits p ON p.id=m.produit_id JOIN magasins g ON g.id=m.magasin_id GROUP BY g.id ORDER BY chiffre_affaires DESC;

-- 05_marge_categorie
SELECT p.categorie,ROUND(SUM(m.quantite*p.prix*(1-v.remise)),2) AS revenus,ROUND(SUM(m.quantite*(p.prix*(1-v.remise)-p.cout)),2) AS marge_brute,ROUND(100.0*SUM(m.quantite*(p.prix*(1-v.remise)-p.cout))/SUM(m.quantite*p.prix*(1-v.remise)),2) AS taux_marge_pct FROM ventes v JOIN mouvements m ON m.id=v.mouvement_id JOIN produits p ON p.id=m.produit_id GROUP BY p.categorie ORDER BY revenus DESC;

-- 06_controle_integrite
SELECT (SELECT COUNT(*) FROM ventes) AS ventes,(SELECT COUNT(*) FROM mouvements WHERE type='SORTIE') AS sorties,(SELECT COUNT(*) FROM ventes v LEFT JOIN mouvements m ON m.id=v.mouvement_id WHERE m.id IS NULL OR m.type!='SORTIE') AS anomalies;