<?php

class ProductController extends BaseController
{

  private $auxFunc;

  public function __construct()
  {
    $this->auxFunc = new AuxFunction();
  }

  /**
   * "/user/list" Endpoint - Obtener lista de productos
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

        $arrUsers = $productModel->getProducts($intLimit);

        $responseData = json_encode($arrUsers);

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
   * "/product/create" Endpoint - crear un producto
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
          $img
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

}