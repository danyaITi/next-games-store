import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { Pages } from '../../types/types'
import Link from 'next/link'

interface BurgerMenuProps {
	anchorElNav: null | HTMLElement
	handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
	handleCloseNavMenu: () => void
	pages: Pages[]
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
	anchorElNav,
	handleOpenNavMenu,
	handleCloseNavMenu,
	pages
}) => {
	return (
		<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleOpenNavMenu}
				color='inherit'
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left'
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left'
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: 'block', md: 'none' }
				}}
			>
				{pages.map((page) => (
					<Link
						style={{ textDecoration: 'none', color: '#ccc' }}
						key={page.text}
						href={page.href}
					>
						<MenuItem onClick={handleCloseNavMenu}>
							<Typography textAlign='center'>{page.text}</Typography>
						</MenuItem>
					</Link>
				))}
			</Menu>
		</Box>
	)
}

export default BurgerMenu
