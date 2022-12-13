import React, { useState, useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { db, storage } from '../firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom' //localStorage


const AdminOda = () => {
  const [odaurl, setOdaurl] = useState("");
  const [odaismi, setOdaismi] = useState("");
  const [odabaskanı, setOdabaskanı] = useState("");
  const [odagenelsekreter, setOdagenelsekreter] = useState("");
  const [odatel, setodatel] = useState("");
  const [odatip, setOdatip] = useState("");
  const [postLists, setPostList] = useState([]);

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
      onSnapshot(collection(db, `Odalar`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );




  async function odakaydet() {
    const docRef = await addDoc(
      collection(db, `Odalar`),
      {
        odaismi: odaismi,
        odabaskanı: odabaskanı,
        odagenelsekreter: odagenelsekreter,
        odatel: odatel,
        odatipi: odatip,
        odaurl: odaurl

      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setOdaismi("");
    setOdabaskanı("");
    setOdagenelsekreter("");
    setodatel("");
  }





  const deletePost = async (id) => {
    const postDoc = doc(db, "Odalar", id)
    await deleteDoc(postDoc)
  }




  function merkeoda() {
    setOdatip("Merkez")
  }

  function ilceoda() {
    setOdatip("İlçe")
  }





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
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Odalar</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> Odalar</p>
              </div>
            </div>


          </div>
          <br /><br />


          <div className='row'>
            <div className='col-lg-12'>
              <div className='card'>
                <div style={{ margin: '30px' }}>
                  <h3>Odalar</h3><br />




                  <label style={{ fontSize: '20px' }}>Oda İsmi</label><br /><br />
                  <input type="text" class="form-control" placeholder="Oda ismini giriniz." onChange={(event) => { setOdaismi(event.target.value) }}></input><br />
                  <label style={{ fontSize: '20px' }}>Oda Logo</label><br /><br />
                  <input id="img" type="file" class="form-control" placeholder=""></input><br />
                  <label style={{ fontSize: '20px' }} id="content">Oda Görsel</label> <br /><br />
                  <input type="text" onChange={(event) => { setOdaurl(event.target.value) }} placeholder="Oda görsel url giriniz."></input><br /><br />
                  <label style={{ fontSize: '20px' }}>Oda Başkanı</label><br /><br />
                  <input type="text" class="form-control" placeholder="Oda başkanını giriniz." onChange={(event) => { setOdabaskanı(event.target.value) }}></input><br />
                  <label style={{ fontSize: '20px' }}>Genel Sekreter</label><br /><br />
                  <input type="text" class="form-control" placeholder="Genel Sekreterini giriniz." onChange={(event) => { setOdagenelsekreter(event.target.value) }}></input><br />
                  <label style={{ fontSize: '20px' }}>Oda Telefon Numarası</label><br /><br />
                  <input type="number" class="form-control" placeholder="Oda telefon numarasını giriniz." onChange={(event) => { setodatel(event.target.value) }}></input><br />
                  <label style={{ fontSize: '20px' }}>Oda Kategori</label><br /><br />
                  <input type="radio" value="Merkez Oda" name="gender" onChange={merkeoda} /> Merkez Oda &nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="radio" value="İlçe Oda" name="gender" onChange={ilceoda} /> İlçe Oda <br /><br />


                  <div className='d-flex justify-content-end'>
                    <button className='btngiris' onClick={odakaydet}>Ekle</button>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <br /><br />




          <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
            <div className='row'>
              <br />
              <h4 className='baslık'>Merkez Odalar</h4>
              <br /><br />

              {postLists &&
                postLists.length > 0 &&
                postLists.map((doc) => (


                  <div key={doc.id} className='col-xl-3 col-lg-6 col-md-6' style={{ backgroundColor: 'white', padding: '20px' }}>
                    <div className='row'>


                      <div class="card odalarr" style={{ width: '18rem', borderRadius: '25PX' }} >

                        <img src={doc.odaurl} class="Amblem" alt='' />
                        <br />


                        <h6 class="list-group-item">{doc.odaismi}</h6><hr />
                        <h6 class="list-group-item">BAŞKAN: {doc.odabaskanı}</h6><hr />
                        <h6 class="list-group-item">G.SEKRETER: {doc.odagenelsekreter}</h6><hr />
                        <h6 class="list-group-item">TEL: {doc.odatel}</h6><hr />


                        <div className='d-flex justify-content-end'>
                          <footer><RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /> <FaEdit style={{ color: 'rgb(40,167,147)', fontSize: '25px' }} /></footer>
                        </div>
                        <br />

                      </div>
                      <br /><br />
                    </div>
                  </div>

                ))}
            </div>




          </div>
        </div>








      </Sidebar>
    </div>













  )
}

export default AdminOda
