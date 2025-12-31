import React from 'react'

const Hero = () => {
  return (
    <>
      <section id='home' className="pt-16">
        <div className="bg-indigo-800 text-white py-20 px-6 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-center">Welcome to Deni-P Stiches</h2>
          <p className="text-lg mb-6 text-center max-w-xl">
            Discover unique and stylish collections tailored just for you. Quality, creativity, and elegance in every stitch.
          </p>

          <a href="#collections" className="bg-white text-indigo-800 px-6 py-2 rounded font-semibold hover:bg-indigo-100 transition cursor-pointer inline-block">
            Shop Collections
          </a>
        </div>
      </section>
    </>
  )
}

export default Hero