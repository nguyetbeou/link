import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

SwiperCore.use([Navigation, Autoplay]);

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

function Home() {
  const [slides, setSlides] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [bannerProducts, setBannerProducts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [productsDealHot, setProductsDealHot] = useState([]);
  const [visibleProductsDealHot, setVisibleProductsDealHot] = useState(8);
  const [showMoreButtonDealHot, setShowMoreButtonDealHot] = useState(true);
  const swiperRef = useRef(null);
  useEffect(() => {
    fetch("http://localhost:8080/api/slide/all")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/api/category/image")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/api/product/new")
      .then((res) => res.json())
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/api/banner/home")
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8080/api/product/banner")
      .then((res) => res.json())
      .then((data) => setBannerProducts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/product/dealhot")
      .then((res) => res.json())
      .then((data) => setProductsDealHot(data))
      .catch((err) => console.log(err));
  }, []);

  const handleMoreProductsDealHot = () => {
    if (visibleProductsDealHot + 4 >= productsDealHot.length) {
      setVisibleProductsDealHot(productsDealHot.length);
      setShowMoreButtonDealHot(false);
    } else {
      setVisibleProductsDealHot(
        (prevVisibleProductsDealHot) => prevVisibleProductsDealHot + 4
      );
    }
  };
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  function renderLink(id, parent, name, image) {
    if (parent === 0) {
      return (
        <Link
          to={`/productbycategoryparent/${id}?name=${name
            .toLowerCase()
            .replace(/\s/g, "-")}`}
        >
          <span>
            <img src={`assets/imgs/${image}`} alt="" />
          </span>
          <h3>{name}</h3>
        </Link>
      );
    } else {
      return (
        <Link
          to={`/productbycategory/${id}?name=${name
            .toLowerCase()
            .replace(/\s/g, "-")}`}
        >
          <span>
            <img src={`assets/imgs/${image}`} alt="" />
          </span>
          <h3>{name}</h3>
        </Link>
      );
    }
  }
  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <section className="main_section main_section1">
            <article id="slide-main" className="visual">
              <div
                className="swiper-container swiper-container1"
                style={{ height: "500px" }}
              >
                <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  navigation={true}
                  pagination={false}
                >
                  {slides.map((slide) => (
                    <SwiperSlide>
                      <div
                        className="swiper-slide"
                        style={{
                          backgroundImage: `url(assets/imgs/${slide.image})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      >
                        <a href="#st" className="slide-more">
                          {" "}
                        </a>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </article>
          </section>
          <section className="main_section main_section_box">
            <div className="root_width">
              <div className="section_title">
                <h3 className="main-h3">
                  <span>Bạn tìm gì?</span>
                </h3>
              </div>
              <div className="wrap-box">
                {categories.map((category) => (
                  <div className="in-box">
                    {renderLink(
                      category.id,
                      category.parent,
                      category.categoryName,
                      category.image
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="main_section main_section2">
            <article className="wrap-mProduct Product-list Product-list1">
              <div className="section_title">
                <h3 className="main-h3">
                  <span>Sản phẩm mới nhất</span>
                </h3>
              </div>
              <div
                className="in-article root_width Product-list-slide"
                style={{ height: "500px" }}
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={0}
                  slidesPerView={4}
                  slidesPerGroup={1}
                  loop={true}
                  navigation={{
                    prevEl: ".swiper-button-prev2",
                    nextEl: ".swiper-button-next2",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                  {newProducts.map((product) => (
                    <SwiperSlide>
                      <li
                        className="swiper-slide"
                        style={{ width: "274.5px", marginRight: "14px" }}
                      >
                        <div className="inner">
                          <div className="thumbnail">
                            <div className="prdImg">
                              <div className="wrap-thumbnail">
                                <a className="BG-thumbnail" href="#st">
                                  <img
                                    src={`assets/imgs/${product.image}`}
                                    alt={product.productName}
                                  />
                                </a>
                              </div>
                              <div className="wrap-list-icon">
                                <span className="cart-icon">
                                  <img
                                    src="assets/imgs/btn_list_cart.gif"
                                    alt="Thêm vào giỏ hàng"
                                    className="ec-admin-icon cart"
                                  />
                                </span>
                                <span className="view-icon">
                                  <img
                                    src="assets/imgs/btn_prd_zoom.gif"
                                    style={{ cursor: "pointer" }}
                                    alt="Phóng to hình ảnh sản phẩm"
                                  />
                                </span>
                                <span className="wish-span">
                                  <img
                                    src="assets/imgs/btn_wish_before.png"
                                    className="icon_img ec-product-listwishicon"
                                    alt="Trước đăng ký Sản phẩm yêu thích"
                                    icon_status="off"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="description">
                            <h4 className="name">
                              <a href="#st" className>
                                <span
                                  style={{ fontSize: "12px", color: "#555555" }}
                                >
                                  {product.productName}
                                </span>
                              </a>
                            </h4>
                            <ul className="xans-product-listitem">
                              <li className="xans-record-">
                                <span
                                  style={{
                                    fontSize: "16px",
                                    color: "#0079e3",
                                    fontWeight: "bold",
                                    textDecoration: "line-through",
                                  }}
                                >
                                  {formatter.format(product.price)}
                                </span>
                                <span
                                  id="span_product_tax_type_text"
                                  style={{ textDecoration: "line-through" }}
                                ></span>
                              </li>
                              <li className="xans-record-">
                                <span
                                  style={{
                                    fontSize: "16px",
                                    color: "#0079e3",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {formatter.format(
                                    product.price -
                                      product.price * (0.01 * product.sale)
                                  )}
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      color: "#f20000",
                                    }}
                                  >
                                    {product.sale}%
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div className="wrap-new-icon">
                              <span className="wrap-new-span">
                                <img
                                  src="assets/imgs/icon_202206291923034500.png"
                                  className="icon_img"
                                  alt="Sản phẩm đề xuất"
                                />
                                <img
                                  src="assets/imgs/icon_202206291922527800.png"
                                  className="icon_img"
                                  alt="Sản phẩm mới"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className="swiper-button-prev swiper-button-prev2"
                  onClick={handlePrev}
                ></div>
                <div
                  className="swiper-button-next swiper-button-next2"
                  onClick={handleNext}
                ></div>
              </div>
            </article>
          </section>
          {banners.map((banner) => (
            <section className="main_section">
              <article className="wrap-mProduct Product-list">
                <div className="in-article">
                  <div className="root_width">
                    <div className="productList mProduct typeThumb">
                      <div className="wrap-banner">
                        <a href="#st">
                          <img
                            src={`assets/imgs/${banner.image}`}
                            alt={banner.image}
                          />
                        </a>
                      </div>
                      <div
                        className="in-article root_width Product-list-slide"
                        style={{ height: "500px" }}
                      >
                        <Swiper
                          modules={[Navigation, Pagination]}
                          spaceBetween={0}
                          slidesPerView={4}
                          slidesPerGroup={1}
                          loop={true}
                          navigation={{
                            prevEl: `.swiper-button-prev0${banner.id}`,
                            nextEl: `.swiper-button-next0${banner.id}`,
                          }}
                          pagination={{ clickable: true }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                        >
                          {bannerProducts.map(
                            (product) =>
                              banner.id === product.bannerId && (
                                <SwiperSlide>
                                  <li
                                    className="swiper-slide"
                                    style={{
                                      width: "274.5px",
                                      marginRight: "14px",
                                    }}
                                  >
                                    <div className="inner">
                                      <div className="thumbnail">
                                        <div className="prdImg">
                                          <div className="wrap-thumbnail">
                                            <a
                                              className="BG-thumbnail"
                                              href="#st"
                                            >
                                              <img
                                                src={`assets/imgs/${product.image}`}
                                                alt={product.productName}
                                              />
                                            </a>
                                          </div>
                                          <div className="wrap-list-icon">
                                            <span className="cart-icon">
                                              <img
                                                src="assets/imgs/btn_list_cart.gif"
                                                alt="Thêm vào giỏ hàng"
                                                className="ec-admin-icon cart"
                                              />
                                            </span>
                                            <span className="view-icon">
                                              <img
                                                src="assets/imgs/btn_prd_zoom.gif"
                                                style={{ cursor: "pointer" }}
                                                alt="Phóng to hình ảnh sản phẩm"
                                              />
                                            </span>
                                            <span className="wish-span">
                                              <img
                                                src="assets/imgs/btn_wish_before.png"
                                                className="icon_img ec-product-listwishicon"
                                                alt="Trước đăng ký Sản phẩm yêu thích"
                                                icon_status="off"
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="description">
                                        <h4 className="name">
                                          <a href="#st" className>
                                            <span
                                              style={{
                                                fontSize: "12px",
                                                color: "#555555",
                                              }}
                                            >
                                              {product.productName}
                                            </span>
                                          </a>
                                        </h4>
                                        <ul className="xans-product-listitem">
                                          <li className="xans-record-">
                                            <span
                                              style={{
                                                fontSize: "16px",
                                                color: "#0079e3",
                                                fontWeight: "bold",
                                                textDecoration: "line-through",
                                              }}
                                            >
                                              {formatter.format(product.price)}
                                            </span>
                                            <span
                                              id="span_product_tax_type_text"
                                              style={{
                                                textDecoration: "line-through",
                                              }}
                                            ></span>
                                          </li>
                                          <li className="xans-record-">
                                            <span
                                              style={{
                                                fontSize: "16px",
                                                color: "#0079e3",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              {formatter.format(
                                                product.price -
                                                  product.price *
                                                    (0.01 * product.sale)
                                              )}
                                              <span
                                                style={{
                                                  fontSize: "12px",
                                                  color: "#f20000",
                                                }}
                                              >
                                                {product.sale}%
                                              </span>
                                            </span>
                                          </li>
                                        </ul>
                                        <div className="wrap-new-icon">
                                          <span className="wrap-new-span">
                                            <img
                                              src="assets/imgs/icon_202206291923034500.png"
                                              className="icon_img"
                                              alt="Sản phẩm đề xuất"
                                            />
                                            <img
                                              src="assets/imgs/icon_202206291922527800.png"
                                              className="icon_img"
                                              alt="Sản phẩm mới"
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </SwiperSlide>
                              )
                          )}
                        </Swiper>
                        <div
                          className={`swiper-button-prev swiper-button-prev0${banner.id}`}
                          onClick={handlePrev}
                        ></div>
                        <div
                          className={`swiper-button-next swiper-button-next0${banner.id}`}
                          onClick={handleNext}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          ))}
          <section className="main_section main_section5">
            <article className="wrap-mProduct Product-list">
              <div className="in-article">
                <div className="root_width">
                  <div className="xans-product xans-product-listmain productList mProduct typeThumb">
                    <div className="section_title">
                      <h3 className="main-h3">
                        <span>Hàng bán chạy</span>
                      </h3>
                    </div>
                    <ul className="prdList prdList_num">
                      {productsDealHot
                        .slice(0, visibleProductsDealHot)
                        .map((product) => (
                          <li>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st">
                                      <img
                                        src="assets/imgs/2a6306c708febd507c98cbde702280be.jpg"
                                        id="eListPrdImage706_28"
                                        alt="Bộ hộp cơm giữ nhiệt Lock&amp;Lock Pump Vacuum Lunch Box (300ml*2, 500ml*1, bộ đũa và thìa, túi) - LHC8052S01"
                                      />
                                    </a>
                                  </div>
                                  <div className="salebox yet_slaebox displaynone">
                                    <div className="sale_bg">
                                      <span className="sale_text" />
                                    </div>
                                    <span className="displaynone hidden_pcustom" />
                                    <span className="displaynone hidden_pprice">
                                      1490000
                                    </span>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon" />
                                    <span className="view-icon">
                                      <img
                                        src="assets/imgs/btn_prd_zoom.gif"
                                        style={{ cursor: "pointer" }}
                                        alt="Phóng to hình ảnh sản phẩm"
                                      />
                                    </span>
                                    <span className="wish-span">
                                      <img
                                        src="assets/imgs/btn_wish_before.png"
                                        className="icon_img ec-product-listwishicon"
                                        alt="Trước đăng ký Sản phẩm yêu thích"
                                        icon_status="off"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <div className="color displaynone" />
                                <h4 className="name">
                                  <a href="#st" className>
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      Bộ hộp cơm giữ nhiệt Lock&amp;Lock Pump
                                      Vacuum Lunch Box (300ml*2, 500ml*1, bộ đũa
                                      và thìa, túi) - LHC8052S01
                                    </span>
                                  </a>
                                </h4>
                                <ul className="xans-element- xans-product xans-product-listitem-27 xans-product-listitem xans-product-27 spec">
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      đ1,490,000
                                    </span>
                                    <span
                                      id="span_product_tax_type_text"
                                      style={{ textDecoration: "line-through" }}
                                    ></span>
                                  </li>
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      đ1,117,000
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#f20000",
                                        }}
                                      >
                                        25%
                                      </span>
                                    </span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span">
                                    <img
                                      src="assets/imgs/icon_202206291923279700.png"
                                      className="icon_img"
                                      alt="Sản phẩm hết hàng"
                                    />
                                    <img
                                      src="assets/imgs/icon_202206291923034500.png"
                                      className="icon_img"
                                      alt="Sản phẩm đề xuất"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                    <div className="xans-product xans-product-listmore productPaginate typeMoreview">
                      <a href="#none" className="btnMore">
                        <span data-i18n="index.more">More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="main_section main_section6">
            <article className="wrap-mProduct Product-list">
              <div className="in-article">
                <div className="root_width">
                  <div className="xans-product xans-product-listmainproductList mProduct typeThumb">
                    <div className="section_title">
                      <h3 className="main-h3">
                        <span>Deal Hot</span>
                      </h3>
                    </div>
                    <ul className="prdList">
                      {productsDealHot
                        .slice(0, visibleProductsDealHot)
                        .map((product) => (
                          <li>
                            <div className="inner">
                              <div className="thumbnail">
                                <div className="prdImg">
                                  <div className="wrap-thumbnail">
                                    <a className="BG-thumbnail" href="#st">
                                      <img
                                        src={`assets/imgs/${product.image}`}
                                        alt={`assets/imgs/${product.productName}`}
                                      />
                                    </a>
                                  </div>
                                  <div className="wrap-list-icon">
                                    <span className="cart-icon">
                                      <img
                                        src="assets/imgs/btn_list_cart.gif"
                                        alt="Thêm vào giỏ hàng"
                                        className="ec-admin-icon cart"
                                      />
                                    </span>
                                    <span className="view-icon">
                                      <img
                                        src="assets/imgs/btn_prd_zoom.gif"
                                        style={{ cursor: "pointer" }}
                                        alt="Phóng to hình ảnh sản phẩm"
                                      />
                                    </span>
                                    <span className="wish-span">
                                      <img
                                        src="assets/imgs/btn_wish_before.png"
                                        className="icon_img ec-product-listwishicon"
                                        alt="Trước đăng ký Sản phẩm yêu thích"
                                        icon_status="off"
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="description">
                                <h4 className="name">
                                  <a href="#st" className>
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      {product.productName}
                                    </span>
                                  </a>
                                </h4>
                                <ul className="xans-product xans-product-listitem spec">
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                        textDecoration: "line-through",
                                      }}
                                    >
                                      {formatter.format(product.price)}
                                    </span>
                                    <span
                                      id="span_product_tax_type_text"
                                      style={{ textDecoration: "line-through" }}
                                    ></span>
                                  </li>
                                  <li className="xans-record-">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#555555",
                                      }}
                                    >
                                      {formatter.format(
                                        product.price -
                                          product.price * (0.01 * product.sale)
                                      )}
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#f20000",
                                        }}
                                      >
                                        {product.sale}%
                                      </span>
                                    </span>
                                  </li>
                                </ul>
                                <div className="wrap-new-icon">
                                  <span className="wrap-new-span">
                                    <img
                                      src="assets/imgs/icon_202206291923034500.png"
                                      className="icon_img"
                                      alt="Sản phẩm đề xuất"
                                    />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                    {visibleProductsDealHot < productsDealHot.length &&
                      showMoreButtonDealHot && (
                        <div
                          onClick={handleMoreProductsDealHot}
                          className="xans-product xans-product-listmore productPaginate typeMoreview"
                        >
                          <a href="#none" className="btnMore">
                            <span>More</span>
                          </a>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section className="main_section main_section7">
            <article className="root_width">
              <div className="wrap-banner foot-banner clearBoth">
                <div className="box50">
                  <div className="in-box50">
                    <a href="#st">
                      <img src="assets/imgs/banner3.gif" alt="" />
                    </a>
                  </div>
                </div>
                <div className="box50">
                  <div className="in-box50">
                    <a href="#st">
                      <img src="assets/imgs/banner4.gif" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <div id="quick">
        <div className="xans-element- xans-layout xans-layout-orderbasketcount">
          <strong>Giỏ Hàng</strong>
          <span>
            <a href="#st">1</a> Sản Phẩm
          </span>
        </div>
        <div className="xans-element- xans-layout xans-layout-productrecent">
          <h2>
            <Link to="/seen">Đã Xem Gần Đây</Link>
          </h2>
          <ul>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="/" alt="" />
                <span>##name##</span>
              </Link>
            </li>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="/" alt="" />
                <span>##name##</span>
              </Link>
            </li>
          </ul>
          <p className="player">
            <img
              src="assets/imgs/btn_recent_prev.gif"
              alt="Prev"
              className="prev"
            />
            <img
              src="assets/imgs/btn_recent_next.gif"
              alt="Next"
              className="next"
            />
          </p>
        </div>
        <p className="pageTop">
          <Link to="" title="Back to Top">
            <img src="assets/imgs/btn_top1.gif" alt="Top" />
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
