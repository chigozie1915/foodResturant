import React from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import '../Pages/Pagestyle.css'
const Home = () => {
  return (
    <Layout>
        <div className='home'>
        <div className="headerContainer">
          <h1>Chef Charly's Food Website</h1>
          <p>Best Restaurant In Owerri</p>
          <Link to='/menu'>
          <button>
            ORDER NOW
          </button>
          </Link>
        </div>
        </div>
    </Layout>
  )
}

export default Home