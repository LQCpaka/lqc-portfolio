"use client"

import AboutMe from '@/components/AboutMe'
import BgGif from '@/components/BgGif'
import DesireMyself from '@/components/DesireMyself'
import MyProgLang from '@/components/MyProgLang'
import MyProj from '@/components/MyProj'
// import ModelScene from '@/components/ModelScene'
import React from 'react'


const Home = () => {
  return (
    <>
      <DesireMyself />
      <div className='mx-4 md:mx-16'>
        <BgGif />
        <AboutMe />
        <MyProgLang />
        <MyProj />
        <AboutMe/>
      </div>

    </>


  )
}

export default Home
