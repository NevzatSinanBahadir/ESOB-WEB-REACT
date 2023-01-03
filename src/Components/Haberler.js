import React, { useEffect, useState } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const Haberler = () => {



   const [haberler, setHaberler] = useState([]);




   useEffect(
      () =>
         onSnapshot(collection(db, `haberler`), (snapshot) =>
            setHaberler(snapshot.docs.map((doc) => doc.data()))
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
                     <h1 className='buyukbaslık'>Haberler</h1>
                  </div>
                  <div className='col-lg-3 d-flex justify-content-end'>
                     <NavLink to='/'>
                        <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
                     <p>/</p> &nbsp;
                     <NavLink className='baslik' to='/Haberler'>Haberler</NavLink>
                  </div>
               </div>
            </div>
         </div>
         <br /><br />

         <div className='container p-4'>


            {haberler &&
               haberler.length > 0 &&
               haberler.map((doc) => (

                  <div className='row'>
                     <div className='col-lg-3 p-2'>

                      <NavLink to={`/HaberDetay/${doc.id}`}> <img src={doc.haberurl} alt='' className='img-fluid' style={{ height: '240px', borderRadius: '20px' }}></img>
                       <img src={doc.haberFoto} alt='' className='img-fluid' style={{ height: '240px', borderRadius: '20px' }}></img></NavLink>
                     </div>


                     

                     <div className='col-lg-9 p-2'>
                    
                        <NavLink to={`/HaberDetay/${doc.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                           <h4 className='baslık'>{doc.haberbaslık}</h4><br />
                           <p className='haber'> {parse(doc.habericerik)}</p>
                           <NavLink style={{ fontWeight: 'bold', textDecoration: 'none' }} to={`/HaberDetay/${doc.id}`}>Devamını Oku</NavLink>
                        </NavLink>

                     </div>
                     
                        
                     <div className='row'>
                       <br/><br/>  
                     </div>
                  </div>




               ))}

            





         </div>
         <br /><br /><br />
         <AltBaslık />

      </div>
   )
}

export default Haberler
