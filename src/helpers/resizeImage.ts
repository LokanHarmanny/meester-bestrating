export function resizeImage(image: HTMLImageElement, requestedSize = 160) {
  const size = requestedSize + 100;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const widthIsBiggest = image.width > image.height;
  const scaleFactor = widthIsBiggest ? image.width / size : image.height / size;

  const heigt = widthIsBiggest ? image.height / scaleFactor : size;
  const width = widthIsBiggest ? size : image.width / scaleFactor;

  const isSmallImage = width < requestedSize;
  const isShortImage = heigt < requestedSize;

  const xPosition = isSmallImage ? Math.floor((requestedSize - width) / 2) : 0;
  const yPosition = isShortImage ? Math.floor((requestedSize - heigt) / 2) : 0;

  canvas.width = requestedSize;
  canvas.height = requestedSize;

  if (context) {
    context.fillStyle = "#F7F7FA";
    context.fillRect(0, 0, requestedSize, requestedSize);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.drawImage(image, xPosition, yPosition, width, heigt);
  }

  return canvas;
}
