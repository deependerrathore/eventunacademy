<?php
class DB{
    private static function connect(){
        define('DB_DSN','mysql:dbname=social;host=127.0.0.1');
        define('DB_USER','root');
        define('DB_PASSWORD','root');
        
        $pdo = new PDO(DB_DSN,DB_USER,DB_PASSWORD);
        $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
        return $pdo;
    } 

    public static function query($query,$params=array()){
        $statement = self::connect()->prepare($query);
        $statement->execute($params);
        //$data = $statement->fetchAll();
       //return $data;
    }
}

?>