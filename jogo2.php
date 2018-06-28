<?php
include("Conec.php");


$nome1=$_POST["nome1"];
$nome2=$_POST["nome2"];

$dificulty=$_POST["dificult"];


//echo var_dump($nome1);



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
<link rel="stylesheet" type="text/css" href="visual/css/estilo2.css"> 
<link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">


<style>

body{
	overflow: hidden;
	background-color: green;
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


h2#jog2{
position: absolute;
left: 1167px;
top: 110px;
font-size: 110%;
color: #2e1706; 


}

h3#pontua2{

position: absolute;
left: 1167px;
top: 162px;
font-size: 110%;
color: #2e1706; 


}


h4#acer2{

position: absolute;
left: 1167px;
top: 220px;
font-size: 110%;
color: #2e1706; 

}

h5#err2{
position: absolute;
left: 1167px;
top: 280px;
font-size: 110%;
color: #2e1706; 

}

h6#porc2{
position: absolute;
left: 1167px;
top: 340px;
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



<script src="jquery-3.3.1.min.js"></script>
<script src="usuario/js/javas2.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>







<script>







</script>







</head>

<body class="fadeEntra" onload="pisca(); piscamira1(); piscaVez(); piscamira2(); tempo();" bgcolor="green">

			<h1 id="letr"><b>Acerte os pratos!</b></h1>
			<h2 id="jog1"><b>Jogador 1:</b> </h2>
			<h3 id="pontua1"><b> Pontuação:</b></h3>
			<h4 id="acer1"><b>Acertos:</b></h4>
			<h5 id="err1"><b>Erros:</b></h5>
			<h6 id="porc1"><b>Porcentagem:</b></h6>


			<h2 id="jog2"><b> Jogador 2:</b> </h2>
			<h3 id="pontua2"><b> Pontuação:</b></h3>
			<h4 id="acer2"><b>Acertos:</b></h4>
			<h5 id="err2"><b>Erros:</b></h5>
			<h6 id="porc2"><b>Porcentagem:</b></h6>


			<div id="fogoroxo1" style="display:none;"><img src="visual/fogoroxo.png"/></div>
			<div id="fogoamarelo1" style="display:none;"><img src="visual/fogoamarelo.png"></div>
			<div id="fogoazul1" style="display:none;"><img src="visual/fogoazul.png"/></div>
			<div id="fogocolorido1"style="display:none"><img src="visual/fogocolorido.png"></div>
			<div id="fogoerro1"style="display:none;"><img src="visual/fogoerro.png"/></div>
			<div id="fogoverde1"style="display:none;"><img src="visual/fogoverde.png"/></div>
			<div id="fogovermelho1"style="display:none"><img src="visual/fogovermelho.png"></div>


			<div id="fogoroxo2" style="display:none;"><img src="visual/fogoroxo.png"/></div>
			<div id="fogoamarelo2" style="display:none;"><img src="visual/fogoamarelo.png"></div>
			<div id="fogoazul2" style="display:none;"><img src="visual/fogoazul.png"/></div>
			<div id="fogocolorido2"style="display:none"><img src="visual/fogocolorido.png"></div>
			<div id="fogoerro2"style="display:none;"><img src="visual/fogoerro.png"/></div>
			<div id="fogoverde2"style="display:none;"><img src="visual/fogoverde.png"/></div>
			<div id="fogovermelho2"style="display:none"><img src="visual/fogovermelho.png"></div>
			
<form id="cadPontuacao" action="" method="post">

			<div><input type="text" id="acert1" name="acert1" value="0"readonly="readonly"/></div>
			<div><input type="text" id="inputErro1" name="inputErro1" value="0"readonly="readonly"/></div>
			<div><input type="text" id="pontos1" name="pontos1" value="0"readonly="readonly"/></div>
			<div id="vezesdois1"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezesdois.png"/></div>
			<div id="vezestres1"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezestres.png"/></div>
			<div id="vezesquatro1"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezesquatro.png"/></div>
			<div id="vezescinco1"style="display:none; position: absolute; top: 194px; left: 140px;" ><img src="visual/vezescinco.png"/></div>

			
			<div><input type="text" id="inputJogador1" name="inputJogador1"value="<?php echo $nome1;?>"readonly="readonly"/></div>
			<div><input type="text" id="inputPorcento1" name="inputPorcento1"value="0%"readonly="readonly"/></div>


			<div><input type="text" id="acert2" name="" style="right:130px; text-align: right;"value="0"readonly="readonly"/></div>
			<div><input type="text" id="inputErro2" style="text-align: right;" name=""value="0"readonly="readonly"/></div>
			<div><input type="text" id="pontos2" style="text-align: right;" name=""value="0"readonly="readonly"/></div>
			<div id="vezesdois2"style="display:none; position: absolute; top: 194px; right: 60px;" ><img src="visual/vezesdois.png"/></div>
			<div id="vezestres2"style="display:none; position: absolute; top: 194px; right: 60px;" ><img src="visual/vezestres.png"/></div>
			<div id="vezesquatro2"style="display:none; position: absolute; top: 194px; right: 60px;" ><img src="visual/vezesquatro.png"/></div>
			<div id="vezescinco2"style="display:none; position: absolute; top: 194px; right: 60px;" ><img src="visual/vezescinco.png"/></div>



			<div><input type="text" id="inputJogador2" style="text-align: right;"name=""value="<?php echo $nome2; ?>"readonly="readonly"/></div>
			<div><input type="text" id="inputPorcento2" style="text-align: right;"name=""value="0%"readonly="readonly"/></div>


</form>			



	<audio id="audio"><source src="./sons/canhao.wav" type="audio/wav"  /></audio>

	<span id="hora">00h</span><span id="minuto">00m</span><span id="segundo">00s</span><!--relogio-->


	<div id="cen" class="cena">
		<img src="visual/ceu.jpg" style="border: 3px solid; height: 600px; width: 900px" class="ceu" />		

		<div id="acerto1"style="display:none;" ><img src="visual/acerto.png"/></div>

		<div id="erro1"style="display:none;"><img src="visual/erro.png"/></div>

		<div id="acerto2"style="display:none;" ><img src="visual/acerto.png"/></div>

		<div id="erro2"style="display:none;"><img src="visual/erro.png"/></div>





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
 	

      	<div id="explosaoroxo1" ><img src="visual/explosaoroxo.png"/></div>
      	<div id="explosaoamarelo1"><img src="visual/explosaoamarelo.png"/></div>
      	<div id="explosaoazul1"><img src="visual/explosaoazul.png"/></div>
      	<div id="explosaovermelho1"><img src="visual/explosaovermelho.png"/></div>
      	<div id="explosaoverde1"><img src="visual/explosaoverde.png"/></div>
      	<div id="explosaopreto1"><img src="visual/explosaopreto.png"/></div>
      	<div id="exbonus1" style="position: absolute;"><img src="visual/exbonus.png"/></div>


      	<div id="explosaoroxo2" ><img src="visual/explosaoroxo.png"/></div>
      	<div id="explosaoamarelo2"><img src="visual/explosaoamarelo.png"/></div>
      	<div id="explosaoazul2"><img src="visual/explosaoazul.png"/></div>
      	<div id="explosaovermelho2"><img src="visual/explosaovermelho.png"/></div>
      	<div id="explosaoverde2"><img src="visual/explosaoverde.png"/></div>
      	<div id="explosaopreto2"><img src="visual/explosaopreto.png"/></div>
      	<div id="exbonus2" style="position: absolute;"><img src="visual/exbonus.png"/></div>



		<div id="bola1" class="bol1">
			<img src="visual/bola.png"/>
		</div>


		<div id="bola2" class="bol2">
			<img src="visual/bola.png"/>
		</div>



		<div id="mira1" class="mir" >
					<img src="visual/mira.png" />
		</div>

		<div id="mira2" class="mir2" >
					<img src="visual/mira2.png" />
		</div>

		<div id="vez" style="display:none;"><img src="visual/vezjogador.png"/></div>
		<div id="tres" style="display:none;"><img src="visual/tres.png"/></div>	
		<div id="dois" style="display:none;"><img src="visual/dois.png"/></div>	
		<div id="um" style="display:none;"><img src="visual/um.png"/></div>	
		<div id="vai" style="display:none;"><img src="visual/vai.png"/></div>


			<div id="canhao1" >
				<img src="visual/canhao1.png"/>
			</div>

			<div id="canhao2">
				<img src="visual/canhao2.png"/>	
			</div>


			<!--div modal -->
<div class="modal fade" id="myModal">
<div class="modal-dialog modal-sm"> <!--engloba parte branca modal (modal-sm) e (modal-lg)-->	
<div class="modal-content"><!--estrutura do conteudo-->
	<div class="modal-header"><!-- vai ter o link reponsavel por fechar a modal-->
		<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
		<h7 class="modal-title" style="font-size: 200%;">Tempo esgotado!</h7>
	</div>
<div class="modal-body"><!--todo conteudo visual do modal-->
	<p><b>O duelo acabou!</b> &hellip;</p>
	<div id="novo" style="display:none;"><img src="visual/nrecorde.png"></div>
	<p></p>
	<div id="jogador1vence" style="display:none;"><img src="visual/jogador1vence.png"/></div>
	<div id="jogador2vence" style="display:none;"><img src="visual/jogador2vence.png"/></div>
	<div id="empate" style="display:none;"><img src="visual/empate.png"/></div>
	<p></p>
	<div><input type="text" id="nomejogador" value="" style="text-align: center;"readonly="readonly"/></div>
	<p></p>
	<div><input type="text" id="pontoF" value="" style="text-align: center;"readonly="readonly"/> <label for="lab">Pontos!</label></div>
	<p></p>
	<div><input type="text" id="porcentoF" value=""style="text-align: center;"readonly="readonly"/> <label for="lab">Porcento!</label></div>

</div>
<div class="modal-footer">
	<button id="botao-login"type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
<!--	
	<button type="button" class="btn btn-primary">Salvar</button>
-->
</div>
</div>
</div>
</div>




			
</div>
		

<label for="label" style="color: black; position: absolute; left: 50px; top: 60px;"><b>Maior Pontuação:</b></label>
<div><input type="text" id="re"name="ace" style="position: absolute; text-align:center; width: 100px; left: 50px; top: 80px;" value="<?php echo $recorde; ?>" readonly="readonly"/></div>

<label for "label2" style="color:black; position: absolute; right: 118px; top: 60px;"><b>Dificuldade:</b></label>
<div><input type="text" id="d"name="ace" style="position: absolute; text-align: center; width: 100px; right: 100px; top: 80px;" value="<?php echo $dificulty; ?>" readonly="readonly"/></div>



<script>

var record="<?php echo $recorde; ?>"; 
document.getElementById('re').value=record;






setTimeout('salvaDad()',107000);

function salvaDad() {
                // alert('chamou o evento porra!');
                var usuario = $('#inputJogador1').val();
				var vPontuacao = $("#pontos1").val();
 				var vErro = $("#inputErro1").val();
 				var vAcerto = $("#acert1").val();
 				var vPorcento = $("#inputPorcento1").val();
 				var vDificuldade = $("#d").val();


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
                            //alert("SALVO NO BANCO") ; 

                           // location.replace("./jogo1.php")   ;           

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



            

$('#myModal').on('hide.bs.modal', function(e) {
     salvaDados();
 setTimeout('location.replace("./tabela.php")',200);




});


//mexer aqui

//setTimeout('salvaDados()',205600);


function salvaDados() {
                // alert('chamou o evento porra!');
                var usuario = $('#inputJogador2').val();
				var vPontuacao = $("#pontos2").val();
 				var vErro = $("#inputErro2").val();
 				var vAcerto = $("#acert2").val();
 				var vPorcento = $("#inputPorcento2").val();
 				var vDificuldade = $("#d").val();

 			

 		

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

                           // location.replace("./jogo1.php")   ;           

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