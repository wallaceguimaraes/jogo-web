<?php
/**
 * Description of Usuario
 *
 */
class Usuario2 {
    
    private $id_Usuario;
    private $nome_Usuario;
    private $pontuacao;
    private $acerto;
    private $erro;
    private $porcento;
    private $dificuldade;


    
    function __construct() {
    }
    
    function getId_Usuario() {
        return $this->id_Usuario;
    }

    function getNome_Usuario() {
        return $this->nome_Usuario;
    }


    function getPontuacao(){
        return $this->pontuacao;
    }

    function getAcerto(){
        return $this->acerto;
    }

    function getErro(){
        return $this->erro;
    }

    function getPorcento(){
        return $this->porcento;
    }

     function getDificuldade(){
        return $this->dificuldade;
    }




    function setId_Usuario($id_Usuario) {
        $this->id = $id_Usuario;
    }

    function setNome_Usuario($nome_Usuario) {
        $this->nome_Usuario =strtoupper($nome_Usuario);
    }


    function setPontuacao($pontuacao){
        $this->pontuacao = $pontuacao;
    }

    function setAcerto($acerto){
        $this->acerto = $acerto;
    }

    function setErro($erro){
        $this->erro = $erro;
    }

    function setPorcento($porcento)
    {
       $this->porcento = $porcento; 
    }
    function setDificuldade($dificuldade)
    {
       $this->dificuldade = $dificuldade; 
    }

    
}