import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";




const Slider1 = () => {



  const [haberler, setHaberler] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `haberler`), (snapshot) =>
        setHaberler(snapshot.docs.map((doc) => doc.data()))
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
    <div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 p-2'>


            <Slider className='ee' {...settings} >

              {haberler &&
                haberler.length > 0 &&
                haberler.map((doc) => (

                  <div>
                    <Card className='cardd' style={{ minHeight: '455px' }}>

                      <Card.Img variant="top" style={{ minHeight: '210px' }} src={doc.haberurl} />
                      <Card.Body >

                        <Card.Title className='a'>{doc.haberbaslık}</Card.Title>
                        <hr />

                        <Card.Text className='ab'>
                          {parse(doc.habericerik)}
                        </Card.Text>
                        <div className='d-flex justify-content-start'>
                          <NavLink to={`/HaberDetay/${doc.id}`}>
                          

                            <button className='btnn' role={'button'}>Devamını Oku</button></NavLink></div>

                      </Card.Body>

                    </Card>

                  </div>
                ))}


            </Slider>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Slider1
