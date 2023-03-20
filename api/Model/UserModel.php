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


    public function getUser($email, $pwd)
    {

        $params = [
            $email,
            md5($pwd)
        ];

        $result = $this->select("SELECT * FROM users WHERE email = ?  AND pwd = ? LIMIT 1", $params);

        return $result[0];
    }

    public function create($name, $lastname, $email, $address, $pwd)
    {

        $params = [
            $name,
            $lastname,
            $email,
            $address,
            md5($pwd)
        ];

        $result = $this->insert("INSERT INTO users (name, lastname, email, address, pwd) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?
        )", $params);

        $response = ["code" => 401, "message" => "Insert KO", "result" => $result];

        if ($result["state"]) {

            $user = ["name" => $name, "latname" => $lastname, "address" => $address];
            $status = "authenticated";

            $response = ["code" => 200, "message" => "Insert OK", "user" => $user, "status" => $status];

        }

        return $response;

    }
}