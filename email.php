<?php
    $destinatario = 'simetroide.work@gmail.com';

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];


    $header = "Enviado desde Netlify Symmetry"

    $mensajeCompleto = $mensaje . "\nEmail:" . $email . "\n Nombre:" . $nombre;


    mail($destinatario, $mensajeCompleto , $asunto , $header)
    echo("<script>alert("correo enviado exitosamente")</script>")
    
?>