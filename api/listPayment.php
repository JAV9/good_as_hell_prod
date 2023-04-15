<?php

require __DIR__ . "/inc/bootstrap.php";

$payment = new PaymentController();
return $payment->list();