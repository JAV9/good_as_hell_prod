<?php

class UserController extends BaseController
{

    /**
     * "/listUsers" Endpoint - Get list of users
     */
    public function list()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $arrQueryStringParams = $this->getQueryStringParams();

        if (strtoupper($requestMethod) == 'GET') {

            try {

                $userModel = new UserModel();

                $intLimit = 10000;

                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {

                    $intLimit = $arrQueryStringParams['limit'];

                }

                $arrUsers = $userModel->getUsers($intLimit);

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
     * "/login" Endpoint - user login
     */
    public function login()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $params = $this->getJSONParams();

        if (strtoupper($requestMethod) == 'POST') {

            try {

                $userModel = new UserModel();

                $arrUsers = $userModel->getUser($params['email'], $params['pwd']);

                if ($arrUsers == NULL) {

                    $responseData = json_encode(["code" => 401]);

                } else {

                    $responseData = json_encode($arrUsers);

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
     * "/getUser" Endpoint - obtiene user por su id
     */
    public function getUser()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $params = $this->getGETParams();

        if (strtoupper($requestMethod) == 'GET') {

            try {

                $userModel = new UserModel();

                $arrUsers = $userModel->getUserById($params['id']);

                if ($arrUsers == NULL) {

                    $responseData = json_encode(["code" => 401]);

                } else {

                    $responseData = json_encode($arrUsers);

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
     * "/signUp" Endpoint - user sign up
     */
    public function signUp()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $params = $this->getJSONParams();

        if (strtoupper($requestMethod) == 'POST') {

            try {

                $userModel = new UserModel();

                $influencer = $params['influencer'] ? $params['influencer'] : 0;

                $arrUsers = $userModel->create(
                    $params['name'],
                    $params['lastname'],
                    $params['email'],
                    $params['address'],
                    $params['pwd'],
                    $influencer
                );

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
     * "deleteUser.php" Endpoint - borrar un user por su id
     */
    public function deleteUser()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $params = $this->getJSONParams();

        if (strtoupper($requestMethod) == 'POST') {

            try {

                $userModel = new UserModel();

                $arr = $userModel->deleteUser(
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
     * "updateUser.php" Endpoint - actualizar un usuario por su id
     */
    public function updateUser()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $params = $this->getJSONParams();

        if (strtoupper($requestMethod) == 'POST') {

            try {

                $userModel = new UserModel();

                if (!$params['pwd']) {

                    $arr = $userModel->updateUser(
                        $params['id'],
                        $params['name'],
                        $params['lastname'],
                        $params['email'],
                        $params['address'],
                        $params['influencer'],
                        NULL
                    );

                } else {

                    $arr = $userModel->updateUser(
                        $params['id'],
                        $params['name'],
                        $params['lastname'],
                        $params['email'],
                        $params['address'],
                        $params['influencer'],
                        md5($params['pwd']),
                    );

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
}