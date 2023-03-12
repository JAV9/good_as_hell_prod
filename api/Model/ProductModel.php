<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class ProductModel extends Database
{

  public function getProducts($limit)
  {


    $params = [
      $limit
    ];


    return $this->select("SELECT * FROM products ORDER BY id ASC LIMIT ?", $params);

  }

  public function create($name, $price, $available, $img)
  {

    $params = [
      $name,
      $price,
      $available,
      $img
    ];

    $result = $this->insert("INSERT INTO products (name, price, available, img) VALUES (
          ?,
          ?,
          ?,
          ?
      )", $params);

    $response = ["code" => 401, "message" => "Producto no insertado"];

    if ($result) {

      $response = ["code" => 200, "message" => "Producto insertado"];

    }

    return $response;

  }

}