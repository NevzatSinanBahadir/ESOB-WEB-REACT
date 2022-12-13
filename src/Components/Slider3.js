import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";


const Slider3 = () => {
  const [duyurular, setDuyurular] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `duyurular`), (snapshot) =>
        setDuyurular(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );
















  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (


    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <Slider className='ee' {...settings} >



            {duyurular &&
              duyurular.length > 0 &&
              duyurular.map((doc) => (


                <Card className='cardduyuru' style={{ width: '18rem' }}>
                  <NavLink to={`/DuyuruDetay/${doc.id}`} style={{ textDecoration: 'none', color: 'black' }}>

                    <Card.Body >
                      <Card.Text className='cc'>{doc.duyurubaslık}</Card.Text>
                      <hr />
                      <NavLink to={`/DuyuruDetay/${doc.id}`}><button className='btnn' role={'button'}>Devamını Oku</button></NavLink>
                    </Card.Body>
                  </NavLink>
                </Card>




              ))}





          </Slider>

        </div>
      </div>



    </div>

  )
}

export default Slider3
