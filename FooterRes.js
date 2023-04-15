import React from "react";

const FooterRes = () => {
  return (
    <div id="footer">
      <div className="inner">
        <div className="xans-element- xans-layout xans-layout-footer">
          <div className="foot_flex">
            <div className="foot-box foot-box1">
              <h3>C/S Center</h3>
              <ul>
                <li>028 5413 5750 (425)</li>
                <li>
                  <span>Week days:</span> 09:00 - 17:00
                </li>
                <li>
                  <span>Lunch:</span> 12:00 - 13:00
                </li>
                <li>
                  <span>Sat, Sun, Holiday:</span> Off
                </li>
              </ul>
            </div>
            <div className="foot-box foot-box2">
              <h3>Liên hệ</h3>
              <ul>
                <li>028 5413 5750 (425)</li>
                <li>ngan.dnt@locknlock.com</li>
              </ul>
            </div>
            <div className="foot-box foot-box3">
              <ul>
                <li>
                  <Link to="/aboutus">Về Chúng Tôi</Link>
                </li>
                <li>
                  <Link to="">Chính Sách Bảo Mật</Link>
                </li>
                <li>
                  <Link to="/termsconditions">Điều Khoản và Điều Kiện</Link>
                </li>
                <li>
                  <Link to="/stores">Cửa hàng </Link>
                </li>
                <li>
                  <Link to="/customercare">Chăm sóc khách hàng </Link>
                </li>
                <li>
                  <Link to="">Vận chuyển &amp; Giao hàng </Link>
                </li>
                <li>
                  <Link to="">Đổi &amp; Trả hàng </Link>
                </li>
              </ul>
            </div>
            <div className="foot-box foot-box4">
              <ul>
                <li>
                  <span>Tên doanh nghiệp:</span> Lock&amp;Lock Mall
                </li>
                <li>
                  <span>CEO:</span> Chun Hae Woo
                </li>
                <li>
                  <span>Địa chỉ:</span> Tầng 4, số 77 Hoàng Văn Thái, P.Tân Phú,
                  Q.7, Tp. HCM
                </li>
                <li>
                  <span>Quản lý thông tin cá nhân:</span> Chun Hae Woo
                </li>
              </ul>
            </div>
          </div>
          <div className="div_onlinegovvn">
            <img src="assets/imgs/onlinegovvn%20sticker.png" alt="" />
            <ul>
              <li>
                <a href="#st" className="verti_img">
                  <img src="assets/imgs/youtube.gif" alt="Youtube" />
                </a>
              </li>
              <li>
                <a href="#st" className="verti_img">
                  <img src="assets/imgs/icon_facebook.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#st" className="verti_img">
                  <img src="assets/imgs/insta.gif" alt="Instargam" />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            Copyright © <strong>Lock&amp;Lock Mall</strong>. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterRes;
