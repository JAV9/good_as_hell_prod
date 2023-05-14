<?php


require __DIR__ . "/inc/bootstrap.php";
include __DIR__ . "/inc/redsys/apiRedsys.php";

$payment = new PaymentController();
$paymentData = json_decode($payment->create());

$paymentId = $paymentData->id;
$amount = $paymentData->total * 100;

$redsys = new RedsysAPI;

// Valores de entrada que no hemos cmbiado para ningun ejemplo
$fuc = "999008881";
$terminal = "1";
$moneda = "978";
$trans = "0";
$url = "";
//$urlOKKO = "https://vm20.containers.fdi.ucm.es/api/receiveRedsysResponse.php";
//$urlOK = "https://vm20.containers.fdi.ucm.es/api/receiveRedsysResponse.php";
//$urlKO = "https://vm20.containers.fdi.ucm.es/pago/error";

$urlOK = "https://vm20.containers.fdi.ucm.es/api/receiveRedsysResponse.php";
$urlKO = "https://vm20.containers.fdi.ucm.es/pago/error";

$id = time();

// Se Rellenan los campos
$redsys->setParameter("DS_MERCHANT_AMOUNT", $amount);
$redsys->setParameter("DS_MERCHANT_ORDER", $id);
$redsys->setParameter("DS_MERCHANT_MERCHANTCODE", $fuc);
$redsys->setParameter("DS_MERCHANT_CURRENCY", $moneda);
$redsys->setParameter("DS_MERCHANT_TRANSACTIONTYPE", $trans);
$redsys->setParameter("DS_MERCHANT_TERMINAL", $terminal);
$redsys->setParameter("DS_MERCHANT_MERCHANTURL", $url);
$redsys->setParameter("DS_MERCHANT_URLOK", $urlOK);
$redsys->setParameter("DS_MERCHANT_URLKO", $urlKO);
$redsys->setParameter("DS_MERCHANT_MERCHANTDATA", $paymentId);

//Datos de configuración
$version = "HMAC_SHA256_V1";
$kc = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7'; //Clave recuperada de CANALES
// Se generan los parámetros de la petición
$request = "";
$params = $redsys->createMerchantParameters();
$signature = $redsys->createMerchantSignature($kc);

$redsysArr = [];

$redsysArr["signature"] = $signature;
$redsysArr["signature_version"] = $version;
$redsysArr["params"] = $params;

$response = ["paymentData" => $paymentData, "redsys" => $redsysArr];

http_response_code(200);

echo json_encode($response);