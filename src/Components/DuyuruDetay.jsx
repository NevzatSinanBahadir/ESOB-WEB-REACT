import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
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
              <a href='/'>
                <FaHome style={{ color: '#182446' }} /></a>&nbsp;
              <p>/</p> &nbsp;
              <a className='baslik' href='Duyurular'> Duyurular</a>
            </div>
          </div>

        </div>
      </div>
      <br /><br /><br />

      <div className='container haberrr'>


        <div className='row'>
          <div className='col-lg-12 d-flex justify-content-center p-3'>

            <h4 className='baslık' style={{ width: '800px' }}> {baslik}</h4>
            <br /><br /><br />
          </div>

          <div className='col-lg-9 px-2 d-flex justify-content-end'>
            <p>20-02-2022</p>
            <br /><br /><br />
          </div>

          <div className='col-lg-12 d-flex justify-content-center'>

            <p className='yazı' style={{ width: '800px' }}>  {parse(icerik)}  </p>

          </div>

        </div>


      </div>

      <br /><br /><br />
      <AltBaslık />
    </div>
  )
}

export default DuyuruDetay
