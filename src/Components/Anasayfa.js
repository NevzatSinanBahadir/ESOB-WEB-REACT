import React, {useEffect} from 'react'
import AracCubugu from './AracCubugu'
import Baskan from '../Resimler/baskan11.jpeg'
import Duyuru from '../Resimler/duyurular.png'
import Haberler from '../Resimler/haberler.png'
import {BsTwitter} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import Slider2 from './Slider2'
import Slider1 from './Slider1'
import Slider3 from './Slider3'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'
import { db, storage } from '../firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";



const Anasayfa = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true
};

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <div>
      
        <AracCubugu/>
        
     
      <div className='row'>
      <div className='col-lg-9 col-md-9 col-12 '>
      
     <Slider2/>
        </div>
      
       
        <div className='col-lg-3 col-md-3 col-sm-12 m-0' >
          <NavLink to='/Baskan'>
            <img src={Baskan} alt='' className='img-fluid w-100'></img>
            </NavLink>
            <div className='row arka'> 
            
                <div className='col-md-6 col-sm-6 col'>
                <NavLink to='/Baskan' style={{textDecoration:'none',color:'white'}}>
                    <p>Başkan Ahmet Tural</p></NavLink>
                </div>
                
                <br/>
                <div className='col-md-6 col-sm-6 col d-flex justify-content-end'>
              <div className='row'>
                
                    <div className='col-md-2 col-sm-2 col'>
                    <a className='sosyalmedya' href="https://twitter.com/ahmettural32" target="_blank"><BsTwitter/></a>  
                    </div>
                    <div className='col-md-2 col-sm-2 col'>
                    <a className='sosyalmedya' href="https://www.facebook.com/Ahmettural32" target="_blank"><AiFillFacebook/></a>  
                    </div>
                    <div className='col-md-2 col-sm-2 col'>
                    <a className='sosyalmedya' href="https://www.instagram.com/ahmettural32/" target="_blank"><AiFillInstagram/></a>
                    </div>
                </div>
                </div>  
              
                

            </div>
           
            <div style={{height:'8px'}}></div>
      <div className='card'>
       <NavLink to ='/Duyurular'><img src={Duyuru} alt='' className='img-fluid w-100 anasayfafoto'></img></NavLink>
      </div>
      <div style={{height:'33px'}}></div>
      <div className='card'>
        <NavLink to='/Haberler'><img src={Haberler} alt='' className='img-fluid w-100 anasayfafoto'></img></NavLink>
      </div>
        </div>
       
      </div>
      <br/><br/><br/>
      

      <div className='container'>
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6 col'>
                <h3 className='baslık'>Haberler</h3>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col d-flex justify-content-end'>
           
                
            <NavLink to='/Haberler'><button className='btnnn' role={'button'}>Tümünü Gör</button></NavLink>
            
           
      
        </div>
        </div>
        <hr/>
      </div>


     <Slider1/>
     
     <br/><br/><br/><br/>
     
     <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6 col'>
          <h3 className='baslık'>Duyurular</h3>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col d-flex justify-content-end'>
        <NavLink to='/Duyurular'><button className='btnnn' role={'button'}>Tümünü Gör</button></NavLink>
        </div>
      </div>
      <hr/>
     </div>
     <Slider3/>
     <br/><br/>
     <AltBaslık/>
    </div>
  )
}

export default Anasayfa
