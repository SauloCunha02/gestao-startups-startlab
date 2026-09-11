"""Recria os dados do site a partir do conteúdo pedagógico versionado."""
from pathlib import Path
import json, runpy
root=Path(__file__).resolve().parents[1]
source=runpy.run_path(str(root/'conteudo/material.py'))
data={k.lower():source[k] for k in ('INTRO','LESSONS','WORKSHEETS','INTERVIEW','GUIDE')}
(root/'assets').mkdir(exist_ok=True)
(root/'assets/conteudo.js').write_text('window.STARTLAB_DATA = '+json.dumps(data,ensure_ascii=False)+';\n',encoding='utf-8')
(root/'index.html').write_text((root/'scripts/pagina.html').read_text(encoding='utf-8'),encoding='utf-8')
print('assets/conteudo.js atualizado')
