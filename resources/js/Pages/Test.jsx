import React from 'react'
import { Link } from '@inertiajs/react'

function Test(d) {

  console.log(d)

  return (
    // <div>test</div>

    <>
    <div>Test</div>
    <Link href='/' >Home</Link>
    <h1>{ d.data }</h1>

    </>

  )
}

export default Test