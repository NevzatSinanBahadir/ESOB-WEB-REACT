import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Anasayfa from './Components/Anasayfa';
import {Routes,Route, BrowserRouter} from "react-router-dom";
import Haberler from './Components/Haberler';
import Duyurular from './Components/Duyurular';
import Destekler from './Components/Destekler';
import Iletisim from './Components/Iletisim';
import Hakkımızda from './Components/Hakkımızda';
import Genelgeler from './Components/Genelgeler';
import Odalar from './Components/Odalar';
import Baskan from './Components/Baskan';
import Personeller from './Components/Personeller';
import TümGenelgeler from './Components/TümGenelgeler';
import HaberDetay from './Components/HaberDetay';
import DuyuruDetay from './Components/DuyuruDetay';
import DestekDetay from './Components/DestekDetay';
import GirisYap from './Admin/GirisYap';
import AracCubuguAdmin from './Admin/AracCubuguAdmin';
import AdminAnasayfa from './Admin/AdminAnasayfa';
import AdminSlayt from './Admin/AdminSlayt';
import AdminHakkımızda from './Admin/AdminHakkımızda';
import AdminOda from './Admin/AdminOda';
import AdminPersonel from './Admin/AdminPersonel';
import Adminİletisim from './Admin/Adminİletisim';
import AdminHaber from './Admin/AdminHaber';
import AdminDuyuru from './Admin/AdminDuyuru';
import AdminDestek from './Admin/AdminDestek';
import AdminGenelge from './Admin/AdminGenelge';
import AdminGenelgePdf from './Admin/AdminGenelgePdf';
import Sidebar from './Admin/Sidebar';
import { useLocation } from 'react-router-dom';







function App() {

    
    // let path = window.location.pathname;
    // path = path.split("/")
    // path = path[path.length -1]
    // let adminPath = path.split("-").includes("admin")
 
  
    const location = useLocation();
    if (location.pathname.startsWith('/admin')) {

    
    
    return(
      <Sidebar>
      <Routes>
             <Route path='/admin/anasayfa' element={<AdminAnasayfa/>}/>
             <Route path='/admin/slaytekle' element={<AdminSlayt/>}/>
             <Route path='/admin/hakkımızdaekle' element={<AdminHakkımızda/>}/>
             <Route path='/admin/odaekle' element={<AdminOda/>}/>
             <Route path='/admin/personelekle' element={<AdminPersonel/>}/>
             <Route path='/admin/iletisimekle' element={<Adminİletisim/>}/>
             <Route path='/admin/genelgeekle' element={<AdminGenelge/>}/>
             <Route path='/admin/haberekle' element={<AdminHaber/>}/>
             <Route path='/admin/duyuruekle' element={<AdminDuyuru/>}/>
             <Route path='/admin/destekekle' element={<AdminDestek/>}/>
             <Route path='/admin/genelgepdfekle' element={<AdminGenelgePdf/>}/>
            
             
     
     </Routes>
     </Sidebar>
     )

    } else {
      
    
    return(
      <Routes>
    
          <Route path="/" element={<Anasayfa/>}/>
          <Route path="/Hakkımızda" element={<Hakkımızda />}/>
          <Route path="/Genelgeler" element={<Genelgeler />}/>
          <Route path="/Odalar" element={<Odalar />}/>
          <Route path="/Baskan" element={<Baskan />}/>
          <Route path="/Personeller" element={<Personeller />}/>
          <Route path="/Haberler" element={<Haberler />}/>
          <Route path="/Duyurular" element={<Duyurular />}/>
          <Route path="/Destekler" element={<Destekler />}/>
          <Route path="/Iletisim" element={<Iletisim />}/>
          <Route path="/TümGenelgeler" element={<TümGenelgeler />}/>
          <Route path="/HaberDetay/:id" element={<HaberDetay />}/>
          <Route path='/DuyuruDetay/:id' element={<DuyuruDetay />}/>
          <Route path='/DestekDetay/:id' element={<DestekDetay />}/>
          <Route path='/giris' element={<GirisYap/>}/> 
           
         
    </Routes>
    )
    }
  
  return(
    <div>

    

   <App/>
    






 {/* {adminPath === true ? 
 <Sidebar>
 <Routes>
        <Route path='/admin-anasayfa' element={<AdminAnasayfa/>}/>
        <Route path='/admin-slaytekle' element={<AdminSlayt/>}/>
        <Route path='/admin-hakkımızdaekle' element={<AdminHakkımızda/>}/>
        <Route path='/admin-odaekle' element={<AdminOda/>}/>
        <Route path='/admin-personelekle' element={<AdminPersonel/>}/>
        <Route path='/admin-iletisimekle' element={<Adminİletisim/>}/>
        <Route path='/admin-genelgeekle' element={<AdminGenelge/>}/>
        <Route path='/admin-haberekle' element={<AdminHaber/>}/>
        <Route path='/admin-duyuruekle' element={<AdminDuyuru/>}/>
        <Route path='/admin-destekekle' element={<AdminDestek/>}/>
        <Route path='/admin-genelgepdfekle' element={<AdminGenelgePdf/>}/>
       
        

</Routes>
</Sidebar> :

<Routes>

        <Route path="/" element={<Anasayfa/>}/>
        <Route path="/Hakkımızda" element={<Hakkımızda />}/>
        <Route path="/Genelgeler" element={<Genelgeler />}/>
        <Route path="/Odalar" element={<Odalar />}/>
        <Route path="/Baskan" element={<Baskan />}/>
        <Route path="/Personeller" element={<Personeller />}/>
        <Route path="/Haberler" element={<Haberler />}/>
        <Route path="/Duyurular" element={<Duyurular />}/>
        <Route path="/Destekler" element={<Destekler />}/>
        <Route path="/Iletisim" element={<Iletisim />}/>
        <Route path="/TümGenelgeler" element={<TümGenelgeler />}/>
        <Route path="/HaberDetay/:id" element={<HaberDetay />}/>
        <Route path='/DuyuruDetay/:id' element={<DuyuruDetay />}/>
        <Route path='/DestekDetay/:id' element={<DestekDetay />}/>
        <Route path='/giris' element={<GirisYap/>}/> 
         
       
  </Routes>
} */}

    
</div>

  )
  }

  
  


export default App;