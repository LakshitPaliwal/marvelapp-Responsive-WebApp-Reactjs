import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import StorageIcon from '@material-ui/icons/Storage';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import CodeIcon from '@material-ui/icons/Code';
import SettingsIcon from '@material-ui/icons/Settings';
import { green } from '@material-ui/core/colors';
import  AllDropDownGrid from '../dropDowns/AllDropDownGrid';
import Images from '../GridImages/Images';
import CameraView from '../cameraview/CameraView';
import VideoSection  from '../videosection/VideoSection';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
gmailtext:{
  fontWeight: 500,
},
  headtitle :{
    color:'#190852'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {backgroundColor:'white',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor:"white"
    },
  },
  menuButton: {
    marginLeft: '40vw',
color:'#190852',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const RightMenu=(props)=> {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Typography className={classes.headtitle} variant="h6" noWrap>
            AppStore.io 
          </Typography>
          <Divider />
      <div className={classes.toolbar} />
        <ListItem button>
        <ListItemIcon>
          <PersonIcon style={{ color: green[500] }}/>
        </ListItemIcon>
       <Typography className={classes.gmailtext}>
            facemask@gmail.com
          </Typography>
      </ListItem>   
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText secondary="My Apps" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CameraAltIcon />
        </ListItemIcon>
        <ListItemText secondary="My cameras" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText secondary="Conected Machines" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText secondary="About Us" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <CodeIcon/>
        </ListItemIcon>
        <ListItemText secondary="Developers" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText secondary="Support" />
      </ListItem>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.headtitle} variant="h6" noWrap>
            AppStore.io 
          </Typography>
          <IconButton
            color="#190852"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} /> 
      <VideoSection/>
      <CameraView/>
      <AllDropDownGrid/>
      <Images/>
      </main>
    </div>
  );
}

export default RightMenu;
