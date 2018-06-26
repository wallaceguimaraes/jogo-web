<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<title>Página-Entrar 2</title>

<script src="jquery-3.3.1.min.js"></script>
<script src="usuario/js/script.js"></script>


<link rel="stylesheet" type="text/css" href="visual/css/reset.css"> <!--css-->
<link rel="stylesheet" type="text/css" href="visual/css/estilo2.css"> <!--css-->



<!--<script src="caminho arquivo javascript"></script>-->
<style>
a{
text-decoration:none; tira sublinhado
}

	
	a:hover{
		color: Red; mouse em cima do link fica vermelho
	}

/*
.link{ text-decoration: none Criei a classe para adicionar depois no link q eu quiser
        color: Green; 
}
-*/

 h3{
	font-size: 100px;
	position: absolute;
	left: 180px;
	color: black;
    top: 80 px;
	font:normal 60pt Arial;
 	color:brown;
 	text-shadow: 0 1px 0 black,
 	0 2px 0 #c9c9c9,
 	0 3px 0 #bbb,
 	0 4px 0 #b9b9b9,
 	0 5px 0 #aaa,
 	0 6px 1px rgba(0,0,0,.1),
 	0 0 5px rgba(0,0,0,.1),
 	0 1px 3px rgba(0,0,0,.3),
 	0 3px 5px rgba(0,0,0,.2),
 	0 5px 10px rgba(0,0,0,.25),
 	0 10px 10px rgba(0,0,0,.6),
 	0 20px 20px rgba(0,0,0,.15);
    

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

.fadeIn {
-webkit-animation: fadeIn 3s ease-in-out;
-moz-animation: fadeIn 3s ease-in-out;
-o-animation: fadeIn 3s ease-in-out;
animation: fadeIn 3s ease-in-out;
}




</style>
<script>
function pagina(){
                location.replace("./index.html");
    
}


$(function(){//faz a musica tocar

var musica = new Audio('./sons/looney.wav');//
musica.play();
//var musi = new Audio('./sons/cancaopicapau.mp3');
//musi.play();

});





            function salvaDados1() {               


       //var usuario11 = $('#nJogador1').val();
       //var usuario22 = $('#nJogador2').val();


                  //location.replace("./usuario/dados/teste3.php");  
                           // location.replace("./jogo2.php");       

    }




        </script>



</head>

<body class="fadeIn" onload="pisca();" bgcolor="black">


<div class="painel-fundo"></div>

<div class="painel-principal">
<h3 id="letr">Tiro no prato!</h3>
  
   <form action="jogo2.php" method="POST" id="painel-login"><!-- Não precisa usar o action e nem o metod post pois usarei ajax-->
<input type="text" id="nJogador1" name="nome1" patern="[a-zA-Z0-9]+" placeholder="Nome do jogador 1"/>
<br></br>
<input type="text" id="nJogador2" name="nome2" placeholder="Nome do jogador 2"/>
<br></br>
<input type="button" 
value="Fácil" style="width: 100px; position: absolute; top: 231px; right: 50px; color: purple;" onclick="facil()">
<input type="button" 
value="Normal" style="width: 100px; position: absolute; top: 254px; right: 50px; color: purple;" onclick="medio()">
<input type="button"
value="Difícil" style="width: 100px; position: absolute; top: 277px; right: 50px; color: purple;" onclick="dificil()">
<input type="button" 
value="Insano" style="width: 100px; position: absolute; top: 300px; right: 50px; color: purple;" onclick="insano()">
<input type="text" id="dificult" name="dificult" readonly="readonly" placeholder="Dificuldade"/>
<br></br>
<button type="submit">Entrar</button>
</form>

<div id="resultado"></div>

</div>
<a id="pagina" style="position: absolute; left: 20px; top: 20px;" onclick="pagina()">Página inicial</a>


<script>

function facil(){


var dificul="Fácil";
    document.getElementById('dificult').value=dificul;

     sessionStorage.setItem('dados', dificul);

}


function medio(){


var dificul="Normal";
    document.getElementById('dificult').value=dificul;
     sessionStorage.setItem('dados', dificul);

}



function dificil(){

var dificul="Difícil";
    document.getElementById('dificult').value=dificul;
     sessionStorage.setItem('dados', dificul);
}


function insano(){
    var dificul="Insano";
    document.getElementById('dificult').value=dificul;

     sessionStorage.setItem('dados', dificul);

}

</script>


</body>
</html>