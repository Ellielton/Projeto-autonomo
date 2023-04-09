var altura = document.querySelector(".altura");

var largura = document.querySelector('.largura');
  
var btn = document.querySelector('.btn');

function mult(){
  var resultado = altura.value * largura.value;
  
  document.getElementById('retorno').innerHTML= 'A área calculada igual ' + resultado + ' m<sup>2</sup>';
  altura.value ='';
  largura.value ='';
}
btn.onclick = mult;

var id =document.getElementsByClassName('.btnOk')

function acessar(){
  id
}
