import React, { useEffect, useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom' //localStorage
import { db, storage } from '../firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const AdminGenelgePdf = () => {

  const [genelgebaslık, setGenelgebaslık] = useState("");
  const [genelgeicerik, setGenelgeicerik] = useState("");

  const [postLists, setPostList] = useState([]);

  // -------------------------localStorage - Session START---------------------------------

  const navigate = useNavigate();

  useEffect(() => {
    if (!!!sessionStorage.getItem("isAuthenticated")) {
      navigate('/Admin')
    }
  }, [navigate])

  // -------------------------localStorage - Session END---------------------------------


  useEffect(
    () =>
      onSnapshot(collection(db, `genelgeler/sMCE4U8jwZXatGteSEZT/genelgepdf`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );

  async function genelgekaydet() {

    const docRef = await addDoc(
      collection(db, `genelgeler/sMCE4U8jwZXatGteSEZT/genelgepdf`),
      {
        genelgebaslık: genelgebaslık,
        genelgeicerik: genelgeicerik
      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setGenelgebaslık("");
    setGenelgeicerik("");

  }

  const deletePost = async (id) => {
    const postDoc = doc(db, "genelgeler/sMCE4U8jwZXatGteSEZT/genelgepdf", id)
    await deleteDoc(postDoc)
  }
  return (
    <div style={{ backgroundColor: 'rgb(242,247,251)' }}>
      <Sidebar>
        <br /><br />

        <div style={{ margin: '50px' }}>
          <div className='page-header-card'>

            <div className='row'>
              <div className='col-lg-8'>
                <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

                </h4>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Genelgeler</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> Genelgeler</p>

              </div>
            </div>



            <br /><br />



            <div className='row'>
              <div className='col-lg-12'>
                <div className='card' style={{ padding: '20px' }}>
                  <h3>Genelgeler</h3><br /><br />

                  <label style={{ fontSize: '20px' }}>Genelge PDF Başlık</label> <br />
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Genelge PDF Başlığı giriniz." onChange={(event) => { setGenelgebaslık(event.target.value) }} /> <br />

                  <label style={{ fontSize: '20px' }}>Genelge PDF Link</label> <br />
                  <input id="img" type="file" class="form-control" placeholder=""></input><br />

                  <label style={{ fontSize: '20px' }} id="content">Genelge PDF Link</label> <br />
                  <input type="text" onChange={(event) => { setGenelgeicerik(event.target.value) }} placeholder="Genelge pdf Link Giriniz."></input><br />


                  <br />
                  <div className='d-flex justify-content-end'>
                    <button className='btngiris' onClick={genelgekaydet}>Ekle</button>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <br /><br />

          <div className='row'>
            <div className='col-lg-12'>

              <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
                <h5>Genelgeler</h5> <br />
                <div className='row'>
                  <div className='col-lg-6'>

                    Show <select name="dom-jqry_length" aria-controls="dom-jqry" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries
                  </div>

                  <div className='col-lg-6 d-flex justify-content-end'>
                    <p style={{ margin: '5px' }}>Search:</p>
                    <input type="search" class="" placeholder="" aria-controls="dom-jqry"></input>
                  </div>
                </div>
                <div className='table-responsive'>
                  <table class="table">
                    <thead>
                      <tr>

                        <th scope="col">Genelge Başlık</th>
                        <th scope="col">Genelge İçerik</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>

                    {postLists &&
                          postLists.length > 0 &&
                          postLists.map((doc) => (

                            <tr key={doc.id}>

                              <td>{doc.genelgebaslık}</td>
                              <td>{doc.genelgeicerik}</td>
                            

                              <td><RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /></td>
                            </tr>

                          ))}
                      
                     



                    </tbody>
                  </table>
                </div>

                <div className='row'>
                  <div className='col-lg-6'>
                    <p>Showing 1 to 1 of 1 entries</p>
                  </div>

                  <div className='col-lg-6 d-flex justify-content-end'>
                    <p style={{ margin: '5px' }}>Previous</p>
                    <button style={{ margin: '5px' }}>1</button>
                    <p style={{ margin: '5px' }}>Next</p>

                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>
      </Sidebar>


      {/* <div class="container-fluid ">
    <div class="row flex-nowrap ">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={Logo} alt='' style={{backgroundColor:'white !important'}} className='sidebarlogo'></img>
                <br/><br/> <br/>
                </NavLink>
                <ul  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                   
                <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/anasayfa" class="nav-link px-0 align-middle">
                           <FaHome style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Anasayfa</span></NavLink>
                    </li>

                    <br/>

                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/slaytekle" class="nav-link px-0 align-middle">
                          <FaRegImages style={{color:'white'}}/>   <span class="ms-1 d-none d-sm-inline">Slaytlar</span></NavLink>
                    </li>

              <br/>

                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/hakkımızdaekle" class="nav-link px-0 align-middle">
                           <FaRegIdCard style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Hakkımızda</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/genelgeekle" class="nav-link px-0 align-middle">
                         <FaRegNewspaper style={{color:'white'}}/>   <span class="ms-1 d-none d-sm-inline">Genelgeler</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/haberekle" class="nav-link px-0 align-middle">
                        <FaRegNewspaper style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Haberler</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/duyuruekle" class="nav-link px-0 align-middle">
                         <BsMegaphoneFill style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Duyurular</span></NavLink>
                    </li>

                    <br/>
                    
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/destekekle" class="nav-link px-0 align-middle">
                          <CgMailOpen style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Destekler</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/odaekle" class="nav-link px-0 align-middle">
                            <HiUser style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Odalar</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/personelekle" class="nav-link px-0 align-middle">
                        <HiUser style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Personeller</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/iletisimekle" class="nav-link px-0 align-middle">
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
           &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Genelgeler</span>
            </div>
            
            <div className='col-lg-4 d-flex justify-content-end'>  
           <FiHome style={{color:'#182446',marginTop:'4px'}}/>&nbsp;
           <p>/</p> &nbsp;
           <p> Genelgeler</p>
           
            </div>
            </div>
            
            
            </div>
            <br/><br/>


            <div className='container'>
            <div className='row'>
        <div className='col-lg-12'>
            <div className='card' style={{padding:'20px'}}>
                <h3>Genelgeler</h3><br/><br/>

        <label style={{fontSize:'20px'}}>Genelge PDF Başlık</label> <br/>
        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Genelge PDF Başlığı giriniz."/> <br/>

        <label style={{fontSize:'20px'}}>Genelge PDF Link</label> <br/>
        <input id="img" type="file" class="form-control" placeholder=""></input><br/>

        
        <br/>
                    <div className='d-flex justify-content-end'>
                    <button className='btngiris' role={'button'}>Ekle</button> 
                    </div>

            </div>
        </div>
       </div>
        </div>
        </div>
        <br/><br/>
        <div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
        
        <div className='card' style={{backgroundColor:'white', padding:'20px'}}>
        <h5>Genelgeler</h5> <br/>
<div className='row'>
       <div className='col-lg-6'>
        
    Show <select name="dom-jqry_length" aria-controls="dom-jqry" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries
        </div> 
 
        <div className='col-lg-6 d-flex justify-content-end'>
           <p style={{margin:'5px'}}>Search:</p>
           <input type="search" class="" placeholder="" aria-controls="dom-jqry"></input>
        </div>
        </div>
        <div className='table-responsive'>
        <table class="table">
  <thead>
    <tr>
     
      <th scope="col">Genelge Başlık</th>
      <th scope="col">Genelge İçerik</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">22/25 SAYILI Genelge</th>
      <td>https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/genelgele</td>
      <td><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/></td>
    </tr>

    <tr>
      <th scope="row">22/25 SAYILI Genelge</th>
      <td>https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/genelgele</td>
      <td><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/></td>
    </tr>

    <tr>
      <th scope="row">22/25 SAYILI Genelge</th>
      <td>https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/genelgele</td>
      <td><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/></td>
    </tr>

    <tr>
      <th scope="row">22/25 SAYILI Genelge</th>
      <td>https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/genelgele</td>
      <td><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/></td>
    </tr>

    <tr>
      <th scope="row">22/25 SAYILI Genelge</th>
      <td>https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/genelgele</td>
      <td><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/></td>
    </tr>

    <tr>
      <th scope="row">22/25 SAYILI Genelge</th>
      <td>https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/genelgele</td>
      <td><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/></td>
    </tr>
    
    
   
  </tbody>
  </table>
</div>

           <div className='row'>
        <div className='col-lg-6'>
          <p>Showing 1 to 1 of 1 entries</p>
        </div>
         
         <div className='col-lg-6 d-flex justify-content-end'>
            <p style={{margin:'5px'}}>Previous</p> 
            <button style={{margin:'5px'}}>1</button>
             <p style={{margin:'5px'}}>Next</p>

         </div>
         </div>
        </div>
        
        <br/>
    </div>
  
    </div>
    
        </div>
            </div>

    
            </div>
            </div> */}
    </div>
  )
}

export default AdminGenelgePdf
