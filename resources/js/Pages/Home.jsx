import { useState } from 'react'
import { router, Link, useForm, usePage } from '@inertiajs/react'

export default function Home(data_info) {
    // import { useForm } from '@inertiajs/react'

    // const { data, setData, post, processing, errors } = useForm({
    //   email: '',
    //   password: '',
    //   remember: false,
    // })


    const { data, setData, post, processing, errors } = useForm({
        post_name: '',
    })

    const { props } = usePage();
    const flashMsg = props.flash?.msg;


    function submit(e) {
        e.preventDefault();
        // post('/users');
        post('/laravel_files/public/users');
    }

    // function submit(e) {
    //   e.preventDefault()
    //   post('/login')
    // }


    // return (
    //   <form onSubmit={submit}>
    //     <input type='text' value={data.post_name} onChange={e => setData('post_name', e.target.value)} />
    //     {errors.post_name && <div>{errors.post_name}</div>}

    //     <button type="submit" disabled={processing} >Submit</button>

    //     {/* <button type="submit" disabled={processing}>Login</button> */}
    //   </form>
    // )

    return (
        <>

            <div className="m-4">
                <h1 className='bold font-extrabold text-3xl text-center text-blue-500'>Welcome to the home</h1>


          


                {/* <div className="msg bg-green-200 p-4 text-center m-4 text-green-800 ">{flashMsg}</div> */}
            </div>

            {/* {data_info.msg && data_info.msg != undefined && (<div className="msg bg-green-200 p-4 text-center m-4 text-green-600 ">{data_info.msg}</div>)} */}


            {/* {flashMsg && (
                <div className="bg-green-200 text-green-800 p-2 m-2 rounded">
                    {flashMsg}
                </div>
            )} */}

            
                      {flashMsg && (
                        <div className="p-4">
                            <div className="bg-green-200 text-center text-green-800 p-4 m-4 rounded">
                        {flashMsg}
                    </div>
                        </div>
                    
                )}
            

            <div className="m-4 text-center grid grid-rows-2">
                <Link className='text-blue-500 underline' href='/' >Home</Link>
                <Link className='text-blue-500 underline' href='/test' >Test</Link>
                <Link className='text-blue-500 underline' href='/laravel_files/public/test' >Main Test</Link>
            </div>

            <form className='grid grid-rows-4 justify-center' onSubmit={submit}>

                {data.msg && <div>success</div>}

                <div className="mb-3 grid grid-rows-4">
                    <label htmlFor="post_name" className='text-red-600  ' >Post</label>
                    <input id="post_name" className='grid border border-gray-400 h-14 w-[50vw] p-2 rounded-xl  ' value={data.post_name} onChange={e => setData('post_name', e.target.value)} />

                    {errors.post_name && <div className='bg-red-200 text-red-600 p-4 m-2'> {errors.post_name} </div>}


                </div>

                <div>
                    <button className='bg-blue-600 text-white p-3 hover:bg-black rounded-xl' type="submit" disabled={processing} >Submit</button>
                </div>
            </form>
        </>
    )
}