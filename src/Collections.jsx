import React from 'react'

const Collections = () => {
  return (
    <section id= 'collections' className="py-16 px-6 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-8 text-indigo-900">Our Collections</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Example items */}
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
          <img src="./fair lady in ankara copy.jpg" alt="Fair Lady in Ankara" className="mb-4 rounded-2xl w-full h-full object-cover transition duration-300 hover: hover:scale-75" />
          <h4 className="text-xl font-semibold mb-2">Elegant Dress</h4>
          <p className="text-gray-600 mb-2">Beautifully crafted for every occasion.</p>
          <button className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-600 transition">View</button>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
             <img src="./ankara designs.jpg" alt="Fair Lady in Ankara" className="mb-4 rounded -3x1 w-full h-full object-cover transition duration-300 hover: hover:scale-75" />
            <h4 className="text-xl font-semibold mb-2">Traditional Attire</h4>
            <p className="text-gray-600 mb-2">Celebrate culture with style.</p>
            <button className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-600 transition">View</button>
        </div>
        <div className="bg-white rounded shadow p-6 flex flex-col items-center">
             <img src="./ankara with headtie.jpg" alt="A young Tailor" className="mb-4 rounded-2xl w-full h-full object-cover transition duration-300 hover: hover:scale-75" />
            <h4 className="text-xl font-semibold mb-2">Modern Tailoring</h4>
            <p className="text-gray-600 mb-2">Sleek designs for the contemporary you.</p>
            <button className="bg-indigo-800 text-white px-4 py-2 rounded   hover:bg-indigo-600 transition">View</button> 
      </div>
      </div>
    </section>
  )
}

export default Collections