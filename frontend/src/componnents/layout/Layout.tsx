import React from 'react'
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';


const Layout = ({
    children,
  }: {
    children: React.ReactElement;
  }) => {
  return (
   <>
    <Header/>
    <Navbar/>
    <main>
        {children}    
    </main>
    </>
  )
}

export default Layout