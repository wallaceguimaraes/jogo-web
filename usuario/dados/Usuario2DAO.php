<?php


include_once 'Conexao.php';
include_once 'Usuario2.php';
 
class Usuario2DAO {

    public static function create(Usuario2 $usu) {
        try {
            $db = Conexao::getConnection();
            $stmt = $db->prepare("INSERT INTO `usuario` (`nome_Usuario`,`pontuacao`,`acerto`,`erro`,`porcento`,`dificuldade`) VALUES (?,?,?,?,?,?);");
            $stmt->bindValue(1, $usu->getNome_Usuario(), PDO::PARAM_STR);
            $stmt->bindValue(2, $usu->getPontuacao(), PDO::PARAM_INT);
            $stmt->bindValue(3, $usu->getAcerto(), PDO::PARAM_INT);
            $stmt->bindValue(4, $usu->getErro(), PDO::PARAM_INT);
            $stmt->bindValue(5, $usu->getPorcento(), PDO::PARAM_STR);
            $stmt->bindValue(6, $usu->getDificuldade(), PDO::PARAM_STR);

            $stmt->execute();
			
        } catch (Throwable $ex) {
            $e = new Exception("Um erro ocorreu ao criar um usuario. <br>" . $ex->getMessage());
            throw $e;
        }
    }

    public static function update(Usuario $dto) {
        try {
            $db = Conexao::getConnection();
            $stmt = $db->prepare("UPDATE usuario SET usuario=?, senha=? WHERE id=?");
            $stmt->bindValue(1, $dto->getUsuario(), PDO::PARAM_STR);
            $stmt->bindValue(2, $dto->getSenha(), PDO::PARAM_STR);
            $stmt->bindValue(3, $dto->getId(), PDO::PARAM_INT);
            $stmt->execute();
        } catch (Throwable $ex) {
            $e = new Exception("Um erro ocorreu ao atualizar um usuario. <br>" . $ex->getMessage());
            throw $e;
        }
    }  
/*
    static function Read($filtro, $orderby) {
        try {
            $db = Conexao::getConnection();
            $str = ("SELECT * FROM usuario");
            if ($filtro != "") {
                $str = $str . " WHERE " . $filtro;
            }
            if ($orderby != "") {
                $str = $str . " ORDER BY " . $orderby;
            }
            $stmt = $db->query($str);

            $stmt->setFetchMode(PDO::FETCH_CLASS, 'Usuario');
            $dtos = $stmt->fetchAll();
            return $dtos;
        } catch (Throwable $ex) {
            $e = new Exception("Um erro ocorreu ao obter dados do(s) usuario(s). <br>" . $ex->getMessage());
            throw $e;
        }
    }
    
*/
static function Read() {
        try {
            $db = Conexao::getConnection();
            $str = ("SELECT * FROM usuario;");
            $stmt = $db->query($str);
            $stmt->setFetchMode(PDO::FETCH_CLASS, 'Usuario');
            $dtos = $stmt->fetchAll();
            
            return $dtos;
        
        } catch (Throwable $ex) {
            $e = new Exception("Um erro ocorreu ao obter dados do(s) usuario(s). <br>" . $ex->getMessage());
            throw $e;
        }
    }

    static function delete(Usuario $dto){
       try {
        $db = Conexao::getConnection();
        $str = ("DELETE FROM usuario WHERE id=".$dto->getId());
        $stmt = $db->prepare($str);
        $stmt->execute();
        } catch (Throwable $ex) {
            $e = new Exception("Um erro ocorreu ao deletar dados do usuario. <br>" . $ex->getMessage());
            throw $e;
        }
    }
}