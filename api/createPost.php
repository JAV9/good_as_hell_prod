<?php

require __DIR__ . "/inc/bootstrap.php";

$post = new PostController();
return $post->create();