<?php

function createThumbnail($src, $dest, $desired_width) {
    // Load the source image
    $source_image = imagecreatefromjpeg($src);
    $width = imagesx($source_image);
    $height = imagesy($source_image);

    // Calculate the desired height
    $desired_height = floor($height * ($desired_width / $width));

    // Create a new, virtual image
    $virtual_image = imagecreatetruecolor($desired_width, $desired_height);

    // Copy source image to the virtual image with resizing
    imagecopyresampled($virtual_image, $source_image, 0, 0, 0, 0, $desired_width, $desired_height, $width, $height);

    // Save the thumbnail image to the destination
    imagejpeg($virtual_image, $dest);
}
?>