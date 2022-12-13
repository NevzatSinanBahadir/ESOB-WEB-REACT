import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";

const Slider2 = () => {

  const [slaytlar, setSlaytlar] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `Slayt`), (snapshot) =>
        setSlaytlar(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );





  const setting = {

    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,



  };
  return (
    <div>



      <Slider className='slider2' {...setting} >
        {slaytlar &&
          slaytlar.length > 0 &&
          slaytlar.map((doc) => (
            <div >
              {doc.slayticerik && <img src={doc.slayticerik} alt='some' className='d-block w-100'></img>}
           
              <h4 className='slaytbaslık'>{doc.slaytbaslık}</h4>
            
            </div>


          ))}

      </Slider>




    </div>
  )
}

export default Slider2
