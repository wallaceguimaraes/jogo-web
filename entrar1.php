<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="utf-8"/>
<title>Página-Entrar</title>

<script src="jquery-3.3.1.min.js"></script>
<script src="usuario/js/script.js"></script>


<link rel="stylesheet" type="text/css" href="visual/css/reset.css"> <!--css-->
<link rel="stylesheet" type="text/css" href="visual/css/style.css"> <!--css-->



<!--<script src="caminho arquivo javascript"></script>-->
<style>
a{
text-decoration:none; 
}

	
	a:hover{
		color:red;
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

.fadeEntra {
-webkit-animation: fadeIn 1s ease-in-out;
-moz-animation: fadeIn 1s ease-in-out;
-o-animation: fadeIn 1s ease-in-out;
animation: fadeIn 1s ease-in-out;
}


</style>
<script>

function pagina(){
                location.replace("./index.html");
   
}


function Entrar(){

                            location.replace("./jogo1.php")   ;           


}





/*

            function salvaDados() {
                // alert('chamou o evento porra!');
                var usuario = $('#nJogador').val();

                $.ajax({
                    type: "POST",
                    url: "./usuario/dados/teste.php",
                    dataType: 'html',
                     async: false,
                     timeout: 30000,
                    data: {nome: usuario},
                    success: function (response) {

                            //alert("SALVO NO BANCO") ; 

                            location.replace("./jogo1.php")   ;           

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

*/
        </script>



</head>

<body class="fadeEntra" onload="pisca();" bgcolor="black">


<div class="painel-fundo"></div>

<div class="painel-principal">
<h3 id="letr">Tiro no prato!</h3>
   <!--
   <nav>
		<ul>
		<li> <a href="usuario/record.php">Recordes!</li>
				<li> <a class="link" href="usuario/record.php" target="_blank">Recordes!</li>
		</ul>
   </nav>
   -->
   <!-- formulario-->
   <form action="jogo1.php" method="POST" id="painel-login"><!-- Não precisa usar o action e nem o metod post pois usarei ajax-->
<!--<label for="Ljogador"> <font face="Georgia"> Nome do Jogador : </font></label>-->
<!--<label for="Ljogador"> <font size="2"> Nome do Jogador : </font></label>-->

<!--<a href="Sist.rar">Download</a> forma de fazer download-->
<!--<label for="Ljogador"> <font color="Purple"> Nome do Jogador : </font></label>
-->
<input type="text" id="nJogador" name="nome" placeholder="Nome do jogador"/>
  
<br></br>
<input type="button" 
value="Fácil" style="width: 100px; position: absolute; top: 231px; right: 50px;" onclick="facil()">
<input type="button" 
value="Normal" style="width: 100px; position: absolute; top: 254px; right: 50px;" onclick="medio()">
<input type="button" 
value="Difícil" style="width: 100px; position: absolute; top: 277px; right: 50px;" onclick="dificil()">
<input type="button" 
value="Insano" style="width: 100px; position: absolute; top: 300px; right: 50px;" onclick="insano()">
<input type="text" id="dificult" name="dificulty" readonly="readonly" placeholder="Dificuldade"/>
<br></br>
<button type="submit">Entrar</button>


<!--
<input type="button" id="botao-login" onclick="Entrar()" value="Entrar!"/>
-->

<!-- <input type="hidden" id="metodo" value="formulario-ajax" />
-->
</form>

</div>
<a id="pagina" style="position: absolute; left: 20px; top: 20px;" onclick="pagina()">Página inicial</a>
<!--<canvas width="640" height="640" style="border: solid;">-->

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