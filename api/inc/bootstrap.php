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

require_once PROJECT_ROOT_PATH . "/Model/CategoryModel.php";

require_once PROJECT_ROOT_PATH . "/Model/PaymentModel.php";

require_once PROJECT_ROOT_PATH . "/Model/PostModel.php";

// controllers

require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";

require PROJECT_ROOT_PATH . "/Controller/Api/ProductController.php";

require PROJECT_ROOT_PATH . "/Controller/Api/CategoryController.php";

require PROJECT_ROOT_PATH . "/Controller/Api/PaymentController.php";

require PROJECT_ROOT_PATH . "/Controller/Api/PostController.php";

?>