<?php

require __DIR__ . "/inc/bootstrap.php";

$product = new ProductController();
return $product->getProduct();