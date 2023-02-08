import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListIcon from '@mui/icons-material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PeopleIcon from '@mui/icons-material/People';
import LogIn from '../../../Pages/Accounts/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from '@mui/material';
import makeStyles from 'styled-components';
import Navbar from '../../Navbar';
import { NavLink } from '../../Navbar/NavbarElements';
const drawerWidth = 240;

export default function ClippedDrawer() {
    // const classes = useStyles();
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' ,marginTop: "50px"},
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Products'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <NavLink to ='/products'>
                <ListItemButton>
                  <ListItemIcon>
                    {< ListIcon/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Account','Customer Support'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    { text == 'Account' ? <AccountCircleIcon /> : < SupportAgentIcon/> }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {['Users'].map((text, index) => (
              <NavLink to ='/users'>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    
                    {< PeopleIcon/>}
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography> */}
      </Box>
    </Box>
  );
}
