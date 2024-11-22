import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,
        textAlign: 'center',
        p:2,
        "& h4":{
          fontWeight:'bold',
          my:2,
          fontSize:28
        },
        "& p":{
          textAlign:'justify',
        },
        '@media (max-width:600px)':{
          mt:0,
          '& h4':{
            fontSize:'1.5rem'
          }
        }
      }}>
        <Typography variant='h4'>Welcome to Charly's Restaurant</Typography>
        <p>
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Minima in ad, excepturi 
          recusandae culpa debitis vero perspiciatis 
          soluta, obcaecati dolorem voluptatum corrupti 
          reprehenderit nisi ea itaque modi veritatis 
          necessitatibus. Omnis, amet ad dolorem excepturi,
          veritatis voluptates officia accusamus fuga enim 
          id inventore nulla accusantium ex unde libero 
          quidem deleniti, sunt laudantium! Consectetur 
          adipisci dicta aliquid beatae obcaecati illum, 
          ut quos. Facere ducimus unde minima officiis 
          fugit aspernatur odit temporibus assumenda 
          consectetur alias soluta beatae, provident, 
          distinctio amet cum modi consequatur iusto. 
          Beatae inventore odit, expedita in quidem quae 
          accusamus perspiciatis consectetur dolore 
          quod quia architecto amet iusto dicta dolor omnis?
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Minima in ad, excepturi 
          recusandae culpa debitis vero perspiciatis 
          soluta, obcaecati dolorem voluptatum corrupti 
          reprehenderit nisi ea itaque modi veritatis 
          necessitatibus. Omnis, amet ad dolorem excepturi,
          veritatis voluptates officia accusamus fuga enim 
          id inventore nulla accusantium ex unde libero 
          quidem deleniti, sunt laudantium! Consectetur 
          adipisci dicta aliquid beatae obcaecati illum, 
          ut quos. Facere ducimus unde minima officiis 
          fugit aspernatur odit temporibus assumenda 
          consectetur alias soluta beatae, provident, 
          distinctio amet cum modi consequatur iusto. 
          Beatae inventore odit, expedita in quidem quae 
          accusamus perspiciatis consectetur dolore 
          quod quia architecto amet iusto dicta dolor omnis?
        </p>
        
      </Box>
    </Layout>
  )
}

export default About