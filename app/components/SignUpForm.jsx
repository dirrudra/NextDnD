import React from 'react'

const SignUpForm = () => {
  return (
    <div>
        <div className="shadow-md rounded p-1">
  <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
  <form>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-200 text-sm font-bold mb-2">Password</label>
      <input type="password" id="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="confirm-password" className="block text-gray-200 text-sm font-bold mb-2">Confirm Password</label>
      <input type="password" id="confirm-password" name="confirm-password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="flex justify-center">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
</div>
  </form>
</div>
    </div>
  )
}

export default SignUpForm