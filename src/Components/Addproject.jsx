import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Addproject() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div>
      <div>
        <button className='btn btn-light text-dark' onClick={handleShow}>Add</button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-6">
              <label>
                <input type="file" style={{display:'none'}} />
              <img src="https://w7.pngwing.com/pngs/865/812/png-transparent-programmer-it-it-workers-computer-thumbnail.png" className='img-fluid p-5' alt="" />
            </label>
              </div>
              <div className="col-6 p-5 text-center">
                <input type="text" placeholder='Project title' className='form-control mb-2' />
                <input type="text" placeholder='Language used' className='form-control mb-2'/>
                <input type="text" placeholder='Github link' className='form-control mb-2' />
                <input type="text" placeholder='Live link' className='form-control mb-2' />
                <input type="text" placeholder='Overview' className='form-control mb-2' />
               
              </div>
            </div>
            
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between '>
        <button className='btn btn-light'>Add</button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  )
}

export default Addproject