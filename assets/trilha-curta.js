/* Comportamentos compartilhados pelas trilhas curtas (rapida e extrema).
   Cada pagina traz seus proprios dados e monta seu HTML; daqui vem o que as
   duas fazem igual: salvar, crescer o campo, exemplos, tema, avisos e acoes. */
(function (raiz) {
  'use strict';

  var escapes = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'};

  function esc(valor) {
    return String(valor).replace(/[&<>"]/g, function (c) { return escapes[c]; });
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  function tempo(segundos) {
    return pad(Math.floor(segundos / 60)) + ':' + pad(segundos % 60);
  }

  // Texto de exemplo com quebras de linha, ja escapado.
  function paragrafo(texto) {
    return esc(texto).replace(/\n/g, '<br>');
  }

  function carregar(chave) {
    try { return JSON.parse(localStorage.getItem(chave)) || {}; } catch (e) { return {}; }
  }

  function salvar(chave, estado) {
    try {
      localStorage.setItem(chave, JSON.stringify(estado));
      return true;
    } catch (e) {
      aviso('Não foi possível salvar. Baixe o resumo para não perder.');
      return false;
    }
  }

  // O campo cresce junto com o texto, para a equipe enxergar o que escreveu.
  function crescer(campo) {
    if (campo.scrollHeight > campo.clientHeight) {
      campo.style.height = 'auto';
      campo.style.height = campo.scrollHeight + 4 + 'px';
    }
  }

  function aviso(mensagem, milissegundos) {
    var alvo = document.getElementById('toast');
    if (!alvo) return;
    alvo.textContent = mensagem;
    alvo.hidden = false;
    clearTimeout(alvo._t);
    alvo._t = setTimeout(function () { alvo.hidden = true; }, milissegundos || 3200);
  }

  // Salva textareas e caixas de marcacao em `estado`, com um respiro entre gravacoes.
  function ligarCampos(chave, estado, aoMudar) {
    var agendado;
    function gravar() {
      clearTimeout(agendado);
      agendado = setTimeout(function () { salvar(chave, estado); }, 500);
    }
    document.addEventListener('input', function (e) {
      var campo = e.target;
      if (campo.tagName === 'TEXTAREA') crescer(campo);
      else if (!campo.dataset.guardar) return;
      estado[campo.id] = campo.value;
      if (aoMudar) aoMudar(campo);
      gravar();
    });
    document.addEventListener('change', function (e) {
      if (e.target.type !== 'checkbox') return;
      estado[e.target.id] = e.target.checked;
      if (aoMudar) aoMudar(e.target);
      salvar(chave, estado);
    });
  }

  var ABRIR = 'Ver exemplo preenchido';
  var FECHAR = 'Ocultar exemplo';

  // Botao por exemplo e um botao que abre todos de uma vez.
  function ligarExemplos() {
    var todosAbertos = false;

    document.addEventListener('click', function (e) {
      var botao = e.target.closest('.ex-toggle');
      if (!botao) return;
      var caixa = document.getElementById('ex-' + botao.dataset.example);
      var aberto = !caixa.hidden;
      caixa.hidden = aberto;
      botao.setAttribute('aria-expanded', String(!aberto));
      botao.querySelector('span').textContent = aberto ? ABRIR : FECHAR;
    });

    var geral = document.getElementById('examples-button');
    if (!geral) return;
    geral.addEventListener('click', function () {
      todosAbertos = !todosAbertos;
      document.querySelectorAll('.example-box').forEach(function (caixa) {
        caixa.hidden = !todosAbertos;
      });
      document.querySelectorAll('.ex-toggle').forEach(function (botao) {
        botao.setAttribute('aria-expanded', String(todosAbertos));
        botao.querySelector('span').textContent = todosAbertos ? FECHAR : ABRIR;
      });
      geral.setAttribute('aria-pressed', String(todosAbertos));
      geral.textContent = todosAbertos ? 'Ocultar exemplos' : 'Ver exemplos';
    });
  }

  // O tema acompanha a escolha feita na trilha completa.
  function ligarTema() {
    var botao = document.getElementById('theme-button');
    if (!botao) return;
    function rotular() {
      var escuro = document.documentElement.dataset.theme === 'dark';
      botao.textContent = escuro ? 'Tema claro' : 'Tema escuro';
      var meta = document.querySelector('meta[name=theme-color]');
      if (meta) meta.content = escuro ? '#101b17' : '#f6f7f2';
    }
    botao.addEventListener('click', function () {
      var escuro = document.documentElement.dataset.theme === 'dark';
      document.documentElement.dataset.theme = escuro ? 'light' : 'dark';
      try { localStorage.setItem('startlab-theme', escuro ? 'light' : 'dark'); } catch (e) {}
      rotular();
    });
    rotular();
  }

  function baixar(texto, arquivo) {
    var link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([texto], {type: 'text/plain;charset=utf-8'}));
    link.download = arquivo;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
  }

  function copiar(texto, aoConseguir) {
    function manual() {
      var campo = document.createElement('textarea');
      campo.value = texto;
      document.body.appendChild(campo);
      campo.select();
      try { document.execCommand('copy'); aoConseguir(); }
      catch (e) { aviso('Copie pelo arquivo .txt.'); }
      campo.remove();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(aoConseguir, manual);
    } else manual();
  }

  // Baixar, copiar, apagar e imprimir: iguais nas duas trilhas.
  function ligarAcoes(opcoes) {
    var acoes = {
      'export-button': function () {
        baixar(opcoes.resumo(), opcoes.arquivo);
        aviso(opcoes.avisoBaixado || 'Resumo baixado.');
      },
      'copy-button': function () {
        copiar(opcoes.resumo(), function () { aviso('Resumo copiado.'); });
      },
      'clear-button': function () {
        if (!confirm(opcoes.perguntaApagar)) return;
        try { localStorage.removeItem(opcoes.chave); } catch (e) {}
        opcoes.aoApagar();
        aviso('Respostas apagadas.');
      },
      'print-button': function () { window.print(); }
    };
    Object.keys(acoes).forEach(function (id) {
      var botao = document.getElementById(id);
      if (botao) botao.addEventListener('click', acoes[id]);
    });
  }

  function baixarArquivo(texto, arquivo, tipo) {
    var link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([texto], {type: tipo}));
    link.download = arquivo;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
  }

  // Uma copia restaurada substitui tudo: so aceitamos o que reconhecemos.
  function validarCopia(bruto, valida) {
    if (!bruto || typeof bruto !== 'object' || Array.isArray(bruto)) throw Error('formato');
    var chaves = Object.keys(bruto);
    if (chaves.length > 300) throw Error('tamanho');
    var limpo = {};
    chaves.forEach(function (k) {
      var v = bruto[k];
      if (!valida(k)) throw Error('campo desconhecido: ' + k);
      if (typeof v === 'boolean') { limpo[k] = v; return; }
      if (typeof v !== 'string' || v.length > 20000) throw Error('valor invalido em ' + k);
      limpo[k] = v;
    });
    return limpo;
  }

  // Salvar a copia em .json e subir de volta depois, para continuar a startup.
  function ligarCopia(opcoes) {
    var salvarBtn = document.getElementById('save-copy');
    var subirBtn = document.getElementById('load-copy');
    var entrada = document.getElementById('copy-file');
    if (!salvarBtn || !subirBtn || !entrada) return;

    salvarBtn.addEventListener('click', function () {
      var pacote = {
        startlab: opcoes.trilha,
        versao: 1,
        salvoEm: new Date().toISOString(),
        dados: opcoes.estado()
      };
      baixarArquivo(JSON.stringify(pacote, null, 2), opcoes.arquivo, 'application/json');
      aviso('Cópia salva. Guarde o arquivo para continuar depois.');
    });

    subirBtn.addEventListener('click', function () { entrada.click(); });

    entrada.addEventListener('change', function (e) {
      var arquivo = e.target.files[0];
      if (!arquivo) return;
      var leitor = new FileReader();
      leitor.onload = function () {
        try {
          if (arquivo.size > 2000000) throw Error('arquivo muito grande');
          var pacote = JSON.parse(leitor.result);
          var bruto = pacote && pacote.dados ? pacote.dados : pacote;
          if (pacote && pacote.startlab && pacote.startlab !== opcoes.trilha) {
            throw Error('esta cópia é de outra trilha');
          }
          var limpo = validarCopia(bruto, opcoes.valida);
          if (!confirm('Subir esta cópia substitui o que está escrito nesta trilha. Continuar?')) return;
          opcoes.aoRestaurar(limpo);
          aviso('Cópia restaurada. Você pode continuar a sua startup.');
        } catch (erro) {
          aviso('Não foi possível ler esta cópia. Escolha um arquivo .json salvo por esta trilha.', 5000);
        }
      };
      leitor.onerror = function () { aviso('Não foi possível ler o arquivo.'); };
      leitor.readAsText(arquivo);
      e.target.value = '';
    });
  }

  raiz.TrilhaCurta = {
    esc: esc,
    pad: pad,
    tempo: tempo,
    paragrafo: paragrafo,
    carregar: carregar,
    salvar: salvar,
    crescer: crescer,
    aviso: aviso,
    baixarArquivo: baixarArquivo,
    ligarCampos: ligarCampos,
    ligarExemplos: ligarExemplos,
    ligarTema: ligarTema,
    ligarAcoes: ligarAcoes,
    ligarCopia: ligarCopia
  };
})(window);
