import * as React from 'react';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box, { BoxProps } from '@mui/material/Box';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Container, { ContainerProps } from '@mui/material/Container';
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SvgIconProps as FavoriteIconProps } from '@mui/material/SvgIcon';
import Link, { LinkProps } from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import { SvgIconProps as SearchIconProps } from '@mui/material/SvgIcon';
import Input, { InputProps } from '@mui/material/Input';
import Card, { CardProps } from '@mui/material/Card';
import CardContent, { CardContentProps } from '@mui/material/CardContent';
import RefreshIcon from '@mui/icons-material/Refresh';
import { SvgIconProps as RefreshIconProps } from '@mui/material/SvgIcon';
import Grid, { GridProps, } from '@mui/material/Grid';
import Skeleton from "@mui/material/Skeleton";
import { SkeletonProps } from "@mui/material/Skeleton";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';


// AppBar
interface MUIAppBarProps extends AppBarProps {
  children: React.ReactNode;
}

const MUIAppBar: React.FC<MUIAppBarProps> = ({ children, ...props }) => {
  return (
    <AppBar {...props}>
      {children}
    </AppBar>
  );
};

// Box
interface MUIBoxProps extends BoxProps {
    children: React.ReactNode;
  }

const MUIBox: React.FC<MUIBoxProps> = ({ children, ...props }) => {
    return (
      <Box {...props}>
        {children}
      </Box>
    );
  };

// Toolbar
interface MUIToolbarProps extends ToolbarProps {
    children: React.ReactNode;
  }
  
  const MUIToolbar: React.FC<MUIToolbarProps> = ({ children, ...props }) => (
    <Toolbar {...props}>{children}</Toolbar>
  );
  
  // IconButton
  interface MUIIconButtonProps extends IconButtonProps {
    children: React.ReactNode;
  }
  
  const MUIIconButton: React.FC<MUIIconButtonProps> = ({ children, ...props }) => (
    <IconButton {...props}>{children}</IconButton>
  );
  
  // Typography
  interface MUITypographyProps extends TypographyProps {
    children: React.ReactNode;
    component?: React.ElementType;
    href?: string;
  }
  
  const MUITypography: React.FC<MUITypographyProps> = ({ children, ...props }) => (
    <Typography {...props}>{children}</Typography>
  );
  
  // Menu
  interface MUIMenuProps extends MenuProps {
    children: React.ReactNode;
  }
  
  const MUIMenu: React.FC<MUIMenuProps> = ({ children, ...props }) => (
    <Menu {...props}>{children}</Menu>
  );
  
  // MenuIcon
  const MUIMenuIcon: React.FC<SvgIconProps> = (props) => <MenuIcon {...props} />;
  
  // Container
  interface MUIContainerProps extends ContainerProps {
    children: React.ReactNode;
  }
  
  const MUIContainer: React.FC<MUIContainerProps> = ({ children, ...props }) => (
    <Container {...props}>{children}</Container>
  );
  
  // Avatar
  interface MUIAvatarProps extends AvatarProps {}
  
  const MUIAvatar: React.FC<MUIAvatarProps> = (props) => <Avatar {...props} />;
  
  // Button
  interface MUIButtonProps extends ButtonProps {
    children: React.ReactNode;
  }
  
  const MUIButton: React.FC<MUIButtonProps> = ({ children, ...props }) => (
    <Button {...props}>{children}</Button>
  );
  
  // Tooltip
  interface MUITooltipProps extends Omit<TooltipProps, 'children'> {
    children: React.ReactElement<any, any>;
  }
  
  const MUITooltip: React.FC<MUITooltipProps> = ({ children, ...props }) => {
    const ChildWithRef = React.forwardRef((childProps, ref) => {
      return React.cloneElement(children, {
        ...childProps,
        ref,
      });
    });
  
    return <Tooltip {...props}>{<ChildWithRef />}</Tooltip>;
  };
  

  // MenuItem
  interface MUIMenuItemProps extends MenuItemProps {
    children: React.ReactNode;
  }
  
  const MUIMenuItem: React.FC<MUIMenuItemProps> = ({ children, ...props }) => (
    <MenuItem {...props}>{children}</MenuItem>
  );

// FavoriteIcon
const MUIFavoriteIcon: React.FC<FavoriteIconProps> = (props) => <FavoriteIcon {...props} />;

// Link
interface MUILinkProps extends LinkProps {
  children: React.ReactNode;
}

const MUILink: React.FC<MUILinkProps> = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
);

// SearchIcon
const MUISearchIcon: React.FC<SearchIconProps> = (props) => <SearchIcon {...props} />;

// Input
const MUIInput: React.FC<InputProps> = (props) => <Input {...props} />;

// Card
const MUICard: React.FC<CardProps> = (props) => <Card {...props} />;

// CardContent
const MUICardContent: React.FC<CardContentProps> = (props) => <CardContent {...props} />;


// MUIRefreshIcon
const MUIRefreshIcon: React.FC<RefreshIconProps> = (props) => <RefreshIcon {...props} />;

interface MUIGridProps extends GridProps {
  children: React.ReactNode;
}

const MUIGrid: React.FC<MUIGridProps> = ({ children, ...props }) => (
  <Grid {...props}>{children}</Grid>
);

interface MUISkeletonProps extends SkeletonProps {
  // You can add additional custom properties if needed
  customProp?: string;
}
const MUISkeleton: React.FC<MUISkeletonProps> = (props) => {
  const { customProp, ...skeletonProps } = props;
  // You can use the customProp if needed for additional functionality
  return <Skeleton {...skeletonProps} />;
};

// ################# DATA GRID ####################

interface MUIDataGridProps {
  data: GridRowsProp;
  columns: GridColDef[];
  pageSize?: number;
  checkboxSelection?: boolean;
  disableSelectionOnClick?: boolean;
  columnWidths?: { [key: string]: number };
}

const MUIDataGrid: React.FC<MUIDataGridProps> = ({
  data,
  columns,
  pageSize = 10,
  checkboxSelection = false,
  disableSelectionOnClick = false,
  columnWidths = {},
}) => {
  const adjustedColumns = columns.map((column) => ({
    ...column,
    width: columnWidths[column.field] || column.width,
  }));


  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={adjustedColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>

  );
};

export {
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
MUISearchIcon,
MUIInput,
MUICard,
MUICardContent,
MUIRefreshIcon,
MUIGrid,
MUISkeleton,
MUIDataGrid,
};