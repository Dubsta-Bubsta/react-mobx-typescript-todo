export const getNotes = (): Promise<{data:{ title: string }[]}> => {
	return fetch("https://app.betthub.org/api/news").then(res => res.json())
}
