import React, { useEffect, useState } from "react"
import { callApi, resizeImage, Status } from "../helpers"
import PortfolioPicture from "./PortfolioPicture"

export default function Portfolio() {
	const [pictures, setPictures] = useState<string[]>([])
	const [apiStatus, setApiStatus] = useState<Status>(Status.Idle)

	useEffect(() => {
		if (apiStatus === Status.Idle) {
			setApiStatus(Status.Busy)
			callApi<string[]>("getPortfolio").then((array) => {
				array.sort()
				setPictures(array)
				setApiStatus(Status.Done)
			})
		}
	}, [apiStatus])

	return (
		<>
			<div>Een greep uit de eerder uitgevoerde projecten:</div>
			<div className="flex max-w-[50vw] gap-8 flex-wrap">
				{apiStatus === Status.Done ? (
					pictures.map((picture) => {
						return <PortfolioPicture filename={picture} />
					})
				) : (
					<>Laden...</>
				)}
			</div>
		</>
	)
}

async function generatePictureArray() {
	const files = await callApi<string[]>("getPortfolio")
	const pictures: React.JSX.Element[] = []

	for (let i = 0; i < files.length; i++) {
		const image = new Image()
		image.src = `./images/portfolio/${files[i]}`
		const imageUrl = resizeImage(image).toDataURL("image/jpeg", 1.0)
		pictures.push(<img src={imageUrl} key={`image-${i}`} />)
	}

	return pictures
}
