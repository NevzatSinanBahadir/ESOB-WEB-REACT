import React, { useState, useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'
import { BsEyeFill } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import Sidebar from './Sidebar'
import { db } from '../firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom' //localStorage

const Adminİletisim = () => {






  const [adres, setAdres] = useState("");
  const [mail, setMail] = useState("");
  const [telno, setTelno] = useState("");
  const [facebook, setFacebook] = useState("");
  const [ınstagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
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
      onSnapshot(collection(db, `iletisim`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );







  async function iletisimkaydet() {

    const docRef = await addDoc(
      collection(db, `iletisim`),
      {
        adres: adres,
        mail: mail,
        telno: telno,
        facebook: facebook,
        ınstagram: ınstagram,
        twitter: twitter
      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setAdres("");
    setMail("");
    setTelno("");
    setFacebook("");
    setInstagram("");
    setTwitter("");
  }





  const deletePost = async (id) => {
    const postDoc = doc(db, "iletisim", id)
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
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>İletişim</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> İletişim</p>
              </div>
            </div>


          </div>
          <br /><br />


          <div className='row'>
            <div className='col-lg-12'>
              <div className='card'>

                <div style={{ margin: '30px' }}>
                  <h3>İletişim</h3><br />

                  <label style={{ fontSize: '20px' }}>Adres</label><br /><br />
                  <input type="text" class="form-control" placeholder="Adres giriniz." onChange={(event) => { setAdres(event.target.value) }}></input><br />

                  <label style={{ fontSize: '20px' }}>E-mail</label><br /><br />
                  <input type="mail" class="form-control" placeholder="Email giriniz." onChange={(event) => { setMail(event.target.value) }}></input><br />

                  <label style={{ fontSize: '20px' }}>Telefon Numarası</label><br /><br />
                  <input type="text" class="form-control" placeholder="Telefon numarası giriniz." onChange={(event) => { setTelno(event.target.value) }}></input><br />

                  <label style={{ fontSize: '20px' }}>Facebook URL</label><br /><br />
                  <input type="text" class="form-control" placeholder="Facebook url giriniz." onChange={(event) => { setFacebook(event.target.value) }}></input><br />

                  <label style={{ fontSize: '20px' }}>İnstagram URL</label><br /><br />
                  <input type="text" class="form-control" placeholder="Instagram url giriniz." onChange={(event) => { setInstagram(event.target.value) }}></input><br />

                  <label style={{ fontSize: '20px' }}>Twitter URL</label><br /><br />
                  <input type="text" class="form-control" placeholder="Twitter url giriniz." onChange={(event) => { setTwitter(event.target.value) }}></input><br />


                  <div className='d-flex justify-content-end'>
                    <button className='btngiris' onClick={iletisimkaydet}>Ekle</button>
                  </div>

                </div>

              </div>
            </div>

          </div>



          <div className='row'>
            <div className='col-lg-12'>
              <br /> <br />

              <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
                <h5>İletişim</h5> <br />
                <div className='table-responsive'>
                  <table class="table">
                    <thead>
                      <tr>

                        <th scope="col">Adres</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Telefon No</th>
                        <th scope="col">Facebook</th>
                        <th scope="col">Instagram</th>
                        <th scope="col">Twitter</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>

                      {postLists &&
                        postLists.length > 0 &&
                        postLists.map((doc) => (

                          <tr key={doc.id}>
                            <td>{doc.adres}</td>
                            <td>{doc.mail}</td>
                            <td>{doc.telno}</td>
                            <td>{doc.facebook}</td>
                            <td>{doc.ınstagram}</td>
                            <td>{doc.twitter}</td>
                            <td><RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /></td>
                          </tr>

                        ))}

                    </tbody>
                  </table>
                </div>



              </div>

              <br />
            </div>

          </div>
        </div>


      </Sidebar>





      {/* <div class="container-fluid">
    <div class="row flex-nowrap">
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
                    <br/>
                       
                   
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
           &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>İletişim</span>
            </div>
            
            <div className='col-lg-4 d-flex justify-content-end'>  
           <FiHome style={{color:'#182446',marginTop:'4px'}}/>&nbsp;
           <p>/</p> &nbsp;
           <p> İletişim</p>
            </div>
            </div>
            
            </div>
        </div>
        <br/><br/>

         <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card'>
                        
                        <form style={{margin:'30px'}}>
              <h3>İletişim</h3><br/>

              <label style={{fontSize:'20px'}}>Adres</label><br/><br/>
              <input type="text" class="form-control" id="text" placeholder="Adres giriniz."></input><br/>

              <label style={{fontSize:'20px'}}>E-mail</label><br/><br/>
              <input type="mail" class="form-control" id="text" placeholder="Email giriniz."></input><br/>

              <label style={{fontSize:'20px'}}>Telefon Numarası</label><br/><br/>
              <input type="text" class="form-control" id="text" placeholder="Telefon numarası giriniz."></input><br/>

              <label style={{fontSize:'20px'}}>Facebook URL</label><br/><br/>
              <input type="text" class="form-control" id="text" placeholder="Facebook url giriniz."></input><br/>

              <label style={{fontSize:'20px'}}>İnstagram URL</label><br/><br/>
              <input type="text" class="form-control" id="text" placeholder="Instagram url giriniz."></input><br/>

              <label style={{fontSize:'20px'}}>Twitter URL</label><br/><br/>
              <input type="text" class="form-control" id="text" placeholder="Twitter url giriniz."></input><br/>


              <div className='d-flex justify-content-end'>
        <button className='btngiris' role={'button'}>Ekle</button> 
        </div>

                        </form>
                        
                    </div>
                </div>
            </div>
         </div>
      

         <div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
        <br/> <br/><br/> <br/>
        
        <div className='card' style={{backgroundColor:'white', padding:'20px'}}>
        <h5>İletişim</h5> <br/>
<div className='table-responsive'>
        <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Adres</th>
      <th scope="col">E-mail</th>
      <th scope="col">Telefon No</th>
      <th scope="col">Facebook</th>
      <th scope="col">Instagram</th>
      <th scope="col">Twitter</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Sanayi mah. Konur Ba...</td>
      <td>ispartaesob@isp...</td>
      <td>0246 218 15 13 - 0246 218 90 93</td>
      <td>https://www.ispartae...</td>
      <td>https://www.ispartae...</td>
      <td>https://www.ispartae...</td>
      <td><FaEdit style={{color:'red',fontSize:'25px'}}/> <BsEyeFill  style={{color:'rgb(0,123,255)',fontSize:'25px'}}/></td>
    </tr>
    
    
   
  </tbody>
  </table>
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

export default Adminİletisim
