import React from 'react'
import Swal from 'sweetalert2'


function Profile() {
  const updated=()=>{
    Swal.fire({
      title: 'success',
      text: 'details updated',
      icon: 'success',
      confirmButtonText: 'back'
    })
  }
  
  
  return (
    <div>
    <div className='text-center p-5'>
      <h3>my profile</h3>
        <label>
          <input type="file"  style={{display:'none'}} />
          <img src="https://cdn-icons-png.flaticon.com/512/4018/4018596.png" width={'200px'} className='mb-4'   alt="" />
        </label>
        <div className='mx-5 px-5 '>
    <input type="text" placeholder='username' className='form-control mb-2' />
    <input type="text" placeholder='Github' className='form-control mb-2'/>
    <input type="text" placeholder='LIvelink' className='form-control mb-2'/>
    <button className='btn btn-dark m-4' onClick={updated}>update</button>
    </div>
    </div>
    
    </div>
  )
}

export default Profile