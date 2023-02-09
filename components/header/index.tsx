import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { ThemeProvider } from '@mui/material/styles';
import Nav from './Nav';
import Dashboard from './Dashboard';
import BurgerMenu from './Burger';
import { darkTheme } from '../../styles/themes';

const pages = [{text:'Главная', href: '/main'}, {text:'Все игры', href: '/'}, {text:'Новости', href: '/news'}];
const settings = ['Профиль', 'Аккаунт', 'Управление', 'Войти'];

const Header:React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
		<AppBar position="static" color='primary' >
			<Container maxWidth="xl" > 
				<Toolbar disableGutters >
					<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
						}}
					>
						GAMES
					</Typography>

					<BurgerMenu 
						pages={pages} 
						anchorElNav={anchorElNav} 
						handleCloseNavMenu={handleCloseNavMenu} 
						handleOpenNavMenu={handleOpenNavMenu}
					/>
					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
						}}
					>
						GAMES
					</Typography>
					
					<Nav pages={pages} handleCloseNavMenu={handleCloseNavMenu}/>

					<Dashboard 
						anchorElUser={anchorElUser} 
						settings={settings} 
						handleCloseUserMenu={handleCloseUserMenu} 
						handleOpenUserMenu={handleOpenUserMenu}
					/>
				</Toolbar>
			</Container>
		</AppBar>
    </ThemeProvider>
  );
}
export default Header;
