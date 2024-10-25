type PortfolioPictureProps = {
	filename: string
}

export default function PortfolioPicture({ filename }: PortfolioPictureProps) {
	return (
		<img
			src={filename}
			key={`${filename.substring(filename.length - 6, filename.length - 4)}`}
		/>
	)
}
