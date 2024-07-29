import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithubSquare } from "react-icons/fa";
import { FaLink } from "react-icons/fa";



function Projectcard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width:'21rem'}} onClick={handleShow}>
      <Card.Img  src="https://png.pngtree.com/element_our/20200609/ourmid/pngtree-children-s-software-programming-image_2230761.jpg" width={'100%'} height={'300px'} />
      <Card.Body>
        <Card.Title className='text-center'>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 mt-3">
              <img width={'100%'} src="https://png.pngtree.com/element_our/20200609/ourmid/pngtree-children-s-software-programming-image_2230761.jpg" alt="" />
            </div>
            <div className="col-6 text-center ">
              <h2>Project Title</h2>
              <p style={{'textAlign':'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis distinctio nostrum repudiandae, 
                qui saepe odit fugiat aspernatur eum.</p>
                <p >Technology used : <b>React,Node </b></p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div>
          <button className='btn btn-secondary me-5'>
            <a href=""><FaGithubSquare /></a>
          </button>
          <button  className='btn btn-secondary me-5'>
            <a href=""><FaLink />
            </a>
          </button>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          </div>
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Projectcard