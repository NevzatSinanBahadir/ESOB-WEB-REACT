import React, { useState, useEffect } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaHome,
    FaRegNewspaper,
    FaRegImages,
    FaRegIdCard
} from "react-icons/fa";
import { BsMegaphoneFill } from 'react-icons/bs'
import { CgMailOpen } from 'react-icons/cg'
import { HiUser } from 'react-icons/hi'
import { ImAddressBook } from 'react-icons/im'
import { NavLink,useNavigate } from 'react-router-dom';
import Sidebarlogo from '../Resimler/yazili_logo.png'
import HeaderBar from './HeaderBar';
import { Navbar, Nav, Container } from "react-bootstrap";
import "./myStyles.css";



const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const navigate = useNavigate();


  


    const toggle = () => {

   setIsOpen (!isOpen);
        

    
    //     if(!localStorage.getItem("toggle")) {
           
    //         localStorage.setItem("toggle", "true");
    //     } 

     
        
    //     else {
    //         if(localStorage.getItem("toggle") === "true") {
           
    //         localStorage.setItem("toggle", "false");
    //       }

          
    //         else if(localStorage.getItem("toggle") === "false") {
            
    //         localStorage.setItem("toggle", "true")
            
    //       }
    //     }

       

     }




    const menuItem = [
        {
            path: "/admin/anasayfa",
            name: "Anasayfa",
            icon: <FaHome />
        },
        {
            path: "/admin/slaytekle",
            name: "Slaytlar",
            icon: <FaRegImages />
        },
        {
            path: "/admin/hakkımızdaekle",
            name: "Hakkımızda",
            icon: <FaRegIdCard />
        },
        {
            path: "/admin/genelgeekle",
            name: "Genelgeler",
            icon: <FaRegNewspaper />
        },
        {
            path: "/admin/haberekle",
            name: "Haberler",
            icon: <FaRegNewspaper />
        },
        {
            path: "/admin/duyuruekle",
            name: "Duyurular",
            icon: <BsMegaphoneFill />
        },
        {
            path: "/admin/destekekle",
            name: "Destekler",
            icon: <CgMailOpen />
        },
        {
            path: "/admin/odaekle",
            name: "Odalar",
            icon: <HiUser />
        },
        {
            path: "/admin/personelekle",
            name: "Personeller",
            icon: <HiUser />
        },
        {
            path: "/admin/iletisimekle",
            name: "İletişimler",
            icon: <ImAddressBook />
        },

    ]
    return (
        <div className='d-flex sinan'>
            
            <div style={{ width: isOpen ? "270px" :"50px" }} className="sidebaryeni">
                <div className="top_sectionyeni">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logoyeni"><img src={Sidebarlogo} alt='' className='logoyeni'></img></h1>
                    <div style={{ marginLeft: isOpen ? "30px" : "0px" }} className="barsyeni">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="linkyeni" activeclassName="active">
                            <div className="iconyeni">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_textyeni">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <main>{children}</main>

            {/* <Navbar className='headerbar' style={{position:'absolute', width:'100%', backgroundColor:'white', fontSize:'30px',height:'70px',zIndex:'0',border:'1px solid'}}>
      <Container>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
        </div>

    );
};

export default Sidebar;