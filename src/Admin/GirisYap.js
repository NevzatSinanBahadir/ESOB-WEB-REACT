import React, { useState,useEffect } from 'react'
import NavLink from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Alert } from "react-bootstrap";



const GirisYap = () => {

  //  ------------------------Giriş Ekranı localStorage - Session START-------------------- 
  
  const [admins, setAdmins] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 


  function usernameG(event) {
    setUsername(event.target.value);
  }

  function passwordG(event) {
    setPassword(event.target.value);
  }
  const navigate = useNavigate();
  useEffect(
    () =>
      onSnapshot(collection(db, `admins`), (snapshot) =>
        setAdmins(snapshot.docs.map((doc) => doc.data()))
      ),

    []
  );

  const [errorMessage, setErrorMessage] = useState(null)
  

  function handleSubmit(event) {

    event.preventDefault();
    
    for (let i = 0; i < admins.length; i++) {
      if (username == admins[i].username) {
        if (password == admins[i].password) {
          console.log("Giriş Başarılı.");
          localStorage.setItem("isAuthenticated", true);
          navigate('/admin/anasayfa');

          

          break;
        } else {
          console.log("Şifreniz Hatalı!");
          setErrorMessage("Şifreniz Hatalı!");
          break;
        }
      } else {
        console.log("Böyle bir kullanıcı bulunamadı!");
        setErrorMessage("Böyle bir kullanıcı bulunamadı!");
        break;
      }
    }
  }

  
  return (
   
    <div className='arkaplan'>
       
      <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='row d-flex justify-content-center' style={{ placeItems: 'center', height: '100vh' }}>
      
          <div className='col-lg-6 giris d-flex justify-content-start'>
         
            <div className='girisyap'>
              <div class="input-group mb-3">
                <h1>Isparta ESOB</h1>
              </div>

            
              
                <div class="mb-3">
                  <label style={{ backgroundColor: '#182446', color: 'white', padding: '5px' }}>Kullanıcı Adı</label>
                  <input type="text" class="form-control" placeholder="Kullanıcı adını giriniz" onChange={usernameG}></input>
                </div>

                <div class="mb-3">
                  <label style={{ backgroundColor: '#182446', color: 'white', padding: '5px' }}>Şifre</label>
                  <input type="password" class="form-control" placeholder="Şifrenizi giriniz" onChange={passwordG}></input>
                </div>
                {errorMessage && <Alert style={{color:'red', fontSize:'14px'}} variant="danger" >{errorMessage}</Alert>} 
                <div class="mb-3 d-flex justify-content-center">
                  <button className='btngiris' type='submit' >Giriş Yap</button>
                </div>
               
            </div>
            
          </div>

   


        </div>
        </form>
        
      </div>

    
    </div>
  )
}

export default GirisYap
