<?php

class UserController extends BaseController
{

    /**
     * "/user/list" Endpoint - Get list of users
     */
    public function list()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $arrQueryStringParams = $this->getQueryStringParams();

        if (strtoupper($requestMethod) == 'GET') {

            try {

                $userModel = new UserModel();

                $intLimit = 10;

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
     * "/user/login" Endpoint - user login
     */
    public function login()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $params = $this->getPostParams();

        if (strtoupper($requestMethod) == 'POST') {

            try {

                $userModel = new UserModel();

                $arrUsers = $userModel->getUser($params['email'], $params['passw']);

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
     * "/user/login" Endpoint - user sign up
     */
    public function signUp()
    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];

        $params = $this->getPostParams();

        if (strtoupper($requestMethod) == 'POST') {

            try {

                $userModel = new UserModel();

                $arrUsers = $userModel->create(
                    $params['name'],
                    $params['lastname'],
                    $params['email'],
                    $params['address'],
                    $params['passw']
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
}