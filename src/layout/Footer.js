import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout1">
    <div className="footer-top">
        <div className="container">
            <div className="row align-items-stretch">
                <div className="col-md-4 d-none d-lg-flex">
                    <div className="social-style2">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-md-5 col-lg-4">
                    <div className="vs-logo">
                        <a href="index.html"><img src="assets/img/logo-2.svg" alt="logo" /></a>
                    </div>
                </div>
                <div className="col-md-7 col-lg-4">
                    <form action="#" className="form-style1">
                        <h3 className="form-title">Our newsletter</h3>
                        <div className="form-group">
                            <input type="email" placeholder="Enter your email..." />
                            <button className="vs-btn" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div className="widget-area">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-6 col-xl-auto">
                    <div className="widget footer-widget">
                        <h3 className="widget_title">Coconut Beauty</h3>
                        <p className="footer-info">
                          <i className="fal fa-map-marker-alt text-theme me-2"></i> 
                          India <br/> <a href="tel:+01234567890" className="text-inherit"><i className="far fa-phone-alt text-theme me-2"></i>+0 123 456 7890</a> <br/> <a className="text-inherit" href="mailto:info@example.com"><i className="fal fa-envelope text-theme me-2"></i>info@example.com</a> </p>
                        <h4 className="fs-22 mb-2">Open Hours</h4>
                        <p className="footer-time">Sunday to Friday <span className="time">08:00 - 20:00</span></p>
                    </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                    <div className="widget widget_nav_menu  footer-widget">
                        <h3 className="widget_title">Important Links</h3>
                        <div className="menu-all-pages-container footer-menu">
                            <ul className="menu">
                                <li><a href="service.html">Serivces</a></li>
                                <li><a href="about.html">ABOUT US</a></li>
                                <li><a href="price-plan.html">Price Plan</a></li>
                                <li><a href="contact.html">CONTACT</a></li>
                                <li><a href="blog.html">Our Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                    <div className="widget widget_nav_menu  footer-widget">
                        <h3 className="widget_title">CATEGORIES</h3>
                        <div className="menu-all-pages-container footer-menu">
                            <ul className="menu">
                                <li><a href="service.html">SKINCARE</a></li>
                                <li><a href="service.html">MAKEUP</a></li>
                                <li><a href="service.html">FRAGRANCE</a></li>
                                <li><a href="service.html">HAIRCARE</a></li>
                                <li><a href="service.html">BATH & BODY</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                    <div className="widget footer-widget">
                        <h3 className="widget_title">Recent Post</h3>
                        <div className="recent-post-wrap">
                            <div className="recent-post">
                                <div className="media-img">
                                    <a href="blog-details.html"><img src="assets/img/widget/recent-post-2-1.jpg" alt="Blog Image" /></a>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Managing Partner along</a></h4>
                                    <div className="recent-post-meta">
                                        <a href="blog.html"><i className="fas fa-calendar-alt"></i>05 AUG, 2023</a>
                                    </div>
                                </div>
                            </div>
                            <div className="recent-post">
                                <div className="media-img">
                                    <a href="blog-details.html"><img src="assets/img/widget/recent-post-2-2.jpg" alt="Blog Image" /></a>
                                </div>
                                <div className="media-body">
                                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Senior Counsels. Partnr along</a></h4>
                                    <div className="recent-post-meta">
                                        <a href="blog.html"><i className="fas fa-calendar-alt"></i>11 AUG, 2023</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-wrap">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-auto text-center">
                    <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2023 <a href="index.html">Wellnez</a>. All Rights Reserved By <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a></p>
                </div>
                <div className="col-auto d-none d-md-block">
                    <img src="assets/img/widget/cards.png" alt="cards" />
                </div>
            </div>
        </div>
    </div>
<a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up"></i></a>
</footer> 
  );
};
export default Footer;
