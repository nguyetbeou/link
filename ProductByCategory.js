import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
});

const ProductByCategory = (props) => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    fetch(`http://localhost:8080/api/product/category/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCurrentPage(1);
      })
      .catch((err) => console.log(err));
  }, [location]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event) => {
    event.preventDefault();
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    const activeClass = number === currentPage ? "this" : "other";
    return (
      <li>
        <a onClick={handleClick} id={number} href="#st" className={activeClass}>
          {number}
        </a>
      </li>
    );
  });

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="xans-element- xans-product xans-product-menupackage">
              <div className="xans-element- xans-product xans-product-headcategory path">
                <span>Trang Hiện Tại</span>
                <ol className="path4displaynone path3displaynone path2displaynone path1">
                  <li>
                    <Link to="/">Trang Chủ</Link>
                  </li>
                  <li className="path_li path_li1">
                    <a
                      className="path-a"
                      href="/category/bình-giữ-nhiệt-bình-nước/24/"
                    >
                      {props.name}
                    </a>
                  </li>
                  <li className="path_li path_li2 displaynone"></li>
                  <li className="path_li path_li3 displaynone"></li>
                  <li className="path_li path_li4 displaynone"></li>
                </ol>
              </div>
              <div className="xans-element- xans-product xans-product-headcategory title">
                <p className="banner" />
                <h2 className="product_headcategory_h2">{props.name}</h2>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-normalpackage product_main_section main_section_list">
              <div className="xans-element- xans-product xans-product-normalmenu">
                <div className="function" id="Product_ListMenu">
                  <p className="prdCount">
                    Tổng <strong>{products.length}</strong> cái
                  </p>
                  <ul
                    id="type"
                    className="xans-element- xans-product xans-product-orderby"
                  >
                    <li className="xans-record-">
                      <Link to="/newproducts">Sản phẩm mới</Link>
                    </li>
                    <li className="xans-record-">
                      <Link to="">Giá thấp</Link>
                    </li>
                    <li className="xans-record-">
                      <Link to="">Giá cao</Link>
                    </li>
                    <li className="xans-record-">
                      <Link to="">Sản phẩm yêu thích</Link>
                    </li>
                    <li className="xans-record-">
                      <Link to="">Lượt xem</Link>
                    </li>
                  </ul>
                  <span className="compare displaynone">
                    <a href="#none" className="btnCompare">
                      So Sánh Sản Phẩm
                    </a>
                  </span>
                </div>
                <fieldset className="condition displaynone">
                  <legend>Tìm Nâng Cao</legend>
                  <p>
                    <select className="xans-element- xans-product xans-product-firstselect FirstSelect">
                      <option value>-Chọn Tiêu Chí-</option>
                      <option value className />
                    </select>
                    <select className="xans-element- xans-product xans-product-secondselect SecondSelect">
                      <option value>-Chọn Tiêu Chí-</option>
                      <option value className />
                    </select>
                    <a href="#SelectSearch" className="btnSubmit">
                      Tìm Kiếm
                    </a>
                  </p>
                </fieldset>
              </div>
              <div className="xans-element- xans-product xans-product-listnormal wrap-mProduct Product-list">
                <ul className="prdList grid4">
                  {currentItems.map((product) => (
                    <li id="anchorBoxId_705" className="xans-record-">
                      <div className="inner">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <div className="wrap-thumbnail">
                              <a
                                className="BG-thumbnail"
                                href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/24/display/1/"
                              >
                                <img
                                  src={`http://localhost:3000/assets/imgs/${product.image}`}
                                  id="eListPrdImage705_1"
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
                                348000
                              </span>
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
                          <div className="color displaynone" />
                          <h4 className="name">
                            <a
                              href="/product/bình-nước-thủy-tinh-chịu-nhiệt-borosilicate-locklock-metro-glass-jug-1/705/category/24/display/1/"
                              className
                            >
                              <span
                                style={{
                                  fontSize: "12px",
                                  color: "#555555",
                                  fontWeight: "bold",
                                }}
                              >
                                {product.productName}
                              </span>
                            </a>
                          </h4>
                          <ul className="xans-element- xans-product xans-product-listitem spec">
                            <li className="xans-record-">
                              <span
                                style={{
                                  fontSize: "16px",
                                  color: "#098ee6",
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
                                style={{ fontSize: "16px", color: "#555555" }}
                              >
                                {formatter.format(
                                  product.price -
                                    product.price * (0.01 * product.sale)
                                )}
                                <span
                                  style={{ fontSize: "12px", color: "#f20000" }}
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
              <div className="xans-element- xans-product xans-product-normalpaging ec-base-paginate">
                <a href="#none" className="first">
                  <i className="fa-solid fa-angles-left" />
                </a>
                <ol>{renderPageNumbers}</ol>
                <a href="?page=8" className="last">
                  <i className="fa-solid fa-angles-right" />
                </a>
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
            <a href="/order/basket.html">3</a> Sản Phẩm
          </span>
        </div>
        <div className="xans-element- xans-layout xans-layout-productrecent">
          <h2>
            <Link to="/seen">Đã Xem Gần Đây</Link>
          </h2>
          <ul>
            <li className="displaynone xans-record-">
              <a href="/product/detail.html##param##">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </a>
            </li>
            <li className="displaynone xans-record-">
              <a href="/product/detail.html##param##">
                <img src="about:blank" alt="" />
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
          <Link to="" title="Back to Top">
            <img src="assets/imgs/btn_top1.gif" alt="Top" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProductByCategory;
