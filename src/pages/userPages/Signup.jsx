import React from 'react'


export const Signup = () => {


  return (
    <>
        <div className='flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-screen'>
            <div className='bg-white h-[94%] w-[80%] sm:w-[60%] md:w-[50%] lg:w-[25%] 2xl:w-[25%]  mt-5 rounded-2xl'>
            <div>
                <h3 className='text-center text-2xl font-bold text-white p-5 bg-blue-300 rounded-t-2xl'>SIGNUP</h3>
            </div>
            <form action="">
                
            </form>
            <div className='flex flex-col p-8'>

                <span className='px-1'>Name</span>
                <input 
                 type="text"
                 placeholder='Enter name'
                 className='bg-slate-200 h-10 p-5 rounded-md'
                />

                <br />
                <span className='px-1'>Email</span>
                <input
                 type="text" 
                 placeholder='Enter emai' 
                 className='bg-slate-200 h-10 p-5 rounded-md'
                />
               
                <br />
                <span className='px-1'>Password</span>
                <input 
                 type="text" 
                 placeholder='Enter password' 
                 className='bg-slate-200 h-10 p-5 rounded-md'
                />
              
                <br />
                <span className='px-1'>Password</span>
                <input 
                 type="text" 
                 placeholder='Enter password' 
                 className='bg-slate-200 h-10 p-5 rounded-md'
                 />
            </div>

            <div className='flex justify-center '>
                <button 
                 type='button' 
                 className=' w-[35%] h-8 rounded-md bg-slate-600 dark:md:hover:bg-slate-900 text-white'>
                     Login 
                </button>
            </div>
            <div className='flex justify-center p-5'>
                <span>or</span>
            </div>

            </div>
        </div>
    </>
  )
}
