import React, { useEffect, useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { collection, addDoc, doc, deleteDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { db, storage } from '../firebase'



const AdminPersonel = () => {

  const [personeladsoyad, setPersoneladsoyad] = useState("");
  const [personelgorev, setPersonelgorev] = useState("");
  const [personelfoto, setPersonelfoto] = useState("");
  const [postLists, setPostList] = useState([]);

   async function personelkaydet() {

    const docRef = await addDoc(
      collection(db, `personeller`),
      {
        personeladsoyad: personeladsoyad,
        personelgorev: personelgorev,
        personelfoto: personelfoto

      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setPersoneladsoyad("");
    setPersonelgorev("");
    setPersonelfoto("");
  }

  {/*-------------------------------Slayt Kayıt Fonksiyonu END---------------------------------------*/ }


  useEffect(
    () =>
      onSnapshot(collection(db, `personeller`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );




  {/*----------------------------Slayt Silme Fonksiyonu START------------------------------------------*/ }

  const deletePost = async (id) => {
    const postDoc = doc(db, "personeller", id)
    await deleteDoc(postDoc)
  }

  {/*----------------------------Slayt Silme Fonksiyonu END------------------------------------------*/ }


  return (
    <div style={{ backgroundColor: 'rgb(242,247,251)', height:'100%' }}>

      
        <br /><br />
        <div style={{ margin: '50px' }}>

          <div className='page-header-card'>

            <div className='row'>
              <div className='col-lg-8'>
                <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

                </h4>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Personeller</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> Personeller</p>
              </div>
            </div>

          </div>
          <br /><br />



          <div className='row'>
            <div className='col-lg-12'>
              <div className='card'>
                <div style={{ margin: '30px' }}>
                  <h3>Personeller</h3><br />
                  <label style={{ fontSize: '20px' }}>Personel Ad-Soyad</label><br /><br />
                  <input type="text" class="form-control" value={personeladsoyad} id="text" placeholder="Personel ad soyad giriniz." onChange={(event) => { setPersoneladsoyad(event.target.value) }}></input><br />

                  <label style={{ fontSize: '20px' }}>Personel Görevi</label><br /><br />
                  <input type="text" class="form-control" value={personelgorev} id="text" placeholder="Personel görevini giriniz." onChange={(event) => { setPersonelgorev(event.target.value) }}></input><br />

                  <label style={{ fontSize: '20px' }}>Personel Fotoğrafı</label><br /><br />
                  <input id="img" type="file" class="form-control" placeholder=""></input><br />

                  <label style={{ fontSize: '20px' }} id="content">Personel Görsel</label> <br /><br />
                <input type="text" class="form-control" value={personelfoto} onChange={(event) => { setPersonelfoto(event.target.value) }} placeholder="Personel görsel url giriniz."></input><br />

                  <div className='d-flex justify-content-end'>
                    <button className='btngiris' onClick={personelkaydet}>Ekle</button>
                  </div>

                </div>
              </div>
            </div>

          </div>
          <br /><br />



          <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
            <div className='row'>
              <br />
              <h4 className='baslık'>Personeller</h4>
              <br /><br />

              {postLists &&
                postLists.length > 0 &&
                postLists.map((doc) => (

                  <div key={doc.id} className='col-xl-3 col-lg-6 col-md-6' style={{ backgroundColor: 'white', padding: '20px' }}>
                    <div className='row'>


                      <div class="card personeller" style={{ width: '22rem', borderRadius: '25PX' }} >

                        <img src={doc.personelfoto} class="personelfoto" alt="" />



                        <div class="card-body" style={{ backgroundColor: ' #182446' }}>
                          <h4 style={{ color: 'white' }} class="baslık">{doc.personeladsoyad}</h4>
                          <p style={{ color: 'white' }} class="card-text">{doc.personelgorev}</p>


                        </div>

                        <div className='d-flex justify-content-end'>

                          <footer><RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /> <FaEdit style={{ color: 'rgb(40,167,147)', fontSize: '25px' }} /></footer>
                        </div>
                        <br />


                      </div>
                      <br /><br />
                    </div>
                  </div>


                ))}

             


            </div>
          </div>
        </div>




     




















      {/* 
        <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={Logo} alt='' style={{backgroundColor:'white !important'}} className='YazılıLogo'></img>
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
           &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Personeller</span>
            </div>
            
            <div className='col-lg-4 d-flex justify-content-end'>  
           <FiHome style={{color:'#182446',marginTop:'4px'}}/>&nbsp;
           <p>/</p> &nbsp;
           <p> Personeller</p>
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
              <h3>Personeller</h3><br/>
        <label style={{fontSize:'20px'}}>Personel Ad-Soyad</label><br/><br/>
        <input type="text" class="form-control" id="text" placeholder="Personel ad soyad giriniz."></input><br/>

        <label style={{fontSize:'20px'}}>Personel Görevi</label><br/><br/>
        <input type="text" class="form-control" id="text" placeholder="Personel görevini giriniz."></input><br/>

        <label style={{fontSize:'20px'}}>Personel Fotoğrafı</label><br/><br/>
        <input id="img" type="file" class="form-control" placeholder=""></input><br/>

        <div className='d-flex justify-content-end'>
        <button className='btngiris' role={'button'}>Ekle</button> 
        </div>

        </form>
        </div>
        </div>
        </div>
        </div>
<br/><br/>


<div className='container'>
  <div className='row'>
    <div className='col-lg-12'>
      <div className='card' style={{padding:'20px'}}>
       <h5>Personeller</h5>

       <div className='container'>
        <div className='row'>
            <div className='col-lg-3 col-md-6'>

            <div class="card personeller" style={{borderRadius:'20px'}}>
          <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fgokhandemirgil_genelsekreter.jpg?alt=media&token=d15905a8-d7db-4026-91aa-0fa3ada95d0d" class="personelfoto" alt=""/>
         <div class="card-body personellerr" style={{backgroundColor:'rgb(242,242,242)'}}>
         <h4 class="baslık">Gökhan Demirgil</h4>
        <p class="card-text">Genel Sekreter</p>
      
  </div>
  <div className='d-flex justify-content-end'>
  <footer><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/> <FaEdit style={{color:'rgb(40,167,147)',fontSize:'25px'}}/></footer>
  </div>
</div>
<br/><br/>
</div>

      <div className='col-lg-3 col-md-6'>
      <div class="card personeller" style={{borderRadius:'20px'}}>
          <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fsebahataydin_sicilm%C3%BCd%C3%BCryardimcisi.jpg?alt=media&token=a41839e2-c4e5-46f9-b24b-07713a5c99c6" class="personelfoto" alt=""/>
         <div class="card-body" style={{backgroundColor:'rgb(242,242,242)'}}>
         <h4 class="baslık">Sebahat Aydın</h4>
        <p class="card-text">Sicil Müdür Yardımcısı</p>
  
  </div>
  <div className='d-flex justify-content-end'>
  <footer><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/> <FaEdit style={{color:'rgb(40,167,147)',fontSize:'25px'}}/></footer>
  </div>
  </div>
  <br/><br/>
  </div>
      
  <div className='col-lg-3 col-md-6'>
      <div class="card personeller" style={{borderRadius:'20px'}}>
          <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fbusraacar_sicilpersoneli.jpg?alt=media&token=3e917c8e-f836-472e-9221-3bc881ed9b51" class="personelfoto" alt=""/>
         <div class="card-body" style={{backgroundColor:'rgb(242,242,242)'}}>
         <h4 class="baslık">Büşra Acar</h4>
        <p class="card-text">Sicil Personeli (Yalvaç)</p>
  
  </div>
  <div className='d-flex justify-content-end'>
  <footer><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/> <FaEdit style={{color:'rgb(40,167,147)',fontSize:'25px'}}/></footer>
  </div>
  </div>
  <br/><br/>
  </div>


  <div className='col-lg-3 col-md-6'>
      <div class="card personeller" style={{borderRadius:'20px'}}>
          <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fgamzedasyol_bas%C4%B1mm%C3%BCsaviriozelkalem.jpg?alt=media&token=1a103989-1558-4e6f-8c1a-48a62829c8f3" class="personelfoto" alt=""/>
         <div class="card-body" style={{backgroundColor:'rgb(242,242,242)'}}>
         <h4 class="baslık">Gamze Daşyol</h4>
        <p class="card-text">Basın Müşaviri-Özel Kalem</p>
  
  </div>
  <div className='d-flex justify-content-end'>
  <footer><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/> <FaEdit style={{color:'rgb(40,167,147)',fontSize:'25px'}}/></footer>
  </div>
  </div>
  <br/><br/>
  </div>


  <div className='col-lg-3 col-md-6'>
      <div class="card personeller" style={{borderRadius:'20px'}}>
          <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fcemilkaya_denetimmemuru.jpg?alt=media&token=5c34a253-317b-4498-b750-c63b0b5a1d14" class="personelfoto" alt=""/>
         <div class="card-body" style={{backgroundColor:'rgb(242,242,242)'}}>
         <h4 class='baslık'>Cemil Kaya</h4>
        <p class="card-text">Denetim Memuru</p>
  
  </div>
  <div className='d-flex justify-content-end'>
  <footer><RiDeleteBin5Line style={{color:'red',fontSize:'25px'}}/> <FaEdit style={{color:'rgb(40,167,147)',fontSize:'25px'}}/></footer>
  </div>
  </div>
  </div>
      </div>
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

export default AdminPersonel
