import React from 'react'
import { Link } from 'react-router-dom'
const FirstSidebar = () => {
  return (
      <div className="p-5 mx-5 bg-yellow-100 h-96">
      {/* set h-screen and remove w for layout 1 2 */}
      <h1 className="font-bold pb-5 text-lg">Navigation Here</h1>
      <div className="flex-col space-y-2">
        <div className="text-md">
          <Link to="/"> Free CSS Template</Link>
        </div>
        <div className="text-md">
          <Link to="/about"> Free CSS Layout</Link>
        </div>
      </div>
    </div>
  )
}

export default FirstSidebar
