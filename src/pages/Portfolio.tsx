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
			<div className="grid grid-cols-3 gap-4">
				{apiStatus === Status.Done ? (
					pictures.map((picture, index) => {
						return (
							<div key={index} className="relative w-40 h-40 overflow-hidden">
								<PortfolioPicture filename={picture} />
							</div>
						)
					})
				) : (
					<>Laden...</>
				)}
			</div>
		</>
	)
}
