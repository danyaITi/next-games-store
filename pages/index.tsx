import Container from '@mui/material/Container'
import { GetStaticProps } from 'next'
import { Games } from '../types/types'
import Card from '../components/games/Card'
import styles from '../styles/games.module.scss'
import Box from '@mui/material/Box'
import Select from '../components/games/Filter'
import { selectGenre, selectPrice } from '../utils/selectItems'
import DrawerComponent from '../components/games/Drawer'
import Search from '../components/games/Search'
import { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { useFilter } from '../hooks/useFilter'
import { useSearch } from '../hooks/useSearch'
import Skeleton from '../components/games/Skeleton'

export const getStaticProps: GetStaticProps = async () => {
	try {
		const resp = await fetch(`${process.env.API_HOST}/games`)
		const data = await resp.json()

		if (!data) {
			return {
				notFound: true
			}
		}

		return {
			props: { games: data }
		}
	} catch (error) {
		return {
			props: { games: [] }
		}
	}
}

const Games: React.FC<Games> = ({ games }) => {
	const [value, setValue] = useState<string>('')
	const [active, setActive] = useState<boolean>(false)

	const { debounce, isPending } = useDebounce(value, 500)
	const { filterGames, genre, setGenre } = useFilter(games)
	const { searchGames } = useSearch(games, debounce)

	const cancelOptions = () => {
		setValue('')
		setGenre('')
		setActive(false)
	}

	return (
		<Container maxWidth='lg'>
			<Box className={styles.gamesFlex}>
				<DrawerComponent />

				<div className={styles.gamesGrid}>
					{!isPending ? (
						<Skeleton games={games} />
					) : (
						<>
							{!genre.length
								? searchGames().map((item) => <Card key={item.id} {...item} />)
								: filterGames.map((item) => <Card key={item.id} {...item} />)}
						</>
					)}
				</div>

				<div className={styles.right}>
					<div className={styles.count}>
						<span>Фильтры</span>
						<span onClick={cancelOptions}>Cбросить</span>
					</div>
					<Search setValue={setValue} value={value} />

					<Select
						active={active}
						setActive={setActive}
						setGenre={setGenre}
						data={selectPrice}
					/>
					<Select
						active={active}
						setActive={setActive}
						setGenre={setGenre}
						data={selectGenre}
					/>
				</div>
			</Box>
		</Container>
	)
}

export default Games
