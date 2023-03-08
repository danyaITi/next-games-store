import { useMemo, useState, useEffect } from 'react'
import { Game } from '../types/types'

export const useFilter = (games: Game[]) => {
	const [genre, setGenre] = useState<string>('')

	const filterGames = useMemo(() => {
		const data = games.filter((item) => {
			if (
				item.genres.includes(genre) ||
				item.price === genre ||
				(genre === 'Ниже 650,00 руб' && item.price < 650)
			) {
				return true
			} else {
				return false
			}
		})

		return data
	}, [genre])

	useEffect(() => {
		filterGames
	}, [genre])

	return { filterGames, genre, setGenre }
}
