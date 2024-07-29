import React from 'react'
import Projectcard from '../Components/Projectcard'

function Projects() {
  return (
    <div>
      <h2 className='text-center m-5'>All projects</h2>
      <input type="text" placeholder='Search by text' className='form-control mx-auto w-25 mb-5' />

      <div className="row p-5">
      <div className="col">
        <Projectcard/>
      </div>
    </div>

    </div>
    
  )
}

export default Projects