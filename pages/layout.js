import React from 'react'
import HeaderOne from './components/header/header-1'
import FooterOne from './components/footer/footer-1'
import HomeOne from './home-1'

const Layout = () => {
  return (
    <React.Fragment>
        <HeaderOne/>
            <HomeOne/>
        <FooterOne/>
    </React.Fragment>
  )
}

export default Layout