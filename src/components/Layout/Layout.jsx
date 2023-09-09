import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../../routes/Routes'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBacteria } from '@fortawesome/free-solid-svg-icons'
import LoginPopup from './LoginPopup';
import LogoutPopup from './LogoutPopup';
import { Link, useHistory } from 'react-router-dom'
import ScrollToTop from '../Utils/ScrollToTop';
import FacebookChatPlugin from './FacebookChatPlugin';
import FacebookLikeButton from './FacebookLikeButton';

const Layout = () => {

  return (
    <BrowserRouter>
          <ScrollToTop />
      <Route render={props => (
        <div>
          <Header />
          <div className="">
            <div className="main">
              <Routes />
            </div>
          </div>
          <FooterWrapper />
        </div>
      )} />
    </BrowserRouter>
  )
}

export default Layout

export const Header = (props) => {
  const [user, setUser] = useState();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const history = useHistory();
  const handleLogin = (user) => {
    sessionStorage.setItem('user', user);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser('');
  };

  useEffect( () => {
    const user = sessionStorage.getItem('user');
    setUser(JSON.parse(user));
  }, [sessionStorage.getItem('user')]); 

  return (
    <div className='header'>
      <div className='header_logo'>
        <Link to={{
          pathname: "/",
        }} className='LinkWithoutUnderline d-flex'>
          {/* <a><img src="../cute-logo.png" alt="" /></a> */}
          <div>PawfectIELTS </div>
        </Link>
      </div>
      <div className='header_menu'>
        <Link to="/test/list" className="LinkWithoutUnderline d-flex">
              <div>Làm đề thi</div>
        </Link>
        <a><div>Tài liệu</div></a>
        <a><div>Giới thiệu</div></a>
        <a><div>Liên lạc</div></a>
      </div>

      <div className="header_user ">
        {user ? (
          <>
            <Link to="/profile" className="LinkWithoutUnderline d-flex">
              <div>{user.name}</div>
            </Link>
            <button onClick={() => setShowLogoutPopup(true)}>logout</button>
          </>
        ) : (
          <div className='d-flex'>
            <button className=' m-2' onClick={() => setShowLoginPopup(true)}>Login</button>
            <Link to="/register" className="LinkWithoutUnderline d-flex">
              <button className='m-2'>Register</button>
            </Link>
          </div>
        )}

      </div>
      {showLoginPopup && (
        <LoginPopup
          onClose={() => setShowLoginPopup(false)}
          onLogin={handleLogin}
        />
      )}
      {showLogoutPopup && (
        <LogoutPopup
          onClose={() => setShowLogoutPopup(false)}
          onLogout={handleLogout}
        />
      )}

    </div>
  )
}

const Footer = () => {
  return (
    <>
    
      <div className="fb-like mb-2">
        {/* <FacebookLikeButton/> */}
       </div> 

      <div className="row">
        <div className="col-sm-12 col-md grow0">
          <a href="/"><img className="mb-2" src="/static/img/logo_full_sm.png" alt="" height="30" /></a>
          <div className="site-socials">
            {/* Social media links */}
            <a target="_blank" href="https://facebook.com/study4.official"> <FontAwesomeIcon icon={faBacteria} /> </a>
            <a target="_blank" href="https://instagram.com/study4.official"> <FontAwesomeIcon icon={faBacteria} /></a>
            <a target="_blank" href="https://twitter.com/study4Official"> <FontAwesomeIcon icon={faBacteria} /></a>
            <a target="_blank" href="https://www.linkedin.com/company/study4"> <FontAwesomeIcon icon={faBacteria} /></a>
            <a target="_blank" href="https://www.tiktok.com/@study4.official"> <FontAwesomeIcon icon={faBacteria} /></a>
          </div>
        </div>
        <div className="col-6 col-md">
          <div className="footer-title">Tài nguyên</div>
          <ul className="list-unstyled text-small">
            <li><a href="#">Thư viện đề thi</a></li>
            <li><a href="#">Kho tài liệu</a></li>

          </ul>
        </div>
        <div className="col-6 col-md">
          <div className="footer-title">Hỗ trợ</div>
          <ul className="list-unstyled text-small">
            <li><a href="#">Hướng dẫn sử dụng</a></li>
            <li><a href="#">Chăm sóc khách hàng</a></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <div className="footer-title">PawfectIELTS</div>
          <ul className="list-unstyled text-small">
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Liên hệ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-addresses">
        <h5 id="địa-chỉ">Địa chỉ</h5>
        <ul>
          <li>Trụ sở chính: 19 Nguyễn Hưu Thọ, Tân Phong, Thành Phố Hồ Chí Minh</li>
        </ul>
      </div>
      <div className="footer-copyright text-center">
        @ 2023 Nguyen Pham Hong An 
      </div>
    </>
  );
};

export const FooterWrapper = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <FacebookChatPlugin/>
        <Footer />
      </div>
    </div>
  );
};

