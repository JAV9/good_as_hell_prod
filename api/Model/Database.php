<?php

class Database
{

    protected $connection = null;

    public function __construct()
    {

        try {

            $this->connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);


            if (mysqli_connect_errno()) {

                throw new Exception("Could not connect to database.");

            }

        } catch (Exception $e) {

            throw new Exception($e->getMessage());

        }

    }

    public function select($query = "", $params = [])
    {

        try {

            $stmt = $this->executeStatement($query, $params);

            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

            $stmt->close();

            return $result;

        } catch (Exception $e) {

            return array("state" => false, "error" => $e->getMessage());

        }

    }

    public function insert($query = "", $params = [])
    {

        try {

            $stmt = $this->executeStatement($query, $params);

            $result = $stmt;

            $stmt->close();

            if ($result) {

                return array("state" => true);

            } else {

                return $result;

            }

        } catch (Exception $e) {

            return array("state" => false, "error" => $e->getMessage());

        }

    }

    public function update($query = "", $params = [])
    {

        try {

            $stmt = $this->executeStatement($query, $params);

            $result = $stmt->affected_rows > 0;

            $stmt->close();

            return array("state" => $result);


        } catch (Exception $e) {

            return array("state" => false, "error" => $e->getMessage());

        }

    }

    public function delete($query = "", $params = [])
    {

        try {

            $stmt = $this->executeStatement($query, $params);

            $result = $stmt->affected_rows > 0;

            $stmt->close();

            return array("state" => $result, "code" => 200);

        } catch (Exception $e) {

            return array("state" => false, "error" => $e->getMessage());

        }

    }

    private function executeStatement($query = "", $params = [])
    {

        try {

            $stmt = $this->connection->prepare($query);

            if ($stmt === false) {

                throw new Exception("Unable to do prepared statement: " . $query);

            }

            $stmt->execute($params);

            return $stmt;

        } catch (Exception $e) {

            return array("state" => false, "error" => $e->getMessage());

        }

    }

}