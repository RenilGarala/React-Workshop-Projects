import React from 'react'

const Fetch = () => {
    const data = fetch("https://darshan.ac.in/");
    console.log(data);
  return (
    <div className='text-white'>
      hello
    </div>
  )
}

export default Fetch
