<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

require __DIR__ . '/Router/Request.php';
require __DIR__ . '/Router/Router.php';
$router = new Router(new Request);

require __DIR__ . "/inc/bootstrap.php";

// controllers

require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";

require PROJECT_ROOT_PATH . "/Controller/Api/ProductController.php";

$basePath = "/api";

$router->get($basePath . "/", function () {
    return <<<HTML
    <h1>Hello, this is good as hell api.</h1>
    <p>If you view this page, its working correctly.</p>
  HTML;
});


// ------------------------- Users ----------------------------

// mostrar todos los usuarios
$router->get($basePath . "/users", function () {
    $user = new UserController();
    return $user->list();
});

// login
$router->post($basePath . "/users/login", function () {
    $user = new UserController();
    return $user->login();
});

// registro
$router->post($basePath . "/users/signup", function () {
    $user = new UserController();
    return $user->signUp();
});

// ------------------------- Products ----------------------------

// mostrar todos los productos
$router->get($basePath . "/products", function () {
    $product = new ProductController();
    return $product->list();
});

// crear producto
$router->post($basePath . "/products/create", function () {
    $product = new ProductController();
    return $product->create();
});


?>