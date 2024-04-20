import React from 'react'
import Navbar from '../Home/Navbar'
import Box from '../Home/Box'
import Button from '../Home/Button'
import ImageList from '../Home/ImageList'
import ImageBox from '../Home/Imgbox'
import Footer from '../Home/Footer'

export default function Home() {
  return (
    <main className=''>
       <Navbar />
       <Box />
       <Button />
       <ImageList />
       <ImageBox />
       <Footer  className='h-full'/>
    </main>
  )
}
