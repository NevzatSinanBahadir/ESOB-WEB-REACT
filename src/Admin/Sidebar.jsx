import React, { useState } from 'react';
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
}from "react-icons/fa";
import {BsMegaphoneFill} from 'react-icons/bs'
import {CgMailOpen} from 'react-icons/cg'
import {HiUser} from 'react-icons/hi'
import {ImAddressBook} from 'react-icons/im'
import { NavLink } from 'react-router-dom';
import Sidebarlogo from '../Resimler/yazili_logo.png'
import HeaderBar from './HeaderBar';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Admin/anasayfa",
            name:"Anasayfa",
            icon:<FaHome/>
        },
        {
            path:"/Admin/slaytekle",
            name:"Slaytlar",
            icon:<FaRegImages/>
        },
        {
            path:"/Admin/hakkımızdaekle",
            name:"Hakkımızda",
            icon:<FaRegIdCard/>
        },
        {
            path:"/Admin/genelgeekle",
            name:"Genelgeler",
            icon:<FaRegNewspaper/>
        },
        {
            path:"/Admin/haberekle",
            name:"Haberler",
            icon:<FaRegNewspaper/>
        },
        {
            path:"/Admin/duyuruekle",
            name:"Duyurular",
            icon:<BsMegaphoneFill/>
        },
        {
            path:"/Admin/destekekle",
            name:"Destekler",
            icon:<CgMailOpen/>
        },
        {
            path:"/Admin/odaekle",
            name:"Odalar",
            icon:<HiUser/>
        },
        {
            path:"/Admin/personelekle",
            name:"Personeller",
            icon:<HiUser/>
        },
        {
            path:"/Admin/iletisimekle",
            name:"İletişimler",
            icon:<ImAddressBook/>
        },
    ]
    return (
        <div className='d-flex'>
        
            
               
           <div  style={{width: isOpen ? "270px" : "50px"}} className="sidebaryeni">
               <div className="top_sectionyeni">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logoyeni"><img src={Sidebarlogo} alt='' className='logoyeni'></img></h1>
                   <div style={{marginLeft: isOpen ? "30px" : "0px"}} className="barsyeni">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="linkyeni" activeclassName="active">
                           <div className="iconyeni">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_textyeni">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
      
    
        </div>
       
    );
};

export default Sidebar;