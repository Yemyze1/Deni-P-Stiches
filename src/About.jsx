import React, {useState} from 'react'


function About() {
const [showMore, setShowMore] = useState(false);
return (
    <>
    <section id='about'>
    <div className="max-w-xl mx-auto my-10 p-8 rounded-xl shadow-lg bg-gradient-to-br from-blue-100 to-white">
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center  hover:text-indigo-300 cursor-pointer ">About Deni-P Stiches</h2>
        <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Deni-P Stiches is a fashion designing company that was established since 2019.
            With over 5 years of sewing experience, our clothling line company has stood among tall among its peers.</p>
        {showMore && (
            <p className="text-gray-700 text-base leading-relaxed mb-4"> Deni-P Stiches has shown that design can be exquisite. With numerous
            aesthetic designs & styles it has brought into the fashion industry, our unique way of combining art with simplicity makes our garments unique.
    We are Skilled in various sets from traditional and modern-day wears to Ankara and Corporate wears, her works know no limits. </p>
        )}
        <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition duration-200"
        >
            {showMore ? 'Read less' : 'Read more'}
        </button>
    </div>
    </section>
    </>
)
}

export default About