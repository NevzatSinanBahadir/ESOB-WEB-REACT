import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'



const DuyuruDetay = () => {


  const [duyurular, setDuyurular] = useState([]);
  const [icerik, setIcerik] = useState("");
  const [baslik, setBaslik] = useState("");
  const { id } = useParams();




  async function vericek() {
    const veriyolu = doc(db, "duyurular", id);
    const docSnap = await getDoc(veriyolu);
    setDuyurular(docSnap.data());
    setIcerik(docSnap.data()['duyuruicerik'])
    setBaslik(docSnap.data()['duyurubaslık'])
  }

  useEffect(
    () => {
      vericek()
    },
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
      <br /><br /><br />

      <div className=' container'>
        <div className='haberrr '>
          <div className='row'>


            <div className='row'>

              <div className='col-lg-12 d-flex justify-content-center p-3'>

                <h4 className='hbrbaslık'>{baslik}</h4>

                <br /><br />

              </div>

              <div className='col-lg-9 d-flex justify-content-end '>
                <p>17-11-2022</p>
              </div>

            

              <div className='col-lg-12 d-flex justify-content-center '>
                <br /><br />
                <p className='yazı' style={{ width: '700px', margin: '30px' }} >
                  {parse(icerik)}
                </p>


              </div>
            </div>
          </div>



        </div>

      </div>

      
      <br /><br /><br />
      <AltBaslık />
    </div>
  )
}

export default DuyuruDetay
