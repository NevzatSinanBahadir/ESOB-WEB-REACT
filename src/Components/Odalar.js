import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";





const Odalar = () => {


     const [odalar, setOdalar] = useState([]);




     useEffect(
          () =>
               onSnapshot(collection(db, `Odalar`), (snapshot) =>
                    setOdalar(snapshot.docs.map((doc) => doc.data()))
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
                                   <h1 className='buyukbaslık'>Odalar</h1>
                              </div>
                              <div className='col-lg-3 d-flex justify-content-end'>
                                   <NavLink to='/'>
                                        <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
                                   <p>/</p> &nbsp;
                                   <NavLink className='baslik' to='/Odalar'> Odalar</NavLink>
                              </div>
                         </div>
                    </div>


               </div>

               <br /><br />

               <div className='container'>

               <div className='row'>
              <br />
              <h4 className='baslık'>Merkez Odalar</h4>
              <br /><br />

              {odalar &&
                odalar.length > 0 &&
                odalar.map((doc) => (


                  <div key={doc.id} className='col-xl-3 col-lg-6 col-md-6' style={{ backgroundColor: 'white', padding: '20px' }}>
                    <div className='row justify-content-center'>


                      <div class="card odalar" style={{ width: '18rem', borderRadius: '25PX' }} >

                        <img src={doc.odaurl} class="Amblem" alt='' />
                        <hr />

                      
                        <h6 class="list-group-item">{doc.odaismi}</h6><hr />
                        <h6 class="list-group-item">BAŞKAN: {doc.odabaskanı}</h6><hr />
                        <h6 class="list-group-item">G.SEKRETER: {doc.odagenelsekreter}</h6><hr />
                        <h6 class="list-group-item">TEL: {doc.odatel}</h6><br/>

                      
                        

                      </div>
                      <br /><br />
                    </div>
                  </div>

                ))}
            </div>


                       


                  
                    <br /><br />

                   





               </div>


               <br /><br /><br />
               <AltBaslık />

          </div>
     )
}

export default Odalar
