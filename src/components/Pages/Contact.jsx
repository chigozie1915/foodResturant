import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import '../Pages/Pagestyle.css'
import {  Mail, WhatsApp } from '@mui/icons-material'
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{ alignItems: 'center', my: 5, ml:5, '& h5': {fontWeight: 'bold', mb: 2} }}>
          <Typography variant='h5'>Contact Charly's Restaurant</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Fuga libero omnis, 
            hic dolorum possimus reprehenderit 
            modi tempore inventore atque? Nam 
            temporibus itaque, deserunt recusandae 
            tenetur quam, voluptates voluptate, 
            ad reprehenderit saepe impedit in 
            nostrum eum vero? Iusto exercitationem 
            molestiae doloremque atque quas dicta 
            nihil. Pariatur sequi maiores debitis 
            esse quia laboriosam. Ullam distinctio 
            blanditiis tempora debitis consequuntur 
            excepturi, quod fuga unde odit fugit 
            commodi magni dolores beatae, 
            modi nemo sed voluptatum! Enim sapiente 
            facere quia odio, eaque veritatis minus? 
            Ratione, maiores libero vel accusamus 
            sapiente autem provident fugit illum 
            sunt? Aut, architecto illo optio ut 
            quidem nobis. Nemo, eos. Repellat!
          </p>
        </Box>
        <Box sx={{ m: 3, width:'600px', ml: 10, '@media(max-width:600px)':{
         width: '300px',
         align: 'center'
        }}}>
          <TableContainer component={Paper}>
<Table aria-label='contact table'>
  <TableHead>
    <TableRow>
      <TableCell sx={{bgcolor: 'black',color:'white', pt: 1}} align='center'>Contact Details</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>
        <WhatsApp sx={{color:'green', pt: 1}}/> 08107177920 (charges apply)
        </TableCell>
        </TableRow>
        <TableRow>
        <TableCell>
        <Mail sx={{color:'red', pt: 1}}/> luciana.lovc1924@gmail.com
      </TableCell>
      </TableRow>
    <TableRow>
      <TableCell>
      <CallIcon sx={{color:'green', pt: 1}}/> 09032541223
      </TableCell>
    </TableRow>
  </TableBody>

</Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact