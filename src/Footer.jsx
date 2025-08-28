import React from 'react'

const Footer = () => {
  return (
    <>
    <section id='bottom'>
   <div className="bg-indigo-900 text-white py-6 px-6 flex flex-col items-center justify-center">
      <p className="text-center">&copy; {new Date().getFullYear()} Deni-P Stiches. All rights reserved.</p>     
            </div>
    </section>
    </>
  )
}

export default Footer