import React, {useEffect} from 'react'
import AracCubugu from './AracCubugu'
import {FaHome} from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'

const Baskan = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
       
       <AracCubugu/>

       <div className='hakkımızda flex-middle'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-9'>
            <h1 className='buyukbaslık'>Başkan AHMET TURAL </h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
            <NavLink to='/'>
           <FaHome style={{color:'#182446'}}/></NavLink>&nbsp;
           <p>/</p> &nbsp;
        <NavLink className='baslik' to='/Baskan'> Başkan</NavLink>
            </div>
            </div>
            
        </div>
        </div>
      <br/><br/>

       <div className='container'>
        <h4 className='baslık'>AHMET TURAL</h4>
        <br/><br/>
        <div className='row'>
            <div className='col-lg-3 pt-4'>
            
            <img src='https://firebasestorage.googleapis.com/v0/b/isparta-esob.appspot.com/o/WhatsApp%20Image%202022-02-21%20at%2000.14.06.jpeg?alt=media&token=de4d4fd7-76a6-40db-b151-30586520362c' alt='' style={{borderRadius:'20px', height:'300px', width:'auto'}}></img>
                
            </div>
        
            <div className='col-lg-9 p-3'>
           
                <p>Kıymetli hemşehrilerimiz; Yaşadığımız bu yüzyılda iletişim ve bilgi paylaşımı, toplumun geleceğine yön vermekte, teknolojik değişimler hayatın her alanını şekillendirmektedir. Artık ülkelerin zenginlikleri para ya da doğal kaynaklardan değil, bilgi ve insan kaynaklarının zenginliğiyle ölçülmektedir. Bu noktadan hareketle bizler de çağımıza ayak uydurabilmek, vatandaşlarımıza daha kaliteli ve hızlı hizmet verebilmek için teknolojik altyapıyı kurarak her türlü iletişim aracını kullanmak mecburiyetindeyiz.   Isparta Esnaf ve Sanatkarlar Odaları Birliği olarak, günümüzün en yaygın iletişim araçlarından biri olan interneti kullanarak gerek odamızı tanıtmak, duyurularımızı yapmak, gerekse vatandaşlarımızla ve diğer kurumlarla elektronik ortamda iletilim sağlayabilmek amacıyla web sitemizi güncelleyerek zengin bir içerikle sizlere sunuyoruz. İlimizde odalarımıza bağlı 13 bin esnaf ve sanatkarlarımız bulunuyor. Dolayısıyla esnaf ve sanatkarlarımızı halkımız ile en yoğun teması olan grupların başında geliyor. Bu sanal ortamda hemşehrilerimiz; ilimizde esnaf ve sanatkarlarımızın çatı örgütü olan IESOB ve faaliyetleri ile ilgili bilgi almak, Isparta ve Türkiye ekonomisine ilişkin gelişmeleri, mevzuatlardaki değişiklikleri takip etmek şansına sahip olacaktır.  Esnaf ve sanatkarlarımız da web sitemiz aracılığıyla sanal dünyanın sunduğu imkanlara ulaşma şansına sahip olacak, Birliğimiz ile bu kulvardan da iletişim kurabilecektir. Bu amaçla Birliğimiz; bağlı odalarımız ile birlikte, esnaf ve sanatkarlarımızın mesleğini geliştirmeye yönelik, diğer meslek odalarıyla ortak hareket eden, birlikte üreten, birlikte düşünen bir anlayışla çalışmalarına devam edecektir.</p>
            </div>
        </div>
       </div>
       <br/><br/><br/>
         <AltBaslık/>
      
    </div>
  )
}

export default Baskan
