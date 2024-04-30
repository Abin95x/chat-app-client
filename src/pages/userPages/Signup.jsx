import React from 'react'
import {useForm} from 'react-hook-form'
import { userSignup } from '../../apis/userApi' 

export const Signup = () => {
    const {register, handleSubmit, formState: {errors,isSubmitting},getValues} = useForm()
    const onSubmit = async (data) => {
        const res = await userSignup(data)      
    }


  return (
    <>
        <div className='flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  h-screen'>
            <div className='bg-white h-[94%] w-[80%] sm:w-[60%] md:w-[50%] lg:w-[25%] 2xl:w-[25%]  mt-5 rounded-2xl'>
            <div>
                <h3 className='text-center text-2xl font-bold text-white p-5 bg-blue-300 rounded-t-2xl'>SIGNUP</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col p-8'>

                <span className='px-1'>Name</span>
                <input 
                 type="text"
                 placeholder='Enter name'
                 className='bg-slate-200 h-10 p-5 rounded-md'
                 {...register('name',{
                    required: 'Name is required',                 
                 })}
                />
                {errors.name ? (<div className='text-red-500'>{errors.name.message}</div>) : <br /> }

                <span className='px-1'>Email</span>
                <input
                 type="text" 
                 placeholder='Enter email' 
                 className='bg-slate-200 h-10 p-5 rounded-md'
                 {...register('email',{
                    required: 'Email is required',
                    // pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    validate: (value) => {
                        if(!value.includes('@')){
                            return 'Email must include @'
                        }
                        return true
                    }
                 })}
                />
                {errors.email ? (<div className='text-red-500'>{errors.email.message}</div>) : <br /> }
               
                <span className='px-1'>Password</span>
                <input 
                 type="password" 
                 placeholder='Enter password' 
                 className='bg-slate-200 h-10 p-5 rounded-md'
                 {...register('password1',{
                    required: 'Password is required',
                    // pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                    minLength:{
                        value: 8,
                        message: 'Password must have at least 8 charecters'
                    }
                 })}
                />
                {errors.password1 ? (<div className='text-red-500'>{errors.password1.message}</div>) : <br /> }
              
                {/* <br /> */}
                <span className='px-1'>Confirm password</span>
                <input 
                 type="password" 
                 placeholder='Enter password' 
                 className='bg-slate-200 h-10 p-5 rounded-md'
                 {...register('password2',{
                    required: 'Password is required',
                    // pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                    minLength:{
                        value: 8,
                        message: 'Password must have at least 8 charecters'
                    },
                    validate: value => value === getValues('password1') || 'Passwords do not match'
                })}
                />
                {errors.password2 ? (<div className='text-red-500'>{errors.password2.message}</div>) : <br /> }
                

            </div>
            <div className='flex justify-center '>
                <button 
                 type='submit' 
                 className=' w-[35%] h-8 rounded-md bg-slate-600 dark:md:hover:bg-slate-900 text-white'
                 disabled={isSubmitting}
                >
                     {isSubmitting ? 'Loading...' : 'Signup'}
                </button>
            </div>
            </form>
           
            <div className='flex justify-center p-5'>
                <span>or</span>
            </div>

            </div>
        </div>
    </>
  )
}
