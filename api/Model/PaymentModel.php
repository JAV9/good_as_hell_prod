<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class PaymentModel extends Database
{

  public function listPayment($user)
  {

    if ($user != null) {

      $params = [
        $user
      ];


      $query = "SELECT p.*, CONCAT(u.name, ' ', u.lastname) AS username
                FROM payment AS p 
                LEFT JOIN users AS u 
                  ON u.id = p.user
                WHERE p.user = ? 
                ORDER BY id DESC";

    } else {

      $params = [];

      $query = "SELECT p.*, CONCAT(u.name, ' ', u.lastname) AS username
      FROM payment AS p 
      LEFT JOIN users AS u 
        ON u.id = p.user
      ORDER BY id DESC";

    }

    $payments = $this->select($query, $params);

    $queryProducts = "SELECT pd.name 
                      FROM payment_products AS pp 
                      LEFT JOIN products AS pd 
                        ON pp.product = pd.id
                      LEFT JOIN payment AS p
                        ON p.id = pp.payment
                      WHERE pp.payment = ? ";


    for ($i = 0; $i < count($payments); $i++) {
      $p = $payments[$i];

      $paramsProduct = [
        $p["id"]
      ];
      $productNames = $this->select($queryProducts, $paramsProduct);
      $payments[$i]["products"] = $array = array_column($productNames, 'name');

    }

    return $payments;

  }

  public function getPayment($id)
  {

    $params = [
      $id
    ];


    $query = "SELECT p.*, CONCAT(u.name, ' ', u.lastname) AS username
              FROM payment AS p 
              LEFT JOIN users AS u 
                ON u.id = p.user
              WHERE p.id = ?";


    $payments = $this->select($query, $params);

    $queryProducts = "SELECT pd.name 
                      FROM payment_products AS pp 
                      LEFT JOIN products AS pd 
                        ON pp.product = pd.id
                      LEFT JOIN payment AS p
                        ON p.id = pp.payment
                      WHERE pp.payment = ? ";


    for ($i = 0; $i < count($payments); $i++) {
      $p = $payments[$i];

      $paramsProduct = [
        $p["id"]
      ];
      $productNames = $this->select($queryProducts, $paramsProduct);
      $payments[$i]["products"] = $array = array_column($productNames, 'name');

    }

    return $payments[0];
  }

  public function create($user, $total, $products)
  {

    $params = [
      $user,
      $total,
      "COMENZADO"
    ];

    $result = $this->insert("INSERT INTO payment (user, total, state) VALUES (
          ?,
          ?,
          ?
      )", $params);


    $response = ["code" => 401, "message" => "Pago no insertado", "result" => $result];

    if ($result["state"]) {

      $insertedId = $this->getLastInsertId();

      $response = ["code" => 200, "message" => "Pago insertado", "id" => $insertedId, "total" => $total];

      $this->insertProducts($insertedId, $products);

    }

    return $response;

  }


  private function insertProducts($pedido, $products)
  {

    $todoOk = true;

    foreach ($products as $p) {

      $params = [
        $pedido,
        $p["id"]
      ];

      $todoOk = $this->insert("INSERT INTO payment_products (payment,product) VALUES (
            ?,
            ?
        )", $params);

      $paramsUpdateStock = [
        $p["id"]
      ];

      $todoOk = $this->update("UPDATE products SET stock = stock-1 WHERE id = ?", $paramsUpdateStock);


    }

    return $todoOk;

  }


  public function updatePayment($id, $state, $done, $doneAt)
  {

    $query = "UPDATE payment SET state = ?, done = ?, doneAt = ? WHERE id = ?";

    $params = [
      $state,
      $done,
      $doneAt,
      $id
    ];

    $result = $this->update($query, $params);

    $response = ["code" => 401, "message" => "Pago no actualizado", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Pago actualizado"];

    }

    return $response;

  }

  public function deletePayment($id)
  {

    $params = [
      $id
    ];

    return $this->delete("DELETE FROM payment WHERE id = ?", $params);

  }


  public function updateState($state, $id, $done, $doneAt)
  {

    $query = "UPDATE payment SET state = ?, done = ?, doneAt = ? WHERE id = ?";

    $params = [
      $state,
      $done,
      $doneAt,
      $id
    ];

    $result = $this->update($query, $params);

    $response = ["code" => 401, "message" => "Firma no actualizada", "result" => $result];

    if ($result["state"]) {

      $response = ["code" => 200, "message" => "Firma actualizada"];

    }

    return $response;

  }

}