import React, { useState, useEffect } from 'react'
import { FiHome } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Ckeditor from './Ckeditor'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { AiFillPlusCircle } from 'react-icons/ai'
import Sidebar from './Sidebar'
import { db, storage } from '../firebase'
import { collection, addDoc, getDocs, doc, deleteDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';  //Ck editör ekrana özelliklerini bastırma. npm i html-react-parser
import { useNavigate } from 'react-router-dom' //localStorage

const AdminGenelge = () => {

  const [genelgebaslık, setGenelgebaslık] = useState("");
  const [genelgeicerik, setGenelgeicerik] = useState("");

  const [postLists, setPostList] = useState([]);




  useEffect(
    () =>
      onSnapshot(collection(db, `genelgeler`), (snapshot) =>
        setPostList(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );




  async function genelgekaydet() {

    const docRef = await addDoc(
      collection(db, `genelgeler`),
      {
        genelgebaslık: genelgebaslık,
        genelgeicerik: genelgeicerik
      }
    );
    await updateDoc(docRef, {
      id: docRef.id,
    });
    setGenelgebaslık("");
    setGenelgeicerik("");

  }

  const deletePost = async (id) => {
    const postDoc = doc(db, "genelgeler", id)
    await deleteDoc(postDoc)
  }



  return (
    <div style={{ backgroundColor: 'rgb(242,247,251)', height:'100%' }}>

  


        <br /><br />
        <div style={{ margin: '50px' }}>
          <div className='page-header-card'>

            <div className='row'>
              <div className='col-lg-8'>
                <h4> <FiHome style={{ fontSize: '40px', backgroundColor: 'rgb(64,153,255)', color: 'white', padding: '5px' }} /> Isparta Esnaf Ve Sanatkarlar Odaları Birliği

                </h4>
                &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <span>Genelgeler</span>
              </div>

              <div className='col-lg-4 d-flex justify-content-end'>
                <FiHome style={{ color: '#182446', marginTop: '4px' }} />&nbsp;
                <p>/</p> &nbsp;
                <p> Genelgeler</p>

              </div>
            </div>


            <br /><br />


            <div className='row'>
              <div className='col-lg-12'>
                <div className='card' style={{ padding: '20px' }}>
                  <h3>Genelgeler</h3><br /><br />


                  <label style={{ fontSize: '20px' }}>Genelge Başlık</label> <br />
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Genelge Başlığı giriniz." value={genelgebaslık} onChange={(event) => { setGenelgebaslık(event.target.value) }} /> <br />


                  <label style={{ fontSize: '20px' }}>Genelge İçerik</label> <br />

                  <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col'>
                      <CKEditor
                        editor={ClassicEditor}
                        value={genelgeicerik}
                        data=""
                        onReady={editor => {
                          console.log('Editor is ready to use!', editor);
                        }}
                        
                        onChange={(event, editor) => {
                          const data = editor.getData();

                          setGenelgeicerik(data)
                         

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
                    <button className='btngiris' onClick={genelgekaydet}>Ekle</button>
                  </div>

                </div>


              </div>
            </div>
            <br /><br />

            <div className='row'>
              <div className='col-lg-12'>

                <div className='card' style={{ backgroundColor: 'white', padding: '20px' }}>
                  <h5>Genelgeler</h5> <br />
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
                          <th scope="col">Genelge Başlık</th>
                          <th scope="col">Genelge İçerik</th>
                          <th scope="col"></th>

                        </tr>
                      </thead>
                      <tbody>
                        {postLists &&
                          postLists.length > 0 &&
                          postLists.map((doc) => (

                            <tr key={doc.id}>

                              <td>{doc.genelgebaslık}</td>
                              <td>{parse(doc.genelgeicerik)}</td>
                            

                              <td><RiDeleteBin5Line className='çöpkutusu' onClick={() => { deletePost(doc.id) }} style={{ color: 'red', fontSize: '25px' }} /><NavLink to='/admin/genelgepdfekle'>< AiFillPlusCircle style={{ color: 'green', fontSize: '25px' }} className='çöpkutusu'/></NavLink></td>
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

export default AdminGenelge
