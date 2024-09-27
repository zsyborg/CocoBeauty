import {animations, animate, anticipate, animationControls, useCycle, motion, delay} from "framer-motion";
import Link from "next/link";
const ShopKeeper = () => {
  return (
    <div className="container-fluid h-100 min-vh-100 flex-row align-items-center">

        {/* Breadcrumb */}
        <div className="breadcumb-wrapper " data-bg-src="/img/bg/footer-bg-5-2.jpg" style={{backgroundImage:"url('/img/bg/sr-bg-9-1.jpg')"}}>
        <div className="container z-index-common">
            <div className="breadcumb-content">
                <h1 className="breadcumb-title">Our <span className="inner-text">Shop</span></h1>
                <div className="breadcumb-menu-wrap">
                    <ul className="breadcumb-menu">
                        <li><a href="index.html">Home</a></li>
                        <li>Our <span className="inner-text">Shop</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <section className="vs-product-wrapper  " data-bg-src="/img/bg/body-bg-1.jpg">
        <div className="outer-wrap3">
            <div className="container">
                <div className="row gx-60">
                    <div className="col-lg-8 col-xl-9 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="vs-sort-bar">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-auto">
                                    <p className="woocommerce-result-count">Showing 1–12 of 13 results</p>
                                </div>
                                <div className="col-md-auto">
                                    <form className="woocommerce-ordering" method="get">
                                        <select name="orderby" className="orderby" aria-label="Shop order">
                                            <option value="menu_order" selected="selected">Default Sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-xl-4">
                                <div className="vs-product product-style2">
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="/img/product/p-2-1.png" alt="product" className="w-100" /></a>
                                        <div className="actions">
                                            <a href="#" className="icon-btn"><i className="far fa-heart"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-eye"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <div className="product-content">
                                            <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Safari Max</a></h3>
                                            <div className="product-category">
                                                <a href="shop.html">Beauty</a>
                                            </div>
                                        </div>
                                        <span className="product-price"><span className="currency">$</span>12</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="vs-product product-style2">
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="/img/product/p-2-2.png" alt="product" className="w-100" /></a>
                                        <div className="actions">
                                            <a href="#" className="icon-btn"><i className="far fa-heart"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-eye"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <div className="product-content">
                                            <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Face Oil</a></h3>
                                            <div className="product-category">
                                                <a href="shop.html">Fashion</a>
                                            </div>
                                        </div>
                                        <span className="product-price"><span className="currency">$</span>20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="vs-product product-style2">
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="/img/product/p-2-3.png" alt="product" className="w-100" /></a>
                                        <div className="actions">
                                            <a href="#" className="icon-btn"><i className="far fa-heart"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-eye"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <div className="product-content">
                                            <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Hand Creams</a></h3>
                                            <div className="product-category">
                                                <a href="shop.html">Life Style</a>
                                            </div>
                                        </div>
                                        <span className="product-price"><span className="currency">$</span>11</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="vs-product product-style2">
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="/img/product/p-2-4.png" alt="product" className="w-100" /></a>
                                        <div className="actions">
                                            <a href="#" className="icon-btn"><i className="far fa-heart"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-eye"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <div className="product-content">
                                            <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Body Sop</a></h3>
                                            <div className="product-category">
                                                <a href="shop.html">Cosmetics</a>
                                            </div>
                                        </div>
                                        <span className="product-price"><span className="currency">$</span>78</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="vs-product product-style2">
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="/img/product/p-2-5.png" alt="product" className="w-100" /></a>
                                        <div className="actions">
                                            <a href="#" className="icon-btn"><i className="far fa-heart"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-eye"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <div className="product-content">
                                            <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Nail Polish</a></h3>
                                            <div className="product-category">
                                                <a href="shop.html">Classic</a>
                                            </div>
                                        </div>
                                        <span className="product-price"><span className="currency">$</span>11</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="vs-product product-style2">
                                    <div className="product-img">
                                        <a href="shop-details.html"><img src="/img/product/p-2-6.png" alt="product" className="w-100" /></a>
                                        <div className="actions">
                                            <a href="#" className="icon-btn"><i className="far fa-heart"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-eye"></i></a>
                                            <a href="#" className="icon-btn"><i className="far fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <div className="product-content">
                                            <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Lipstick Max</a></h3>
                                            <div className="product-category">
                                                <a href="shop.html">Beauty</a>
                                            </div>
                                        </div>
                                        <span className="product-price"><span className="currency">$</span>36</span>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="vs-pagination  ">
                            <ul>
                                <li><a href="#">Prev</a></li>
                                <li><a className="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#">6</a></li>
                                <li><a href="#">Next</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
                        <aside className="sidebar-area ps-lg-3 ps-xxl-0">
                            <div className="widget  ">
                                <h3 className="widget_title">Filter By</h3>
                                <div className="range-slider-area">
                                    <div className="price-amount">
                                        <span className="title">Price:</span><span id="minAmount"></span> - <span id="maxAmount"></span>
                                    </div>
                                    <div id="slider-range"></div>
                                    <button className="filter-btn">Filter</button>
                                    <button className="reset-btn"><i className="far fa-trash-alt"></i>Clear All</button>
                                </div>
                            </div>
                            <div className="widget   ">
                                <h3 className="widget_title">Category</h3>
                                <div className="category-filter">
                                    <ul>
                                        <li>
                                            <input type="checkbox" id="babys" name="babys" />
                                            <label for="babys">Male</label>
                                            <span className="total">03</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="mans" name="mans" />
                                            <label for="mans">Female</label>
                                            <span className="total">06</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="womans" name="womans" />
                                            <label for="womans">Youth</label>
                                            <span className="total">05</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget  ">
                                <h3 className="widget_title">Latest Products</h3>
                                <div className="latest-product-area">
                                    <div className="latest-product">
                                        <div className="media-img">
                                            <a href="shop-details.html"><img src="/img/widget/p-1-1.png" alt="product" /></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="product-title"><a className="text-inherit" href="shop-details.html">Nail Polish</a></h4>
                                            <p className="product-price"><span className="currency">$</span>12.00</p>
                                        </div>
                                    </div>
                                    <div className="latest-product">
                                        <div className="media-img">
                                            <a href="shop-details.html"><img src="/img/widget/p-1-2.png" alt="product" /></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="product-title"><a className="text-inherit" href="shop-details.html">Woman Waxing</a></h4>
                                            <p className="product-price"><span className="currency">$</span>22.00</p>
                                        </div>
                                    </div>
                                    <div className="latest-product">
                                        <div className="media-img">
                                            <a href="shop-details.html"><img src="/img/widget/p-1-3.png" alt="product" /></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="product-title"><a className="text-inherit" href="shop-details.html">Body Soup</a></h4>
                                            <p className="product-price"><span className="currency">$</span>18.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="widget  ">
                                <h4 className="widget_title">instagram</h4>
                                <div className="sidebar-gallery">
                                    <div className="gallery-thumb">
                                        <img src="/img/widget/gal-1-1.jpg" alt="Gallery Image" className="w-100" />
                                    </div>
                                    <div className="gallery-thumb">
                                        <img src="/img/widget/gal-1-2.jpg" alt="Gallery Image" className="w-100" />
                                    </div>
                                    <div className="gallery-thumb">
                                        <img src="/img/widget/gal-1-3.jpg" alt="Gallery Image" className="w-100" />
                                    </div>
                                    <div className="gallery-thumb">
                                        <img src="/img/widget/gal-1-4.jpg" alt="Gallery Image" className="w-100" />
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="widget widget_tag_cloud   ">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <a href="blog.html">Beauty</a>
                                    <a href="blog.html">Oil</a>
                                    <a href="blog.html">Organic</a>
                                    <a href="blog.html">Antiaging</a>
                                    <a href="blog.html">Skin Solution</a>
                                    <a href="blog.html">Cosmetic promex</a>
                                </div>
                            </div> */}
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </div>
  );
};
export default ShopKeeper;
