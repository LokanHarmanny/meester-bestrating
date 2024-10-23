<?php
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

function getPortfolio() {
    $directoryPath = '../images/portfolio';
    $filesArray = getFiles($directoryPath);
    echo json_encode($filesArray);
}

function getFiles($dir) {
    $files = [];
    if (is_dir($dir)) {
        if ($dh = opendir($dir)) {
            while (($file = readdir($dh)) !== false) {
                if ($file != '.' && $file != '..') {
                    $files[] = $file;
                }
            }
            closedir($dh);
        }
    }
    return $files;
}

?>