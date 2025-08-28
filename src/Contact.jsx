import React from 'react'

const Contact = () => {
  return (
    <>
      <section id='contact'>
        <div className="bg-indigo-100 py-20 px-6 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 text-center text-indigo-900">Get in Touch</h2>
          <p className="text-lg mb-6 text-center max-w-xl text-indigo-900">
            We'd love to hear from you! Whether you have questions about our collections, need assistance, or want to share your feedback, feel free to reach out.
          </p>
          <form action="mailto:akanbiadeyemi1@gmail.com" method="POST" encType="text/plain" className="w-full max-w-md bg-white p-6 rounded shadow">
            <label className="block mb-2 font-semibold">
              Name:<br />
              <input type="text" name="name" required className="w-full p-2 border rounded" />
            </label>
            <label className="block mb-2 font-semibold">
              Email:<br />
              <input type="email" name="email" required className="w-full p-2 border rounded" />
            </label>
            <label className="block mb-4 font-semibold">
              Message / Order:<br />
              <textarea name="message" required className="w-full p-2 border rounded" />
            </label>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact