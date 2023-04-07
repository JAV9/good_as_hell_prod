<?php

// Database

define("DB_HOST", "localhost");
//define("DB_HOST", "vm20.db.swarm.test");

define("DB_USERNAME", "root");

define("DB_PASSWORD", "root");
//define("DB_PASSWORD", "Cei7shohy8Oohie");

define("DB_DATABASE_NAME", "good_as_hell");

// uploads

define("UPLOAD_FOLDER", getcwd());

define("IMG_PATH", "https://" . $_SERVER["SERVER_NAME"] . "/api/uploads/");