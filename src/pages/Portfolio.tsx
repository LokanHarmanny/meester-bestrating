import React, { useEffect, useState } from "react"
import { callApi, Status } from "../helpers"
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
