import React, { useState } from 'react';
import logo from './bvslogo.png';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Contact = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", msg: "" })
    // let history = useHistory();

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, msg } = credentials;
        
        const response = await fetch("http://localhost:5000/api/cont/createuser", {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'

            },

            body: JSON.stringify({ name, email, msg })
        });

        const json = await response.json()
        console.log(json);

        localStorage.setItem('token', json.authtoken);
        // history.push("/");

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (

        <div>
            <div>
                <div className='antialiased'>
                    <div className="flex m-5 p-3 lg:mx-24 lg:my-20 bg-gray-100 rounded-lg shadow-lg">
                        <div className='p-2 lg:flex lg:flex-row rounded-xl text-black'>
                            <div className='flex lg:pr-3 space-y-8 justify-between'>
                                <div className='text-center'>
                                    <h1 className='font-bold text-4xl tracking-wide'>Contact Me!</h1>
                                    <div>
                                        <img className='h-32 lg:h-40 rounded-full my-5 m-auto' src={logo} alt="" />
                                    </div>
                                    <h2 className='text-center text-xl lg:text-2xl font-medium leading-tight mb-3'>Feel free to ask me anything!</h2>
                                    <p className="text-md lg:text-md leading-tight m-5 lg:m-0">
                                        Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. I appreciate your time and try hard to reply to every single message posted here! Keep dropping your priceless opinions.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className='z-10 bg-white rounded-xl shadow-lg p-8 text-gray-500 lg:w-[80vh] mt-2 lg:m-3'>

                                    <form onSubmit={handleSubmit} action="http://localhost:5000/api/cont/createuser" method='POST' >
                                        <div>
                                            {/* <label htmlFor="name" className='text-sm'>Your Full Name:</label> */}

                                            <input type="text"
                                                placeholder='Your Name'
                                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-blue-500 mt-2'
                                                id='name'
                                                onChange={onChange}
                                                name='name'
                                            />
                                        </div>

                                        <div>
                                            {/* <label htmlFor="email" className='text-sm'>Your Email Address:</label> */}

                                            <input type="email"
                                                placeholder='Your Email Address'
                                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-blue-500 mt-2'
                                                id='email'
                                                onChange={onChange}
                                                name='email'
                                            />
                                        </div>

                                        <div>
                                            {/* <label htmlFor="exampleInputmsg" className='text-sm'>Message:</label> */}

                                            <textarea
                                                placeholder='Message'
                                                rows={6}
                                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-blue-500 mt-2'
                                                id='msg'
                                                onChange={onChange}
                                                name='msg'
                                            />
                                        </div>

                                        <button className='inline-block self-end bg-blue-800 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm mt-2' >Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact