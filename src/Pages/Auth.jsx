import React from 'react'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <img src="https://ouch-cdn2.icons8.com/YFz-whOp5v5BK4J3wTEMgxD5joiJsBJs71GR6ZCA54Y/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTQx/Lzc5OGM3OWRjLTM5/NjAtNDcwMC1iZmMy/LTY3NTY2YTE4NjU4/MC5wbmc.png" alt="" className='p-5' width={'100%'}/>
        </div>
        <div className="col-lg-6 ">
          <form className='shadow bg-black m-5'>
            <h2 className='text-center '>Project Fair</h2>
            <h4 className='text-center m-5' style={{color:'#bee6d2'}}>
              
                { 
                  register? 'Register here...': 'login here..'
                }
            </h4>
            <div className='p-5'>
            {
              register &&
              <input type="text" placeholder='username' className='form-control mb-2'/>
            }
            <input type="email" placeholder='email' className='form-control mb-2' />
            <input type="password" placeholder='password' className='form-control mb-2'/>
          </div>

          <div>
            {
              register?
              <div className='text-center '>
                <button className='btn btn-secondary mb-5 btn-outline-dark'>register</button>
                <p>already registered? <Link to={'/login'} className='text-decoration-none'>login here...</Link>

                </p>
            
              </div>
              :
              <div className='text-center'>
              <button className='btn btn-secondary mb-5 btn-outline-dark'>login</button>
              <p>New to here? <Link to={'/register'} className='text-decoration-none'>Register here...</Link></p>
              </div>
            }
          </div>

          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Auth