import { useState } from 'react'
import { router, Link } from '@inertiajs/react'

export default function Home(data) {
    const [values, setValues] = useState({
        post_name: "",

    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/users', values)
    }

    return (
        <>

            <div className="m-4">
                <h1 className='bold font-extrabold text-3xl text-center text-blue-500'>Welcome to the home</h1>
            </div>

            {data.msg && <div className="msg bg-green-300 text-green-600 ">{data.msg}</div>}


            <div className="m-4 text-center grid grid-rows-2">
                <Link className='text-blue-500 underline' href='/' >Home</Link>
                <Link className='text-blue-500 underline' href='/test' >Test</Link>
                <Link className='text-blue-500 underline' href='/laravel_files/public/test' >Main Test</Link>
            </div>

            <form className='grid grid-rows-4 justify-center' onSubmit={handleSubmit}>
                <div className="mb-3 grid grid-rows-4">
                    <label htmlFor="first_name" className='text-red-600  ' >Post</label>
                    <input id="post_name" className='grid border border-gray-400 h-14 w-[50vw] p-2 rounded-xl  ' value={values.post_name} onChange={handleChange} />
                </div>

                <div>
                    <button className='bg-blue-600 text-white p-3 hover:bg-black rounded-xl' name='create_post' type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}