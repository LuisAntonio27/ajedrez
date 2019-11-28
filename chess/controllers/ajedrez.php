<?php

require_once '../models/ajedrez_model.php';

$json = file_get_contents('php://input');
$obj = json_decode($json);

insertMov($obj);