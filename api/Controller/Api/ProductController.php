<?php

class ProductController extends BaseController
{

  private $auxFunc;

  public function __construct()
  {
    $this->auxFunc = new AuxFunction();
  }

  /**
   * "/listProducts.php" Endpoint - Obtener lista de productos
   */
  public function list()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getQueryStringParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $productModel = new productModel();

        $intLimit = 10;

        if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {

          $intLimit = $arrQueryStringParams['limit'];

        }

        $arr = $productModel->getProducts($intLimit);

        for ($i = 0; $i < sizeof($arr); $i++) {
          $arr[$i]["img"] = IMG_PATH . $arr[$i]["img"];
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
   * "createProduct.php" Endpoint - crear un producto
   * Parámetros como multipart/form-data que recogemos por POST,
   * no como JSON, debido al envio de imagenes
   */
  public function create()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $productModel = new ProductModel();

        $img = NULL;

        $uploadImg = $this->auxFunc->uploadFile("/uploads/", $_FILES["img"]);

        if ($uploadImg["code"] == 200) {

          $img = $uploadImg["filename"];

        }

        $arr = $productModel->create(
          $params['name'],
          $params['price'],
          $params['available'],
          $img,
          $this->auxFunc->seofy($params['name']),
          json_decode($params["categories"], true)
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
   * "updateProduct.php" Endpoint - actualizar un producto por id
   * Parámetros como multipart/form-data que recogemos por POST,
   * no como JSON, debido al envio de imagenes
   */
  public function updateProduct()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $productModel = new ProductModel();

        $img = NULL;

        if ($_FILES["img"] != NULL) {

          $uploadImg = $this->auxFunc->uploadFile("/uploads/", $_FILES["img"]);

          if ($uploadImg["code"] == 200) {

            $img = $uploadImg["filename"];

          }
        }


        $arr = $productModel->updateProduct(
          $params['id'],
          $params['name'],
          $params['price'],
          $params['available'],
          $img,
          $this->auxFunc->seofy($params['name']),
          json_decode($params["categories"], true)
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
   * "deleteProduct.php" Endpoint - borrar un producto por su id
   */
  public function deleteProduct()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getJSONParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $productModel = new ProductModel();

        $arr = $productModel->deleteProduct(
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
   * "/getProduct.php" Endpoint - Obtener producto por su url
   * Parámetros GET
   */
  public function getProduct()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getGETParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $productModel = new productModel();

        $arr = $productModel->getProduct($arrQueryStringParams['url']);

        if ($arr == NULL) {

          $responseData = json_encode(["code" => 401, "error" => "Product not found"]);

        } else {

          $arr["img"] = IMG_PATH . $arr["img"];
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


  /**
   * "/searchProduct.php" Endpoint - Obtener productos por busqueda nombre
   * Parámetros GET
   */
  public function searchProduct()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getGETParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $productModel = new productModel();

        $arr = $productModel->searchProduct($arrQueryStringParams['p']);

        for ($i = 0; $i < sizeof($arr); $i++) {
          $arr[$i]["img"] = IMG_PATH . $arr[$i]["img"];
        }

        if ($arr == NULL) {

          $responseData = json_encode(["code" => 401, "error" => "Product not found"]);

        } else {

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