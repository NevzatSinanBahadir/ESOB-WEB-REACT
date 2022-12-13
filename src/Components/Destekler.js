import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const Destekler = () => {

  const [destekler, setDestekler] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `destekler`), (snapshot) =>
        setDestekler(snapshot.docs.map((doc) => doc.data()))
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
              <h1 className='buyukbaslık'>Destekler</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <NavLink to='/'>
                <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
              <p>/</p> &nbsp;
              <NavLink className='baslik' to='/Destekler'> Destekler</NavLink>
            </div>
          </div>

        </div>

      </div>
      <br /><br />


      <div className='container'>
        <br />
        <h4 className='baslık'>Destekler</h4>
        <br />

        <div className='row'>
          {destekler &&
            destekler.length > 0 &&
            destekler.map((doc) => (
              <div className='col-lg-3'>

                <div class="card destekler" style={{ borderRadius: '40px' }}>
                  <NavLink to={`/DestekDetay/${doc.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <img src= {doc.destekurl} class="desteklerfoto" alt="" />
                    <div class="card-body">
                      <h5 class="card-title" style={{ fontWeight: 'bold' }}>{doc.destekisim}</h5>
                      <br />
                      <NavLink to={`/DestekDetay/${doc.id}`}><button className='btnn' role={'button'}>Devamını Oku</button></NavLink>


                    </div>
                  </NavLink>
                </div>
                <br /><br />
              </div>

            ))}

        </div>



      </div>

      <br /><br /><br />

      <AltBaslık />

    </div>
  )
}

export default Destekler
