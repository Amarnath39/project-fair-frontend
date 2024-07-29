import React from 'react'
import Profile from '../Components/Profile'
import Myproject from '../Components/Myproject'
function Dashboard() {
  return (
    <div>
      <div className="row">
        <h2 className='text-center m-3'>Welcome <span className='text-light'>user</span></h2>
        <div className="col-lg-6">
          <Myproject/>
        </div>
        <div className="col-lg-6">
          <Profile/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard