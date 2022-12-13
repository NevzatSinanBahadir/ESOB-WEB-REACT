import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser





const DestekDetay = () => {


  const [icerik, setIcerik] = useState("");
  const [baslik, setBaslik] = useState("");
  const [url,setUrl]= useState("");
  const [destekler, setDestekler] = useState([]);
  const { id } = useParams();




  async function vericek() {
    const veriyolu = doc(db, "destekler", id);
    const docSnap = await getDoc(veriyolu);
    setDestekler(docSnap.data());
    setIcerik(docSnap.data()['destekicerik'])
    setBaslik(docSnap.data()['destekisim'])
    setUrl(docSnap.data()['destekurl'])
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
              <h1 className='buyukbaslık'>Destekler</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <a href='/'>
                <FaHome style={{ color: '#182446' }} /></a>&nbsp;
              <p>/</p> &nbsp;
              <a className='baslik' href='Destekler'> Destekler</a>
            </div>
          </div>

        </div>
      </div>
      <br /><br />

      <div className='container haberrr'>
        <div className='row'>
          <div className='col-lg-12 p-3'>
            <h4 className='baslık'>{baslik}</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <img src={url} alt='' className='img-fluid' style={{ height: '200px' }} ></img>

          </div>

          <div className='col-lg-9 p-3'>
            <br />
            <p className='yazı'>{parse(icerik)}</p>
          </div>
        </div>
      </div>



      <br /><br /><br />
      <AltBaslık />
    </div>
  )
}

export default DestekDetay
