import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Edit() {
    const [values, setValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
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
            <form className='grid grid-rows-4' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="first_name" className='text-red-600 grid columns-2 ' >Post</label>
                    <input id="first_name" name='post' className='grid columns-2' value={values.first_name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name">Last name:</label>
                    <input id="last_name" value={values.last_name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input id="email" value={values.email} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}