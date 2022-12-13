import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const Personeller = () => {


  const [personeller, setPersoneller] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `personeller`), (snapshot) =>
        setPersoneller(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );




  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <AracCubugu />
      <div className='hakkımızda flex-middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <h1 className='buyukbaslık'>Personeller</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <NavLink to='/'>
                <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
              <p>/</p> &nbsp;
              <NavLink className='baslik' to='/Personeller'> Personeller</NavLink>
            </div>
          </div>


        </div>
      </div>

      <br /><br />

      <div className='container'>
        <div className='row'>

          {personeller &&
            personeller.length > 0 &&
            personeller.map((doc) => (

              <div key={doc.id} className='col-lg-3 col-md-6'>



                <div class="card personeller" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} >
                 
                    <img src={doc.personelfoto} class="personelfoto" alt="" />



                    <div class="card-body" style={{ backgroundColor: ' #182446' }}>
                      <h4 style={{ color: 'white' }} class="baslık">{doc.personeladsoyad}</h4>
                      <p style={{ color: 'white' }} class="card-text">{doc.personelgorev}</p>
                      <div className='row'>
                    
                    </div>
                   
                  </div>
                  
                </div>
                <br/> <br/>
              </div>

            ))}


          {/* <div className='col-lg-3 col-md-6'>
            <div class="card personeller" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fsebahataydin_sicilm%C3%BCd%C3%BCryardimcisi.jpg?alt=media&token=a41839e2-c4e5-46f9-b24b-07713a5c99c6" class="personelfoto" alt="" />
              <div class="card-body" style={{ backgroundColor: '#182446' }}>
                <h4 style={{ color: 'white' }} class="baslık">Sebahat Aydın</h4>
                <p style={{ color: 'white' }} class="card-text">Sicil Müdür Yardımcısı</p>

              </div>
            </div>
            <br /><br />
          </div>

          <div className='col-lg-3 col-md-6'>
            <div class="card personeller" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fbusraacar_sicilpersoneli.jpg?alt=media&token=3e917c8e-f836-472e-9221-3bc881ed9b51" class="personelfoto" alt="" />
              <div class="card-body" style={{ backgroundColor: '#182446' }}>
                <h4 style={{ color: 'white' }} class="baslık">Büşra Acar</h4>
                <p style={{ color: 'white' }} class="card-text">Sicil Personeli (Yalvaç)</p>

              </div>
            </div>
            <br /><br />
          </div>


          <div className='col-lg-3 col-md-6'>
            <div class="card personeller" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fgamzedasyol_bas%C4%B1mm%C3%BCsaviriozelkalem.jpg?alt=media&token=1a103989-1558-4e6f-8c1a-48a62829c8f3" class="personelfoto" alt="" />
              <div class="card-body" style={{ backgroundColor: '#182446' }}>
                <h4 style={{ color: 'white' }} class="baslık">Gamze Daşyol</h4>
                <p style={{ color: 'white' }} class="card-text">Basın Müşaviri-Özel Kalem</p>

              </div>
            </div>
            <br /><br />
          </div>


          <div className='col-lg-3 col-md-6'>
            <div class="card personeller" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
              <img src="https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/personel%2Fcemilkaya_denetimmemuru.jpg?alt=media&token=5c34a253-317b-4498-b750-c63b0b5a1d14" class="personelfoto" alt="" />
              <div class="card-body" style={{ backgroundColor: '#182446' }}>
                <h4 style={{ color: 'white' }} class='baslık'>Cemil Kaya</h4>
                <p style={{ color: 'white' }} class="card-text">Denetim Memuru</p>

              </div>
            </div>
          </div> */}






        </div>
      </div>
      <br /> <br /> <br />
      <AltBaslık />
    </div>


  )
}

export default Personeller
