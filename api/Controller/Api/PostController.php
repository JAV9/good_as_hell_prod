<?php

class PostController extends BaseController
{

  private $auxFunc;

  public function __construct()
  {
    $this->auxFunc = new AuxFunction();
  }

  /**
   * "/listPosts.php" Endpoint - Obtener lista de posts
   */
  public function list()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getGETParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $postModel = new PostModel();

        $arr = $postModel->getPosts($arrQueryStringParams["user"]);

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
   * "createPost.php" Endpoint - crear un post
   * Parámetros como multipart/form-data que recogemos por POST
   */
  public function create()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $postModel = new PostModel();

        $arr = $postModel->create(
          $params['user'],
          $params['product'],
          $params['title'],
          $this->auxFunc->seofy($params['title']),
          $params['content']
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
   * "updatePost.php" Endpoint - actualizar un post por id
   * Parámetros como multipart/form-data que recogemos por POST
   */
  public function updatePost()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getPostParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $postModel = new PostModel();

        $arr = $postModel->updatePost(
          $params['id'],
          $params['user'],
          $params['product'],
          $params['title'],
          $this->auxFunc->seofy($params['url']),
          $params['content']
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
   * "deletePost.php" Endpoint - borrar un post por su id
   */
  public function deletePost()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $params = $this->getJSONParams();

    if (strtoupper($requestMethod) == 'POST') {

      try {

        $postModel = new PostModel();

        $arr = $postModel->deletePost(
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
   * "/getPost.php" Endpoint - Obtener post por su url
   * Parámetros GET
   */
  public function getPost()
  {

    $strErrorDesc = '';

    $requestMethod = $_SERVER["REQUEST_METHOD"];

    $arrQueryStringParams = $this->getGETParams();

    if (strtoupper($requestMethod) == 'GET') {

      try {

        $postModel = new PostModel();

        $arr = $postModel->getPost($arrQueryStringParams['url']);

        if ($arr == NULL) {

          $responseData = json_encode(["code" => 401, "error" => "Post no encontrado"]);

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