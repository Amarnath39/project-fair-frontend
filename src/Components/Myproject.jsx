import React from 'react'
import Addproject from '../Components/Addproject'
import { FaGithub } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";



function Myproject() {
  return (
    <div>
      <div className='d-flex justify-content-between p-3'>
        <h3 className='mx-auto'>Myprojects</h3>
        <Addproject/>
      </div>
      <div>
        <div className="row shadow m-4 border p-4">
          <div className="col-6">
            <h4 className='p-2'>project title</h4>
          </div>
          <div className="col-6 d-flex justify-content-evenly">
            <button className='btn '><FaGithub /></button>
            <button className='btn '><FaEdit /> </button>
            <button className='btn '><RiDeleteBinLine /></button>
          </div>
        </div>
      </div>
    </div>
    
    

  )
}

export default Myproject