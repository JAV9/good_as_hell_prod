<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class UserModel extends Database
{

    public function getUsers($limit)
    {

        $params = [
            $limit
        ];

        return $this->select("SELECT * FROM users ORDER BY id ASC LIMIT ?", $params);

    }


    public function getUser($email, $passw)
    {

        $params = [
            $email,
            $passw
        ];

        return $this->select("SELECT * FROM users WHERE email = ? AND passw = ?", $params);

    }

    public function create($name, $lastname, $email, $address, $passw)
    {

        $params = [
            $name,
            $lastname,
            $email,
            $address,
            $passw
        ];

        $result = $this->insert("INSERT INTO users (name, lastname, email, address, passw) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?
        )", $params);

        $response = ["code" => 401, "message" => "Insert KO"];

        if ($result) {

            $response = ["code" => 200, "message" => "Insert OK"];

        }

        return $response;

    }
}