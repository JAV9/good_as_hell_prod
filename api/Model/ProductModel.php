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

  public function getProduct($url)
  {

    $params = [
      $url
    ];

    return $this->select("SELECT * FROM products WHERE url = ?", $params)[0];

  }

  public function searchProduct($name)
  {

    $params = [
      $name
    ];

    return $this->select("SELECT * FROM products WHERE name LIKE CONCAT('%',?,'%')", $params);

  }

  public function create($name, $price, $available, $img, $url)
  {

    $params = [
      $name,
      $price,
      $available,
      $img,
      $url
    ];

    $result = $this->insert("INSERT INTO products (name, price, available, img, url) VALUES (
          ?,
          ?,
          ?,
          ?,
          ?
      )", $params);


    $response = ["code" => 401, "message" => "Producto no insertado", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Producto insertado"];

    }

    return $response;

  }


  public function updateProduct($id, $name, $price, $available, $img, $url)
  {

    $query = "UPDATE products SET name = ?, price = ?, available = ?, url = ? WHERE id = ?";

    if ($img != NULL) {

      $params = [
        $name,
        $price,
        $available,
        $img,
        $url,
        $id
      ];

      $query = "UPDATE products SET name = ?, price = ?, available = ?, img = ?, url = ? WHERE id = ?";

    } else {

      $params = [
        $name,
        $price,
        $available,
        $url,
        $id
      ];

    }


    $result = $this->update($query, $params);

    $response = ["code" => 401, "message" => "Producto no actualizado", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Producto actualizado"];

    }

    return $response;

  }

  public function deleteProduct($id)
  {

    $params = [
      $id
    ];

    return $this->delete("DELETE FROM products WHERE id = ?", $params);

  }

}