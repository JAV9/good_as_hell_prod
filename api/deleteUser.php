<?php

require __DIR__ . "/inc/bootstrap.php";

$user = new UserController();
return $user->deleteUser();