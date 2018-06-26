<?php 




					include("Conec.php");

					$consulta = "SELECT * FROM usuario ORDER BY pontuacao DESC, acerto DESC, erro ASC "; //LIMIT 20
					$con = $mysqli->query($consulta) or die($mysqli->error);

?>


<!DOCTYPE html>
<html lang="pt-br">

<script>
function pagina(){
				location.replace("./index.html");

}

</script>

<head>
<meta charset="utf-8"/>
<title>Recordes</title>
<link rel="stylesheet" type="text/css" href="visual/css/style.css"> 


<style>


*a{
text-decoration:block; 
}

a:hover{
	color: blue;
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



</head>

<body class="fadeEntra" style="background: green;"id="corpo" >

	
	<div id="table" style="position: absolute; top: 0px; left: 200px; background: black;">	

			<table id="tabela"class="tabelageral"border="2" style="padding:0;" 
 align="center">

					<caption id="titulo" style="color: #00FF00;"><b>Ranking</b></caption>

					<tr>
						<td width="300px" height="30px" style="text-align: center; border:3; color: yellow; font-size: 150%;"><b>Jogador</b></td>
						<td width="150px" style="text-align: center; color:yellow; font-size:150%;"><b>Pontuação</b></td>
						<td width="100px" style="text-align: center; color: yellow; font-size:150%;"><b>Acertos</b></td>
						<td width="100px" style="text-align: center;color: yellow; font-size: 150%;"><b>Erros</b></td>
						<td width="100px" style="text-align: center; color: yellow; font-size: 150%;"><b>Porcentagem</b></td>
						<td width="150px" style="text-align: center; color: yellow; font-size: 150%;"><b>Dificuldade</b></td>

					</tr>

					<?php 


					$count = 0;
					$st="°";

					while ($dado = $con->fetch_array()){ ?>
					
					<tr>
					
						<td style="text-align: left; color: #7FFFD4;"><?php $count++; echo "$count$st   "; echo $dado["nome_Usuario"]; ?></td>
						<td style="text-align: center; color: #00FA9A; font-size: 120%;"><b><?php echo $dado["pontuacao"]; ?></b></td>
						<td style="text-align: center; color: #00FF00;font-size: 120%;"><b><?php echo $dado["acerto"]; ?></b></td>
						<td style="text-align: center;color: #FF0000;font-size: 120%;"><b><?php echo $dado["erro"]; ?></b></td>
						<td style="text-align: center;color: #FF4500;font-size: 120%;"><b><?php echo $dado["porcento"]; ?></b></td>	
						<td style="text-align: center;color: #00BFFF;font-size: 120%;"><b><?php echo $dado["dificuldade"]; ?></b></td>	

					</tr>
					<?php  } 
			 ?>
			</table>
		
</div>

<a id="pagina" style="position: absolute; left: 20px; top: 20px;" onclick="pagina()">Página inicial</a>

<script src="jquery-3.3.1.min.js"></script>


</body>
</html>
