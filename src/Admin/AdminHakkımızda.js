
import { FiHome } from 'react-icons/fi'
import React, { useState, useEffect } from 'react';
import Ckeditor from './Ckeditor';
import Sidebar from './Sidebar';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { db, storage } from '../firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { useNavigate } from 'react-router-dom' //localStorage




const AdminHakkımızda = () => {

    const [icerik, setIcerik] = useState("");

    const [postLists, setPostList] = useState([]);
    
    useEffect(
        () =>
            onSnapshot(collection(db, `hakkimizda`), (snapshot) =>
                setPostList(snapshot.docs.map((doc) => doc.data()))
            ),
        []
    );

    {/*----------------------------Hakkımızda Kayıt Fonksiyonu START------------------------------------------*/ }

    async function hakkımızdakaydet() {

        const docRef = await addDoc(
            collection(db, `hakkimizda`),
            {
                icerik: icerik

            }
        );
        await updateDoc(docRef, {
            id: docRef.id,
        });
        setIcerik("");


    }


    {/*----------------------------Hakkımızda Kayıt Fonksiyonu End------------------------------------------*/ }


    {/*----------------------------Hakkımızda Silme Fonksiyonu Start------------------------------------------*/ }

    const deletePost = async (id) => {
        const postDoc = doc(db, "hakkimizda", id)
        await deleteDoc(postDoc)
    }

    {/*----------------------------Hakkımızda Silme Fonksiyonu End------------------------------------------*/ }


    return (

        <div style={{ backgroundColor: 'rgb(242,247,251)', height:'100%' }}>

            
                <br /><br />
                <div style={{ margin: '50px' }}>

                    <div className='page-header-card'>

                        <div className='row'>
                            <div className='col-lg-8'>
                                <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

                                </h4>
                                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Hakkımızda</span>
                            </div>

                            <div className='col-lg-4 d-flex justify-content-end'>
                                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                                <p>/</p> &nbsp;
                                <p> Hakkımızda</p>
                            </div>
                        </div>

                    </div>
                    <br /><br />


                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='card' style={{ padding: '20px' }}>

                                <h3>Hakkımızda</h3>
                                <br /> <br />
                                <div className='row'>
                                    <div className='col-lg-12 col-md-12 col-sm-12 col'>
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data=""
                                            
                                            onReady={editor => {
                                                console.log('Editor is ready to use!', editor);
                                            }}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setIcerik(data)


                                                console.log(icerik)
                                            }}
                                            onBlur={(event, editor) => {
                                                console.log('Blur.', editor);
                                            }}
                                            onFocus={(event, editor) => {
                                                console.log('Focus.', editor);
                                            }}
                                            value={icerik}
                                        />
                                    </div>
                                </div>
                                <br />
                                <div className='d-flex justify-content-end'>
                                    <button className='btngiris' onClick={hakkımızdakaydet}>Ekle</button>
                                </div>

                            </div>

                        </div>


                    </div>

                    <br /><br />

                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='card' style={{ padding: '50px' }}>


                                <div>
                                    {postLists &&
                                        postLists.length > 0 &&
                                        postLists.map((doc) => (

                                            <div>

                                                {parse(doc.icerik)}

                                            </div>

                                        ))}




                                </div>


                            </div>

                        </div>

                    </div>
                </div>


            







            {/* <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <NavLink to="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <img src={Logo} alt='' style={{backgroundColor:'white !important'}} className='sidebarlogo'></img>
                <br/><br/> <br/>
                </NavLink>
                <ul  class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                   
                <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/anasayfa" class="nav-link px-0 align-middle">
                           <FaHome style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Anasayfa</span></NavLink>
                    </li>

                    <br/>

                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/slaytekle" class="nav-link px-0 align-middle">
                          <FaRegImages style={{color:'white'}}/>   <span class="ms-1 d-none d-sm-inline">Slaytlar</span></NavLink>
                    </li>

              <br/>

                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/hakkımızdaekle" class="nav-link px-0 align-middle">
                           <FaRegIdCard style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Hakkımızda</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/genelgeekle" class="nav-link px-0 align-middle">
                         <FaRegNewspaper style={{color:'white'}}/>   <span class="ms-1 d-none d-sm-inline">Genelgeler</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/haberekle" class="nav-link px-0 align-middle">
                        <FaRegNewspaper style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Haberler</span></NavLink>
                    </li>

                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/duyuruekle" class="nav-link px-0 align-middle">
                         <BsMegaphoneFill style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">Duyurular</span></NavLink>
                    </li>

                    <br/>
                    
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/destekekle" class="nav-link px-0 align-middle">
                          <CgMailOpen style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Destekler</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/odaekle" class="nav-link px-0 align-middle">
                            <HiUser style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Odalar</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/personelekle" class="nav-link px-0 align-middle">
                        <HiUser style={{color:'white'}}/> <span class="ms-1 d-none d-sm-inline">Personeller</span></NavLink>
                    </li>
                    <br/>
                    <li>
                        <NavLink style={{textDecoration:'none',color:'white'}} to="/Admin/iletisimekle" class="nav-link px-0 align-middle">
                          <ImAddressBook style={{color:'white'}}/>  <span class="ms-1 d-none d-sm-inline">İletişim</span></NavLink>
                    </li>
                       
                   
                </ul>
                <hr/>
               
            </div>
        </div>
        <div class="col py-3">
     
        <div className='page-header-card'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-8'>
                <h4> <FiHome style={{fontSize:'40px',backgroundColor:'rgb(64,153,255)',color:'white',padding:'5px'}}/> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

           </h4>
           &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Hakkımızda</span>
            </div>
            
            <div className='col-lg-4 d-flex justify-content-end'>  
           <FiHome style={{color:'#182446',marginTop:'4px'}}/>&nbsp;
           <p>/</p> &nbsp;
           <p> Hakkımızda</p>
            </div>
            </div>
            
            </div>
        </div>
        <br/><br/>

         <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card' style={{padding:'20px'}}>

                        <h3>Hakkımızda</h3>
                        <br/> <br/>
                    <Ckeditor/>
                    <br/>
                    <div className='d-flex justify-content-end'>
                    <button className='btngiris' role={'button'}>Ekle</button> 
                    </div>
                    
                    </div>
                   
                </div>
              
            </div>
         </div>

         <br/><br/>
         <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card' style={{padding:'50px'}}>

                        
                        <h4 className='baslık'>Hakkımızda</h4>
        <br/>
        <p className='yazıhakkımızda'>Esnaf ve Sanatkarlar Odaları Birliği, Anayasanın 135. maddesine göre Kanunla kurulmuş  kamu kurumu niteliğinde bir meslek   kuruluşudur. Birliği’in ilk yasal örgütlenmesi;  18 Kasım 1943 tarihli   4355 sayılı   Ticaret ve Sanayi Odaları, Esnaf Odaları, Ticaret Borsaları Kanunu ile sağlanmıştır. 1964 yılında yürürlüğe konulan 507 sayılı Esnaf ve Sanatkârlar Kanunu ile de esnaf-sanatkârlar teşkilatı bugünkü yapısına kavuşmuştur. Son olarak;  gelişen ve değişen koşullara uygun hale getirilmiş olan  ve 21 Haziran 2005'de yürürlüğe giren 5362 sayılı Esnaf ve Sanatkarlar Meslek Kuruluşları Kanunu hükümleri doğrultusunda çalışmalarını yürütmektedir.Isparta Esnaf ve Sanatkarlar Odaları Birliği'nin halen il ve ilçe düzeyinde kurulmuş 27 meslek odası sayıları 13n binin üzerinde kayıtlı esnaf ve sanatkarı bulunmaktadır. Birliğimiz ve alt teşkilatı, ahilikten gelen ilkelerini kaybetmeden bugün de ülkemizin en dinamik unsurları olan esnaf ve sanatkar kesiminin, toplumun ekonomik, sosyal, siyasal oluşumunda hak ettiği yeri alması, daha çağdaş ve güçlü bir yapıya ulaşması için gerekli çalışmalar sürdürülmektedir.Esnaf ve sanatkârlar odaları, arasında birliği temin, gelişme ve ilerlemeyi sağlamak. Genel olarak esnaf ve sanatkârların çalışmalarını meslekî yönden ve kamu yararına uygun olacak şekilde düzenlemek ve bu hususta gerekli görülecek her türlü tedbiri almak ve teşebbüste bulunmak, Meslekî eğitimlerini geliştirmek, esnaf ve sanatkârları yurt çapında ve uluslararası düzeyde temsil etmek,Sorunlarının çözümü için ulusal ve uluslararası kurum ve kuruluşlar nezdinde gerekli girişimlerde bulunmak, Ulusal ekonomideki gelişmelere paralel olarak lüzumlu görülecek meslekî tedbirleri almak. Bakanlık tarafından esnaf ve sanatkârlarla ilgili verilecek görevleri yapmak üzere kurulmuştur.</p>
        <br/>
        <h4 className='baslık'>GÖREVLERİMİZ</h4>
        <br/>
        <p className='yazıhakkımızda' >Birlik işlerini mevzuata ve genel kurul ve başkanlar kurulu tavsiyelerine uygun olarak yürütmek. Bakanlık tarafından mevzuat gereği verilecek görevleri yerine getirmek, Yeni dönem çalışma programı ile bu program içinde yer alacak olan eğitim, teorik ve pratik kurs programlarını ve tahmini bütçeyi hazırlamak ve genel kurulun onayına sunmak. Odaların çalışmalarını mevzuat ve ana sözleşmeleri esasları içinde yürütülmesini sağlamak için lüzumlu görülecek zamanlarda hesap ve işlemlerini incelemek ve alınması gerekli tedbirler hakkında bildirimde bulunmak; Odaların, gelecek yıl çalışma programları ile yıl sonu bilanço ve gelir ve gider cetvellerini değerlendirmek ve bu kuruluşlara yol gösterici tavsiyelerde bulunmak. Üyeleri hakkında gerekli bilgilerin Bakanlık e-esnaf ve sanatkâr veri tabanında düzenli olarak bulunmasını sağlamak, resmî ve özel mercilerce lüzumlu görülecek konularda istenecek bilgi ve mütalaayı vermek, mensuplarının genel meslekî menfaatlerini ilgilendiren konularda, adli ve idari yargı mercileri önünde Konfederasyon genel başkanı marifetiyle Konfederasyonu temsil etmek. Odalar arasında çıkacak anlaşmazlıkları incelemek ve çözüme kavuşturmak, çözüme kavuşturulamayan hususları Bakanlığa intikal ettirmek. Birlik topluluğu içindeki kuruluş mensuplarının meslek ve sanatlarının yürütülmesi için gerekli ve faydalı görülecek tedbirleri almak ve teşebbüslerde bulunmak. Birlik personelinin tüm bilgilerini Bakanlık e-esnaf ve sanatkâr veri tabanında takip etmek, genel sekreter ve diğer personelin atanma, terfi, cezalandırılma ve görevlerine son verilmesine karar vermek. Esnaf ve sanatkârlar meslek kuruluşlarını ilgilendiren konularda hazırlanacak mevzuat hakkında, gerektiğinde Birlik görüşünü oluşturmak ve ilgili makama sunmak. Ülke içinde ve dışında sergi ve fuarlar düzenlemek, desteklemek, katılmak ve Bakanlık izni alınmak şartıyla, ülke dışındaki meslekî kuruluşlara üye olma çalışmaları yapmak. Esnaf ve sanatkârlar ile Odaların ihtiyacı olan yardım ve kredileri sağlamak için gerekli girişimlerde bulunmak. Birlik katılma payının ve kayıt ücretinin Odalardan elektronik ortamda işlem sırasında tahsilini sağlamak. Kaybolmaya yüz tutmuş mesleklerin yaşatılması ve korunması için gerekli tedbirleri almak, konuyla ilgili olarak Bakanlığı bilgilendirmek.</p>
        <br/>

        <h4 className='baslık'>KURULUŞU/YASAL STATÜSÜ</h4>
        <br/>
        <p className='yazıhakkımızda'>Esnaf Odaları Birliği, Anayasanın 135. maddesine göre Kanunla kurulmuş  kamu kurumu niteliğinde bir meslek   kuruluşudur. Birliği’in ilk yasal örgütlenmesi;  18 Kasım 1943 tarihli   4355 sayılı   Ticaret ve Sanayi Odaları, Esnaf Odaları, Ticaret Borsaları Kanunu     ile sağlanmıştır. 1964 yılında yürürlüğe konulan 507 sayılı Esnaf ve Sanatkârlar Kanunu ile de esnaf-sanatkârlar teşkilatı bugünkü yapısına kavuşmuştur. Son olarak;  gelişen ve değişen koşullara uygun hale getirilmiş olan  ve 21 Haziran 2005'de yürürlüğe giren 5362 sayılı Esnaf ve Sanatkarlar Meslek Kuruluşları Kanunu hükümleri doğrultusunda çalışmalarını yürütmektedir. Isparta Esnaf ve Sanatkarlar Odaları Birliği'nin halen il ve ilçe düzeyinde kurulmuş 27 meslek odası sayıları 13n binin üzerinde kayıtlı esnaf ve sanatkarı bulunmaktadır. Birliğimiz ve alt teşkilatı, ahilikten gelen ilkelerini kaybetmeden bugün de ülkemizin en dinamik unsurları olan esnaf ve sanatkar kesiminin, toplumun ekonomik, sosyal, siyasal oluşumunda hak ettiği yeri alması, daha çağdaş ve güçlü bir yapıya ulaşması için gerekli çalışmalar sürdürülmektedir.</p>



                       
                    </div>
                   
                </div>
              
            </div>
         </div>
         </div>
         </div>

        
         </div>
 */}


        </div>
    )
}

export default AdminHakkımızda
