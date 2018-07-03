var dx1;
var dy1;
var px1;
var py1;
var vel1;
var obj1;
var tmp;
var dx2;
var dy2;
var px2;
var py2;
var vel2;
var obj2;
var flag = 1;
var cenaLargura;
var cenaAltura;
var segundos = 4000;
var pratoesquerdo;//posicionamento final do prato aleatorio
var pratotop;//
var pE;//posicionamento X do prato usado para manipular a variavel pratX1 e pratx2
var pT;//posicionamento Y do prato "             "              "  pratY2
var pBolax1;//posição da bola
var pBolay1;
var ponto1 = 0;//pontuação do jogador
var acerto1 = 0;// acertos do jogador
var erro1 = 0;// erros do jogador
var porcentagem1 = 100;// porcentagem do jogador
var totalTiro1 = 0;// total de tiros do jogador
var porcento1;//variável com o calculo da porcentagem final
var pBolax2;//posição da bola
var pBolay2;
var ponto2 = 0;//pontuação do jogador
var acerto2 = 0;// acertos do jogador
var erro2 = 0;// erros do jogador
var porcentagem2 = 100;// porcentagem do jogador
var totalTiro2 = 0;// total de tiros do jogador
var porcento2;//va
var pratAleatorio;// variavel que guarda um prato aleatorio
var pratoexplosao;
multiplicador1 = 1;
multiplicador2 = 1;

function inicia() {

	dx1 = 0;//direção x
	dy1 = 0;//direção y
	px1 = 100;//poicionamento x da mira
	py1 = 400;//posicionamento y da mira
	vel1 = 10;//velocidade
	obj1 = document.getElementById("mira1");
	dx2 = 0;//direção x
	dy2 = 0;//direção y
	px2 = 650;//poicionamento x da mira
	py2 = 400;//posicionamento y da mira
	vel2 = 10;//velocidade
	obj2 = document.getElementById("mira2");
	var escolha = sessionStorage.getItem('dados');

	if (escolha == "Fácil") {
		segundos = segundos + 600;
	} else if (escolha == "Médio") {
		segundos = segundos;
	} else if (escolha == "Difícil") {
		segundos = segundos - 290;
		vel1 = 18;
		vel2 = 18;
	} else if (escolha == "Insano") {
		segundos = segundos - 450;
		vel1 = 25;
		vel2 = 25;
	} else {
		segundos = segundos;
	}
	
	document.addEventListener("keydown", teclaDw1);
	document.addEventListener("keydown", tiroDw1);
	document.addEventListener("keyup", tiroUp1);
	document.addEventListener("keyup", teclaUp1);

	setTimeout('document.addEventListener("keydown",teclaDw2)', 105500);
	setTimeout('document.addEventListener("keydown",tiroDw2)', 105500);
	setTimeout('atribuirFlag()', 100000);
	setTimeout('vezJogador()', 100000);
	setTimeout('escondeVezJogador()', 101500);
	setTimeout('exibetres()', 101500);
	setTimeout('escondetres()', 102500);
	setTimeout('exibedois()', 102500);
	setTimeout('escondedois()', 103500);
	setTimeout('exibeum()', 103500);
	setTimeout('escondeum()', 104500);
	setTimeout('exibevai()', 104500);
	setTimeout('escondevai()', 105500);
	setTimeout('tocamusicanovamente()', 105500);
	setTimeout('atribuiFlag3()', 205500);
	document.addEventListener("keydown", teclaDw1);
	document.addEventListener("keydown", tiroDw1);
	document.addEventListener("keyup", tiroUp2);
	document.addEventListener("keyup", teclaUp2);
	tmp = setInterval(enterFrame, 20);//taxa de frames
	setTimeout('acabaJogo()', 205500);//div modal
	exibe();
}

function tocamusicanovamente() {
	$(function () {//faz a musica tocar
		var musica = new Audio('./sons/dokan.mp3');//
		musica.play();
	});
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

function exibetres() {

	$(function () {//faz a musica tocar
		var musica = new Audio('./sons/contagem.wav');//
		musica.play();
	});

	document.getElementById('tres').style.display = 'block';
}

function escondetres() {
	document.getElementById('tres').style.display = 'none';
}

function exibedois() {
	$(function () {//faz a musica tocar
		var musica = new Audio('./sons/contagem.wav');//
		musica.play();
	});
	document.getElementById('dois').style.display = 'block';
}

function escondedois() {
	document.getElementById('dois').style.display = 'none';
}

function exibeum() {
	$(function () {//faz a musica tocar
		var musica = new Audio('./sons/contagem.wav');//
		musica.play();
	});
	document.getElementById('um').style.display = 'block';
}

function escondeum() {
	document.getElementById('um').style.display = 'none';
}

function exibevai() {
	$(function () {//faz a musica tocar
		var musica = new Audio('./sons/alarme.wav');//
		musica.play();
	});
	document.getElementById('vai').style.display = 'block';
}

function escondevai() {
	document.getElementById('vai').style.display = 'none';
	var f = document.getElementById('vai');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 50);
}


function piscaVez() {
	var f = document.getElementById('vez');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 100);
}

function tiroDw1() {

	if (flag == 1) {
		var tecla = event.keyCode;
		if (tecla == 49) {

			var audio = document.getElementById('audio');
			audio.play();
			totalTiro1 = totalTiro1 + 1;
			var left = getPosicaoMiraEsquerda1();//posição mira
			var top = getPosicaoMiraTopo1();//posição mira
			var bx1;//posicionamento da bola X
			var bx2;//
			var by1;//
			var by2;//
			var pratx1;
			var pratx2;
			var praty1;
			var praty2;
			document.getElementById('bola1').style.left = left + 30 + "px";//a bola vai na posição da mira
			document.getElementById('bola1').style.top = top + 27 + "px";//as variaveis left e top são a posição da mira
			pBolax1 = posicaoBolaEsquerda1();//peguei a posição da bola e joguei na variavel
			pBolay1 = posicaoBolaTopo1();
			bx1 = pBolax1 - 30;//acertando o posicionamento da bola
			by1 = pBolay1 - 27;
			pratx1 = pE + 42;
			pratx2 = pE - 55;// 40 posição prato
			praty2 = pT - 36;//35
			pr1 = praty2 + 72;// 70 Não estava pegando posicao y1 fiz essa gambiarra

			if (bx1 <= pratx1 && bx1 >= pratx2 && by1 <= pr1 && by1 >= praty2) {// verifica se a bola esta na posição do prato
				document.getElementById('acerto1').style.display = 'block';// aparece a div de acerto

				if (pratAleatorio == "pr") {

					ponto1 = ponto1 + 35 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;// valor de pontos no campo de texto
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";//valor porcento no campo texto, não esta funcionando
					document.getElementById('fogoroxo1').style.display = 'block';
					document.getElementById('explosaoroxo1').style.left = pE + "px";
					document.getElementById('explosaoroxo1').style.top = pT + "px";
					document.getElementById('explosaoroxo1').style.display = 'block';
					esconde();
					setTimeout('escondeExroxo1()', 300);

				} else if (pratAleatorio == "pam") {
					
					ponto1 = ponto1 + 20 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;// valor de pontos no campo de texto
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('fogoamarelo1').style.display = 'block';
					document.getElementById('explosaoamarelo1').style.left = pE + "px";
					document.getElementById('explosaoamarelo1').style.top = pT + "px";
					document.getElementById('explosaoamarelo1').style.display = 'block';
					esconde();
					setTimeout('escondeExamarelo1()', 300);

				} else if (pratAleatorio == "paz") {
					
					ponto1 = ponto1 + 15 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;// valor de pontos no campo de texto
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('fogoazul1').style.display = 'block';
					document.getElementById('explosaoazul1').style.left = pE + "px";
					document.getElementById('explosaoazul1').style.top = pT + "px";
					document.getElementById('explosaoazul1').style.display = 'block';
					esconde();
					setTimeout('escondeExazul1()', 300);

				} else if (pratAleatorio == "pver") {
					
					ponto1 = ponto1 - 10 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;// valor de pontos no campo de texto
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('fogoverde1').style.display = 'block';
					document.getElementById('explosaoverde1').style.left = pE + "px";
					document.getElementById('explosaoverde1').style.top = pT + "px";
					document.getElementById('explosaoverde1').style.display = 'block';
					esconde();
					setTimeout('escondeExverde1()', 300);

				} else if (pratAleatorio == "pvm") {
					
					ponto1 = ponto1 + 25 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;// valor de pontos no campo de texto
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('fogovermelho1').style.display = 'block';
					document.getElementById('explosaovermelho1').style.left = pE + "px";
					document.getElementById('explosaovermelho1').style.top = pT + "px";
					document.getElementById('explosaovermelho1').style.display = 'block';
					esconde();
					setTimeout('escondeExvermelho1()', 300);

				} else if (pratAleatorio == "pla") {
					
					ponto1 = ponto1 + 50 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;// valor de pontos no campo de texto
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('fogocolorido1').style.display = 'block';
					document.getElementById('explosaopreto1').style.left = pE + "px";
					document.getElementById('explosaopreto1').style.top = pT + "px";
					document.getElementById('explosaopreto1').style.display = 'block';
					esconde();
					setTimeout('escondeExpreto1()', 300);

				} else if (pratAleatorio == "bonus") {

					desmultiplica1();
					escondeVezesdois1();
					escondeVezestres1();
					escondeVezesquatro1();
					escondeVezescinco1();
					multiplicador1 = 2;
					ponto1 = ponto1 + 20 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('exbonus1').style.left = pE + "px";
					document.getElementById('exbonus1').style.top = pT + "px";
					document.getElementById('exbonus1').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus1()', 300);
					multiplicador1 = 2;
					document.getElementById('vezesdois1').style.display = 'block';
					setTimeout('escondeVezesdois1()', 10000);

				} else if (pratAleatorio == "bonustres") {

					desmultiplica1();
					escondeVezesdois1();
					escondeVezestres1();
					escondeVezesquatro1();
					escondeVezescinco1();
					multiplicador1 = 3;
					ponto1 = ponto1 + 30 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('exbonus1').style.left = pE + "px";
					document.getElementById('exbonus1').style.top = pT + "px";
					document.getElementById('exbonus1').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus1()', 300);
					multiplicador1 = 3;
					document.getElementById('vezestres1').style.display = 'block';
					setTimeout('escondeVezestres1()', 10000);

				} else if (pratAleatorio == "bonusquatro") {
					
					desmultiplica1();
					escondeVezesdois1();
					escondeVezestres1();
					escondeVezesquatro1();
					escondeVezescinco1();
					multiplicador1 = 4;
					ponto1 = ponto1 + 40 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('exbonus1').style.left = pE + "px";
					document.getElementById('exbonus1').style.top = pT + "px";
					document.getElementById('exbonus1').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus1()', 300);
					multiplicador1 = 4;
					document.getElementById('vezesquatro1').style.display = 'block';
					setTimeout('escondeVezesquatro1()', 10000);

				} else if (pratAleatorio == "bonuscinco") {

					desmultiplica1();
					escondeVezesdois1();
					escondeVezestres1();
					escondeVezesquatro1();
					escondeVezescinco1();
					multiplicador1 = 5;
					ponto1 = ponto1 + 50 * multiplicador1;
					document.getElementById('pontos1').value = ponto1;
					acerto1 = acerto1 + 1;
					document.getElementById('acert1').value = acerto1;//valor de acerto no campo de texto
					porcento1 = (acerto1 * porcentagem1) / totalTiro1;//porcentagem de acertos
					document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
					document.getElementById('exbonus1').style.left = pE + "px";
					document.getElementById('exbonus1').style.top = pT + "px";
					document.getElementById('exbonus1').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus1()', 300);
					multiplicador1 = 5;
					document.getElementById('vezescinco1').style.display = 'block';
					setTimeout('escondeVezescinco1()', 10000);

				}
			} else {
				
				porcento1 = (acerto1 * porcentagem1) / totalTiro1;// porcentagem de acertos
				document.getElementById('inputPorcento1').value = porcento1.toFixed(2) + "%";
				ponto1 = ponto1 - 5 * multiplicador1;
				document.getElementById('pontos1').value = ponto1;
				erro1 = erro1 + 1;
				document.getElementById('inputErro1').value = erro1;
				document.getElementById('erro1').style.display = 'block';//faz aparecer a div de erro
				document.getElementById('fogoerro1').style.display = 'block';
				setTimeout(function () {
				    document.getElementById('bola1').style.left = 100 + "px";//essa função coloca a bola de canhão no lugar
					document.getElementById('bola1').style.top = 510 + "px";
				}, 200);
			}
			setTimeout(function () {
				document.getElementById('bola1').style.left = 100 + "px";//essa função coloca a bola de cahnão no lugar
				document.getElementById('bola1').style.top = 510 + "px";
			}, 200);

		} else {// enquanto não se aperta a tecla
			console.log("Carregando munição...");//carrega munição
		}

	} else {

		//para de atirar
	}
}

function piscadois1() {// pisca letra
	var f = document.getElementById('vezesdois1');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 500);

}
function piscatres1() {// pisca letra
	var f = document.getElementById('vezestres1');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 500);

}

function desmultiplica1() {
	multiplicador1 = 1;
	return multiplicador1;
}

function escondeVezesdois1() {
	document.getElementById('vezesdois1').style.display = 'none';
	desmultiplica1();
}

function escondeVezestres1() {
	document.getElementById('vezestres1').style.display = 'none';
	desmultiplica1();

}
function escondeVezesquatro1() {
	document.getElementById('vezesquatro1').style.display = 'none';
	desmultiplica1();

}
function escondeVezescinco1() {
	document.getElementById('vezescinco1').style.display = 'none';
	desmultiplica1();
}

function piscadois2() {// pisca letra
	var f = document.getElementById('vezesdois2');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 500);
}
function piscatres1() {// pisca letra
	var f = document.getElementById('vezestres2');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 500);
}

function desmultiplica2() {
	multiplicador1 = 1;
	return multiplicador2;
}

function escondeVezesdois2() {
	document.getElementById('vezesdois2').style.display = 'none';
	desmultiplica2();
}

function escondeVezestres2() {
	document.getElementById('vezestres2').style.display = 'none';
	desmultiplica2();
}

function escondeVezesquatro2() {
	document.getElementById('vezesquatro2').style.display = 'none';
	desmultiplica2();
}
function escondeVezescinco2() {
	document.getElementById('vezescinco2').style.display = 'none';
	desmultiplica2();
}

function tiroDw2() {

	if (flag == 2) {

		var tecla = event.keyCode;

		if (tecla == 76) {

			var audio = document.getElementById('audio');
			audio.play();
			totalTiro2 = totalTiro2 + 1;
			var left = getPosicaoMiraEsquerda2();//posição mira
			var top = getPosicaoMiraTopo2();//posição mira
			var bx1;//posicionamento da bola X
			var bx2;//
			var by1;//
			var by2;//
			var pratx1;
			var pratx2;
			var praty1;
			var praty2;
			document.getElementById('bola2').style.left = left + 30 + "px";//a bola vai na posição da mira
			document.getElementById('bola2').style.top = top + 27 + "px";//as variaveis left e top são a posição da mira
			pBolax2 = posicaoBolaEsquerda2();//peguei a posição da bola e joguei na variavel
			pBolay2 = posicaoBolaTopo2();
			bx1 = pBolax2 - 30;//acertando o posicionamento da bola
			by1 = pBolay2 - 27;
			pratx1 = pE + 42;
			pratx2 = pE - 55;//posição prato
			praty2 = pT - 35;
			pr1 = praty2 + 70;// Não estava pegando posicao y1 fiz essa gambiarra

			if (bx1 <= pratx1 && bx1 >= pratx2 && by1 <= pr1 && by1 >= praty2) {// verifica se a bola esta na posição do prato

				document.getElementById('acerto2').style.display = 'block';// aparece a div de acerto

				if (pratAleatorio == "pr") {

					ponto2 = ponto2 + 35 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;// valor de pontos no campo de texto
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";//valor porcento no campo texto, não esta funcionando
					document.getElementById('fogoroxo2').style.display = 'block';
					document.getElementById('explosaoroxo2').style.left = pE + "px";
					document.getElementById('explosaoroxo2').style.top = pT + "px";
					document.getElementById('explosaoroxo2').style.display = 'block';
					esconde();
					setTimeout('escondeExroxo2()', 300);

				} else if (pratAleatorio == "pam") {
					
					ponto2 = ponto2 + 20 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;// valor de pontos no campo de texto
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('fogoamarelo2').style.display = 'block';
					document.getElementById('explosaoamarelo2').style.left = pE + "px";
					document.getElementById('explosaoamarelo2').style.top = pT + "px";
					document.getElementById('explosaoamarelo2').style.display = 'block';
					esconde();
					setTimeout('escondeExamarelo2()', 300);

				} else if (pratAleatorio == "paz") {
					
					ponto2 = ponto2 + 15 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;// valor de pontos no campo de texto
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('fogoazul2').style.display = 'block';
					document.getElementById('explosaoazul2').style.left = pE + "px";
					document.getElementById('explosaoazul2').style.top = pT + "px";
					document.getElementById('explosaoazul2').style.display = 'block';
					esconde();
					setTimeout('escondeExazul2()', 300);

				} else if (pratAleatorio == "pver") {
					
					ponto2 = ponto2 - 10 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;// valor de pontos no campo de texto
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('fogoverde2').style.display = 'block';
					document.getElementById('explosaoverde2').style.left = pE + "px";
					document.getElementById('explosaoverde2').style.top = pT + "px";
					document.getElementById('explosaoverde2').style.display = 'block';
					esconde();
					setTimeout('escondeExverde2()', 300);

				} else if (pratAleatorio == "pvm") {
					
					ponto2 = ponto2 + 25 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;// valor de pontos no campo de texto
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('fogovermelho2').style.display = 'block';
					document.getElementById('explosaovermelho2').style.left = pE + "px";
					document.getElementById('explosaovermelho2').style.top = pT + "px";
					document.getElementById('explosaovermelho2').style.display = 'block';
					esconde();
					setTimeout('escondeExvermelho2()', 300);

				} else if (pratAleatorio == "pla") {
					ponto2 = ponto2 + 50 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;// valor de pontos no campo de texto
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('fogocolorido2').style.display = 'block';
					document.getElementById('explosaopreto2').style.left = pE + "px";
					document.getElementById('explosaopreto2').style.top = pT + "px";
					document.getElementById('explosaopreto2').style.display = 'block';
					esconde();
					setTimeout('escondeExpreto2()', 300);

				} else if (pratAleatorio == "bonus") {

					desmultiplica2();
					escondeVezesdois2();
					escondeVezestres2();
					escondeVezesquatro2();
					escondeVezescinco2();
					multiplicador2 = 2;
					ponto2 = ponto2 + 20 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('exbonus2').style.left = pE + "px";
					document.getElementById('exbonus2').style.top = pT + "px";
					document.getElementById('exbonus2').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus2()', 300);
					multiplicador2 = 2;
					document.getElementById('vezesdois2').style.display = 'block';
					setTimeout('escondeVezesdois2()', 10000);

				} else if (pratAleatorio == "bonustres") {

					desmultiplica2();
					escondeVezesdois2();
					escondeVezestres2();
					escondeVezesquatro2();
					escondeVezescinco2();
					multiplicador2 = 3;
					ponto2 = ponto2 + 30 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('exbonus2').style.left = pE + "px";
					document.getElementById('exbonus2').style.top = pT + "px";
					document.getElementById('exbonus2').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus2()', 300);
					multiplicador2 = 3;
					document.getElementById('vezestres2').style.display = 'block';
					setTimeout('escondeVezestres2()', 10000);

				} else if (pratAleatorio == "bonusquatro") {
					
					desmultiplica2();
					escondeVezesdois2();
					escondeVezestres2();
					escondeVezesquatro2();
					escondeVezescinco2();
					multiplicador2 = 4;
					ponto2 = ponto2 + 40 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('exbonus2').style.left = pE + "px";
					document.getElementById('exbonus2').style.top = pT + "px";
					document.getElementById('exbonus2').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus2()', 300);
					multiplicador2 = 4;
					document.getElementById('vezesquatro2').style.display = 'block';
					setTimeout('escondeVezesquatro2()', 10000);

				} else if (pratAleatorio == "bonuscinco") {

					desmultiplica2();
					escondeVezesdois2();
					escondeVezestres2();
					escondeVezesquatro2();
					escondeVezescinco2();
					multiplicador2 = 5;
					ponto2 = ponto2 + 50 * multiplicador2;
					document.getElementById('pontos2').value = ponto2;
					acerto2 = acerto2 + 1;
					document.getElementById('acert2').value = acerto2;//valor de acerto no campo de texto
					porcento2 = (acerto2 * porcentagem2) / totalTiro2;//porcentagem de acertos
					document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
					document.getElementById('exbonus2').style.left = pE + "px";
					document.getElementById('exbonus2').style.top = pT + "px";
					document.getElementById('exbonus2').style.display = 'block';
					esconde();
					setTimeout('escondeExbonus2()', 300);
					multiplicador2 = 5;
					document.getElementById('vezescinco2').style.display = 'block';
					setTimeout('escondeVezescinco2()', 10000);

				}

			} else {
				porcento2 = (acerto2 * porcentagem2) / totalTiro2;// porcentagem de acertos
				document.getElementById('inputPorcento2').value = porcento2.toFixed(2) + "%";
				ponto2 = ponto2 - 5 * multiplicador2;
				document.getElementById('pontos2').value = ponto2;
				erro2 = erro2 + 1;
				document.getElementById('inputErro2').value = erro2;
				document.getElementById('erro2').style.display = 'block';//faz aparecer a div de erro
				document.getElementById('fogoerro2').style.display = 'block';
				setTimeout(function () {
					document.getElementById('bola2').style.left = 765 + "px";//essa função coloca a bola de canhão no lugar
					document.getElementById('bola2').style.top = 505 + "px";
				}, 200);
			}
			setTimeout(function () {
				document.getElementById('bola2').style.left = 765 + "px";//essa função coloca a bola de cahnão no lugar
				document.getElementById('bola2').style.top = 505 + "px";
			}, 200);

		} else {// enquanto não se aperta a tecla
			console.log("Carregando munição...");//carrega munição
		}

	} else {
		//para de atirar
	}
}

function tiroUp1() {
	var tecla = event.keyCode;

	if (tecla == 49) {

		document.getElementById('acerto1').style.display = 'none';//quando a tecla estiver 'up' a div some
		document.getElementById('erro1').style.display = 'none';//"   "
		document.getElementById('fogoroxo1').style.display = 'none';
		document.getElementById('fogoerro1').style.display = 'none';
		document.getElementById('fogoamarelo1').style.display = 'none';
		document.getElementById('fogoazul1').style.display = 'none';
		document.getElementById('fogovermelho1').style.display = 'none';
		document.getElementById('fogoverde1').style.display = 'none';
		document.getElementById('fogocolorido1').style.display = 'none';

	}
}

function posicaoBolaEsquerda1() {
	return document.getElementById('bola1').offsetLeft;
}

function posicaoBolaTopo1() {
	return document.getElementById('bola1').offsetTop;
}

function teclaDw1() {

	if (flag == 1) {

		var tecla = event.keyCode;
		if (getPosicaoMiraEsquerda1() >= 50 && tecla == 65) {//tecla esquerda
			dx1 = -1;
		} else if (getPosicaoMiraTopo1() >= 50 && tecla == 87) {//tecla cima
			dy1 = -1;
		} else if (getPosicaoMiraEsquerda1() <= 790 && tecla == 68) {//tecla direita	
			dx1 = 1;
		}
		else if (getPosicaoMiraTopo1() <= 496 && tecla == 83) {//tecla baixo
			//			console.log(getPosicaoMiraTopo());
			dy1 = 1;
		}
		else {
			dx1 = 0;
			dy1 = 0;
		}

	} else {
		px1 = 100;
		py1 = 400;
	}
}

function atribuirFlag() {// atribui flag pro jogador 1 parar de jogar
	flag = flag + 1;
	return flag;
}

function atribuiFlag3() {
	flag = flag + 1;
	return flag;
}

function tiroUp2() {
	var tecla = event.keyCode;

	if (tecla == 76) {

		document.getElementById('acerto2').style.display = 'none';//quando a tecla estiver 'up' a div some
		document.getElementById('erro2').style.display = 'none';//"   "
		document.getElementById('fogoroxo2').style.display = 'none';
		document.getElementById('fogoerro2').style.display = 'none';
		document.getElementById('fogoamarelo2').style.display = 'none';
		document.getElementById('fogoazul2').style.display = 'none';
		document.getElementById('fogovermelho2').style.display = 'none';
		document.getElementById('fogoverde2').style.display = 'none';
		document.getElementById('fogocolorido2').style.display = 'none';

	}
}

function posicaoBolaEsquerda2() {
	return document.getElementById('bola2').offsetLeft;
}

function posicaoBolaTopo2() {
	return document.getElementById('bola2').offsetTop;
}

function teclaDw2() {

	if (flag == 2) {

		var tecla = event.keyCode;
		if (getPosicaoMiraEsquerda2() >= 50 && tecla == 37) {//tecla esquerda
			dx2 = -1;
		} else if (getPosicaoMiraTopo2() >= 50 && tecla == 38) {//tecla cima
			dy2 = -1;
		} else if (getPosicaoMiraEsquerda2() <= 790 && tecla == 39) {//tecla direita	
			dx2 = 1;
		}
		else if (getPosicaoMiraTopo2() <= 496 && tecla == 40) {//tecla baixo
			//			console.log(getPosicaoMiraTopo());
			dy2 = 1;
		}
		else {
			dx2 = 0;
			dy2 = 0;
		}
	} else {
		px2 = 655;
		py2 = 400;
	}

}

$(function () {//faz a musica tocar
	var musica = new Audio('./sons/dokan.mp3');//
	musica.play();
});

function pisca() {// pisca letra
	var f = document.getElementById('letr');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 200);
}

function piscamira1() {// pisca mira
	var f = document.getElementById('mira1');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 80);
}

function piscamira2() {// pisca mira
	var f = document.getElementById('mira2');
	setInterval(function () {
		f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
	}, 80);
}

function teclaUp1() {
	var tecla = event.keyCode;
	if (tecla == 65) {//tecla esquerda
		dx1 = 0;
	} else if (tecla == 87) {//tecla cima
		dy1 = 0;
	} else if (tecla == 68) {//tecla direita
		dx1 = 0;
	} else if (tecla == 83) {//tecla baixo
		dy1 = 0;
	}
}

function teclaUp2() {
	var tecla = event.keyCode;
	if (tecla == 37) {//tecla esquerda
		dx2 = 0;
	} else if (tecla == 38) {//tecla cima
		dy2 = 0;
	} else if (tecla == 39) {//tecla direita
		dx2 = 0;
	} else if (tecla == 40) {//tecla baixo
		dy2 = 0;
	}
}

function enterFrame() {// colocar mira 2 aqui tbm
	px1 += dx1 * vel1;
	py1 += dy1 * vel1;
	obj1.style.left = px1 + "px";
	obj1.style.top = py1 + "px";
	px2 += dx2 * vel2;
	py2 += dy2 * vel2;
	obj2.style.left = px2 + "px";
	obj2.style.top = py2 + "px";

}

window.addEventListener("load", inicia);

function getpratosAleatorio() {
	var vPrat = ["pr", "pam", "paz", "pver", "pvm", "pla", "bonus", "bonustres", "bonusquatro", "bonuscinco"];
	var pratoaleatorioP = Math.round(Math.random() * 9);
	return vPrat[pratoaleatorioP];
}

function exibe() {// função que exibe os pratos

	if (flag != 3) {

		pratAleatorio = getpratosAleatorio();

		if (pratAleatorio == "pr") {

			var posE = Math.round(Math.random() * 790);
			var posT = Math.round(Math.random() * 400);
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pr";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('pr').style.display = 'block';
			pE = posE;
			pT = posT;
			setTimeout('esconde()', segundos - 3000);

		} else if (pratAleatorio == "pam") {
			var posE = Math.round(Math.random() * 790);
			var posT = Math.round(Math.random() * 400);
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			vPrato = "pam";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('pam').style.display = 'block';
			pE = posE;
			pT = posT;
			setTimeout('esconde()', segundos - 3000);

		} else if (pratAleatorio == "paz") {

			var posE = Math.round(Math.random() * 790);
			var posT = Math.round(Math.random() * 400);
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "paz";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('paz').style.display = 'block';
			pE = posE;
			pT = posT;
			setTimeout('esconde()', segundos - 3000);
			
		} else if (pratAleatorio == "pver") {

			var posE = Math.round(Math.random() * 790);
			var posT = Math.round(Math.random() * 400);
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pver";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('pver').style.display = 'block';
			pE = posE;
			pT = posT;
			setTimeout('esconde()', segundos - 3000);

		} else if (pratAleatorio == "pvm") {

			var posE = Math.round(Math.random() * 790);
			var posT = Math.round(Math.random() * 400);
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pvm";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('pvm').style.display = 'block';
			pE = posE;
			pT = posT;
			setTimeout('esconde()', segundos - 3000);
			
		} else if (pratAleatorio == "pla") {

			var posE = Math.round(Math.random() * 790);
			var posT = Math.round(Math.random() * 400);
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "pla";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('pla').style.display = 'block';
			pE = posE;
			pT = posT;
			setTimeout('esconde()', segundos - 3400);
			
		} else if (pratAleatorio == "bonus") {

			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
			pratoesquerdo = posE + "px";
			pratotop = posT + "px";
			var vPrato = "bonus";
			document.getElementById(vPrato).style.left = pratoesquerdo;
			document.getElementById(vPrato).style.top = pratotop;
			document.getElementById('bonus').style.display = 'block';
			pE = posE;
			pT = posT;
			setTimeout('esconde()', segundos - 3150);

		} else if (pratAleatorio == "bonustres") {

			var posE = Math.round(Math.random() * 700);
			var posT = Math.round(Math.random() * 400);
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
}

function escondeExroxo1() {
	
	document.getElementById('explosaoroxo1').style.display = 'none';
}

function escondeExamarelo1() {
	
	document.getElementById('explosaoamarelo1').style.display = 'none';
}

function escondeExazul1() {
	
	document.getElementById('explosaoazul1').style.display = 'none';
}

function escondeExvermelho1() {
	
	document.getElementById('explosaovermelho1').style.display = 'none';
}
function escondeExverde1() {
	
	document.getElementById('explosaoverde1').style.display = 'none';
}
function escondeExpreto1() {
	
	document.getElementById('explosaopreto1').style.display = 'none';
}
function escondeExbonus1() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('exbonus1').style.display = 'none';

}

function escondeExroxo2() {
	
	document.getElementById('explosaoroxo2').style.display = 'none';
}

function escondeExamarelo2() {
	
	document.getElementById('explosaoamarelo2').style.display = 'none';
}

function escondeExazul2() {
	
	document.getElementById('explosaoazul2').style.display = 'none';
}

function escondeExvermelho2() {
	
	document.getElementById('explosaovermelho2').style.display = 'none';
}
function escondeExverde2() {
	
	document.getElementById('explosaoverde2').style.display = 'none';
}
function escondeExpreto2() {
	
	document.getElementById('explosaopreto2').style.display = 'none';
}
function escondeExbonus2() {
	pE = 100000 + "px";
	pT = 100000 + "px";
	document.getElementById('exbonus2').style.display = 'none';
}

function setTopo() { // seta a barra de rolagem sempre para o topo
	$(window).scrollTop(0);
}
$(window).bind('scroll', setTopo);

function getPosicaoMiraEsquerda1() {
	return document.getElementById('mira1').offsetLeft - 25;
}

function getPosicaoMiraTopo1() {
	return document.getElementById('mira1').offsetTop - 17;//ajuste da imagm da mira
}

function getPosicaoMiraEsquerda2() {
	return document.getElementById('mira2').offsetLeft - 25;
}

function getPosicaoMiraTopo2() {
	return document.getElementById('mira2').offsetTop - 17;//ajuste da imagm da mira
}

function vezJogador() {

	$(function () {//faz a musica tocar

		var musica = new Audio('./sons/alarme.wav');//
		musica.play();

	});
	document.getElementById('vez').style.display = 'block';
}

function escondeVezJogador() {

	document.getElementById('vez').style.display = 'none';

}

function acabaJogo() {

	px1 = 100;//poicionamento x da mira
	py1 = 400;//posicionamento y da mira
	px2 = 650;
	py2 = 400;

	$(function () {//faz a musica tocar
		var musica = new Audio('./sons/final.wav');//
		musica.play();
	});

	$('#myModal').modal({ backdrop: 'static', keyboard: false })

	var usuario1 = document.getElementById('inputJogador1').value;
	var pon1 = document.getElementById('pontos1').value;
	var inputErro1 = document.getElementById('inputErro1').value;
	var por1 = document.getElementById('inputPorcento1').value;
	var re = document.getElementById('re').value;
	var r = parseInt(re);
	var pon2 = document.getElementById('pontos2').value;
	var usuario2 = document.getElementById('inputJogador2').value;
	var inputErro2 = document.getElementById('inputErro2').value;
	var por2 = document.getElementById('inputPorcento2').value;

	if (pon1 > r || pon2 > r) {

		if (pon1 > pon2) {

			document.getElementById('novo').style.display = 'block';
			document.getElementById('jogador1vence').style.display = 'block';//
			document.getElementById('nomejogador').value = usuario1;
			document.getElementById('pontoF').value = pon1;
			document.getElementById('porcentoF').value = por1;

		} else if (pon2 > pon1) {

			document.getElementById('novo').style.display = 'block';
			document.getElementById('jogador2vence').style.display = 'block';//
			document.getElementById('nomejogador').value = usuario2;
			document.getElementById('pontoF').value = pon2;
			document.getElementById('porcentoF').value = por2;

		} else if (pon1 == pon2 && porcento1 > porcento2) {

			document.getElementById('novo').style.display = 'block';
			document.getElementById('jogador1vence').style.display = 'block';//
			document.getElementById('nomejogador').value = usuario1;
			document.getElementById('pontoF').value = pon1;
			document.getElementById('porcentoF').value = por1;

		} else if (pon2 == pon1 && porcento2 > porcento1) {

			document.getElementById('novo').style.display = 'block';
			document.getElementById('jogador2vence').style.display = 'block';//
			document.getElementById('nomejogador').value = usuario2;
			document.getElementById('pontoF').value = pon2;
			document.getElementById('porcentoF').value = por2;

		} else if (pon1 == pon2 && porcento1 == porcento2 && inputErro1 < inputErro2) {

			document.getElementById('novo').style.display = 'block';
			document.getElementById('jogador1vence').style.display = 'block';//
			document.getElementById('nomejogador').value = usuario1;
			document.getElementById('pontoF').value = pon1;
			document.getElementById('porcentoF').value = por1;

		} else if (pon2 == pon1 && porcento2 == porcento1 && inputErro2 < inputErro1) {

			document.getElementById('novo').style.display = 'block';
			document.getElementById('jogador2vence').style.display = 'block';//
			document.getElementById('nomejogador').value = usuario2;
			document.getElementById('pontoF').value = pon2;
			document.getElementById('porcentoF').value = por2;

		} else {

			document.getElementById('empate').style.display = 'block';
			document.getElementById('nomejogador').style.display = "Empatou!";
			document.getElementById('pontoF').value = "Empatou!";
			document.getElementById('porcentoF').value = "Empatou!";
		}

	} else if (pon1 > pon2) {

		document.getElementById('jogador1vence').style.display = 'block';
		document.getElementById('nomejogador').value = usuario1;
		document.getElementById('pontoF').value = pon1;
		document.getElementById('porcentoF').value = por1;

	} else if (pon2 > pon1) {

		document.getElementById('jogador2vence').style.display = 'block';
		document.getElementById('nomejogador').value = usuario2;
		document.getElementById('pontoF').value = pon2;
		document.getElementById('porcentoF').value = por2;

	} else if (pon1 == pon2 && porcento1 > porcento2) {

		document.getElementById('jogador1vence').style.display = 'block';
		document.getElementById('nomejogador').value = usuario1;
		document.getElementById('pontoF').value = pon1;
		document.getElementById('porcentoF').value = por1;

	} else if (pon2 == pon1 && porcento2 > porcento1) {

		document.getElementById('jogador2vence').style.display = 'block';
		document.getElementById('nomejogador').value = usuario2;
		document.getElementById('pontoF').value = pon2;
		document.getElementById('porcentoF').value = por2;

	} else if (pon1 == pon2 && porcentot1 == porcento2 && inputErro1 < inputErro2) {

		document.getElementById('jogador1vence').style.display = 'block';
		document.getElementById('nomejogador').value = usuario1;
		document.getElementById('pontoF').value = pon1;
		document.getElementById('porcentoF').value = por1;

	} else if (pon2 == pon1 && porcento2 == porcento1 && inputErro2 < inputErro1) {
		document.getElementById('jogador2vence').style.display = 'block';
		document.getElementById('nomejogador').value = usuario2;
		document.getElementById('pontoF').value = pon2;
		document.getElementById('porcentoF').value = por2;

	} else {

		document.getElementById('empate').style.display = 'block';
		document.getElementById('nomejogador').style.display = 'none';
		document.getElementById('pontoF').value = "Empatou!";
		document.getElementById('porcentoF').value = "Empatou!";

	}
}

