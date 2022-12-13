import React, { useEffect } from 'react'
import AracCubugu from './AracCubugu'
import { FaHome } from 'react-icons/fa'
import AltBaslık from './AltBaslık'
import { NavLink } from 'react-router-dom'

const Genelgeler = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <AracCubugu />
      <div className='hakkımızda flex-middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <h1 className='buyukbaslık'>Genelgeler</h1>
            </div>
            <div className='col-lg-3 d-flex justify-content-end'>
              <NavLink to='/'>
                <FaHome style={{ color: '#182446' }} /></NavLink>&nbsp;
              <p>/</p> &nbsp;
              <NavLink className='baslik' to='/Genelgeler'> Genelgeler</NavLink>
            </div>
          </div>
        </div>


      </div>

      <br /><br />
      <div className='container'>
        <div class="row">
          <div class="col-3 col-md-4 col-sm-6 col-12 col-lg-3">
            <div class="card genelge">
              <NavLink to='/TümGenelgeler' style={{ textDecoration: 'none' }}>
                <div class="card-body">
                  <h5 class="baslık">2022 Genelgeleri</h5>
                  <br />
                  <NavLink to="/TümGenelgeler"><button className='btnn' role={'button'}>Genelgeleri Gör</button></NavLink>


                </div>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
      <br /> <br />
      <AltBaslık />
    </div>
  )
}

export default Genelgeler
