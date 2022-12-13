import React, { useEffect, useState } from 'react'
import { FiHome } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import Sidebar from './Sidebar'
import { db, storage } from '../firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom' //localStorage
// import {useCollectionData} from 'react-firebase-hooks/firestore';





{/*----------------------------------------------------------------------*/ }

// SQL veri tabanları
// NoSQL veritabanları
// SQL vs NoSQL Varitabanları - yani ikisi arasındaki farklar, avantajlar, dezavantajlar
// Neden NoSQL veritabanı kullanıyoruz ? 
// NoSQL veri yapıları ?
// JSON veri yapısı ? JSON kullanımı ? JSON örnekleri?

{/*----------------------------------------------------------------------*/ }

// API nedir ?
// API kullanım alanları ?
// ReactJS API kullanımı ? Axios - Fetch kütüphanelerinin çalışma mantığı

{/*----------------------------------------------------------------------*/ }

// NoSQL örnek veritabanleri çizimi ? Ağaç şeklinde dallanarak gidecek şekilde örnek çizimler.

{/*----------------------------------------------------------------------*/ }


const AdminSlayt = () => {

  const [slaytbaslık, setSlaytbaslık] = useState("");
  const [slayturl, setSlayturl] = useState("");
  const [slayticerik, setSlayticerik] = useState("");
  const [postLists, setPostList] = useState([]);
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);


// -------------------------localStorage - Session START---------------------------------

  const navigate = useNavigate();

  useEffect(() => {
    if (!!!sessionStorage.getItem("isAuthenticated")) {
      navigate('/Admin')
    }
  }, [navigate])

// -------------------------localStorage - Session END---------------------------------




  useEffect(
    () =>
      onSnapshot(collection(db, `Slayt`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );


  {/*----------------------------Slayt Kayıt Fonksiyonu START------------------------------------------*/ }

  async function slaytkaydet() {

    const docRef = await addDoc(
      collection(db, `Slayt`),
      {
        slaytbaslık: slaytbaslık,
        slayticerik: slayticerik,
        slayturl: slayturl
      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setSlaytbaslık("");
    setSlayticerik("");
    setSlayturl("");
  }

  {/*-------------------------------Slayt Kayıt Fonksiyonu END---------------------------------------*/ }






  {/*----------------------------Slayt Silme Fonksiyonu START------------------------------------------*/ }

  const deletePost = async (id) => {
    const postDoc = doc(db, "Slayt", id)
    await deleteDoc(postDoc)
  }

  {/*----------------------------Slayt Silme Fonksiyonu START------------------------------------------*/ }



  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const file = e.target[0]?.files[0]

  //   if (!file) return;

  //   const storageRef = ref(storage, `files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on("state_changed",
  //     (snapshot) => {
  //       const progress =
  //         Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  //       setProgresspercent(progress);
  //     },
  //     (error) => {
  //       alert(error);
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         setImgUrl(downloadURL)
  //       });
  //     }
  //   );
  // }








  // const [blogs,setBlogs]=useState([])

  // useEffect(() => {
  //   fetchBlogs();
  // }, [])

  // const fetchBlogs=async()=>{
  //   const response=db.collection('Blogs');
  //   const data=await response.get();
  //   data.docs.forEach(item=>{
  //     setBlogs([...blogs,item.data()])
  //   })







  //   const ekle = async (e) => {
  //     e.preventDefault();  

  //     try {
  //         const docRef = await addDoc(collection(db, "esnaff"), {
  //           slaytbaslık: slaytbaslık,
  //           slayticerik: slayticerik,    


  //         });

  //         console.log(docRef);
  //         console.log("Document written with ID: ", docRef.id);


  //       } catch (e) {
  //         console.error("Error adding document: ", e);
  //       }
  //       setSlaytbaslık("");
  //       setSlayticerik("");
  //       setSlayturl("");
  // }


  //  const esnafbirligiConverter = {
  //   toFirestore: (esnafbirligi) =>{
  //     return {
  //       slaytbaslık: esnafbirligi.slaytbaslık,
  //       slayticerik: esnafbirligi.slayticerik,
  //     };
  //   },
  //   fromFirestore: (snapshot, options) => {

  //     const data= snapshot.data(options);
  //       return {
  //         id: snapshot.id,
  //         slaytbaslık: data.slaytbaslık,
  //         slayticerik: data.slayticerik

  //       }
  //     }


  //   }

  // const [esnafbirligi] = useCollectionData(collection(db, "esnafbirligi").withConverter(esnafbirligiConverter));
  // console.log(esnafbirligi);



  return (

    <div style={{ backgroundColor: 'rgb(242,247,251)' }}>

      <Sidebar>
        <br /><br />

        <div style={{ margin: '50px' }}>

          <div className='page-header-card'>

            <div className='row'>
              <div className='col-lg-8'>
                <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

                </h4>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Slaytlar</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> Slaytlar</p>
              </div>
            </div>


          </div>
          <br /><br />


          <div className='row'>
            <div className='col-lg-12'>

              <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
                <h3>Slaytlar</h3> <br /> <br />
                <label style={{ fontSize: '20px' }}>Slayt Başlık</label> <br /><br />
                <input type="text" class="form-control" value={slaytbaslık} onChange={(event) => { setSlaytbaslık(event.target.value) }} placeholder="Slayt başlığı giriniz." /> <br />

                 <label style={{ fontSize: '20px' }}>Slayt URL</label> <br /><br />
                <input id="img" type="file" class="form-control" onChange={(event) => { setImgUrl(event.target.value) }} ></input><br /> 

                {/* <form onSubmit={handleSubmit} className='form'>
                  <input type='file' class="form-control" />
                  {
                    !imgUrl &&
                    <div className='outerbar'>
                      <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                    </div>
                  }
                  {
                    imgUrl &&
                    <img src={imgUrl} alt='uploaded file' height={200} />
                  }
                  <button type='submit'>Upload</button>
                </form> */}



                <label style={{ fontSize: '20px' }} id="content">Slayt İçerik</label> <br /><br />
                <input type="text" onChange={(event) => { setSlayticerik(event.target.value) }} placeholder="Slayt görsel url giriniz."></input><br />

                <p>Kalan Karekter sayısı : 250</p>
                <div className='d-flex justify-content-end'>

                  <button className='btngiris' onClick={slaytkaydet} >Ekle</button>
                  <br />
                  <div>
                    <br /><br /><br /><br />
                    {/* {postLists.map((post) => {
        return(
         <div>

          {post.slaytbaslık}<br/><br/>
          {post.slayticerik}<br/><br/>
          {post.slayturl}<br/><br/>

      
        </div>

     
        
      )})} */}
                  </div>

                  {/* {esnafbirligi?.map((esnafbirligi) =>(
          <li key={esnafbirligi.id}>
            {esnafbirligi.slaytbaslık}
            {esnafbirligi.slayticerik}
          </li>
        ))} */}

                </div>

              </div>
            </div>

          </div>



          <div className='row'>
            <div className='col-lg-12'>
              <br /> <br /><br /> <br />


              <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
                <h5>Slaytlar</h5> <br />
                <div className='row'>
                  <div className='col-lg-6'>

                    Show <select name="dom-jqry_length" aria-controls="dom-jqry" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries
                  </div>

                  <div className='col-lg-6 d-flex justify-content-end'>
                    <p style={{ margin: '5px' }}>Search:</p>

                    <input type="search" class="" placeholder="" aria-controls="dom-jqry"></input>
                  </div>
                </div>
                <div className='table-responsive'>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">Slayt Görsel</th>
                        <th scope="col">Slayt Başlık</th>
                        <th scope="col">Slayt İçerik</th>
                      </tr>
                    </thead>
                    <tbody>



                      {postLists &&
                        postLists.length > 0 &&
                        postLists.map((doc) => (

                          <tr key={doc.id}>
                            <th scope="row"></th>
                            <td> {doc.slayticerik && <img src={doc.slayticerik} alt='some' className='img-fluid' style={{ height: '80px', width: 'auto' }}></img>}</td>
                            <td>{doc.slaytbaslık}</td>
                            <td> {doc.slayticerik}</td>
                            <td><RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /></td>
                          </tr>

                        ))}


                    </tbody>
                  </table>
                </div>
                <div className='row'>
                  <div className='col-lg-6'>
                    <p>Showing 1 to 1 of 1 entries</p>
                  </div>

                  <div className='col-lg-6 d-flex justify-content-end'>
                    <p style={{ margin: '5px' }}>Previous</p>
                    <button style={{ margin: '5px' }}>1</button>
                    <p style={{ margin: '5px' }}>Next</p>

                  </div>
                </div>
              </div>

              <br />
            </div>

          </div>

        </div>

      </Sidebar>
    </div>




  )
}

export default AdminSlayt
