import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GiLaptop } from "react-icons/gi";
import { SiInternetcomputer } from "react-icons/si";



function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light fs-2 ms-2  '>
          {/* <GiLaptop className='text-white mx-2' fontSize={'50px'}/> */}
          <SiInternetcomputer className='mx-2' fontSize={'50px'} style={{color:'#03fff7'}} />
          {/* '#03fff7' */}
          <span style={{color:'#baa65b'}}>PROJECT</span>-
           <span style={{color:'#355e87'}}>FAIR</span>

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header