<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$requestMethod = $_SERVER["REQUEST_METHOD"];

switch($requestMethod) {
    case 'GET':
        handleGetRequest();
        break;
    default:
        echo json_encode(["message" => "Request method not supported"]);
        break;
}

function handleGetRequest() {
    echo "This is a GET request";
}

?>