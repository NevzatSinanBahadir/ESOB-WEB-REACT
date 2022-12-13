import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const Hakkımızda = () => {



  const [hakkımızda, setHakkımızda] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `hakkimizda`), (snapshot) =>
        setHakkımızda(snapshot.docs.map((doc) => doc.data()))
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
              <h1 className='buyukbaslık'>Hakkımızda</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <NavLink to='/'>
                <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
              <p>/</p> &nbsp;
              <NavLink className='baslik' to='/Hakkımızda'> Hakkımızda</NavLink>
            </div>
          </div>


        </div>


      </div>
      <br /><br />
      <div className='container'>
        {hakkımızda &&
          hakkımızda.length > 0 &&
          hakkımızda.map((doc) => (

            <div>

              {parse(doc.icerik)}

            </div>
          ))}
      </div>
      <br /><br />
      <AltBaslık />
    </div>
  )
}

export default Hakkımızda
