import React from 'react'

function Contact() {
  return (
    <div className="flex h-screen items-center justify-center">
        <form action="">
        <div className='mt-4 space-y-3'>
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <label htmlFor="name">Name:</label> <br />
        <input type="text" id="name" autocomplete="true" placeholder="Type name" className="input input-bordered input-sm w-full max-w-xs" />
         {/* md */} 
         <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" autocomplete="true" placeholder="Type email" className="input input-bordered input-sm w-full max-w-xs" />
         {/* md */}
       <label className="form-control">
       <div className="label">
    <span className="label-text">Your Comment:</span>
  </div>
  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
</label>
 <button type="submit" className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-200'>Login</button>

   </div>
        </form>
    </div>
  )
}

export default Contact;
