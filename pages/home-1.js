import React from 'react'
import MagnaficPopup from './components/magnafic-popup/magnafic-popup'
import Service from './components/services/service'
import SliderOne from './components/slider/slider-1'
import Seo from './seo/seo'

const HomeOne = ({name}) => {
  return (
    <React.Fragment>
        <Seo title={"Home"} />
        <SliderOne/>
        <Service/>
        <MagnaficPopup/>
    </React.Fragment>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {name: 'hemla'}, // will be passed to the page component as props
  }
}

export default HomeOne