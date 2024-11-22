import React, {useState}from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click 
  const handleDrawerToggle = () =>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
     <Typography color={'goldenrod'} variant='h6'
       component='div' sx={{flexGrow: 1, my:2}}>
        <RestaurantIcon />
        Charly's Restaurant   
      </Typography>
      <Divider/>
       <ul className='mobile-nav'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        </ul>  
    </Box>
  )
  return (
    <>
   <Box>
    <AppBar component={'nav'} sx={{bgcolor:"black"}}>
      <Toolbar>
        <IconButton color='inherit'  edge='start' sx={{
          mr:2, 
          display:{sm:'none'}}}
          onClick={handleDrawerToggle}
          >
            
         <MenuIcon /> 
        </IconButton>
      <Typography color={'goldenrod'} variant='h6'
       component='div' sx={{flexGrow: 1}}>
        <RestaurantIcon />
        Charly's Restaurant   
      </Typography>
      <Box sx={{display:{xs:'none',sm: 'block'}}}>
       <ul className='nav-menu'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        </ul> 
      </Box> 
      </Toolbar>
    </AppBar>
    <Box component='nav'>
      <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
      sx={{display:{xs:'block',sm:'none'}, 
      '& .MuiDrawer-paper':{
        boxSizing:'border-box',
        width:'240px',
      }
      }}>
        {drawer}
      </Drawer>
    </Box>
    <Box >

    <Toolbar />
    </Box>
   </Box>
    </> 
  )
}

export default Header