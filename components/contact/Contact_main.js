import React from 'react'
import Contact_banner from './Contact_banner'
import Contact_form from './Contact_form'
import Footer from '../share/Footer'

const Contact_main = () => {
  return (
    <div>
      <Contact_banner />
      <Contact_form/>
      <div style={{ backgroundColor: "#051616" }}>
        <Footer />
      </div>
    </div>
  )
}

export default Contact_main