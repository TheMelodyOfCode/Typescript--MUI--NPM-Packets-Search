import * as React from 'react';

// Import necessary helper functions from the MaterialUI utils file
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
  MUIMenuItem,
  MUIFavoriteIcon,
  MUILink,
} from '../../utils/MaterialUI';

// Import constants for the AppBar items and settings
import { 
  AppBarItems, 
  Settings 
} from './consts/navbarItems';

// Import styles for the ResponsiveAppBar component
import { appbarStyles } from './ResponsiveAppBar.styles';

/** ResponsiveAppBar renders a responsive navigation AppBar with links to pages and user settings. */
function ResponsiveAppBar() {
  // State hooks for managing the open state of the navigation and user menus
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  // Handlers for opening and closing the navigation and user menus
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
    <MUIAppBar  sx={appbarStyles.main} position="static">
      <MUIContainer maxWidth="xl">
        <MUIToolbar disableGutters>
          <MUIFavoriteIcon sx={appbarStyles.logoIconMD} />
          <MUITypography
            variant="h6"
            noWrap
            component="a"
            href="https://www.npmjs.com/"
            sx={appbarStyles.npmLogoMD}
          >
            NPM
          </MUITypography>

          <MUIBox sx={appbarStyles.boxMD}>
            <MUIIconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={appbarStyles.leftMenu}
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
              sx={appbarStyles.menuLeftXS}
            >
              {AppBarItems.map((page) => (
                <MUIMenuItem  key={page.id} onClick={handleCloseNavMenu}>
                  <MUITypography textAlign="center">
                    <MUILink sx={{color: 'black'}} href={page.route} underline="hover">
                      {page.label}
                    </MUILink>
                  </MUITypography>
                </MUIMenuItem>
              ))}
            </MUIMenu>
          </MUIBox>
          <MUIFavoriteIcon sx={appbarStyles.logoIconXS} />
          <MUITypography
            variant="h5"
            noWrap
            component="a"
            href="https://www.npmjs.com/"
            sx={appbarStyles.npmLogoXS}
          >
            NPM
          </MUITypography>
          <MUIBox sx={appbarStyles.boxAppItems}>
            {AppBarItems.map((page) => (

              <MUILink key={page.id} href={page.route} underline="hover">
                <MUIButton
                  onClick={handleCloseNavMenu}
                  sx={appbarStyles.appItems}
                >
                    {page.label}
                </MUIButton>
              </MUILink>

            ))}
          </MUIBox>

          <MUIBox sx={{ flexGrow: 0 }}>

              <MUIIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MUIAvatar alt="Remy Sharp" src="img/avatar.png" />
              </MUIIconButton>


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
                    <MUITypography sx={{color: 'black',}}  textAlign="center">{setting.label}</MUITypography>
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