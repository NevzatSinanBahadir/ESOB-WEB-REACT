import React from 'react'
import YazılıLogo from '../Resimler/yazili_logo.png'
import classNames from 'classnames';
import UseSticky from './UseSticky';
import ÜstBar from '../Resimler/ustbar.png'
import {BsTwitter} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import Nav from 'react-bootstrap/Nav';
import{NavLink} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';


const AracCubugu = () => {
   const { sticky, stickyRef } = UseSticky();
  return (
    
    <div>
       
      
          <div className='col-lg-12'>

      <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
      />
      <main className="content" /> 
      <header className="header">
      <img src={ÜstBar} alt=""className="img-fluid w-100"/>
      </header>
      <div className='siyah'>
        <div className=' container'>
            <div className='row'>
            <div className='col-md-4 p-2'>
     
           <a className='sosyalmedya' href="https://twitter.com/ahmettural32" target="_blank" style={{fontSize:'14px'}}><BsTwitter/></a>  &nbsp;&nbsp;&nbsp;
           <a className='sosyalmedya' href="https://www.facebook.com/Ahmettural32" target="_blank" style={{fontSize:'14px'}}><AiFillFacebook/></a>  &nbsp;&nbsp;&nbsp;
          <a className='sosyalmedya' href="https://www.instagram.com/ahmettural32/" target="_blank" style={{fontSize:'14px'}}><AiFillInstagram/></a> &nbsp;&nbsp;&nbsp;
          </div>   
          <div className='col-md-8 d-flex justify-content-end p-2'>
            <p style={{fontSize:'13px'}}>
           <a href><BsFillTelephoneFill /> &nbsp; 0246 218 15 13</a> 
           &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
           </p>
           <p style={{fontSize:'13px'}}>
            <a href><HiOutlineMail/> &nbsp; ispartaesob@ispartaesob.org</a>
            </p>
            </div>  
            
          </div>      
    </div>
      </div>
      
      <nav  ref={stickyRef} className={classNames({ sticky })}>
     
     <Navbar collapseOnSelect expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home"><img src={YazılıLogo} alt=""className="YazılıLogo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'white'}} />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
          
          </Nav>
          <Nav>
              <Nav.Link><NavLink className='arac' style={{color:'#ffffff',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/">ANASAYFA</NavLink></Nav.Link>
          <NavDropdown className='arac' style={{margin:'0px'}} title='KURUMSAL' id="nav-dropdown">
              <NavDropdown.Item><NavLink style={{color:'black',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Hakkımızda">HAKKIMIZDA</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink style={{color:'black',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Genelgeler">GENELGELER</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink style={{color:'black',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Odalar">ODALAR</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink style={{color:'black',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Baskan">BAŞKAN</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink style={{color:'black',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Personeller">PERSONELLER</NavLink></NavDropdown.Item> 
            </NavDropdown>
            
            <Nav.Link><NavLink className='arac' style={{color:'#ffffff',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Haberler">HABERLER</NavLink></Nav.Link>
            <Nav.Link><NavLink className='arac' style={{color:'#ffffff',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Duyurular">DUYURULAR</NavLink></Nav.Link>
            <Nav.Link><NavLink className='arac' style={{color:'#ffffff',fontSize:'13px',padding:'25px',textDecoration:'none',fontWeight: 'bold'}} to="/Destekler">DESTEKLER</NavLink></Nav.Link>
            <button className='arac' style={{width:'110px',borderRadius:'50px',backgroundColor:'white',fontSize:'14px',fontWeight:'bold'}}><NavLink  to="/Iletisim" style={{color:'black', textDecoration:'none'}}>İLETİŞİM</NavLink></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </nav>
      
    
      <main className="content" /> 

      </div>
 </div>
    


    
  )
}

export default AracCubugu
