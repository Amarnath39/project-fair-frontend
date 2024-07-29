import React from 'react'
import programmer from '../assets/programmer.webp'
import Projectcard from '../Components/Projectcard'


function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <h1 className='text-center mt-5 mb-3'>PROJECT-FAIR</h1>
          <p style={{textAlign:'justify'}} className='mx-5 mt-5'>
            Project management is a process that allows project managers to plan, execute, track and
             complete projects with the help of a project team. To do so, they must use project management 
             principles, skills, methodologies and tools to lead team members through each of the project 
             management steps which are known as the project lifecycle. In this guide, we’ll cover the basic 
             concepts you need to know to understand what project management is, the stages of the project management
              process, different types of project management approaches and the tools you can use for managing projects.
              Project management as we know it today began taking shape roughly in the 1950s when foundational tools and techniques 
              of project management such as the critical path method (CPM), work breakdown structure (WBS) and the program evaluation and review technique (PERT) were created.
          </p>
          <div className='text-center'>
          <a href="/login" className='btn btn-dark m-5 '>GET STARTED</a>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={programmer} alt="" width={'100%'}  />
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{height:'500px'}}>
          <h1 className='text-center m-5'>EXPLORE OUR PROJECT</h1>
          <marquee width="100%" direction="left" >        
            <div>
              <Projectcard/>
            </div>  
          </marquee>
        </div>
      </div>
      <div className="row mx-5 mb-5">
          <h1 className='text-center m-5'>Our services</h1>
          <div className="col-lg-4 ">
            <div className=' card card-shadow p-5 ' style={{ height:'550px'}}>
            <h3 className='text-center m-2'>Web designing</h3>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore quaerat, atque libero soluta harum recusandae amet,
             tempore tenetur nostrum, accusamus repellat sapiente quae aliquam aspernatur praesentium magnam! Similique, vero?
          Tempora nihil quos placeat nemo harum et voluptatem recusandae, corporis in veniam, ducimus adipisci non omnis neque nesciunt minus,
           repellendus voluptate nisi cum aliquam itaque numquam molestias reiciendis. Error, doloremque.</p>
        </div>
        </div>
        <div className="col-lg-4">
        <div className=' card card-shadow p-5 ' style={{height:'550px'}}>
            <h3 className='text-center m-2'>Singlepage application</h3>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore quaerat, atque libero soluta harum recusandae amet,
             tempore tenetur nostrum, accusamus repellat sapiente quae aliquam aspernatur praesentium magnam! Similique, vero?
          Tempora nihil quos placeat nemo harum et voluptatem recusandae, corporis in veniam, ducimus adipisci non omnis neque nesciunt minus,
           repellendus voluptate nisi cum aliquam itaque nisi</p>
        </div>
          
        </div>
        <div className="col-lg-4">

        <div className=' card card-shadow p-5' style={{ height:'550px'}}>
            <h3 className='text-center m-2'>Backend services</h3>
          <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore quaerat, atque libero soluta harum recusandae amet,
             tempore tenetur nostrum, accusamus repellat sapiente quae aliquam aspernatur praesentium magnam! Similique, vero?
          Tempora nihil quos placeat nemo harum et voluptatem recusandae, corporis in veniam, ducimus adipisci non omnis neque nesciunt minus,
           repellendus voluptate nisi cum aliquam itaque numquam molestias reiciendis. Error, doloremque.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home