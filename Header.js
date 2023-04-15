import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [categoryParent, setCategoryParent] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setIsActive(false);
  }, [location]);
  useEffect(() => {
    fetch("http://localhost:8080/api/category/parent/0")
      .then((res) => res.json())
      .then((data) => setCategoryParent(data))
      .catch((err) => console.log(err));
  }, [location]);
  useEffect(() => {
    fetch("http://localhost:8080/api/category/all")
      .then((res) => res.json())
      .then((data) => setAllCategory(data))
      .catch((err) => console.log(err));
  }, [location]);
  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  function renderLink(id, name) {
    if (id !== 6 && id !== 7 && id !== 8) {
      return (
        <Link
          className="menu-a2"
          to={`/productbycategoryparent/${id}?name=${name
            .toLowerCase()
            .replace(/\s/g, "-")}`}
        >
          {name}
        </Link>
      );
    } else if (id == 6) {
      return (
        <Link className="menu-a2" to="/locknlocktv">
          {name}
        </Link>
      );
    } else if (id == 7) {
      return (
        <Link className="menu-a2" to="/productguide">
          {name}
        </Link>
      );
    } else {
      return (
        <Link className="menu-a2" to="/recipe">
          {name}
        </Link>
      );
    }
  }

  return (
    <div id="header">
      <div className="header-top">
        <div className="inner">
          <div className="topArea clearBoth">
            <h1 className="xans-element- xans-layout xans-layout-logotop">
              <Link to="/">
                <img
                  src="http://localhost:3000/assets/imgs/logo.png"
                  alt="LocknLock"
                />
              </Link>
            </h1>
            <form id="searchBarForm" action="/product/search.html">
              <div className="xans-element- xans-layout xans-layout-searchheader">
                <fieldset>
                  <legend>Tìm Kiếm</legend>
                  <input
                    id="keyword"
                    className="inputTypeText"
                    name="keyword"
                    type="text"
                  />
                  <span className="search-button-top">
                    <input
                      type="image"
                      src="http://localhost:3000/assets/imgs/icon_tim kiem.png"
                      alt="Search"
                    />
                    Tìm kiếm
                  </span>
                  <ul className="autoDrop" />
                </fieldset>
              </div>
            </form>
            <div className="header-right">
              <div className="xans-element- xans-layout xans-layout-statelogoff">
                <ul>
                  <li>
                    <Link to="/login" className="log">
                      <span className="top_icon top_icon1" />
                      Đăng Nhập/Đăng Ký
                    </Link>
                  </li>
                  <li className="shoppinginfo_li">
                    <Link to="/cart">
                      <span className="top_icon top_icon3" />
                      Giỏ Hàng
                      <span className="count EC-Layout_Basket-count-display">
                        <span className="EC-Layout-Basket-count">0</span>
                      </span>
                    </Link>
                    <ul className="xans-element- xans-layout xans-layout-shoppinginfo">
                      <li className>
                        <Link to="/favouriteslist">
                          Danh Sách Yêu Thích
                          <strong>
                            <span id="xans_myshop_interest_prd_cnt"> 0</span>
                          </strong>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="link" />
        </div>
      </div>
      <div className="header-bottom">
        <div className="inner">
          <div className="wrap-menu">
            <ul className="main-menu">
              <li className="all-li">
                <a
                  onClick={handleClick}
                  className="view_all_menu top_icon"
                  href="#st"
                >
                  All
                </a>
              </li>
              <li>
                <Link to="/dealhot">Deal Hot</Link>
              </li>
              <li>
                <Link to="/bestseller">Hàng bán chạy</Link>
              </li>
              <li>
                <Link to="/newproducts">Hàng mới</Link>
              </li>
              <li>
                <Link to="/story">Story</Link>
              </li>
              <li>
                <Link to="/stores">Stores</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`AllCategoryList ${isActive ? "" : "displaynone"}`}>
          <ul className="depth1">
            {categoryParent.map((category) => (
              <li key={category.id} className="first-li">
                {renderLink(category.id, category.categoryName)}
                <div className="sub-category sub1 uldepth2">
                  <ul className="depth2">
                    {allCategory.map((categorychild) =>
                      categorychild.parent === category.id ? (
                        <li className="first-li">
                          <Link
                            className="menu-a3"
                            to={`/productbycategory/${
                              categorychild.id
                            }?name=${categorychild.categoryName
                              .toLowerCase()
                              .replace(/\s/g, "-")}`}
                          >
                            {categorychild.categoryName}
                          </Link>
                        </li>
                      ) : (
                        ""
                      )
                    )}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
