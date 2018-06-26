<?php

$host = "localhost";
$usuario = "root";
$senha = "";
$bd ="banco-jogo";


$mysqli = new mysqli($host, $usuario, $senha, $bd);

/*
if($mysqli->maxdb_connect_errno)
	echo "Falha na conexão: (".$mysqli->connect_errno.") ".$mysqli->connect_error;

*/


?>