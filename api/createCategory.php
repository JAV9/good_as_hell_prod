<?php

require __DIR__ . "/inc/bootstrap.php";

$category = new CategoryController();
return $category->create();