import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import $ from "jquery";

const Header = () => {



  useEffect(() => {

    // const popupSideMenu = () =>{
    //     // Sidebar Popup
    //     $($sideMunuOpen).on("click", function (e) {
    //         e.preventDefault();
    //         $($sideMenu).addClass($toggleCls);
    //       });
    //       $($sideMenu).on("click", function (e) {
    //         e.stopPropagation();
    //         $($sideMenu).removeClass($toggleCls);
    //       });
    //       var sideMenuChild = $sideMenu + " > div";
    //       $(sideMenuChild).on("click", function (e) {
    //         e.stopPropagation();
    //         $($sideMenu).addClass($toggleCls);
    //       });
    //       $($sideMenuCls).on("click", function (e) {
    //         e.preventDefault();
    //         e.stopPropagation();
    //         $($sideMenu).removeClass($toggleCls);
    //       });
    // }

  }, [])

  return (
    <header class="vs-header header-layout2">
<div class="header-top">
            <div class="container">
                <div class="row justify-content-center justify-content-md-between align-items-center">
                    <div class="col-auto text-center py-2 py-md-0">
                        <div class="header-links style-white">
                            <ul>
                                <li class="d-none d-xxl-inline-block"><i class="far fa-map-marker-alt"></i>India</li>
                                <li><i class="far fa-phone-alt"></i><a href="tel:+919223022222">+919223022222</a></li>
                                <li><i class="far fa-envelope"></i><a href="mailto:contact@coconutbeauty.care">contact@coconutbeauty.care</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto d-none d-md-block">
                        <div class="social-style1">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-wrap">
            <div class="sticky-active">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                    <div class="col">
                            <div class="header-logo">
                                <aLink href="/"><img src="/img/FinalLogo.png" alt="Coconut Beauty Logo" width={111} /></aLink>
                            </div>
                        </div>
                        <div class="col-auto">
                            <nav class="main-menu menu-style1 d-none d-lg-block">
                                <ul>
                                    <li>
                                        <Link href="#">About Us</Link>
                                    </li>
                                    
                                    <li className="menu-item-has-children">
                                        <Link href="/">Services</Link>
                                    </li>
                                  
                                    <li>
                                        <Link href="/shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <button class="vs-menu-toggle d-inline-block d-lg-none" type="button">
                                <i class="fal fa-bars"></i>
                            </button>
                        </div>
                        
                        <div class="order-2 order-xxl-2 col-auto col-xxl-5 d-none d-lg-block">
                            <div class="header-icons">
                                <Link href="#" class="searchBoxTggler"><i class="far fa-search"></i></Link>
                                <Link href="#"><i class="fal fa-shopping-cart"></i></Link>
                                {/* <button class="bar-btn sideMenuToggler d-none d-xl-inline-block">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </button> */}
                                <button class="vs-menu-toggle d-inline-block d-lg-none" type="button"><i class="fal fa-bars"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        {/* <div className="sidemenu-wrapper d-none d-lg-block  ">
        <div className="sidemenu-content">
            <button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
            <div className="widget  ">
                <div className="footer-logo">
                    <img src="assets/img/logo.svg" alt="logo" />
                </div>
                <div className="info-media1">
                    <div className="media-icon"><i className="fal fa-map-marker-alt"></i></div>
                    <span className="media-label">Centerl Park West La, New York</span>
                </div>
                <div className="info-media1">
                    <div className="media-icon"><i className="far fa-phone-alt "></i></div>
                    <span className="media-label"><a href="tel:+01234567890" className="text-inherit">+0 123 456 7890</a></span>
                </div>
                <div className="info-media1">
                    <div className="media-icon"><i className="fal fa-envelope"></i></div>
                    <span className="media-label"><a className="text-inherit" href="mailto:info@example.com">info@example.com</a></span>
                </div>
            </div>
          
        </div>
        </div> */}

    </header>
  );
};

export default (Header);