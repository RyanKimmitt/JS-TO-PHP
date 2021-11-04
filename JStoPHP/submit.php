<?php

// header("Content-Type: application/json");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));
echo $data;
// printPHP($data);
function printPHP($data){
print_r($data);
}


?>