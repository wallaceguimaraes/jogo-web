<?php

include("Conec.php");


$nome=$_POST["nome"];
$dificulty=$_POST["dificulty"];

//echo var_dump($nome1);
$recorde=0;





					$consulta = "SELECT * FROM usuario  WHERE pontuacao = (SELECT MAX(pontuacao) FROM usuario)";

					$con = $mysqli->query($consulta) or die($mysqli->error);

					while ($dado = $con->fetch_array()){

					$recorde=$dado["pontuacao"];

					}







?>


<!DOCTYPE html>
	<html lang="pt-br">
		<head>
			<meta charset="utf-8"/>
			<title>Jogo</title>
			<link rel="stylesheet" type="text/css" href="visual/css/reset.css">
			<link rel="stylesheet" type="text/css" href="visual/css/style.css"> 
			<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
				<!-- Lembrar não consigo chamar uma pagina pelo PHP
					como pegar a posição de uma div
					nao consigo usar o canvas
					nao consigo fazer posição aleatoria dos pratos
				-->
			<style>

					body{
						overflow: hidden;
					}
					h1{

						position: absolute;
						left: 550px;
						top: -15px;
						font-size: 120%;
						color: #1a1a1a;
						font-family: verdana;
					}


					h2{
					position: absolute;
					left: 48px;
					top: 110px;
					font-size: 110%;
					color: #2e1706; 

					}

					h3{
						position: absolute;
						left: 48px;
						top: 162px;
						font-size: 110%;
						color:#2e1706;
					}

					h4{
					position: absolute;
						left: 48px;
						top: 220px;
						font-size: 110%;
						color: #2e1706;

					}
					h5{
						position: absolute;
						left: 50px;
						top: 280px;
						font-size: 110%;
						color: #2e1706;

					}
					h6{
					position: absolute;
						left: 50px;
						top: 340px;
						font-size: 110%;
						color: #2e1706;

					}

					body{
						background-color: green;
					}


					@-webkit-keyframes fadeIn {
					0% { opacity: 0; }
					100% { opacity: 1; } 
					}
					@-moz-keyframes fadeIn {
					0% { opacity: 0;}
					100% { opacity: 1; }
					}
					@-o-keyframes fadeIn {
					0% { opacity: 0; }
					100% { opacity: 1; }
					}
					@keyframes fadeIn {
					0% { opacity: 0; }
					100% { opacity: 1; }
					}

					.fadeEntra {
					-webkit-animation: fadeIn 1s ease-in-out;
					-moz-animation: fadeIn 1s ease-in-out;
					-o-animation: fadeIn 1s ease-in-out;
					animation: fadeIn 1s ease-in-out;
					}

			</style> 

				<script>

					function tocaMusica(){
						$(function(){//faz a musica tocar
							var musica = new Audio('./sons/dokan.mp3');//
							musica.play();
							});
						}

					</script>

			</head>

				<body class="fadeEntra" onload= "pisca(); tocaMusica(); piscamira(); tempo();" bgcolor="green">

					<div id="logo"style="display:none;"><img src="visual/logo.png"/> </div>
					<h1 id="letra"><b>Acerte os pratos!</b></h1>
					<h2 id="jog1"><b>Jogador: </b></h2>
					<h3 id="pontua1"><b>Pontuação:</b></h3>
					<h4 id="acer"><b>Acertos:</b></h4>
					<h5 id="err"><b>Erros:</b></h5>
					<h6 id="porc"><b>Porcentagem:</b></h6>
					<div id="fogoroxo" style="display:none;"><img src="visual/fogoroxo.png"/></div>
					<div id="fogoamarelo" style="display:none;"><img src="visual/fogoamarelo.png"></div>
					<div id="fogoazul" style="display:none;"><img src="visual/fogoazul.png"/></div>
					<div id="fogocolorido"style="display:none"><img src="visual/fogocolorido.png"></div>
					<div id="fogoerro"style="display:none;"><img src="visual/fogoerro.png"/></div>
					<div id="fogoverde"style="display:none;"><img src="visual/fogoverde.png"/></div>
					<div id="fogovermelho"style="display:none"><img src="visual/fogovermelho.png"></div>
					<div><input type="text" id="acert"name="ace" value="0"readonly="readonly"/></div>
					<div><input type="text" id="inputErro" name="er" value="0"readonly="readonly"/></div>
					<div><input type="text" id="pontos" name="pont" value="0"readonly="readonly"/></div>
					<div id="vezesdois"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezesdois.png"/></div>
					<div id="vezestres"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezestres.png"/></div>
					<div id="vezesquatro"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezesquatro.png"/></div>
					<div id="vezescinco"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezescinco.png"/></div>

						<!--
									<div><input type="text" id="inputJogador" value="<?php //session_start(); echo $_SESSION['nome_usuario'] ?>"readonly="readonly"/></div>

						-->
					<div><input type="text" id="inputJogador" value="<?php echo $nome; ?>"readonly="readonly"/></div>
					<div><input type="text" id="inputPorcento" name="porc"value="0%"readonly="readonly"/></div>


					<audio id="audio"><source src="./sons/canhao.wav" type="audio/wav"  /></audio>
					<span id="hora">00h</span><span id="minuto">00m</span><span id="segundo">00s</span><!--relogio-->
					<div id="cen" class="cena">
						<img src="visual/ceu.jpg" style="border: 3px solid; height: 600px; width: 900px" class="ceu" />		
							<div id="acerto"style="display:none;" ><img src="visual/acerto.png"/></div>
								<div id="erro"style="display:none;"><img src="visual/erro.png"/></div>
								<div id="pr"style="display:none;"><img src="visual/pratoroxo.png"/></div>
								<div id="pam"style="display:none;"><img src="visual/pratoamarelo.png"/></div>
								<div id="paz"style="display:none;"> <img src="visual/pratoazul.png"/></div>
								<div id="pver"style="display:none;"><img src="visual/pratoverde.png"/></div>
								<div id="pvm"style="display:none;"><img src="visual/pratovermelho.png"/></div>
								<div id="pla"style="display:none;"><img src="visual/pratolaranja.png"/></div>
								<div id="bonus"style="display:none; position:absolute;"><img src="visual/bonus.png"/></div>
								<div id="bonustres"style="display:none; position:absolute;"><img src="visual/bonustres.png"/></div>
								<div id="bonusquatro"style="display:none; position:absolute;"><img src="visual/bonusquatro.png"/></div>
								<div id="bonuscinco"style="display:none; position:absolute;"><img src="visual/bonuscinco.png"/></div>
								<div id="explosaoroxo" style="display:none;" ><img src="visual/explosaoroxo.png"/></div>
								<div id="explosaoamarelo" style="display:none;" ><img src="visual/explosaoamarelo.png"/></div>
								<div id="explosaoazul" style="display:none;" ><img src="visual/explosaoazul.png"/></div>
								<div id="explosaovermelho" style="display:none;" ><img src="visual/explosaovermelho.png"/></div>
								<div id="explosaoverde" style="display:none;" ><img src="visual/explosaoverde.png"/></div>
								<div id="explosaopreto"style="display:none;" ><img src="visual/explosaopreto.png"/></div>
								<div id="exbonus" style="position: absolute; display:none;"><img src="visual/exbonus.png"/></div>
									<div id="bola" class="bol"><img src="visual/bola.png"/></div>
										<div id="mira" class="mir"><img src="visual/mira.png" /></div>
											<div id="canhao1" ><img src="visual/canhao1.png"/></div>

							<!--div modal -->
						<div class="modal fade" id="myModal">
							<div class="modal-dialog modal-sm"> <!--engloba parte branca modal (modal-sm) e (modal-lg)-->	
								<div class="modal-content"><!--estrutura do conteudo-->
									<div class="modal-header"><!-- vai ter o link reponsavel por fechar a modal-->
										<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
										<h7 class="modal-title" style="font-size: 200%;">Tempo esgotado!</h7>
									</div>
										<div class="modal-body"><!--todo conteudo visual do modal-->
											<p><b>A sua pontuação máxima foi:</b> &hellip;</p>
											<div><input type="text" id="pontoF" value="" style="text-align: center;"readonly="readonly"/><label for="lab">Pontos!</label></div>
											<p></p>
											<div><input type="text" id="porcentoF" value="" style="text-align: center;"readonly="readonly"/><label for="lab">Porcento!</label></div>
											<p></p>
											<div id="imgruim" style="display:none;"><img src="visual/imgruim.png"/></div>
											<div id="treine" style="display:none;"><img src="visual/treine.png"></div>
											<div id="otimo" style="display:none;"><img src="visual/otimo.png"></div>
											<div id="excelente" style="display:none;"><img src="visual/excelente.png"></div>
											<div id="bem" style="display:none;"><img src="visual/bem.png"></div>
											<div id="novo" style="display:none;"><img src="visual/nrecorde.png"></div>
											<p></p>
											<div id="parabens" style="display:none;"><img src="visual/parabens.png"></div>
							
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
												<!--	
													<button type="button" class="btn btn-primary">Salvar</button>
												-->
											</div>
									</div>
								</div>
							</div>	
						</div>

					<label for="label" style="color: black; position: absolute; left: 50px; top: 60px;"><b>Maior Pontuação:</b></label>
					<div><input type="text" id="re"name="ace" style="position: absolute;text-align:center; width: 100px; left: 50px; top: 80px;" value="" readonly="readonly"/></div>
					<label for "label2" style="color:black; position: absolute; right: 50px; top: 60px;"><b>Dificuldade:</b></label>
					<div><input type="text" id="d"name="ace" style="position: absolute; text-align:center; width: 100px; right: 50px; top: 80px;" value="<?php echo $dificulty; ?>" readonly="readonly"/></div>

						<script src="jquery-3.3.1.min.js"></script>
						<script src="usuario/js/javas.js"></script>
						<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

						<script>

								var record="<?php echo $recorde; ?>"; 
								document.getElementById('re').value=record;
								/*
								function Retorna(){

												location.replace("./index.html");           

								}
								*/

								$('#myModal').on('hide.bs.modal', function(e) {
								//quando o modal for fechado
								//	              location.replace("./index.html");   
										salvaDados();
										setTimeout('location.replace("./tabela.php")',200);
								});

								/*
								$('#myModal').on('hidden.bs.modal', function(e) {
								//quando o modal ja estiver fechado
								});

								$('#myModal').on('show.bs.modal', function(e) {
								//quando o modal for aberto
								});

								$('#myModal').on('shown.bs.modal', function(e) {
								//quando o modal ja estiver aberto
								});
								*/

								function salvaDados() {
												// alert('chamou o evento porra!');
												var usuario = $('#inputJogador').val();
												var vPontuacao = $("#pontos").val();
												var vErro = $("#inputErro").val();
												var vAcerto = $("#acert").val();
												var vPorcento = $("#inputPorcento").val();
												var vDificuldade = $("#d").val();

												//alert(usuario)

												$.ajax({
													type: "POST",
													url: "./usuario/dados/teste2.php",
													dataType: 'html',
													async: false,
													timeout: 30000,
													data: { jogador1: usuario,
															pontos: vPontuacao,
															erros: vErro,
															acertos: vAcerto,
															porcento: vPorcento,
															dificuldade: vDificuldade     
												},
													success: function (response) {
															//alert(response);
															//alert("SALVO NO BANCO") ;            

													},
													error: function (error) {
														if (error.status && error.status === 500) {
															//alert(error.responseText);
															var textoErro = error.responseText;
															erro = true;
														} else {
															var textoErro = "Erro desconhecido";
															erro = true;
														}
														//Coloca o textoerro no alerta
														alert(textoErro);
													}
												});
											}

							</script>
					</body>
		</html>