import React from 'react'
import ContactPage from './contacthero'
import ContactCards from '../Home/contactCard'
import ContactMap from './ContactMap'
import ContactInfoSection from './ContactInfoSection'
import ContactSection from './contactSection'

function page() {
  return (
    <div>
        <ContactPage/>
        <ContactSection/>
        <ContactMap/>
        <ContactInfoSection/>
     
        
    </div>
  )
}

export default page