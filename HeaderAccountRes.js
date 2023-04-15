import React from "react";

const HeaderAccountRes = () => {
  return (
    <header id="header">
      <div className="header sub-header">
        <h1 className="sub-h1">
          <span className="headcategory-span">Hồ Sơ Của Tôi</span>
        </h1>
        <div className="xans-element- xans-layout xans-layout-category sub-top-menu">
          <ul className="clearBoth">
            <li className="xans-record-">
              <a
                className="menu-a2"
                href="/category/bình-giữ-nhiệt-bình-nước/24/"
              >
                Bình giữ nhiệt / Bình nước
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/hộp-bảo-quản/25/">
                Hộp bảo quản
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/Điện-gia-dụng/23/">
                Điện gia dụng
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/Đồ-dùng-nhà-bếp/26/">
                Đồ dùng nhà bếp
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/Đồ-dùng-sinh-hoạt/27/">
                Đồ dùng sinh hoạt
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/locknlock-tv/108/">
                LocknLock TV
              </a>
            </li>
            <li className="xans-record-">
              <a
                className="menu-a2"
                href="/category/hưỡng-dẫn-sử-dụng-sản-phẩm/52/"
              >
                Hưỡng dẫn sử dụng sản phẩm
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/recipe/68/">
                Recipe
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/recipe/57/">
                Recipe
              </a>
            </li>
            <li className="xans-record-">
              <a className="menu-a2" href="/category/giảm-giá/64/">
                Giảm giá
              </a>
            </li>
          </ul>
        </div>
        <div className="xans-element- xans-layout xans-layout-mobileaction go-back">
          <a href="#none" onclick="history.go(-1);return false;">
            back
          </a>
        </div>
        <div className="category">
          <a href="#none" className="fold">
            Danh Mục
          </a>
        </div>
        <div className="search">
          <Link to="/search" className="search-foldB">
            search
          </Link>
        </div>
        <div className="header-MyPage">
          <a href="/myshop/index.html">My page</a>
        </div>
      </div>
      <div className="searchWrap">
        <form
          id="searchBarForm"
          name
          action="/product/search.html"
          method="get"
          target="_self"
          encType="multipart/form-data"
        >
          <input
            id="banner_action"
            name="banner_action"
            defaultValue
            type="hidden"
          />
          <div className="xans-element- xans-layout xans-layout-searchheader">
            <div className="searchForm">
              <input
                id="keyword"
                name="keyword"
                className="inputTypeText"
                placeholder
                defaultValue
                type="text"
              />
              <button type="button" className="btnDelete">
                Xoá
              </button>
              <div className="autoList" id>
                <ul className="autoDrop" id />
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default HeaderAccountRes;
