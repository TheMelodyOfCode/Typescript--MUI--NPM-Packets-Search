
export const appbarStyles = {
    main: {
      backgroundColor: '#fff',
    },
    logoIconMD: {
      display: { xs: 'none', md: 'flex' },
      mr: 1,
      color: '#000',
    },
    logoIconXS: {
      mr: 1, 
      color: 'black',
      display: { xs: 'flex', md: 'none' }, 
    },
    npmLogoMD: {
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'red',
      textDecoration: 'none',
    },
    npmLogoXS: {
      mr: 2,
      display: { xs: 'flex', md: 'none' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'red',
      textDecoration: 'none',
    },
    boxMD: {
      flexGrow: 1, 
      display: { xs: 'flex', md: 'none' }
    },
    boxAppItems: {
      flexGrow: 1,
      color: 'black', 
      display: { xs: 'none', md: 'flex' } ,
    },
    appItems: {
      my: 2,color: 'black', 
      fontWeight: 'bold', 
      display: 'block' 
    },
    leftMenu: {
      display: { xs: 'block', md: 'none' },
    },
  };