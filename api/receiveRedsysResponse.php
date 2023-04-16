<?php


include __DIR__ . "/inc/redsys/apiRedsys.php";

// Se crea Objeto
$redsys = new RedsysAPI;
$url = "https://vm20.containers.fdi.ucm.es/pago/";

if (!empty($_POST)) { //URL DE RESP. ONLINE

  $version = $_POST["Ds_SignatureVersion"];
  $datos = $_POST["Ds_MerchantParameters"];
  $signatureRecibida = $_POST["Ds_Signature"];


  $decodec = $redsys->decodeMerchantParameters($datos);
  $kc = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7'; //Clave recuperada de CANALES
  $firma = $redsys->createMerchantSignatureNotif($kc, $datos);

  echo PHP_VERSION . "<br/>";
  echo $firma . "<br/>";
  echo $signatureRecibida . "<br/>";
  if ($firma === $signatureRecibida) {
    echo "FIRMA OK POST";
  } else {
    echo "FIRMA KO POST";
  }
} else {
  if (!empty($_GET)) { //URL DE RESP. ONLINE

    $version = $_GET["Ds_SignatureVersion"];
    $datos = $_GET["Ds_MerchantParameters"];
    $signatureRecibida = $_GET["Ds_Signature"];


    $decodec = $redsys->decodeMerchantParameters($datos);
    $kc = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7'; //Clave recuperada de CANALES
    $firma = $redsys->createMerchantSignatureNotif($kc, $datos);

    if ($firma === $signatureRecibida) {
      // echo "FIRMA OK GET";
      header('Location: ' . $url . 'ok');
    } else {
      //echo "FIRMA KO GET";
      header('Location: ' . $url . 'error');
    }
  } else {

    header('Location: ' . $url . 'error');
    // die("No se recibió respuesta");
  }
}