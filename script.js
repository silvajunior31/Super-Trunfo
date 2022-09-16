var carta1 = {
  nome: "Seiya de Pegasus",
  imagem:
    "https://pm1.narvii.com/6809/ab20c7c73e900b9dfc40bed8f6e32bf9561f0bbcv2_hq.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 8
  }
};

var carta2 = {
  nome: "Hyoga de Cisne",
  imagem: "https://s.aficionados.com.br/imagens/hyoga.jpg",
  atributos: {
    ataque: 7,
    defesa: 4,
    magia: 6
  }
};

var carta3 = {
  nome: "Shiryu de dragão",
  imagem: "https://s.aficionados.com.br/imagens/shiryu.jpg",
  atributos: {
    ataque: 7,
    defesa: 7,
    magia: 8
  }
};

var carta4 = {
  nome: "Shun de Andromeda",
  imagem:
    "https://johto.legiaodosherois.com.br/wp-content/uploads/2022/06/legiao_sKFE32aJ1MSp.jpg",
  atributos: {
    ataque: 4,
    defesa: 8,
    magia: 7
  }
};

var carta5 = {
  nome: "Ikki de Fênix",
  imagem:
    "https://i.pinimg.com/originals/87/38/7f/87387f75d5af53e094124100a5bd19d0.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 8
  }
};

var carta6 = {
  nome: "Saga de Gêmeos",
  imagem:
    "https://pm1.narvii.com/6414/a6066f6e21a640573eb3e039f6281a7cc76b603b_hq.jpg",
  atributos: {
    ataque: 9,
    defesa: 5,
    magia: 8
  }
};

var carta7 = {
  nome: "Shaka de Virgem",
  imagem:
    "https://ovicio.com.br/wp-content/uploads/2021/08/20210823-virgo-saint.jpg",
  atributos: {
    ataque: 8,
    defesa: 7,
    magia: 8
  }
};

var carta8 = {
  nome: "Aiolia de Leão",
  imagem:
    "http://pm1.narvii.com/6885/5a6a4204d55c8736142c87d7031590038a3e219er1-480-480v2_00.jpg",
  atributos: {
    ataque: 8,
    defesa: 5,
    magia: 7
  }
};

var carta9 = {
  nome: "Mu de Áries",
  imagem:
    "http://pm1.narvii.com/6620/4b379e959027c299b3add032095f93682f3794c1_00.jpg",
  atributos: {
    ataque: 6,
    defesa: 8,
    magia: 7
  }
};

var carta10 = {
  nome: "Camus de Áquario",
  imagem:
    "http://pm1.narvii.com/7142/a2a3978d5def9facb4d0fe20d1c810bbc5c4bed4r1-450-450v2_00.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 8
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Você venceu";
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Você perdeu, o poder do cavaleiro é maior";
  } else {
    elementoResultado.innerHTML = "Empatou";
  }
  console.log(cartaMaquina);
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

//inicia nova rodada
//function iniciarNovaRodada() {
//document.getElementById("btnSortear").disabled = true; //habilita o botão sortear
//document.getElementById("btnJogar").disabled = false; // desabilita o botão jogar
//document.getElementById("btnNovaRodada").disabled = true; //desabilita o botão jogar

//limpa a div que apresenta as opções na tela
//opcoes.innerHTML = "";

//limpa a div que apresenta as mensagens do resultado ma tela
//elementoResultado.innerHTML = "";

//limpa a imagem da carta do jogador na tela
//divCartaJogador.style.backgroundImage = `url(${""})`;

//limpa a imagem da carta da maquina na tela
//divCartaMaquina.style.backgroundImage = `url(${""})`;

//limpa o nome do jogador que aparece na tela e exibe a moldura
//var nome = `<p class = "carta-subtitle">${""}</p>`;
//divCartaJogador.innerHTML = nome + moldura;

//limpa o nome da carta da maquina que aparece na tela e exibe a moldura
//var nome = `<p class = "carta-subtitle">${""}</p>`;
//divCartaMaquina.innerHTML = nome + moldura;
//}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador + ")"

  var moldora =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldora + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador + ")"

  var moldora =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldora + nome + tagHTML + opcoesTexto + "</div>";
}