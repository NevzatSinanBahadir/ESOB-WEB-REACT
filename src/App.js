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




function App() {
  return(
    <div>
 <BrowserRouter>
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
        <Route path='/Admin' element={<GirisYap/>}/>         
    
        
       
        <Route path='/Admin/anasayfa' element={<AdminAnasayfa/>}/>
        <Route path='/Admin/slaytekle' element={<AdminSlayt/>}/>
        <Route path='/Admin/hakkımızdaekle' element={<AdminHakkımızda/>}/>
        <Route path='/Admin/odaekle' element={<AdminOda/>}/>
        <Route path='/Admin/personelekle' element={<AdminPersonel/>}/>
        <Route path='/Admin/iletisimekle' element={<Adminİletisim/>}/>
        <Route path='/Admin/genelgeekle' element={<AdminGenelge/>}/>
        <Route path='/Admin/haberekle' element={<AdminHaber/>}/>
        <Route path='/Admin/duyuruekle' element={<AdminDuyuru/>}/>
        <Route path='/Admin/destekekle' element={<AdminDestek/>}/>
        <Route path='/Admin/genelgepdfekle' element={<AdminGenelgePdf/>}/>
  </Routes>
  </BrowserRouter>
        
    
</div>

  )
  }

  
  


export default App;
