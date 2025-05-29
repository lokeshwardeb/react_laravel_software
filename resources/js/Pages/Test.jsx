import React from 'react'
import { Link } from '@inertiajs/react'

function Test(data) {

  console.log(data)

  return (
    // <div>test</div>

    <>

      <div className="m-4">
        <h1 className='font-bold  text-3xl text-center text-blue-500'>Welcome to the Test Page</h1>
      </div>

      <div>Test</div>

     

      <div className="m-4 text-center grid grid-rows-2">
        <Link className='text-blue-500 underline' href='/' >Home</Link>
        <Link className='text-blue-500 underline' href='/laravel_files/public/' >Main Home</Link>
      </div>
      <span className='text-lg mb-4 pb-4'>Data form the backend : </span>
      <h1 className='bold text-black mt-4 text-3xl '>{data.data}</h1>

    </>

  )
}

export default Test