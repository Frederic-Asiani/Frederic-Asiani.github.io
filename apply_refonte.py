#!/usr/bin/env python3
"""Intègre les fichiers premium dans un clone LOCAL du dépôt GitHub Pages.

N'envoie aucune donnée vers GitHub et ne modifie ni SQL, ni SQLite, ni js existants.
Usage: python apply_refonte.py --repo /chemin/vers/Frederic-Asiani.github.io
       python apply_refonte.py --repo /chemin/vers/Frederic-Asiani.github.io --dry-run
"""
from __future__ import annotations
import argparse
import shutil
from pathlib import Path

BOOT = """<script>/* Thème synchronisé avant affichage */try{let t=localStorage.getItem('fa-theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}</script>"""
PROJECTS = [
    'projets/01-surveillance-transactions/index.html',
    'projets/02-risque-credit/index.html',
    'projets/03-agences-clientele/index.html',
    'projets/04-stocks-commerce/index.html',
    'projets/05-analyse-bancaire-excel/index.html',
    'projets/06-powerbi/index.html',
]

def main():
    args = argparse.ArgumentParser(description=__doc__)
    args.add_argument('--repo', type=Path, required=True, help='Répertoire d’un clone local du dépôt')
    args.add_argument('--dry-run', action='store_true', help='Analyser sans écrire')
    args = args.parse_args()
    repo = args.repo.expanduser().resolve()
    source = Path(__file__).resolve().parent
    required = ['index.html', 'styles.css', 'main.js', 'sql-lab.js'] + PROJECTS
    absent = [p for p in required if not (repo / p).is_file()]
    if absent:
        raise SystemExit('Dépôt incomplet : ' + ', '.join(absent))
    original = (repo / 'index.html').read_text(encoding='utf8')
    for target in PROJECTS[:4]:
        if target.replace('/index.html', '') not in original:
            raise SystemExit(f'Le lien SQL est absent du dépôt : {target}')
    # Éviter une injection dangereuse dans une structure inconnue.
    updates=[]
    for path in PROJECTS:
        file=repo / path
        html=file.read_text(encoding='utf8')
        if '</head>' not in html or '</body>' not in html:
            raise SystemExit(f'HTML inattendu : {path}')
        if 'premium.css' not in html:
            html = html.replace('</head>', BOOT + '\n<link rel="stylesheet" href="../../premium.css">\n</head>',1)
        if 'premium.js' not in html:
            html = html.replace('</body>', '<script defer src="../../premium.js"></script>\n</body>',1)
        updates.append((file, html))
    print('Dépôt validé :', repo)
    print('Conservation : main.js, sql-lab.js, styles.css, toutes les bases de données et fichiers de projets.')
    print('Intégration thème sur', len(updates), 'pages secondaires ; index.html remplacé ; 2 nouveaux fichiers à la racine.')
    if args.dry_run:
        print('SIMULATION : aucune écriture.');return
    for name in ('index.html','premium.css','premium.js'):
        shutil.copyfile(source / name, repo / name)
    for path, html in updates:
        path.write_text(html, encoding='utf8')
    print('Modification du clone local terminée. Aucun commit, push ni déploiement effectué.')

if __name__=='__main__':
    main()
