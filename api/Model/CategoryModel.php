<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class CategoryModel extends Database
{

  public function getCategories($limit)
  {


    $params = [
      $limit
    ];


    return $this->select("SELECT * FROM categories ORDER BY id DESC LIMIT ?", $params);

  }

  public function getCategory($url)
  {

    $params = [
      $url
    ];

    return $this->select("SELECT * FROM categories WHERE url = ?", $params)[0];

  }

  public function create($name, $url)
  {

    $params = [
      $name,
      $url
    ];

    $result = $this->insert("INSERT INTO categories (name, url) VALUES (
          ?,
          ?
      )", $params);


    $response = ["code" => 401, "message" => "Categoria no insertada", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Categoria insertada"];

    }

    return $response;

  }


  public function updateCategory($id, $name, $url)
  {

    $query = "UPDATE categories SET name = ?, url = ? WHERE id = ?";

    $params = [
      $name,
      $url,
      $id
    ];

    $result = $this->update($query, $params);

    $response = ["code" => 401, "message" => "Categoria no actualizada", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Categoria actualizada"];

    }

    return $response;

  }

  public function deleteCategory($id)
  {

    $params = [
      $id
    ];

    return $this->delete("DELETE FROM categories WHERE id = ?", $params);

  }

}