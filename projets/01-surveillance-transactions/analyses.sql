-- 1. Volumétrie et montants mensuels des opérations validées.
SELECT substr(date_operation,1,7) AS mois, COUNT(*) AS nb_operations,
 ROUND(SUM(montant_usd),2) AS volume_usd, ROUND(AVG(montant_usd),2) AS ticket_moyen_usd
FROM transactions WHERE statut='VALIDE' GROUP BY substr(date_operation,1,7) ORDER BY mois;

-- 2. Répartition des volumes par canal (toutes les opérations valides).
SELECT canal, COUNT(*) AS nb, ROUND(SUM(montant_usd),2) AS volume_usd,
 ROUND(100.0*COUNT(*)/SUM(COUNT(*)) OVER (),2) AS part_pct
FROM transactions WHERE statut='VALIDE' GROUP BY canal ORDER BY volume_usd DESC;

-- 3. Vélocité inhabituelle : quatre opérations SORTANTES dans une heure.
SELECT compte_id, substr(date_operation,1,13) AS heure,
 COUNT(*) AS nb, ROUND(SUM(montant_usd),2) AS montant_total_usd
FROM transactions WHERE sens='SORTANT' AND statut='VALIDE'
GROUP BY compte_id,substr(date_operation,1,13) HAVING COUNT(*)>=4
ORDER BY nb DESC,montant_total_usd DESC;

-- 4. Opérations atypiques par rapport à la moyenne du compte (3x, plancher 500 USD).
WITH normales AS (
 SELECT transaction_id,compte_id,date_operation,montant_usd,
 AVG(montant_usd) OVER (PARTITION BY compte_id) AS moyenne_compte
 FROM transactions WHERE statut='VALIDE')
SELECT transaction_id,compte_id,date_operation,montant_usd,
 ROUND(moyenne_compte,2) AS moyenne_compte_usd
FROM normales WHERE montant_usd>=500 AND montant_usd>3*moyenne_compte
ORDER BY montant_usd DESC LIMIT 25;

-- 5. Opérations transfrontalières et indicateurs de vigilance, sans jugement de fraude.
SELECT pays, COUNT(*) AS nb_operations,
 ROUND(SUM(montant_usd),2) AS volume_usd
FROM transactions WHERE statut='VALIDE' AND pays<>'RDC'
GROUP BY pays ORDER BY volume_usd DESC;

-- 6. Contrôle qualité : taux de transactions rejetées.
SELECT COUNT(*) AS total, SUM(CASE WHEN statut='REJETE' THEN 1 ELSE 0 END) AS rejetees,
 ROUND(100.0*SUM(CASE WHEN statut='REJETE' THEN 1 ELSE 0 END)/COUNT(*),2) AS taux_rejet_pct
FROM transactions;
