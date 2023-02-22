import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

interface DashboardProps {
	anchorElUser: null | HTMLElement
	handleCloseUserMenu: () => void
	handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
	settings: string[]
}

const Dashboard: React.FC<DashboardProps> = ({
	anchorElUser,
	handleCloseUserMenu,
	handleOpenUserMenu,
	settings
}) => {
	return (
		<Box sx={{ flexGrow: 0, mr: 3 }}>
			<Tooltip title='Открыть настройки'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar src='/broken-image.jpg' />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography color='#ccc' textAlign='center'>
							{setting}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}

export default Dashboard
