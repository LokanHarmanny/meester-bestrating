import { resizeImage } from "../helpers"

type PortfolioPictureProps = {
	filename: string
}

export default function PortfolioPicture({ filename }: PortfolioPictureProps) {
	const image = new Image()
	image.src = `./images/portfolio/${filename}`
	const imageUrl = resizeImage(image).toDataURL("image/jpeg", 1.0) //This takes to long, need to just store thumbnails on the server beforehand

	return (
		<img
			src={`./images/portfolio/${filename}`}
			key={`${filename.substring(filename.length - 6, filename.length - 4)}`}
		/>
	)
}
