import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import SidebarComponent from './SidebarComponent';
import ToolbarComponent from './ToolbarComponent';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  links: {
    marginLeft: theme.spacing(2),
    color: 'white',
    textDecoration: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [openToolbar, setOpenToolbar] = React.useState(false);
  const [openSidebar, setOpenSidebar] = React.useState(false);

  // const handleEditPage = () => {
  //   console.log('handleEditPage');
  // };

  // const handleSavePage = () => {
  //   console.log('handleSavePage');
  // };

  // const handleCancelEdit = () => {
  //   console.log('handleCancelEdit');
  // };

  const handleDrawerOpen = () => {
    setOpenToolbar(true);
  };

  const handleDrawerClose = () => {
    setOpenToolbar(false);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const toggleDrawer = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openToolbar,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openToolbar,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.links}>
              Home
            </Link>
            <Link to="/my-page" className={classes.links}>
              My Page
            </Link>
          </Typography>
          {auth && (
            <div>
              <Link
                to="/edit"
                className={classes.links}
                aria-label="edit current page"
              >
                <EditOutlinedIcon />
              </Link>
              <Link to="/" className={classes.links}>
                <CloseOutlinedIcon />
              </Link>
              <Link to="/" className={classes.links}>
                <SaveOutlinedIcon />
              </Link>
            </div>
          )}
          <IconButton color="inherit" onClick={toggleDrawer}>
            <ChevronRightIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ToolbarComponent
        openToolbar={openToolbar}
        handleDrawerClose={handleDrawerClose}
      />
      <SidebarComponent
        openSidebar={openSidebar}
        handleSidebarClose={handleSidebarClose}
      />
    </>
  );
}
