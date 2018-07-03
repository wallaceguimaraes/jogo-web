<?php

$host = "localhost";
$usuario = "id5811126_wallace";
$senha = "wallace7";
$bd ="id5811126_bancojogo";

$mysqli = new mysqli($host, $usuario, $senha, $bd);
/*
if($mysqli->maxdb_connect_errno)
	echo "Falha na conexão: (".$mysqli->connect_errno.") ".$mysqli->connect_error;
*/
?>