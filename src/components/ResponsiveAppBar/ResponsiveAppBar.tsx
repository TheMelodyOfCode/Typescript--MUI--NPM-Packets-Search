import * as React from 'react';
import { 
  MUIAppBar, 
  MUIBox, 
  MUIToolbar, 
  MUIIconButton, 
  MUITypography,
  MUIMenu,
  MUIMenuIcon,
  MUIContainer,
  MUIAvatar,
  MUIButton,
  MUITooltip,
  MUIMenuItem,
  MUIFavoriteIcon,
  MUILink,
} from '../../utils/MaterialUI';

import { 
  AppBarItems, 
  Settings 
} from './consts/navbarItems';


function ResponsiveAppBar() {
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
    <MUIAppBar position="static">
      <MUIContainer maxWidth="xl">
        <MUIToolbar disableGutters>
          <MUIFavoriteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <MUITypography
            variant="h6"
            noWrap
            component="a"
            href="https://www.npmjs.com/"
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
            NPM
          </MUITypography>

          <MUIBox sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MUIIconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MUIMenuIcon />
            </MUIIconButton>
            <MUIMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {AppBarItems.map((page) => (
                <MUIMenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <MUITypography textAlign="center">
                    <MUILink href={page.route} underline="hover">
                      {page.label}
                    </MUILink>
                  </MUITypography>
                </MUIMenuItem>
              ))}
            </MUIMenu>
          </MUIBox>
          <MUIFavoriteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <MUITypography
            variant="h5"
            noWrap
            component="a"
            href="https://www.npmjs.com/"
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
            NPM
          </MUITypography>
          <MUIBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {AppBarItems.map((page) => (

              <MUILink key={page.id} href={page.route} underline="hover">
                <MUIButton
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page.label}
                </MUIButton>
              </MUILink>

            ))}
          </MUIBox>

          <MUIBox sx={{ flexGrow: 0 }}>
            <MUITooltip title="Open settings">
              <MUIIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MUIAvatar alt="Remy Sharp" src="img/avatar.png" />
              </MUIIconButton>
            </MUITooltip>
            <MUIMenu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {Settings.map((setting) => (
                <MUIMenuItem key={setting.id} onClick={handleCloseUserMenu}>
                  <MUILink href={setting.route} underline="hover">
                    <MUITypography textAlign="center">{setting.label}</MUITypography>
                  </MUILink>
                </MUIMenuItem>
              ))}
            </MUIMenu>
          </MUIBox>
        </MUIToolbar>
      </MUIContainer>
    </MUIAppBar>
  );
}
export default ResponsiveAppBar;