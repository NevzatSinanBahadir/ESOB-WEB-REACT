import React, { useState,useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import { CiUser } from 'react-icons/ci'
import { FaRegNewspaper } from 'react-icons/fa'
import { FaBullhorn } from 'react-icons/fa'
import Sidebar from './Sidebar'
import HeaderBar from './HeaderBar'
import { useNavigate } from 'react-router-dom' //localStorage
import { NavLink } from 'react-router-dom'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const AdminAnasayfa = () => {

  // -------------------------localStorage - Session START---------------------------------

  const navigate = useNavigate();


  useEffect(() => {
    if (!!!sessionStorage.getItem("isAuthenticated")) {
      navigate('/giris')
    }
  }, [navigate])




  // -------------------------localStorage - Session END---------------------------------

  return (
    <div style={{ backgroundColor: 'rgb(242,247,251)' , height:'100%'}} >
     

        <br /><br />

        <div style={{ margin: '50px' }}>
          <div className='page-header-card' >

            <div className='row'>

              <div className='col-lg-8'>
                <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

                </h4>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Anasayfa</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> Anasayfa</p>


              </div>
            </div>
          </div>

          <br /><br />


          <div className='row'>
            <div className='col-lg-4'>
              <div class="card anasayfa">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h5 class="card-title"><CiUser style={{ fontSize: '40px' }} /></h5>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-end'>
                      <h5 class="card-title" style={{ fontSize: '40px', color: 'rgb(89,161,255)' }}> 125</h5>
                    </div>

                    <p>Personel</p>
                  </div>


                  <p class="card-text"><div class="progress">
                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '45%', backgroundColor: 'rgb(64,153,255)' }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></p>

                </div>

              </div>

            </div>


            <div className='col-lg-4'>
              <div class="card anasayfa">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h5 class="card-title"><FaRegNewspaper style={{ fontSize: '40px' }} /></h5>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-end'>
                      <h5 class="card-title" style={{ fontSize: '40px', color: 'rgb(255,83,112)' }}> 250</h5>
                    </div>

                    <p>Haberler</p>
                  </div>



                  <p class="card-text"><div class="progress">
                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '75%', backgroundColor: 'rgb(255,83,112)' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></p>

                </div>
              </div>

            </div>

            <div className='col-lg-4'>
              <div class="card anasayfa">
                <div class="card-body">
                  <div className='row'>
                    <div className='col-lg-6'>
                      <h5 class="card-title"><FaBullhorn style={{ fontSize: '40px' }} /></h5>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-end'>
                      <h5 class="card-title" style={{ fontSize: '40px', color: 'rgb(86,226,229)' }}> 122</h5>
                    </div>

                    <p>Duyurular</p>
                  </div>

                  <p class="card-text"><div class="progress">
                    <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '35%', backgroundColor: 'rgb(46,216,182)' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                  </div></p>

                </div>
              </div>

            </div>




          </div>
        </div>
     





      {/* <div class="container-fluid ">
    <div class="row flex-nowrap ">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={Logo} alt='' style={{backgroundColor:'white !important'}} className='sidebarlogo'></img>
                <br/><br/> <br/>
                </NavLink>
                <ul  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                   
                <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/anasayfa" class="nav-link px-0 align-middle sidebarhover">
                           <FaHome style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Anasayfa</span></NavLink>
                    </li>

                    <br/>

                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/slaytekle" class="nav-link px-0 align-middle sidebarhover">
                          <FaRegImages style={{color:'white'}}/>   <span class="ms-1 d-none d-sm-inline">Slaytlar</span></NavLink>
                    </li>

              <br/>

                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/hakkımızdaekle" class="nav-link px-0 align-middle sidebarrhover">
                           <FaRegIdCard style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Hakkımızda</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/genelgeekle" class="nav-link px-0 align-middle sidebarrhover">
                         <FaRegNewspaper style={{color:'white'}}/>   <span class="ms-1 d-none d-sm-inline">Genelgeler</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/haberekle" class="nav-link px-0 align-middle sidebarhover">
                        <FaRegNewspaper style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Haberler</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/duyuruekle" class="nav-link px-0 align-middle sidebarhover">
                         <BsMegaphoneFill style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Duyurular</span></NavLink>
                    </li>

                    <br/>
                    
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/destekekle" class="nav-link px-0 align-middle sidebarhover">
                          <CgMailOpen style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Destekler</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/odaekle" class="nav-link px-0 align-middle sidebarhover">
                            <HiUser style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Odalar</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/personelekle" class="nav-link px-0 align-middle sidebarhover">
                        <HiUser style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Personeller</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/iletisimekle" class="nav-link px-0 align-middle sidebarhover">
                          <ImAddressBook style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">İletişim</span></NavLink>
                    </li>
                       
                   
                </ul>
                <hr/>
               
            </div>
        </div>
        <div class="col py-3">

        <div className='page-header-card'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-8'>
                <h4> <FiHome style={{fontSize:'40px',backgroundColor:'rgb(64,153,255)',color:'white',padding:'5px'}}/> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

           </h4>
           &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Anasayfa</span>
            </div>
            
            <div className='col-lg-4 d-flex justify-content-end'>  
           <FiHome style={{color:'#182446',marginTop:'4px'}}/>&nbsp;
           <p>/</p> &nbsp;
           <p> Anasayfa</p>
            </div>
            </div>
            
            </div>
        </div>
        <br/><br/>

    <div className='container'>
    <div className='row'>
    <div className='col-lg-4'>
    <div class="card">
      <div class="card-body">
        <div className='row'>
        <div className='col-lg-6'>
        <h5 class="card-title"><CiUser style={{fontSize:'40px'}}/></h5>
        </div>
        <div className='col-lg-6 d-flex justify-content-end'>
        <h5 class="card-title" style={{fontSize:'40px',color:'rgb(89,161,255)'}}> 125</h5>
        </div>

        <p>Personel</p>
        </div>
        

        <p class="card-text"><div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'45%',backgroundColor:'rgb(64,153,255)'}} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
</div></p>
        
      </div>
      
    </div>
    
</div>


<div className='col-lg-4'>
    <div class="card">
      <div class="card-body">
      <div className='row'>
        <div className='col-lg-6'>
        <h5 class="card-title"><FaRegNewspaper style={{fontSize:'40px'}}/></h5>
        </div>
        <div className='col-lg-6 d-flex justify-content-end'>
        <h5 class="card-title" style={{fontSize:'40px',color:'rgb(255,83,112)'}}> 250</h5>
        </div>

        <p>Haberler</p>
        </div>
        
        
        
        <p class="card-text"><div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'75%',backgroundColor:'rgb(255,83,112)'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div></p>
        
      </div>
    </div>
    
</div>

<div className='col-lg-4'>
    <div class="card">
      <div class="card-body">
      <div className='row'>
        <div className='col-lg-6'>
        <h5 class="card-title"><FaBullhorn style={{fontSize:'40px'}}/></h5>
        </div>
        <div className='col-lg-6 d-flex justify-content-end'>
        <h5 class="card-title" style={{fontSize:'40px',color:'rgb(86,226,229)'}}> 122</h5>
        </div>

        <p>Duyurular</p>
        </div>
        
        <p class="card-text"><div class="progress">
  <div class="progress-bar" role="progressbar" aria-label="Basic example" style={{width:'35%',backgroundColor:'rgb(46,216,182)'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
</div></p>
       
      </div>
    </div>
    
</div>
        </div>
        
        </div> 



        </div>
        
        </div>
    </div> */}
    </div>






  )
}

export default AdminAnasayfa
