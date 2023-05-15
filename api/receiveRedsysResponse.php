<?php


require __DIR__ . "/inc/bootstrap.php";
include __DIR__ . "/inc/redsys/apiRedsys.php";

$payment = new PaymentController();

// Se crea Objeto
$redsys = new RedsysAPI;
//$url = "http://localhost:8888/pago/";

$url = "http://localhost:8888/pago/";


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

    $arrDecodec = (array) json_decode($decodec);

    $paymentId = $arrDecodec["Ds_MerchantData"];
    $paymentDate = date("Y-m-d H:i:s");


    if ($firma === $signatureRecibida) {
      //    echo "FIRMA OK GET";
      // update state
      $payment->updateState("COMPLETADO", $paymentId, 1, $paymentDate);

      header('Location: ' . $url . 'ok');
    } else {
      //echo "FIRMA KO GET";
      $payment->updateState("ERROR", $paymentId, 0, "0000-00-00 00:00:00");

      header('Location: ' . $url . 'error');
    }
  } else {
    $payment->updateState("ERROR", $paymentId, 0, "0000-00-00 00:00:00");

    header('Location: ' . $url . 'error');
    // die("No se recibió respuesta");
  }
}