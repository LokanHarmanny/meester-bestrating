export async function callApi<T>(action: string): Promise<T> {
	return (
		await fetch(`api/index.php?action=${action}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
	).json()
}
