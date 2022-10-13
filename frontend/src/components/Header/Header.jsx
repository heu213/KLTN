import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";


function Header() {
  const toggleMenu = () => {
    const navContainer = document.getElementById('navbarSupportedContent');
    navContainer.classList.toggle('show-nav');
    return navContainer;
  }
  return (
  //   <header className="header_section">
  //   <div className="container-fluid">
  //     <nav className="navbar navbar-expand-lg custom_nav-container ">
  //       <Link className="navbar-brand" to='/'>
  //         <span>
  //           BOOKDISCOVERY
  //         </span>
  //       </Link>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <div className='nav-items'>
  //         <div className="nav-close">
  //         <h3 onClick={toggleMenu}>&#10539;</h3>
  //         </div>
  //         <ul className="navbar-nav">
  //           <li className="nav-item">
  //           <Link className="nav-link" to='/'> Trang chủ </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to='/sanpham'> Sản phẩm </Link>
  //           </li>
  //           <li className="nav-item active">
  //             <Link className="nav-link" to='/thongtin'> Thông tin</Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to='/lienhe'>Liên hệ</Link>
  //           </li>
  //         </ul>
  //         <div className="user_option-box">
  //           <Link to='/user'>
  //             <i className="fa fa-user" aria-hidden="true" />
  //           </Link>
  //           <Link to='/cart'>
  //             <i className="fa fa-cart-plus" aria-hidden="true" />
  //           </Link>
  //         </div>
  //       </div>
  //       </div>
  //       <div className="menu-icon">
  //       <h3 onClick={toggleMenu}>&#9776;</h3>
  //     </div>
  //     </nav>
  //   </div>
  // </header>
  <div className='header_container'>
      <div className='header_logo'>
        <span>BOOKDISCOVERY</span>
      </div>
      <div className='header_content'>
      <ul className='header_list'>
        <li className='header-item'>Trang chủ</li>
        <li className='header-item'>Sản phẩm</li>
        <li className='header-item'>Thông tin</li>
        <li className='header-item'>Liên hệ</li>
      </ul>
      </div>
      <div className='header_icon-user'>
        <i className="fa fa-user" aria-hidden="true" />
      </div>
      <div className='header_icon-cart'>
        <i className='fa fa-cart-plus' aria-hidden="true" />
      </div>
  </div>
  )
}

export default Header