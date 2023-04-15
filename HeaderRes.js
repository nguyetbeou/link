import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderRes = () => {
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
    <header id="header">
      <div className="header">
        <h1>
          <a href="/">
            <img src="assets/imgs/logo.png" alt="LocknLock" />
          </a>
        </h1>
        <div className="category">
          <a href="#none" className="fold">
            Danh Mục
          </a>
        </div>
        <div className="search">
          <a href="/product/search.html" className="search-foldB">
            search
          </a>
        </div>
        <div className="header-MyPage">
          <a href="/myshop/index.html">My page</a>
        </div>
        <section id="topArea">
          <nav id="mainMenu" className="swiper-container swiper-container0">
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <Link to="/dealhot">Deal Hot</Link>
              </li>
              <li className="swiper-slide">
              <Link to="/bestseller">Hàng bán chạy</Link>
              </li>
              <li className="swiper-slide">
              <Link to="/newproducts">Hàng mới</Link>
              </li>
              <li className="swiper-slide">
                <a href="/story.html">Story</a>
              </li>
              <li className="swiper-slide">
                <a href="/stores.html">Stores</a>
              </li>
            </ul>
            <div className="swiper-scrollbar" />
          </nav>
        </section>
      </div>
    </header>
  );
};

export default HeaderRes;
