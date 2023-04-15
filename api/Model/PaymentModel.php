<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class PaymentModel extends Database
{

  public function listPayment($limit)
  {


    $params = [
      $limit
    ];


    return $this->select("SELECT * FROM payment ORDER BY id DESC LIMIT ?", $params);

  }

  public function getPayment($id)
  {

    $params = [
      $id
    ];

    return $this->select("SELECT * FROM payment WHERE id = ?", $params)[0];

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

      $response = ["code" => 200, "message" => "Pago insertado"];

    }

    return $response;

  }


  private function insertProducts($pedido, $products)
  {

    $todoOk = true;

    foreach ($products as $p) {

      $params = [
        $pedido,
        $p
      ];

      $todoOk = $this->insert("INSERT INTO payment (user, total, state) VALUES (
            ?,
            ?,
            ?
        )", $params) && $todoOk;

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

}