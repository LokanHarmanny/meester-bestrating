<?php

require "createThumbnail.php";

function getPortfolio()
{
    $directoryPath = '../images/portfolio';
    $filesArray = getPortfolioPhotos($directoryPath);
    echo json_encode($filesArray);
}

function getPortfolioPhotos($dir)
{
    $files = [];
    $topFolderContents = getFolderContents($dir);
    foreach ($topFolderContents as $folder) {
        $files[] = getFolderThumbnail("$dir/$folder");
    }

    return $files;
}

function getFolderContents($folder)
{
    $files = [];

    if (is_dir($folder)) {
        if ($dh = opendir($folder)) {
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

function getFolderThumbnail($folder)
{
    $files = [];

    if (is_dir($folder)) {
        if ($dh = opendir($folder)) {
            while (($file = readdir($dh)) !== false) {
                if (checkIfImage($file)) {
                    $files[] = $file;
                }
            }
            closedir($dh);
        }
    }

    $needleKey = array_search("thumbnail.jpeg", $files);

    $thumbnail = $needleKey === false
        ? createThumbnail($files[0], "$folder/thumbnail.jpeg", 160)
        : "$folder/$files[$needleKey]";

    return $thumbnail;
}

function checkIfImage($file)
{
    return substr($file, strlen($file) - 3) === "jpg"
        || substr($file, strlen($file) - 4) === "jpeg";
}
