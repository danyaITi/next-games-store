import { Box, Button } from '@mui/material'
import Link from 'next/link'
import { Pages } from '../../types/types'

interface NavProps {
	pages: Pages[]
	handleCloseNavMenu: () => void
}

const Nav: React.FC<NavProps> = ({ pages, handleCloseNavMenu }) => {
	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
			{pages.map((page) => (
				<Link
					key={page.text}
					style={{ textDecoration: 'none', color: 'white' }}
					href={page.href}
				>
					<Button
						onClick={handleCloseNavMenu}
						sx={{ my: 2, color: '#ccc', display: 'block' }}
					>
						{page.text}
					</Button>
				</Link>
			))}
		</Box>
	)
}

export default Nav
