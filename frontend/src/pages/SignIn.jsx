import React from 'react'
import FirstNavbar from '../components/navbars/FirstNavbar'
import SecondNavbar from '../components/navbars/SecondNavbar'
import Footer from '../components/Footer'
import ThirdNavbar from '../components/navbars/ThirdNavbar'

const SignIn = () => {
  return (
    <div>
      <FirstNavbar />
      <hr className="border-0 border-t border-green-700 m-0" />
      <SecondNavbar />
      <ThirdNavbar/>
      <Footer/>
    </div>
  )
}

export default SignIn