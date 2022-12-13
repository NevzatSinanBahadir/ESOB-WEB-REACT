import React from 'react'
import AltLogo from '../Resimler/logo-footer.png'
import{NavLink} from 'react-router-dom';

const AltBaslık = () => {
  return (
    <div>
         <footer className='arka-footer'>
        <div className='container'>
      
        <div className='row d-flex justify-content-around'>
        <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
            <img src={AltLogo} alt='' className='altlogo'></img>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6 col-12 pt-4'>
        <h6><NavLink  style={{color:'RGB(255, 255, 255)',fontSize:'18px',fontWeight:'700',textDecoration:'none'}} to="/">Anasayfa</NavLink></h6>&nbsp;
            <p> <NavLink className='altbaslik' to="/Hakkımızda">Hakkımızda</NavLink></p>
            <p> <NavLink className='altbaslik' to="/Genelgeler">Genelgeler</NavLink></p>
            <p> <NavLink className='altbaslik' to="/Odalar">Odalar</NavLink></p>
            <p> <NavLink className='altbaslik' to="/Haberler">Haberler</NavLink></p>
            <p> <NavLink className='altbaslik' to='/Duyurular'>Duyurular</NavLink></p>
            <p> <NavLink className='altbaslik' to="/Destekler">Destekler</NavLink></p>
            <p> <NavLink className='altbaslik' to="/Iletisim">İletişim</NavLink></p>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-6 col-12 pt-4'>
            <h5 style={{color:'RGB(255, 255, 255)',fontSize:'20px'}}>Adres</h5>&nbsp;
            <a href='https://www.google.com/maps/place/Isparta+Esnaf+Ve+Sanatkarlar+Odalar%C4%B1+Birli%C4%9Fi/@37.766688,30.533123,13z/data=!4m2!3m1!1s0x0:0x51bd80c42620c49c?sa=X&ved=2ahUKEwjb0-XmvsH7AhVjQfEDHfmnAs0Q_BJ6BAhREAk' target='blank' className='altbaslik'><p>Sanayi mah. Konur Bahçesi 3264 sok. No: 2 Merkez/ISPARTA - Türkiye</p></a>
        </div>
        <div className='col-lg-3 pb-4 col-md-6 col-sm-6 col-12 pt-4'>
            <h5  style={{color:'RGB(255, 255, 255)'}}>Mobil Uygulamlarımız</h5>&nbsp;
            <p>
            <a href='https://play.google.com/store/apps/details?id=com.ispartaesob' target="_blank">
            <img src='https://www.ispartaesob.org/static/png/googleplay.png' alt='' style={{height:'45px'}}></img>
            </a>
            </p>
            <p>
            <a href='https://apps.apple.com/kg/app/isparta-esob/id1608399275' target="_blank">
            <img src='https://www.ispartaesob.org/static/png/appstore.png' alt='' style={{height:'45px'}}></img>
            </a>
            </p>
        </div>
        </div>

        <div className='row'>
            <div className='col-lg-12 d-flex justify-content-end'>
                <p  style={{color:'RGB(255, 255, 255)',fontSize:'14px'}}>Copyright © 2023
                <a href='https://kmayazilim.com/' target='blank' style={{textDecoration:'none'}}> KMA Yazılım Animasyon</a>
                . All Rights Reserved.
                    </p>
            </div>
        </div>
       
    </div>
    </footer>
    </div>
  )
}

export default AltBaslık
