import { Game } from '../../types/types'
import style from '../../styles/components/card.module.scss'

const Skeleton = ({ games }: { games: Game[] }) => {
	return (
		<>
			{[...new Array(games.length)].map((_, i) => (
				<div key={i} className={style.skeleton}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
			))}
		</>
	)
}

export default Skeleton
