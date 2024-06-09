import React from 'react'

const Steps = [{
    step:"Step 01",
    process:"First SignUp",
    title:"Sign Up",
    img:""
}]

const Author = () => {
  return (
   <div className='text-center'>
    <h2 className='font-semibold text-[64px] text-white'>For Authors</h2>
    <p className='text-gray-500 w-[800px] mx-auto'>We ae open for <span className='text-[#FFA500]'>Authors</span> to share our amazing platform with,let your platform shine with us and help you achieve your <span className='text-[#FFA500]'>success in Chotkari</span></p>
   </div>
  )
}

export default Author