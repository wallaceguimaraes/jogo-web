<?php
//Verificação de Segurança precisa ser feita aqui

class Conexao {
     //Estes dados devem ser coletados de outro lugar... claro...
     private static $host = "localhost";
     private static $user = "root";
     private static $password = "";
     private static $database = "banco-jogo";
     private static $charset = "utf8";
     private static $conexao;


    //Esta função retorna uma conexão ativa, ou cria uma conexão nova e retorna a mesma.
     public static function getConnection() {
        if (Conexao::$conexao == null) {
            try {
                //connect as appropriate as above
                Conexao::$conexao = new PDO("mysql:host=".Conexao::$host . ";dbname=" . Conexao::$database . ";charset=" . Conexao::$charset, Conexao::$user, Conexao::$password);
                return Conexao::$conexao;
            } catch (PDOException $ex) {
                echo "UM ERRO OCORREU NA CONEXÃO COM O BANCO DE DADOS!"; //TODO
            }
        }else{
            return Conexao::$conexao;
        }
    }

}