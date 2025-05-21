import React from 'react'

const feature = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".8" className='w-full h-screen mt-10  '>
      <div className='bottom-b-2 border-zinc-300 '>
        <h1 className='text-7xl px-10'>Featured projects</h1>
      </div>

      <div className='mt-10 p-20 flex gap-10'>
        <div className='hover:shadow-lg shadow-cyan-500/50  rounded-3xl w-1/2 h-[75vh] bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'></div>
        <div className='hover:shadow-lg shadow-cyan-500/50  rounded-3xl w-1/2 h-[75vh] bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1714696217563-7e89bb7bf631?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'></div>
      </div>

    </div>
  )
}

export default feature
