import React from 'react'
import Heading from '../Components/Heading'
import Navbar from '../Components/Navbar'
import Aboutcontent from '../Components/Aboutcontent'
import Footercopy from '../Components/Footercopy'
import Footer from '../Components/Footer'
import Productss from '../Components/Products and cart/Productss'
import Test from "../Components/Test"
import Form from "../Components/Form"

const Home = () => {
  return (
    <div>
        <Heading />
        <Navbar />
        <Aboutcontent />
        <Productss />
        <Test />
        <Form />
        <Footer />
        <Footercopy />
    </div>
  )
}

export default Home