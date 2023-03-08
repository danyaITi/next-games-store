import { Game } from '../types/types'
import { useEffect } from 'react'

export const useSearch = (games: Game[], debounce: string) => {
	const searchGames = () => {
		const data = games.filter((item) => {
			if (item.title.toLowerCase().includes(debounce.toLowerCase())) {
				return true
			} else {
				return false
			}
		})
		return data
	}

	useEffect(() => {}, [debounce])

	return {
		searchGames
	}
}
