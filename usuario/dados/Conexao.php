<?php

class Conexao {

     private static $host = "localhost";
     private static $user = "id5811126_wallace";
     private static $password = "wallace7";
     private static $database = "id5811126_bancojogo";
     private static $charset = "utf8";
     private static $conexao;


     public static function getConnection() {
        if (Conexao::$conexao == null) {
            try {
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