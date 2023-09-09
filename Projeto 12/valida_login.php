<?php

    //variavel que verifica se a aut. foi realizada
    $usuario_autenticado = false;

    //usuarios do sistema (hardcode)
    $usuarios_app = array(
        array('email' => 'adm@teste.com.br', 'senha' => '123456'),
        array('email' => 'user@teste.com.br', 'senha' => 'abcd'),
    );

    /*
    echo '<pre>';
    print_r($usuarios_app);
    echo '</pre>';
    */

    foreach($usuarios_app as $user){
        if($user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha']) {
            $usuario_autenticado = true;
        }
    }

    if($usuario_autenticado){
        echo 'Usuário autenticado';
    }
    if(!$usuario_autenticado){
        header('Location: index.php?login=erro');
    }

    //$_POST['email'];
    //$_POST['senha'];  

?>