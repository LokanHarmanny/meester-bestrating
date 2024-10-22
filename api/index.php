<?php
header('Content-Type: application/json');

function sayHi() {
    return "Hello from php";
}

?>

<!-- <?php
header('Content-Type: application/json');

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

$directoryPath = 'your-directory-path'; // Change this to your directory path
$filesArray = getFiles($directoryPath);

echo json_encode($filesArray);
?>
 -->