'use strict';

// Variáveis
let somaMozzarella = 0;
let somaCalabresa = 0;
let somaMista = 0;
let vendaMozzarrella = 0.00;
let vendaCalabresa = 0.00;
let vendaMista = 0.00;

// Manipulação do D.O.M nos botões
let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

// Eventos
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',exportar,false);

// Funções
function venda(e){
  if(document.getElementById('mozzarella').checked){
    somaMozzarella = somaMozzarella + 1;
    vendaMozzarrella = vendaMozzarrella + 25.00
    document.getElementById('resultadoMozzarella').innerHTML = somaMozzarella;
    document.getElementById('vendasMozzarella').innerHTML = vendaMozzarrella.toFixed(2);
  }else if(document.getElementById('calabresa').checked){
    somaCalabresa = somaCalabresa + 1;
    vendaCalabresa = vendaCalabresa + 25.00
    document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
    document.getElementById('vendasCalabresa').innerHTML = vendaCalabresa.toFixed(2);
  }else if(document.getElementById('mista').checked){
    somaMista = somaMista + 1;
    vendaMista = vendaMista + 12.5
    document.getElementById('resultadoMista').innerHTML = somaMista;
    document.getElementById('vendasMista').innerHTML = vendaMista.toFixed(2);
  }
}


