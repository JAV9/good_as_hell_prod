<?php

define("PROJECT_ROOT_PATH", __DIR__ . "/../");

// include main configuration file

require_once PROJECT_ROOT_PATH . "/inc/config.php";

// include aux functions file

require_once PROJECT_ROOT_PATH . "/AuxFunction.php";

// include the base controller file

require_once PROJECT_ROOT_PATH . "/Controller/Api/BaseController.php";

// include the  model files

require_once PROJECT_ROOT_PATH . "/Model/UserModel.php";

require_once PROJECT_ROOT_PATH . "/Model/ProductModel.php";


// controllers

require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";

require PROJECT_ROOT_PATH . "/Controller/Api/ProductController.php";

?>