import { LockClosedIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';


const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.password.value);
    
}
const HandleOnChnage = (e) =>{
    e.preventDefault();
    if(e.target.form.password.value != e.target.form.passwordConfirm.value){
        document.getElementById("passwordAlert").hidden = false;
    }else{
        document.getElementById("passwordAlert").hidden = true;
    }
    
}
function Register() {
    
    
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://e7.pngegg.com/pngimages/1016/757/png-clipart-technology-demonstration-computer-software-internet-e-commerce-unitrends-others-miscellaneous-text.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create a New Account
            </h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit} onChange={HandleOnChnage}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
            <div>
                <label htmlFor="Company" className="sr-only">
                  Company Name
                </label>
                <input
                  id="Company"
                  name="Company"
                  
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Company Name"
                />
              </div>
            <div>
                <label htmlFor="name" className="sr-only">
                  classNames
                </label>
                <input
                  id="Name"
                  name="Name"
                  
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="Last-name" className="sr-only">
                  classNames
                </label>
                <input
                  id="LastName"
                  name="LastName"
                  
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="sr-only">
                  classNames
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type= "tel"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Mobile"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="passwordConfirm" className="sr-only">
                  PasswordConfirm
                </label>
                <input
                  id="passwordConfirm"
                  name="passwordConfirm"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Confirm Password"
                  
                  
                />
              </div>
              
                <div id='passwordAlert' 
                hidden={true} 
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400" 
                role="alert"
                >
                    <span className="font-medium">Passwords do not match</span> Please make sure both Password Fields are Exactly the same.
                </div>
            </div>

            <div>
              <button
                type="submit"
                
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>

          </form>
        </div>
      </div>
    );
  }

  export default Register