type PortfolioPictureProps = {
	filename: string
}

export default function PortfolioPicture({ filename }: PortfolioPictureProps) {
	return (
		<img
			src={filename}
			alt={`Image ${filename}`}
			className="absolute inset-0 w-full h-full object-cover"
		/>
	)
}
