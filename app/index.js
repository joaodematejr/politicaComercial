var ipBackEnd = "https://localhost:5001/"
var jwtoken = "*"


var listaTiposPolicitas = [];

function consultarTiposPoliticas() {
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", `${ipBackEnd}*`, false);
  xhttp.setRequestHeader('Authorization', 'Bearer ' + jwtoken);
  xhttp.send();
  let tipoPolitica = JSON.parse(xhttp.responseText);
  tipoPolitica.forEach(tp => {
    listaTiposPolicitas.push({
      id: tp.value,
      text: tp.description
    });
  });
}
consultarTiposPoliticas()

var listaSelectNomePolicita = [];
var id = 0;

document.getElementById('btnTeste').addEventListener('click', e => {
  console.log("listaSelectNomePolicita", listaSelectNomePolicita)
});

document.getElementById('btnNovaRegra').addEventListener('click', e => {
  let nome = document.getElementById('nome').value;
  let tipo = document.getElementById('tipo').value;
  let dataInicio = document.getElementById('dataInicio').value;
  let dataFim = document.getElementById('dataFim').value;
  let descricao = document.getElementById('nome').value;
  let editavel = document.getElementById('editavel').checked;

  if (nome === "") {
    alert('Nome Vazio')
  } else if (tipo === "") {
    alert('Tipo Vazio')
  } else if (descricao === "") {
    alert('Descrição Vazia')
  } else if (dataInicio === "") {
    alert('Data de Inicio Vazia')
  } else if (dataFim === "") {
    alert('Data de Final Vazia')
  } else {
    criarRegra(nome);
    document.getElementById("titleRegra").innerHTML = tipo;
  }

});
function criarRegra(title) {
  id++
  listaSelectNomePolicita.push({
    value: id,
    text: title
  });
  //SELECT POLITICA
  document.getElementById("politicas").innerHTML = "";
  var selectNomePolicita = document.getElementById('politicas');
  listaSelectNomePolicita.forEach(option => {
    selectNomePolicita.options.add(new Option(option.text, option.value));
  });
  $('#exampleModal').modal('hide');
  var botaoNovaRegra = document.getElementById('liNovaRegra');
  botaoNovaRegra.removeAttribute("hidden");
}

//SELECT MODAL
var selectBoxTipoPolitica = document.getElementById('tipo');
listaTiposPolicitas.forEach(option => {
  selectBoxTipoPolitica.options.add(new Option(option.text, option.value));
});

document.getElementById('politicas').addEventListener('change', e => {
  let selectBoxTipoPolitica = document.getElementById('politicas').value;
  console.log("selectBoxTipoPolitica", selectBoxTipoPolitica)
});

document.getElementById('novaRegra').addEventListener('click', e => {
  alert('oi')
});

























