CREATE TABLE clients (
 client_id INTEGER PRIMARY KEY, segment TEXT NOT NULL CHECK(segment IN ('Particulier','PME','Professionnel')),
 agence TEXT NOT NULL, date_entree TEXT NOT NULL);
CREATE TABLE comptes (
 compte_id INTEGER PRIMARY KEY, client_id INTEGER NOT NULL REFERENCES clients(client_id),
 type_compte TEXT NOT NULL CHECK(type_compte IN ('Courant','Epargne')),
 ouvert_le TEXT NOT NULL, statut TEXT NOT NULL CHECK(statut IN ('Actif','Inactif')));
CREATE TABLE transactions (
 transaction_id INTEGER PRIMARY KEY, compte_id INTEGER NOT NULL REFERENCES comptes(compte_id),
 date_operation TEXT NOT NULL, type_operation TEXT NOT NULL CHECK(type_operation IN ('Virement','Depot','Retrait','Paiement')),
 canal TEXT NOT NULL, pays TEXT NOT NULL, sens TEXT NOT NULL CHECK(sens IN ('ENTRANT','SORTANT')),
 montant_usd NUMERIC NOT NULL CHECK(montant_usd>0), statut TEXT NOT NULL CHECK(statut IN ('VALIDE','REJETE')));
CREATE INDEX idx_tx_compte_date ON transactions(compte_id,date_operation);
CREATE INDEX idx_tx_type ON transactions(type_operation,statut);
