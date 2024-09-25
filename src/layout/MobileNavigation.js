import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="vs-menu-wrapper">
        <div className="vs-menu-area text-center">
            <button className="vs-menu-toggle"><i className="fal fa-times"></i></button>
            <div className="mobile-logo">
                <a href="index.html"><img src="img/FinalLogo.png" alt="Coconut Beauty Logo" width={111} /></a>
            </div>
            <div className="vs-mobile-menu">
                <ul>
                    <li className="menu-item-has-children">
                        <a href="index.html">Demos</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">Demo Style 1</a></li>
                            <li><a href="index-2.html">Demo Style 2</a></li>
                            <li><a href="index-3.html">Demo Style 3</a></li>
                            <li><a href="index-4.html">Demo Style 4</a></li>
                            <li><a href="index-5.html">Demo Style 5</a></li>
                            <li><a href="index-6.html">Demo Style 6</a></li>
                            <li><a href="index-7.html">Demo Style 7<span className="new-label">New</span></a></li>
                            <li><a href="index-8.html">Demo Style 8<span className="new-label">New</span></a></li>
                            <li><a href="index-9.html">Demo Style 9<span className="new-label">New</span></a></li>
                            <li><a href="index-10.html">Demo Style 10<span className="new-label">New</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="match.html">Service</a>
                        <ul className="sub-menu">
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="blog.html">Blog</a>
                        <ul className="sub-menu">
                            <li><a href="blog.html">Blog One</a></li>
                            <li><a href="blog-2.html">Blog Two</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-details.html">Shop Details</a></li>
                            <li><a href="gallery.html">Portfolio</a></li>
                            <li><a href="gallery-details.html">Portfolio Details</a></li>
                            <li><a href="appointment.html">Appointment</a></li>
                            <li><a href="price-plan.html">Price Plan</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="error.html">Error Page</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
