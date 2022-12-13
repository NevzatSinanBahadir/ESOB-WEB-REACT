import React, { useEffect,useS } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import { MdLocationPin } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { TbWorld } from 'react-icons/tb'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc, getDoc } from "firebase/firestore";





const Iletisim = () => {



  // const [iletisim, setIletisim] = useState([]);
  // const [adres, setAdres] = useState("");
  // const [mail, setMail] = useState("");
  // const [tel, setTel] = useState("");
  // const [sosyalmedya, setSosyalmedya] = useState("");

  // const { id } = useParams();




  // async function vericek() {
  //   const veriyolu = doc(db, "iletisim", id);
  //   const docSnap = await getDoc(veriyolu);
  //   setIletisim(docSnap.data());
  //   setAdres(docSnap.data()['adres'])
  //   setMail(docSnap.data()['mail'])
  //   setTel(docSnap.data()['telno'])
  //   setSosyalmedya(docSnap.data()['facebook'])
  // }

  // useEffect(
  //   () => {
  //     vericek()
  //   },
  //   []
  // );




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
              <h1 className='buyukbaslık'>İletişim</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <NavLink to='/'>
                <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
              <p>/</p> &nbsp;
              <NavLink className='baslik' to='/Iletisim'> İletişim</NavLink>
            </div>
          </div>

        </div>
      </div>


      <div className='map'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.740776805484!2d30.55096341525126!3d37.772675979759875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c5b5c1a3590cab%3A0x1f3076ac4cd4c091!2sIsparta%20Esnaf%20Ve%20Sanatkarlar%20Odalar%C4%B1%20Birli%C4%9Fi!5e0!3m2!1str!2str!4v1643558744564!5m2!1str!2str" style={{ height: '450px', border: '0', width: '100%' }}></iframe>
      </div>

      <br /><br />


      <div className='container'>
        <div className='row'>
          <div className='col-lg-12  d-flex justify-content-center'>

            <h2 className='baslık'>Bize Ulaşın</h2>
          </div>
          <br /><br /><br />
          <div className='row'>
            <div className='col-lg-12  d-flex justify-content-center'>

              <p>İletişim bilgilerimiz üzerinden bizimle iletişime geçebilirsiniz.</p>
            </div>
          </div>
          <br /> <br /> <br />

          <div className='row'>
            <div className='col-lg-6 p-2'>
              <div class="card iletisim" style={{ borderStyle: 'none' }}>
                <div class="card-body">
                  <h5 class="baslık"><MdLocationPin style={{ color: 'red', fontSize: '25px' }} /> Adres:</h5>
                  <p class="card-text">Sanayi mah. Konur Bahçesi 3264 sok. No: 2 Merkez/ISPARTA - Türkiye.</p>

                </div>
              </div>
            </div>

            <div className='col-lg-6 p-2'>
              <div class="card iletisim" style={{ borderStyle: 'none' }}>
                <div class="card-body">
                  <h5 class="baslık"><GrMail style={{ color: 'blue', fontSize: '25px' }} /> Mail Adresi:</h5>
                  <p class="card-text">ispartaesob@ispartaesob.org</p>


                </div>

              </div>
              <br />
            </div>


          </div>


          <div className='row'>

            <div className='col-lg-6 p-2'>
              <div class="card iletisim" style={{ borderStyle: 'none' }}>
                <div class="card-body">
                  <h5 class="baslık"><BsFillTelephoneFill style={{ color: 'green', fontSize: '25px' }} /> Telefon:</h5>
                  <p class="card-text">0246 218 15 13 - 0246 218 90 93</p>

                </div>
              </div>
            </div>

            <div className='col-lg-6 p-2'>
              <div class="card iletisim" style={{ borderStyle: 'none' }}>
                <div class="card-body">
                  <h5 class="baslık"><TbWorld style={{ color: 'black', fontSize: '25px' }} /> Sosyal Medya:</h5>
                  <p class="card-text">https://www.ispartaesob.org/anasayfa</p>

                </div>
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

export default Iletisim
