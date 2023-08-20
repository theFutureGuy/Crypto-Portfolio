import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { CryptoContext, CryptoProvider } from '../context/CryptoContext'

const Home = () => {
  return (
    // <CryptoProvider children={Children}> 
    <CryptoProvider providerInitState={CryptoContext}>
        <main className='w-full h-full flex flex-col first-letter:content-center items-center relative text-white font-nunito'>
            <div className='w-screen h-screen bg-gray-300 fixed -z-10'/>
            <Logo />
            <Navigation /> 
            <h1>Home</h1>   
            <Outlet />
        </main>
   </CryptoProvider> 
  )
}

export default Home
