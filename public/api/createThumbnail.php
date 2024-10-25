<?php
function createThumbnail($sourceImagePath, $thumbnailPath, $thumbWidth)
{
    list($width, $height, $type) = getimagesize($sourceImagePath);
    $thumbHeight = floor($height * ($thumbWidth / $width));

    $thumb = imagecreatetruecolor($thumbWidth, $thumbHeight);

    switch ($type) {
        case IMAGETYPE_JPEG:
            $source = imagecreatefromjpeg($sourceImagePath);
            break;
        case IMAGETYPE_PNG:
            $source = imagecreatefrompng($sourceImagePath);
            break;
        case IMAGETYPE_GIF:
            $source = imagecreatefromgif($sourceImagePath);
            break;
        default:
            throw new Exception("Unsupported image type");
    }

    imagecopyresampled($thumb, $source, 0, 0, 0, 0, $thumbWidth, $thumbHeight, $width, $height);

    switch ($type) {
        case IMAGETYPE_JPEG:
            imagejpeg($thumb, $thumbnailPath);
            break;
        case IMAGETYPE_PNG:
            imagepng($thumb, $thumbnailPath);
            break;
        case IMAGETYPE_GIF:
            imagegif($thumb, $thumbnailPath);
            break;
    }

    imagedestroy($source);
    imagedestroy($thumb);

    return $thumbnailPath;
}