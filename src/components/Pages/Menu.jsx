import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from './Card'
import '../Pages/Pagestyle.css'


const Menu = () => {
  return (
    <Layout>
    <Box className='card-menu'>
      {
      MenuList.map((menu )=> (
        <Card sx={{maxWidth:'390px', display: 'flex', m: 2}}>
          <CardActionArea>
            <CardMedia sx={{minWeight:'400px'}} component={'img'} src={menu.image} 
            alt={menu.name}/>
            <CardContent>
              <Typography variant='h5' gutterBottom component={'div'}>
                {menu.name}
              </Typography>
              <Typography variant='h5' gutterBottom component={'div'}>
                {menu.description}
              </Typography>
              <Typography variant='h5' gutterBottom component={'div'}>
                {menu.price}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      ))
      }
    </Box>
    </Layout>
  )
}

export default Menu