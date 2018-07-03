function pisca() {// pisca letra
	var f = document.getElementById('letr');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 200);
}

function pis() {

	var f = document.getElementById('letra');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 800);
}

$(function () {//faz a musica tocar

	var musica = new Audio('./sons/looney.wav');//
	musica.play();

});

function piscaR() {

	var f = document.getElementById('record');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 400);
}

function pegarValor() {
	var valor = document.getElementsByTagName('nJogador').value;
	document.getElementById('inputJogador').value = valor;
}

