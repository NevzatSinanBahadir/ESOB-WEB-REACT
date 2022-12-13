import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc,getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom'



const HaberDetay = () => {


  
  const [icerik, setIcerik] = useState("");
  const [baslik, setBaslik] = useState("");
  const [url,setUrl] = useState("");
  const [haberler, setHaberler] = useState([]);
  const { id } = useParams();




  async function vericek() {
    const veriyolu = doc(db, "haberler", id);
    const docSnap = await getDoc(veriyolu);
    setHaberler(docSnap.data());
    setIcerik(docSnap.data()['habericerik'])
    setUrl(docSnap.data()['haberurl'])
    setBaslik(docSnap.data()['haberbaslık'])
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
              <h1>Haberler</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <a href='/'>
                <FaHome style={{ color: '#182446' }} /></a>&nbsp;
              <p>/</p> &nbsp;
              <a className='baslik' href='Haberler'> Haberler</a>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />

      <div className='container haberrr'>
        <div className='row'>

         
              <div className='row'>

                <div className='col-lg-12 d-flex justify-content-center p-3'>

                  <h4 className='baslık'>{baslik}</h4>

                  <br /><br />

                </div>

                <div className='col-lg-9 d-flex justify-content-end '>
                  <p>17-11-2022</p>
                </div>

                <div className='col-lg-12 d-flex justify-content-center'>
                  <img src={url} alt='' className='img-fluid haberdetayfoto'></img>


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






      <br /><br /><br />
      <AltBaslık />
    </div>
  )
}

export default HaberDetay
