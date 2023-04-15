<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class ProductModel extends Database
{

  public function getProducts($filters)
  {

    $params = [];
    $query = "SELECT p.* FROM products AS p ";
    $joins = "";
    $where = " WHERE 1 ";

    foreach ($filters as $key => $value) {

      if ($key == "category") {
        $joins .= " LEFT JOIN product_categories AS pc 
                    ON pc.product = p.id
                    LEFT JOIN categories AS c 
                    ON c.id = pc.category ";
        $where .= " AND c.name = ? ";

        array_push($params, $value);
      }

    }

    $query .= $joins . $where;

    $query .= " ORDER BY id DESC";

    return $this->select($query, $params);

  }

  public function getProduct($url)
  {

    $params = [
      $url
    ];

    //return $this->select("SELECT * FROM products WHERE url = ?", $params)[0];

    $product = $this->select("SELECT * FROM products WHERE url = ?", $params)[0];

    $categories = $this->getProductCategories($product["id"]);

    $product["categories"] = $categories["categories"];
    $product["categoriesString"] = $categories["categoriesString"];
    $product["categoriesLabelValue"] = $categories["categoriesLabelValue"];

    return $product;

  }

  /**
   * @param int $product - id producto
   * @return array [-id de categorias-, -categorias unidas mediante comas en version texto-] 
   */
  private function getProductCategories($product)
  {

    $params = [$product];

    $query = "SELECT c.name, c.id
              FROM categories AS c 
              LEFT JOIN  product_categories AS pc 
              ON  pc.category = c.id 
              WHERE pc.product = ?";

    $categories = $this->select($query, $params);

    $categoriesFormatted = [];
    $categoriesFormattedLabelValue = [];

    foreach ($categories as $c) {
      array_push($categoriesFormatted, $c["name"]);
      array_push($categoriesFormattedLabelValue, ["value" => $c["id"], "label" => $c["name"]]);
    }

    $categoriesString = implode(", ", $categoriesFormatted);

    return ["categories" => $categoriesFormatted, "categoriesString" => $categoriesString, "categoriesLabelValue" => $categoriesFormattedLabelValue];

  }

  public function searchProduct($name)
  {

    $params = [
      $name
    ];

    return $this->select("SELECT * FROM products WHERE name LIKE CONCAT('%',?,'%')", $params);

  }

  public function create($name, $price, $available, $img, $url, $categories)
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

      $insertedId = $this->getLastInsertId();

      $message = "Producto insertado " . $insertedId;

      $this->insertCategories($insertedId, $categories, $message);

      $response = ["code" => 200, "message" => $message];

    }

    return $response;

  }


  /**
   * @param $product - id producto
   * @param $categories - array de categorias con ids [1, 20, 18...]
   * @param $message - mensaje de respuesta
   */
  private function insertCategories($product, $categories, $message)
  {

    if (sizeof($categories) > 0) {

      $queryCategories = "INSERT INTO product_categories (product, category) VALUES ";
      $categoryParams = [];

      foreach ($categories as $c) {

        $queryCategories .= "(" . $product . ", ?),";

        array_push($categoryParams, $c);

      }

      // elimina la ultima coma
      $queryCategories = substr_replace($queryCategories, "", -1);

      $categoriesResult = $this->insert($queryCategories, $categoryParams);

      if ($categoriesResult["state"]) {

        $message .= " con categorias";
      }

    }

  }

  /**
   * @param $product - id producto 
   */
  private function deleteCategories($product)
  {

    $query = "DELETE FROM product_categories WHERE product = ?";

    $params = [$product];

    return $this->delete($query, $params);
  }

  public function updateProduct($id, $name, $price, $available, $img, $url, $categories)
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

    $message = "Producto actualizado ";

    // borra las categorias que tenia
    $this->deleteCategories($id);

    // inserta las nuevas
    $this->insertCategories($id, $categories, $message);

    $response = ["code" => 200, "message" => $message, "result" => $result];

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