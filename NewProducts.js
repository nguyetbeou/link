import React, { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/product/new")
      .then((res) => res.json())
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="xans-element- xans-product xans-product-menupackage">
              <div className="xans-element- xans-product xans-product-headcategory path">
                <span>Trang Hiện Tại</span>
                <ol>
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li title="Current Page">
                    <strong>Hàng mới</strong>
                  </li>
                </ol>
              </div>
              <div className="xans-element- xans-product xans-product-headcategory title">
                <p className="banner">
                  <img
                    src="assets/imgs/Sản phẩm mới_1140x282_0621.jpg"
                    alt=""
                  />
                </p>
                <h2>
                  <span>Hàng mới</span>
                </h2>
              </div>
            </div>
            <div className="wrap-tab-product-section">
              <div id="tab1" className="tab-section menuTab_on">
                <article className="wrap-mProduct Product-list">
                  <div className="in-article">
                    <div className="root_width">
                      <div className="xans-element- xans-product xans-product-listmain-21 xans-product-listmain xans-product-21 productList mProduct typeThumb">
                        <ul className="prdList">
                          {newProducts.map((product) => (
                            <li id="anchorBoxId_652" className="xans-record-">
                              <div className="inner">
                                <div className="thumbnail">
                                  <div className="prdImg">
                                    <div className="wrap-thumbnail">
                                      <a
                                        className="BG-thumbnail"
                                        href="assets/imgs/ce24b628086a33a6b70975f9184bde89.jpg"
                                        name="anchorBoxName_652"
                                      >
                                        <img
                                          src={`assets/imgs/${product.image}`}
                                          id="eListPrdImage652_22"
                                          alt={product.productName}
                                        />
                                      </a>
                                    </div>
                                    <div className="salebox yet_slaebox displaynone">
                                      <div className="sale_bg">
                                        <span className="sale_text" />
                                      </div>
                                      <span className="displaynone hidden_pcustom" />
                                      <span className="displaynone hidden_pprice">
                                        2200000
                                      </span>
                                    </div>
                                    <div className="wrap-list-icon">
                                      <span className="cart-icon">
                                        <img
                                          src="assets/imgs/btn_list_cart.gif"
                                          onclick="category_add_basket('652','1', '22', 'A0000', false, '1', 'P00000ZC', 'B', 'F', '0');"
                                          alt="Thêm vào giỏ hàng"
                                          className="ec-admin-icon cart"
                                        />
                                      </span>
                                      <span className="view-icon">
                                        <img
                                          src="assets/imgs/btn_prd_zoom.gif"
                                          onclick="zoom('652', '1', '22','', '');"
                                          style={{ cursor: "pointer" }}
                                          alt="Phóng to hình ảnh sản phẩm"
                                        />
                                      </span>
                                      <span className="wish-span">
                                        <img
                                          src="assets/imgs/btn_wish_before.png"
                                          className="icon_img ec-product-listwishicon"
                                          alt="Trước đăng ký Sản phẩm yêu thích"
                                          productno={652}
                                          categoryno={1}
                                          icon_status="off"
                                          login_status="T"
                                          individual-set="F"
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
                                  <ul className="xans-element- xans-product xans-product-listitem-21 xans-product-listitem xans-product-21 spec">
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
                                        style={{
                                          textDecoration: "line-through",
                                        }}
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
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
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
              <a href="#st">
                <img src="#" alt="" />
                <span>##name##</span>
              </a>
            </li>
            <li className="displaynone xans-record-">
              <a href="#st">
                <img src="#" alt="" />
                <span>##name##</span>
              </a>
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
          <a href="#header" title="Back to Top">
            <img src="assets/imgs/btn_top1.gif" alt="Top" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewProducts;
