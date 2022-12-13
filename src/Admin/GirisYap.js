import React, { useState } from 'react'
import NavLink from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const GirisYap = () => {

  //  ------------------------Giriş Ekranı localStorage - Session START-------------------- 
  
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "esnaflar odası" && pass === "kma") {
      sessionStorage.setItem("isAuthenticated", true);
      navigate("/Admin/anasayfa");
    }

    //  ------------------------localStorage - Session END-------------------- 

  }
  return (
    <div className='arkaplan'>
      <div className='container'>
        <div className='row d-flex justify-content-center' style={{ placeItems: 'center', height: '100vh' }}>
          <div className='col-lg-6 giris d-flex justify-content-start'>
            <div className='girisyap'>
              <div class="input-group mb-3">
                <h1>Isparta ESOB</h1>
              </div>


              <form onSubmit={(e) => handleSubmit(e)}>
                <div class="mb-3">
                  <label style={{ backgroundColor: '#182446', color: 'white', padding: '5px' }}>Kullanıcı Adı</label>
                  <input type="text" class="form-control" placeholder="Kullanıcı adını giriniz" onChange={(e) => setUser(e.target.value)}></input>
                </div>

                <div class="mb-3">
                  <label style={{ backgroundColor: '#182446', color: 'white', padding: '5px' }}>Şifre</label>
                  <input type="password" class="form-control" placeholder="Şifrenizi giriniz" onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <div class="mb-3 d-flex justify-content-center">
                  <input className='btngiris' type="submit" value="Giriş Yap"></input>
                </div>
              </form>
            </div>
          </div>




        </div>
      </div>


    </div>
  )
}

export default GirisYap
