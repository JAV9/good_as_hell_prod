<?php

class CategoryController extends BaseController
{

  private $auxFunc;

  public function __construct()
  {
    $this->auxFunc = new AuxFunction();
  }

  /**
   * "/listCategories.php" Endpoint - Obtener lista de categorias
   */
  public function list()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getQueryStringParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $categoryModel = new CategoryModel();

        $intLimit = 10000;

        if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {

          $intLimit = $arrQueryStringParams['limit'];

        }

        $arr = $categoryModel->getCategories($intLimit);

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
   * "createCategory.php" Endpoint - crear una categoría
   * Parámetros como multipart/form-data que recogemos por POST
   */
  public function create()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $categoryModel = new CategoryModel();

        $arr = $categoryModel->create(
          $params['name'],
          $this->auxFunc->seofy($params['name'])
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
   * "updateCategory.php" Endpoint - actualizar una categoría por id
   * Parámetros como multipart/form-data que recogemos por POST
   */
  public function updateCategory()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $categoryModel = new CategoryModel();

        $arr = $categoryModel->updateCategory(
          $params['id'],
          $params['name'],
          $this->auxFunc->seofy($params['name'])
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
   * "deleteCategory.php" Endpoint - borrar una categoría por su id
   */
  public function deleteCategory()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getJSONParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $categoryModel = new CategoryModel();

        $arr = $categoryModel->deleteCategory(
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
   * "/getCategory.php" Endpoint - Obtener categoría por su url
   * Parámetros GET
   */
  public function getCategory()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getGETParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $categoryModel = new CategoryModel();

        $arr = $categoryModel->getCategory($arrQueryStringParams['url']);

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