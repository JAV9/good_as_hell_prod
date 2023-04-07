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

    public function getUserById($id)
    {

        $params = [
            $id
        ];

        $result = $this->select("SELECT * FROM users WHERE id = ?", $params);

        return $result[0];
    }

    public function create($name, $lastname, $email, $address, $pwd, $influencer = 0)
    {

        $params = [
            $name,
            $lastname,
            $email,
            $address,
            md5($pwd),
            $influencer
        ];

        $result = $this->insert("INSERT INTO users (name, lastname, email, address, pwd, influencer) VALUES (
            ?,
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

    public function deleteUser($id)
    {

        $params = [
            $id
        ];

        return $this->delete("DELETE FROM users WHERE id = ?", $params);

    }

    public function updateUser($id, $name, $lastname, $email, $address, $influencer, $pwd = NULL)
    {

        $query = " UPDATE users 
                    SET 
                        name = ?, 
                        lastname = ?, 
                        email = ?, 
                        address = ?,
                        influencer = ?
                    WHERE id = ?";

        $params = [
            $name,
            $lastname,
            $email,
            $address,
            $influencer,
            $id
        ];

        if ($pwd != NULL) {

            $params = [
                $name,
                $lastname,
                $email,
                $address,
                $influencer,
                $pwd,
                $id
            ];

            $query = " UPDATE users 
                        SET 
                            name = ?, 
                            lastname = ?, 
                            email = ?, 
                            address = ?,
                            influencer = ?,
                            pwd = ?
                        WHERE id = ?";
        }

        $result = $this->update($query, $params);

        $message = "Usuario actualizado ";

        $response = ["code" => 200, "message" => $message, "result" => $result];

        return $response;

    }


}