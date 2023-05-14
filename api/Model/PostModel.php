<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class PostModel extends Database
{

  public function getPosts($user)
  {


    if ($user) {

      $params = [
        $user
      ];


      return $this->select("SELECT * FROM posts WHERE user = ? ORDER BY id DESC", $params);

    } else {

      $params = [];


      return $this->select("SELECT * FROM posts ORDER BY id DESC ", $params);

    }

  }

  public function getPost($url)
  {

    $params = [
      $url
    ];

    $query = "SELECT 
                posts.*, 
                CONCAT(u.name, ' ', u.lastname) AS username,
                p.name AS product_name,
                p.price AS product_price,
                p.url AS product_url,
                p.stock AS product_stock,
                p.img AS product_img,
                p.material AS product_material,
                p.description AS product_description
              FROM posts 
              LEFT JOIN users AS u 
                ON u.id = posts.user
              LEFT JOIN products AS p
                ON posts.product = p.id 
              WHERE posts.url = ?";

    $post = $this->select($query, $params)[0];

    $queryCategories = "SELECT c.name 
                        FROM categories AS c 
                        LEFT JOIN product_categories AS pc 
                          ON pc.category = c.id 
                        WHERE pc.product = ? ";


    $paramsCateg = [
      $post["product"]
    ];
    $productCategories = $this->select($queryCategories, $paramsCateg);
    $post["categories"] = array_column($productCategories, 'name');

    return $post;

  }

  public function create($user, $product, $title, $url, $content)
  {

    $params = [
      $user,
      $product,
      $title,
      $url,
      $content
    ];

    $result = $this->insert("INSERT INTO posts (user, product, title, url, content) VALUES (
          ?,
          ?,
          ?,
          ?,
          ?
      )", $params);


    $response = ["code" => 401, "message" => "Post no insertado", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Post insertada"];

    }

    return $response;

  }


  public function updatePost($id, $user, $product, $title, $url, $content)
  {

    $query = "UPDATE posts SET user = ?, product = ?, title = ?, url = ?, content = ? WHERE id = ?";

    $params = [
      $user,
      $product,
      $title,
      $url,
      $content,
      $id
    ];

    $result = $this->update($query, $params);

    $response = ["code" => 401, "message" => "Post no actualizado", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Post actualizado"];

    }

    return $response;

  }

  public function deletePost($id)
  {

    $params = [
      $id
    ];

    return $this->delete("DELETE FROM posts WHERE id = ?", $params);

  }

}