import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";

const Header = ({ walletToggle, navigationToggle }) => {

  return (
    <header class="vs-header header-layout8">

        <div class="sticky-wrap">
            <div class="sticky-active">
                <div class="container">
                    <div class="row justify-content-between align-items-center">
                        <div class="order-1 order-xxl-0 col-auto col-xxl-5">
                            <nav class="main-menu menu-style1 d-none d-lg-block">
                                <ul>
                                   
                                    <li>
                                        <Link href="#">About Us</Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="#">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link href="/">Services</Link>
                                    </li>
                                  
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </nav>
                            <button class="vs-menu-toggle d-inline-block d-lg-none" type="button"><i class="fal fa-bars"></i></button>
                        </div>
                        <div class="order-0 order-xxl-1 col-auto col-xxl-2 text-center">
                            <div class="header-logo">
                                <aLink href="/"><img src="/img/FinalLogo.png" alt="Coconut Beauty Logo" width={161} /></aLink>
                            </div>
                        </div>
                        <div class="order-2 order-xxl-2 col-auto col-xxl-5 d-none d-lg-block">
                            <div class="header-icons">
                                <Link href="#" class="searchBoxTggler"><i class="far fa-search"></i></Link>
                                <Link href="#"><i class="fal fa-shopping-cart"></i></Link>
                                <button class="bar-btn sideMenuToggler d-none d-xl-inline-block">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </button>
                                <button class="vs-menu-toggle d-inline-block d-lg-none" type="button"><i class="fal fa-bars"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);