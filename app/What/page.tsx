import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-red-50 flex items-center justify-middle w-full h-96'>
        <h1>
            What I'm Good At
        </h1>
<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    className="h-56 w-full object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">Web Development</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Mern
    </p>
  </div>
</article>

    </div>
    </>

    )
}

export default page