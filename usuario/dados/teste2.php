<?php
        include_once('Usuario2.php');
        include_once('Usuario2DAO.php');
       

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

 
	  


