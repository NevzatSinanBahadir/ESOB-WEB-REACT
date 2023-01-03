import React, { useEffect, useState } from 'react'
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
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage"


const AdminDestek = () => {

  const [destekurl, setDestekurl] = useState("");
  const [destekFoto, setDestekFoto] = useState("");
  const [destekisim, setDestekisim] = useState("");
  const [destekicerik, setDestekicerik] = useState("");
  const [postLists, setPostList] = useState([]);


  // -------------------------localStorage - Session START---------------------------------

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!!!sessionStorage.getItem("isAuthenticated")) {
  //     navigate('/giris')
  //   }
  // }, [navigate])

  // -------------------------localStorage - Session END---------------------------------

  useEffect(
    () =>
      onSnapshot(collection(db, `destekler`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );


  {/*----------------------------Slayt Kayıt Fonksiyonu START------------------------------------------*/ }

  async function destekkaydet() {

    const docRef = await addDoc(
      collection(db, `destekler`),
      {
        destekFoto:destekFoto,
        destekurl: destekurl,
        destekisim: destekisim,
        destekicerik: destekicerik

      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setDestekurl("");
    setDestekisim("");
    setDestekicerik("");
  }

  {/*-------------------------------Slayt Kayıt Fonksiyonu END---------------------------------------*/ }



  {/*----------------------------Fotoğraf Dosyası UPLOAD START------------------------------------------*/ }
  const [destekFoto_progress, setDestekFoto_Progress] = useState(0);
  const formHandler_destekFoto = (e) => {
    console.log(e.target.files[0])

    const file = e.target.files[0];
    uploadFiles_destekFoto(file);
  };

  const uploadFiles_destekFoto = (file) => {
    const d = new Date();
    const saat = d.getHours();
    const dk = d.getMinutes();
    const sn = d.getMilliseconds();
    //
    if (!file) return;
    const sotrageRef = ref(storage, `/destekFotograf/${destekisim}/${saat + ":" + dk + ":" + sn}${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setDestekFoto_Progress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDestekFoto(downloadURL)
        });
      }
    );
  };
  {/*----------------------------Fotoğraf Dosyası UPLOAD END------------------------------------------*/ }


  {/*----------------------------Slayt Silme Fonksiyonu START------------------------------------------*/ }

  const deletePost = async (id) => {
    const postDoc = doc(db, "destekler", id)
    await deleteDoc(postDoc)
  }

  {/*----------------------------Slayt Silme Fonksiyonu END------------------------------------------*/ }

  return (
    <div style={{ backgroundColor: 'rgb(242,247,251)', height: '100%' }}>

      <br /><br />
      <div style={{ margin: '50px' }}>
        <div className='page-header-card'>

          <div className='row'>
            <div className='col-lg-8'>
              <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

              </h4>
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Destekler</span>
            </div>

            <div className='col-lg-4 d-flex justify-content-end'>
              <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
              <p>/</p> &nbsp;
              <p> Destekler</p>

            </div>
          </div>


          <br /><br />



          <div className='row'>
            <div className='col-lg-12'>
              <div className='card' style={{ padding: '20px' }}>
                <h3>Destekler</h3><br /><br />


                <label style={{ fontSize: '20px' }}>Destekleyen Kurum Logo URL</label><br /><br />
                <input id="img" type="file" class="form-control" placeholder="" onChange={(e) => formHandler_destekFoto(e)}></input><br />

                <label style={{ fontSize: '20px' }}>Destekleyen Kurum İsim</label> <br />
                <input type="text" class="form-control" value={destekisim} id="exampleInputEmail1" placeholder="Destekleyen kurumunun ismini giriniz." onChange={(event) => { setDestekisim(event.target.value) }} /> <br />

                <label style={{ fontSize: '20px' }} id="content">Destek İçerik</label> <br /><br />
                <input type="text" class="form-control" value={destekurl} onChange={(event) => { setDestekurl(event.target.value) }} placeholder="Destek görsel url giriniz."></input><br />

                <label style={{ fontSize: '20px' }}>Destekleyen Kurum Hakkında</label> <br />
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

                        setDestekicerik(data)

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
                <div className='d-flex justify-content-end'>
                  <button className='btngiris' onClick={destekkaydet}>Ekle</button>
                </div>

              </div>
            </div>

          </div>

          <br /><br />

          <div className='row'>
            <div className='col-lg-12'>

              <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
                <h5>Destekler</h5> <br />
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
                        <th scope="col">Destekleyen Kurum Logo</th>
                        <th scope="col">Destekleyen Kurum Başlık</th>
                        <th scope="col">Destekleyen KURUM Hakkında</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {postLists &&
                        postLists.length > 0 &&
                        postLists.map((doc) => (

                          <tr key={doc.id}>

                            <td> {doc.destekurl && <img src={doc.destekurl} alt='some' className='img-fluid' style={{ height: '90px', width: 'auto' }}></img>}
                              {doc.destekFoto && <img src={doc.destekFoto} alt='some' className='img-fluid' style={{ height: '90px', width: 'auto' }}></img>}</td>
                            <td>{doc.destekisim}</td>
                            <td className='satırboyutu'>{parse(doc.destekicerik)}</td>
                            <td><RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /> <FaEdit style={{ color: 'rgb(40,167,147)', fontSize: '25px' }} /></td>
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

      <br /><br /><br />



    </div>


  )
}

export default AdminDestek
