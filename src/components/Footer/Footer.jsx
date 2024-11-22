import React from 'react'
import '../Footer/Footer.css'
import { Box, Typography } from '@mui/material'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:'center',bgcolor:'#1A1A19', color:'white',p: 3 }}>
   <Box className='icon'>
    <Instagram className='i'/>
    <Twitter className='i'/>
    <Facebook className='i'/>
    <YouTube className='i'/>
   </Box>
    <Typography  className='write-up' variant='h5'>
        All Rights Reserved &copy; VivianTech VT
    </Typography>
   </Box>
   </>
  )
}

export default Footer