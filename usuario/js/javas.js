var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;
var cenaLargura;
var cenaAltura;
var segundos = 4000;
var pratoesquerdo;//posicionamento final do prato aleatorio
var pratotop;//
var pE;//posicionamento X do prato usado para manipular a variavel pratX1 e pratx2
var pT;//posicionamento Y do prato "             "              "  pratY2
var pBolax;//posição da bola
var pBolay;
var ponto = 0;//pontuação do jogador
var acerto = 0;// acertos do jogador
var erro = 0;// erros do jogador
var porcentagem = 100;// porcentagem do jogador
var totalTiro = 0;// total de tiros do jogador
var porcento;//variável com o calculo da porcentagem final
var pratAleatorio;// variavel que guarda um prato aleatorio
//var p=true;
var flag = 1;
var pratoexplosao;
var multiplicador = 1;
var segundoauxiliar = 4000;


function inicia() {

	dx = 0;//direção x
	dy = 0;//direção y
	px = 100;//poicionamento x da mira
	py = 400;//posicionamento y da mira
	vel = 10;//velocidade
	var escolha = sessionStorage.getItem('dados');

	if (escolha == "Fácil") {
		segundos = segundos + 600;
	} else if (escolha == "Médio") {
		segundos = segundos;
	} else if (escolha == "Difícil") {
		segundos = segundos - 290;
		vel = 18;
	} else if (escolha == "Insano") {
		segundos = segundos - 450;
		vel = 25;
	} else {
		segundos = segundos;
	}

	obj = document.getElementById("mira");
	document.addEventListener("keydown", teclaDw);
	document.addEventListener("keydown", tiroDw);
	document.addEventListener("keyup", tiroUp);
	document.addEventListener("keyup", teclaUp);
	tmp = setInterval(enterFrame, 20);//taxa de frames
	setTimeout('acabaJogo()', 100000);//div modal

	exibe();

}


function atribuirFlag() {
	flag = flag + 1;

	return flag;
}

function tempo(op) {//relogio
	if (op == 1) {
		document.getElementById('parar').style.display = "block";
		document.getElementById('comeca').style.display = "none";
	}

	var s = 1;
	var m = 0;
	var h = 0;

	intervalo = window.setInterval(function () {
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + "h"; else document.getElementById("hora").innerHTML = h + "h";
		if (s < 10) document.getElementById("segundo").innerHTML = "0" + s + "s"; else document.getElementById("segundo").innerHTML = s + "s";
		if (m < 10) document.getElementById("minuto").innerHTML = "0" + m + "m"; else document.getElementById("minuto").innerHTML = m + "m";
		s++;
	}, 1000);
}



function tiroDw() {

	if (flag == 1) {


		var tecla = event.keyCode;

		if (tecla == 65) {

			var audio = document.getElementById('audio');
			audio.play();
			totalTiro = totalTiro + 1;
			var left = getPosicaoMiraEsquerda();//posição mira
			var top = getPosicaoMiraTopo();//posição mira
			var bx1;//posicionamento da bola X
			var bx2;//
			var by1;//
			var by2;//
			var pratx1;
			var pratx2;
			var praty1;
			var praty2;

			document.getElementById('bola').style.left = left + 30 + "px";//a bola vai na posição da mira
			document.getElementById('bola').style.top = top + 27 + "px";//as variaveis left e top são a posição da mira
			pBolax = posicaoBolaEsquerda();//peguei a posição da bola e joguei na variavel
			pBolay = posicaoBolaTopo();
			bx1 = pBolax - 30;//acertando o posicionamento da bola
			by1 = pBolay - 27;
			pratx1 = pE + 42;
			pratx2 = pE - 55;//posição prato
			praty2 = pT - 36;
			pr1 = praty2 + 72;// Não estava pegando posicao y1 fiz essa gambiarra

			if (bx1 <= pratx1 && bx1 >= pratx2 && by1 <= pr1 && by1 >= praty2) {// verifica se a bola esta na posição do prato
				document.getElementById('acerto').style.display = 'block';// aparece a div de acerto

				if (pratAleatorio == "pr") {

					ponto = ponto + 35 * multiplicador;
					document.getElementById('pontos').value = ponto;// valor de pontos no campo de texto
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";//valor porcento no campo texto, não esta funcionando
					document.getElementById('fogoroxo').style.display = 'block';
					document.getElementById('explosaoroxo').style.left = pE + "px";
					document.getElementById('explosaoroxo').style.top = pT + "px";
					document.getElementById('explosaoroxo').style.display = 'block';

					esconde();

					setTimeout('escondeExroxo()', 300);

				} else if (pratAleatorio == "pam") {
					ponto = ponto + 20 * multiplicador;
					document.getElementById('pontos').value = ponto;// valor de pontos no campo de texto
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					document.getElementById('fogoamarelo').style.display = 'block';
					document.getElementById('explosaoamarelo').style.left = pE + "px";
					document.getElementById('explosaoamarelo').style.top = pT + "px";
					document.getElementById('explosaoamarelo').style.display = 'block';

					esconde();
					setTimeout('escondeExamarelo()', 300);

				} else if (pratAleatorio == "paz") {
					ponto = ponto + 15 * multiplicador;
					document.getElementById('pontos').value = ponto;// valor de pontos no campo de texto
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					document.getElementById('fogoazul').style.display = 'block';
					document.getElementById('explosaoazul').style.left = pE + "px";
					document.getElementById('explosaoazul').style.top = pT + "px";
					document.getElementById('explosaoazul').style.display = 'block';

					esconde();
					setTimeout('escondeExazul()', 300);

				} else if (pratAleatorio == "pver") {
					ponto = ponto - 10 * multiplicador;
					document.getElementById('pontos').value = ponto;// valor de pontos no campo de texto
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					document.getElementById('fogoverde').style.display = 'block';
					document.getElementById('explosaoverde').style.left = pE + "px";
					document.getElementById('explosaoverde').style.top = pT + "px";
					document.getElementById('explosaoverde').style.display = 'block';

					esconde();
					setTimeout('escondeExverde()', 300);

				} else if (pratAleatorio == "pvm") {
					ponto = ponto + 25 * multiplicador;
					document.getElementById('pontos').value = ponto;// valor de pontos no campo de texto
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					document.getElementById('fogovermelho').style.display = 'block';
					document.getElementById('explosaovermelho').style.left = pE + "px";
					document.getElementById('explosaovermelho').style.top = pT + "px";
					document.getElementById('explosaovermelho').style.display = 'block';

					esconde();
					setTimeout('escondeExvermelho()', 300);

				} else if (pratAleatorio == "pla") {
					ponto = ponto + 50 * multiplicador;
					document.getElementById('pontos').value = ponto;// valor de pontos no campo de texto
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					document.getElementById('fogocolorido').style.display = 'block';
					document.getElementById('explosaopreto').style.left = pE + "px";
					document.getElementById('explosaopreto').style.top = pT + "px";
					document.getElementById('explosaopreto').style.display = 'block';

					esconde();
					setTimeout('escondeExpreto()', 300);

				} else if (pratAleatorio == "bonus") {
					desmultiplica();
					escondeVezesdois();
					escondeVezestres();
					escondeVezesquatro();
					escondeVezescinco();
					multiplicador = 2;
					ponto = ponto + 20 * multiplicador;
					document.getElementById('pontos').value = ponto;

					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					document.getElementById('exbonus').style.left = pE + "px";
					document.getElementById('exbonus').style.top = pT + "px";
					document.getElementById('exbonus').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus()', 300);
					multiplicador = 2;
					document.getElementById('vezesdois').style.display = 'block';
					setTimeout('escondeVezesdois()', 10000);

				} else if (pratAleatorio == "bonustres") {

					desmultiplica();
					escondeVezesdois();
					escondeVezestres();
					escondeVezesquatro();
					escondeVezescinco();
					multiplicador = 3;
					ponto = ponto + 30 * multiplicador;
					document.getElementById('pontos').value = ponto;
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					document.getElementById('exbonus').style.left = pE + "px";
					document.getElementById('exbonus').style.top = pT + "px";
					document.getElementById('exbonus').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus()', 300);
					multiplicador = 3;
					document.getElementById('vezestres').style.display = 'block';
					setTimeout('escondeVezestres()', 10000);

				} else if (pratAleatorio == "bonusquatro") {
					desmultiplica();
					escondeVezesdois();
					escondeVezestres();
					escondeVezesquatro();
					escondeVezescinco();
					multiplicador = 4;

					ponto = ponto + 40 * multiplicador;
					document.getElementById('pontos').value = ponto;
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					//document.getElementById('fogocolorido').style.display='block';
					document.getElementById('exbonus').style.left = pE + "px";
					document.getElementById('exbonus').style.top = pT + "px";
					document.getElementById('exbonus').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus()', 300);
					multiplicador = 4;

					document.getElementById('vezesquatro').style.display = 'block';
					//piscaquatro();
					setTimeout('escondeVezesquatro()', 10000);



				} else if (pratAleatorio == "bonuscinco") {

					desmultiplica();

					escondeVezesdois();
					escondeVezestres();
					escondeVezesquatro();
					escondeVezescinco();

					multiplicador = 5;

					ponto = ponto + 50 * multiplicador;
					document.getElementById('pontos').value = ponto;
					acerto = acerto + 1;
					document.getElementById('acert').value = acerto;//valor de acerto no campo de texto
					porcento = (acerto * porcentagem) / totalTiro;//porcentagem de acertos
					document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
					//document.getElementById('fogocolorido').style.display='block';
					document.getElementById('exbonus').style.left = pE + "px";
					document.getElementById('exbonus').style.top = pT + "px";
					document.getElementById('exbonus').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus()', 300);
					multiplicador = 5;

					document.getElementById('vezescinco').style.display = 'block';
					//piscacinco();
					setTimeout('escondeVezescinco()', 10000);


				}


			} else {
				porcento = (acerto * porcentagem) / totalTiro;// porcentagem de acertos
				document.getElementById('inputPorcento').value = porcento.toFixed(2) + "%";
				ponto = ponto - 5 * multiplicador;
				document.getElementById('pontos').value = ponto;

				erro = erro + 1;
				errado = document.getElementById('inputErro').value = erro;
				document.getElementById('erro').style.display = 'block';//faz aparecer a div de erro
				document.getElementById('fogoerro').style.display = 'block';


				setTimeout(function () {
					document.getElementById('bola').style.left = 100 + "px";//essa função coloca a bola de canhão no lugar
					document.getElementById('bola').style.top = 510 + "px";
				}, 200);
			}
			setTimeout(function () {
				document.getElementById('bola').style.left = 100 + "px";//essa função coloca a bola de cahnão no lugar
				document.getElementById('bola').style.top = 510 + "px";
			}, 200);

		} else {// enquanto não se aperta a tecla
			console.log("Carregando munição...");//carrega munição

		}

	} else {
		//
	}
}

function tiroUp() {
	var tecla = event.keyCode;

	if (tecla == 65) {

		document.getElementById('acerto').style.display = 'none';//quando a tecla estiver 'up' a div some
		document.getElementById('erro').style.display = 'none';//"   "
		document.getElementById('fogoroxo').style.display = 'none';
		document.getElementById('fogoerro').style.display = 'none';
		document.getElementById('fogoamarelo').style.display = 'none';
		document.getElementById('fogoazul').style.display = 'none';
		document.getElementById('fogovermelho').style.display = 'none';
		document.getElementById('fogoverde').style.display = 'none';
		document.getElementById('fogocolorido').style.display = 'none';


	}
}

function posicaoBolaEsquerda() {
	return document.getElementById('bola').offsetLeft;
}

function posicaoBolaTopo() {
	return document.getElementById('bola').offsetTop;
}

function teclaDw() {

	if (flag == 1) {
		var tecla = event.keyCode;
		if (getPosicaoMiraEsquerda() >= 50 && tecla == 37) {//tecla esquerda
			dx = -1;
		} else if (getPosicaoMiraTopo() >= 50 && tecla == 38) {//tecla cima
			dy = -1;
		} else if (getPosicaoMiraEsquerda() <= 790 && tecla == 39) {//tecla direita	
			dx = 1;
		}
		else if (getPosicaoMiraTopo() <= 496 && tecla == 40) {//tecla baixo
			//			console.log(getPosicaoMiraTopo());
			dy = 1;
		}
		else {
			dx = 0;
			dy = 0;
		}
	}
}


//musica aqui


function pisca() {// pisca letra
	var f = document.getElementById('letra');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 200);

}

function piscadois() {// pisca letra
	var f = document.getElementById('vezesdois');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 1000);

}
function piscatres() {// pisca letra
	var f = document.getElementById('vezestres');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 1000);

}

function piscaquatro() {
	var f = document.getElementById('vezesquatro');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 1000);
}

function piscacinco() {
	var f = document.getElementById('vezescinco');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 1000);
}




function piscamira() {// pisca mira
	var f = document.getElementById('mira');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 80);
}

function teclaUp() {
	var tecla = event.keyCode;
	if (tecla == 37) {//tecla esquerda
		dx = 0;
	} else if (tecla == 38) {//tecla cima
		dy = 0;
	} else if (tecla == 39) {//tecla direita
		dx = 0;
	} else if (tecla == 40) {//tecla baixo
		dy = 0;
	}
}




function desmultiplica() {
	multiplicador = 1;
	return multiplicador;
}



function escondeVezesdois() {
	document.getElementById('vezesdois').style.display = 'none';
	desmultiplica();

}

function escondeVezestres() {
	document.getElementById('vezestres').style.display = 'none';
	desmultiplica();

}

function escondeVezesquatro() {
	document.getElementById('vezesquatro').style.display = 'none';
	desmultiplica();
}

function escondeVezescinco() {
	document.getElementById('vezescinco').style.display = 'none';
	desmultiplica();
}




function enterFrame() {
	px += dx * vel;
	py += dy * vel;
	obj.style.left = px + "px";
	obj.style.top = py + "px";
}

window.addEventListener("load", inicia);

function largura() {
	cenaLargura = document.getElementById('cen').offsetWidth;
}

function altura() {
	cenaAltura = document.getElementById('cen').offsetHeight;
}


function getpratosAleatorio() {
	var vPrat = ["pr", "pam", "paz", "pver", "pvm", "pla", "bonus", "bonustres", "bonusquatro", "bonuscinco"];
	var pratoaleatorioP = Math.round(Math.random() * 9);
	return vPrat[pratoaleatorioP];
}




function exibe() {// função que exibe os pratos

	if (flag == 1) {


		pratAleatorio = getpratosAleatorio();

		if (pratAleatorio == "pr") {

			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pr";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('pr').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3000);
			//document.getElementById(vPrato).style.left=100000+"px";
			//document.getElementById(vPrato).style.top=100000+"px";

		} else if (pratAleatorio == "pam") {
			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);

			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			vPrato = "pam";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('pam').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3000);
			//document.getElementById(vPrato).style.left=100000+"px";
			//document.getElementById(vPrato).style.top=100000+"px";
			//console.log(document.getElementById(vPrato).style.left)

		} else if (pratAleatorio == "paz") {

			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "paz";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('paz').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3000);
			//document.getElementById(vPrato).style.left=100000+"px";
			//document.getElementById(vPrato).style.top=100000+"px";
			//setTimeout()


		} else if (pratAleatorio == "pver") {

			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pver";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('pver').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3000);
			//document.getElementById(vPrato).style.left=100000+"px";
			//document.getElementById(vPrato).style.top=100000+"px";

		} else if (pratAleatorio == "pvm") {

			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pvm";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('pvm').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3000);
			//document.getElementById(vPrato).style.left=100000+"px";
			//document.getElementById(vPrato).style.top=100000+"px";


		} else if (pratAleatorio == "pla") {

			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pla";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('pla').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3250);

			//document.getElementById(vPrato).style.left=100000+"px";
			//document.getElementById(vPrato).style.top=100000+"px";
		} else if (pratAleatorio == "bonus") {


			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "bonus";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('bonus').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3000);//3150



		} else if (pratAleatorio == "bonustres") {
			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "bonustres";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('bonustres').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3000);


		} else if (pratAleatorio == "bonusquatro") {
			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "bonusquatro";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('bonusquatro').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3150);
		} else if (pratAleatorio == "bonuscinco") {
			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			//pE=posE;
			//pT=posT;
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "bonuscinco";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;

			document.getElementById('bonuscinco').style.display = 'block';
			pE = posE;
			pT = posT;

			setTimeout('esconde()', segundos - 3250);
		}


		setTimeout('exibe()', segundos - 2500);

	}
}



function esconde() {
	pE = 100000 + "px";//
	pT = 100000 + "px";//
	document.getElementById(pratAleatorio).style.display = 'none';
	//document.getElementById(pratAleatorio).fadeOut().empty();
}

function escondeExroxo() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('explosaoroxo').style.display = 'none';
}

function escondeExamarelo() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('explosaoamarelo').style.display = 'none';
}

function escondeExazul() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('explosaoazul').style.display = 'none';
}

function escondeExvermelho() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('explosaovermelho').style.display = 'none';
}
function escondeExverde() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('explosaoverde').style.display = 'none';
}
function escondeExpreto() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('explosaopreto').style.display = 'none';
}

function escondeExbonus() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('exbonus').style.display = 'none';

}


function setTopo() { // seta a barra de rolagem sempre para o topo
	$(window).scrollTop(0);
}
$(window).bind('scroll', setTopo);

function getPosicaoMiraEsquerda() {
	return document.getElementById('mira').offsetLeft - 25;
}

function getPosicaoMiraTopo() {
	return document.getElementById('mira').offsetTop - 17;//ajuste da imagm da mira
}

function acabaJogo() {

	atribuirFlag();
	px = 100;//poicionamento x da mira
	py = 400;//posicionamento y da mira

	$(function () {//faz a musica tocar

		var musica = new Audio('./sons/final.wav');//
		musica.play();

	});

	$('#myModal').modal({ backdrop: 'static', keyboard: false })
	var pon = document.getElementById('pontos').value;
	var por = document.getElementById('inputPorcento').value;
	var re = document.getElementById('re').value;
	var r = parseInt(re);

	document.getElementById('pontoF').value = pon;
	document.getElementById('porcentoF').value = por;

	if (pon > r) {
		document.getElementById('novo').style.display = 'block';
		document.getElementById('parabens').style.display = 'block';

	} else if (pon >= 1000 && pon < 1500) {
		document.getElementById('bem').style.display = 'block';
	} else if (pon >= 1500 && pon < 2000) {
		document.getElementById('otimo').style.display = 'block';
	} else if (pon >= 2000) {
		document.getElementById('excelente').style.display = 'block';
	} else if (pon < 1000 && pon >= 500) {
		document.getElementById('treine').style.display = 'block';
	} else {
		document.getElementById('imgruim').style.display = 'block';
	}


}



