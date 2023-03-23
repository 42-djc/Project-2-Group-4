import React from "react";

const Form = () => {
  return (
<div className="static"> 
 <div className="static mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8" id="form">
   <div className="mx-auto max-w-lg text-center">
     <h1 className="text-2xl font-bold sm:text-3xl">Contact Us!</h1>
   </div>
 
   <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
     <div>
       <label for="email" className="sr-only">Email</label>
 
       <div className="relative">
         <input
           type="email"
           className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
           placeholder="Enter email"
         />
 
         <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-4 w-4 text-gray-400"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
             />
           </svg>
         </span>
       </div>
     </div>
 
     <div>
       <label for="input" className="sr-only">Message</label>
 
       <div className="relative">
         <input
           type="input"
           className="h-3rem w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
           placeholder="Enter Message"
         />
       </div>
     </div>
 
     <div className="flex items-center justify-center">

       <button
         type="submit"
         className="signin inline-block rounded-lg px-5 py-3 text-sm font-medium text-white"
       >
         Submit
       </button>
     </div>
   </form>
 </div>
 </div>
  );
};




export default Form;

