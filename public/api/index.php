<?php

include_once("getPortfolio.php");

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$requestMethod = $_SERVER["REQUEST_METHOD"];
$action = $_GET['action'] ?? ';';

if ($requestMethod === 'GET') {
    switch ($action) {
        case 'getPortfolio':
            getPortfolio();
            break;
        default:
            echo json_encode(["message" => "Request action not recognized"]);
            break;
    }
} else {
    echo json_encode(["message" => "Request method not supported"]);
}

?>