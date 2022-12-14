import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import AracCubugu from './AracCubugu'
import { NavLink } from 'react-router-dom'
import { FaDownload } from 'react-icons/fa'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";





const TümGenelgeler = () => {

  const [genelgelerpdf, setGenelgelerpdf] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `genelgeler/sMCE4U8jwZXatGteSEZT/genelgepdf`), (snapshot) =>
        setGenelgelerpdf(snapshot.docs.map((doc) => doc.data()))
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
              <h1 className='buyukbaslık'>Genelgeler</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <a href='/'>
                <FaHome style={{ color: '#182446' }} /></a>&nbsp;
              <p>/</p> &nbsp;
              <a className='baslik' href='Genelgeler'> Genelgeler</a>
            </div>
          </div>
        </div>

      </div>

      <br /><br />



      <div className='container'>
        <div className='row'>
          {genelgelerpdf &&
            genelgelerpdf.length > 0 &&
            genelgelerpdf.map((doc) => (

              <div class="col-lg-6 ">
                <div class="row px-2 ">
                  <div class="card genelge">

                    <div class="card-body">

                      <h5 class="baslık">{doc.genelgebaslık}</h5>
                      <br />
                      <a href={doc.genelgeicerik} target='blank' className='indir'>Genelgeleri İndir <FaDownload /></a>


                    </div>

                  </div>
                </div>
                <br />
              </div>


            ))}






        </div>

      </div>
      <br /> <br />
      <AltBaslık />

    </div>


  )
}

export default TümGenelgeler
