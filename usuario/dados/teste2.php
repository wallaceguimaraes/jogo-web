<?php
        include_once('Usuario2.php');
        include_once('Usuario2DAO.php');
       // include_once('UsuarioMulti.php');
       // include_once('UsuarioMultiDAO.php');


$jogador1 = $_POST["jogador1"]; 
$pontuacao = $_POST["pontos"];
$erros = $_POST["erros"];
$acertos = $_POST["acertos"];
$porcentagem = $_POST["porcento"];
$dificuldade = $_POST["dificuldade"];


$jogador = new Usuario2();     
$jogador->setNome_Usuario($jogador1);
$jogador->setPontuacao($pontuacao);
$jogador->setErro($erros);
$jogador->setAcerto($acertos);
$jogador->setPorcento($porcentagem);
$jogador->setDificuldade($dificuldade);
Usuario2DAO::create($jogador);

//mexer aqui

/*
$jogador2 = $_POST["jogador2"]; 
$pontuacao2 = $_POST["pontos2"];
$erros2 = $_POST["erros2"];
$acertos2 = $_POST["acertos2"];
$porcentagem2 = $_POST["porcento2"];

$jogador2 = new UsuarioMulti();     
$jogador2->setNome_Usuario($jogador2);
$jogador2->setPontuacao($pontuacao2);
$jogador2->setErro($erros2);
$jogador2->setAcerto($acertos2);
$jogador2->setPorcento($porcentagem2);
UsuarioMultiDAO::create($jogador2);

*/

/*



echo "Pontuação: $pontuacao </br>";
echo "Erros: $erros </br>";
echo "Acertos: $acertos </br>";
echo "Porcentagem: $porcentagem <br>";
echo "Salvo no banco!";










?>     
	  


