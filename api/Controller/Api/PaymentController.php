<?php

class PaymentController extends BaseController
{

  private $auxFunc;

  public function __construct()
  {
    $this->auxFunc = new AuxFunction();
  }

  /**
   * "/listPayment.php" Endpoint - Obtener lista de pagos
   */
  public function list()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getQueryStringParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $paymentModel = new PaymentModel();

        $intLimit = 10000;

        if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {

          $intLimit = $arrQueryStringParams['limit'];

        }

        $arr = $paymentModel->listPayment($intLimit);

        $responseData = json_encode($arr);

      } catch (Error $e) {

        $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';

        $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';

      }

    } else {

      $strErrorDesc = 'Method not supported';

      $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';

    }

    // send output

    if (!$strErrorDesc) {

      $this->sendOutput(

        $responseData,

        array('Content-Type: application/json', 'HTTP/1.1 200 OK')

      );

    } else {

      $this->sendOutput(
        json_encode(array('error' => $strErrorDesc)),

        array('Content-Type: application/json', $strErrorHeader)

      );

    }

  }


  /**
   * "createPayment.php" Endpoint - crear un pago
   * Parámetros como multipart/form-data que recogemos por POST
   */
  public function create()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $paymentModel = new PaymentModel();

        $arr = $paymentModel->create(
          $params['user'],
          $params['total'],
          json_decode($params["products"], true)
        );

        // si arr[code] == 200 entonces insertar productos pago
        // obtener ultima id de pago
        $insertedId = $this->getLastInsertId();

        if ($arr["code"] == 200) {
          $productsOk = $paymentModel->insertProducts($insertedId, $params["products"]);

          $arr["productosOk"] = $productsOk;
        }

        $responseData = json_encode($arr);

      } catch (Error $e) {

        $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';

        $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';

      }

    } else {

      $strErrorDesc = 'Method not supported';

      $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';

    }

    // send output

    if (!$strErrorDesc) {

      $this->sendOutput(

        $responseData,

        array('Content-Type: application/json', 'HTTP/1.1 200 OK')

      );

    } else {

      $this->sendOutput(
        json_encode(array('error' => $strErrorDesc)),

        array('Content-Type: application/json', $strErrorHeader)

      );

    }

  }

  /**
   * "updatePayment.php" Endpoint - actualizar un pago por id
   * Parámetros como multipart/form-data que recogemos por POST
   */
  public function updatePayment()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $paymentModel = new PaymentModel();


        if ($params['state'] == "COMPLETADO") {
          $doneAt = date('Y-m-d H:i:s');
          $done = 1;
        } else {
          $doneAt = "0000-00-00 00:00:00";
          $done = 0;
        }

        $arr = $paymentModel->updatePayment(
          $params['id'],
          $params['state'],
          $done,
          $doneAt
        );

        $responseData = json_encode($arr);

      } catch (Error $e) {

        $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';

        $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';

      }

    } else {

      $strErrorDesc = 'Method not supported';

      $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';

    }

    // send output

    if (!$strErrorDesc) {

      $this->sendOutput(

        $responseData,

        array('Content-Type: application/json', 'HTTP/1.1 200 OK')

      );

    } else {

      $this->sendOutput(
        json_encode(array('error' => $strErrorDesc)),

        array('Content-Type: application/json', $strErrorHeader)

      );

    }

  }


  /**
   * "deletePayment.php" Endpoint - borrar una categoría por su id
   */
  public function deletePayment()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getJSONParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $paymentModel = new PaymentModel();

        $arr = $paymentModel->deletePayment(
          $params['id']
        );

        $responseData = json_encode($arr);

      } catch (Error $e) {

        $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';

        $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';

      }

    } else {

      $strErrorDesc = 'Method not supported';

      $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';

    }

    // send output

    if (!$strErrorDesc) {

      $this->sendOutput(

        $responseData,

        array('Content-Type: application/json', 'HTTP/1.1 200 OK')

      );

    } else {

      $this->sendOutput(
        json_encode(array('error' => $strErrorDesc)),

        array('Content-Type: application/json', $strErrorHeader)

      );

    }

  }

  /**
   * "/getPayment.php" Endpoint - Obtener categoría por su url
   * Parámetros GET
   */
  public function getPayment()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getGETParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $paymentModel = new PaymentModel();

        $arr = $paymentModel->getPayment($arrQueryStringParams['url']);

        if ($arr == NULL) {

          $responseData = json_encode(["code" => 401, "error" => "Categoria no encontrada"]);

        } else {

          $arr["code"] = 200;

          $responseData = json_encode($arr);

        }

      } catch (Error $e) {

        $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';

        $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';

      }

    } else {

      $strErrorDesc = 'Method not supported';

      $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';

    }

    // send output

    if (!$strErrorDesc) {

      $this->sendOutput(

        $responseData,

        array('Content-Type: application/json', 'HTTP/1.1 200 OK')

      );

    } else {

      $this->sendOutput(
        json_encode(array('error' => $strErrorDesc)),

        array('Content-Type: application/json', $strErrorHeader)

      );

    }

  }

}