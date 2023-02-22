import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { Anchor } from '../../types/types'
import Select from './Filter'
import { selectGenre, selectPrice } from '../../utils/selectItems'
import styles from '../../styles/components/drawer.module.scss'
import FilterListIcon from '@mui/icons-material/FilterList'
import Search from './Search'

const DrawerComponent: React.FC = () => {
	const [state, setState] = React.useState({
		right: false
	})

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return
			}

			setState({ ...state, [anchor]: open })
		}

	const list = () => (
		<Box
			sx={{
				width: '230px',
				backgroundColor: '#121212',
				height: '100%',
				ul: { padding: 0 }
			}}
			role='presentation'
		>
			<List className={styles.list}>
				<div className={styles.header}>
					<h4>Фильтры</h4>
					<Search />
				</div>

				<Select data={selectPrice} />
				<Select data={selectGenre} />

				<div className={styles.footer}>
					<button>Очистить</button>
					<button>Готово</button>
				</div>
			</List>
		</Box>
	)

	return (
		<div className={styles.drawer}>
			{(['right'] as const).map((anchor) => (
				<React.Fragment key={anchor}>
					<div onClick={toggleDrawer(anchor, true)}>
						Фильтр (1)
						<FilterListIcon className={styles.iconFilter} />
					</div>
					<Drawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
					>
						{list()}
					</Drawer>
				</React.Fragment>
			))}
		</div>
	)
}

export default DrawerComponent
