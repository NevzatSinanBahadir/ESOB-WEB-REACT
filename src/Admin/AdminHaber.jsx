import React, { useState, useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import Ckeditor from './Ckeditor'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaEdit } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, storage } from '../firebase'
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { useNavigate } from 'react-router-dom' //localStorage
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage"


const AdminHaber = () => {



  const [haberbaslık, setHaberbaslık] = useState("");
  const [haberurl, setHaberurl] = useState("");
  const [habericerik, setHabericerik] = useState("");
  const [haberFoto, setHaberFoto] = useState("");
  const [postLists, setPostList] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // -------------------------localStorage - Session START---------------------------------

  const navigate = useNavigate();

  useEffect(() => {
    if (!!!sessionStorage.getItem("isAuthenticated")) {
      navigate('/giris')
    }
  }, [navigate])

  // -------------------------localStorage - Session END---------------------------------

  useEffect(
    () =>
      onSnapshot(collection(db, `haberler`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );


  {/*----------------------------Slayt Kayıt Fonksiyonu START------------------------------------------*/ }

  async function haberkaydet() {

    const docRef = await addDoc(
      collection(db, `haberler`),
      {
        haberbaslık: haberbaslık,
        habericerik: habericerik,
        haberurl: haberurl,
        haberFoto:haberFoto
      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setHaberbaslık("");
    setHabericerik("");
    setHaberurl("");
  }

  {/*-------------------------------Slayt Kayıt Fonksiyonu END---------------------------------------*/ }






  {/*----------------------------Slayt Silme Fonksiyonu START------------------------------------------*/ }

  const deletePost = async (id) => {
    const postDoc = doc(db, "haberler", id)
    await deleteDoc(postDoc)
  }

  {/*----------------------------Slayt Silme Fonksiyonu END------------------------------------------*/ }



   {/*----------------------------Fotoğraf Dosyası UPLOAD START------------------------------------------*/ }
   const [haberFoto_progress, setHaberFoto_Progress] = useState(0);
   const formHandler_haberFoto = (e) => {
     console.log(e.target.files[0])
 
     const file = e.target.files[0];
     uploadFiles_haberFoto(file);
   };
 
   const uploadFiles_haberFoto = (file) => {
     const d = new Date();
     const saat = d.getHours();
     const dk = d.getMinutes();
     const sn = d.getMilliseconds();
     //
     if (!file) return;
     const sotrageRef = ref(storage, `/haberFotograf/${haberbaslık}/${saat + ":" + dk + ":" + sn}${file.name}`);
     const uploadTask = uploadBytesResumable(sotrageRef, file);
 
     uploadTask.on(
       "state_changed",
       (snapshot) => {
         const prog = Math.round(
           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
         );
         setHaberFoto_Progress(prog);
       },
       (error) => console.log(error),
       () => {
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           setHaberFoto(downloadURL)
         });
       }
     );
   };
   {/*----------------------------Fotoğraf Dosyası UPLOAD END------------------------------------------*/ }
  return (
    <div style={{ backgroundColor: 'rgb(242,247,251)' }}>

        <br /><br />

        <div style={{ margin: '50px' }}>
          <div className='page-header-card'>

            <div className='row'>
              <div className='col-lg-8'>
                <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

                </h4>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Haberler</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> Haberler</p>



              </div>
            </div>
            <br /><br />



            <div className='row'>
              <div className='col-lg-12'>
                <div className='card' style={{ padding: '20px' }}>
                  <h3>Haberler</h3><br /><br />

                  <label style={{ fontSize: '20px' }}>Haber Başlık</label> <br />
                  <input type="text" class="form-control" id="exampleInputEmail1" value={haberbaslık} placeholder="Haber başlığı giriniz." onChange={(event) => { setHaberbaslık(event.target.value) }} /> <br />

                  <label style={{ fontSize: '20px' }}>Haber Görsel</label><br /><br />
                  <input id="img" type="file"  class="form-control" placeholder=""  onChange={(e) => formHandler_haberFoto(e)} ></input><br />

                  <label style={{ fontSize: '20px' }} id="content">Haber Görsel URL</label> <br /><br />
                  <input type="text"  class="form-control" value={haberurl} onChange={(event) => { setHaberurl(event.target.value) }} placeholder="Haber görsel url giriniz."></input><br />

                  <label style={{ fontSize: '20px' }}>Haber İçerik</label> <br />
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

                          setHabericerik(data)

                        }}
                        onBlur={(event, editor) => {
                          console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log('Focus.', editor);
                        }}
                      />
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className='d-flex justify-content-end'>
                    <button className='btngiris' onClick={haberkaydet}>Ekle</button>
                  </div>


                </div>

              </div>
            </div>
            <br /><br />

            <div className='row'>
              <div className='col-lg-12'>

                <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
                  <h5>Haberler</h5> <br />
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
                          <th scope="col">Haber Görsel</th>
                          <th scope="col">Haber Başlık</th>
                          <th scope="col">Haber İçerik</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>

                        {postLists &&
                          postLists.length > 0 &&
                          postLists.map((doc) => (

                            <tr key={doc.id}>

                              <td> {doc.haberurl && <img src={doc.haberurl} alt='some' className='img-fluid' style={{ height: '90px', width: 'auto' }}></img>}  
                              {doc.haberFoto && <img src={doc.haberFoto} alt='some' className='img-fluid' style={{ height: '90px', width: 'auto' }}></img>}</td>
                              <td>{doc.haberbaslık}</td>
                              <td className='satırboyutu'>{parse(doc.habericerik)}</td>
                              <td><Button variant="primary" onClick={handleShow}>
                              <RiDeleteBin5Line />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Silmek İstediğinize Emin misiniz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { deletePost(doc.id) }}>
            Sil
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal> <RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /> <FaEdit style={{ color: 'rgb(40,167,147)', fontSize: '25px' }} /></td>
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


        </div>
      

    </div>



  )
}

export default AdminHaber
