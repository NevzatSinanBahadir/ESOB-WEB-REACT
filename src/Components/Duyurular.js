import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const Duyurular = () => {

  const [duyurular, setDuyurular] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `duyurular`), (snapshot) =>
        setDuyurular(snapshot.docs.map((doc) => doc.data()))
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
              <h1 className='buyukbaslık'>Duyurular</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <NavLink to='/'>
                <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
              <p>/</p> &nbsp;
              <NavLink className='baslik' to='/Duyurular'> Duyurular</NavLink>
            </div>
          </div>

        </div>
      </div>
      <br /><br />


      <div className='container'>
        <br />
        <h4 className='baslık'>Duyurular</h4>
        <br />
        <div className='row'>
          {duyurular &&
            duyurular.length > 0 &&
            duyurular.map((doc) => (


              <div className='col-lg-3'>
                <div class="card duyurular">
                 
                    <div class="card-body">
                      <h5 style={{ fontSize: '17px', fontWeight: 'bold' }} class="card-title">27-06-2022</h5>
                      <br />
                      <h5 style={{ fontSize: '15px', height: '55px' }}>{doc.duyurubaslık}</h5>
                      <br />
                      <NavLink to={`/DuyuruDetay/${doc.id}`}><button className='btnn' role={'button'}>Devamını Oku</button></NavLink>
                    </div>
                 
                </div>
                <div className='row'>
                  <br />
                </div>
              </div>


            ))}
        </div>









      </div>




      <br /> <br /> <br />
      <AltBaslık />

    </div>
  )
}

export default Duyurular
