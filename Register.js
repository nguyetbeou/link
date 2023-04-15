import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      username: username,
      phone: phone,
      address: address,
    };
    if (data.email === "") toast.error("Vui lòng nhập email!");
    else if (data.password === "") toast.error("Vui lòng nhập mật khẩu!");
    else if (data.username === "") toast.error("Vui lòng nhập tên đăng nhập!");
    else if (data.phone == "") toast.error("Vui lòng nhập số điện thoại!");
    else if (data.address == "") toast.error("Vui lòng nhập địa chỉ!");
    else if (data.password != confirmpassword)
      toast.error("Mật khẩu không khớp!");
    else {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          toast.success("Đăng ký thành công!", { position: "top-right" });
          setTimeout(() => setLoggedIn({ loggedIn: response.ok }), 2000);
        } else {
          toast.error("Đăng ký tài khoản không thành công!", {
            position: "top-right",
          });
        }
      });
    }
  }

  if (loggedIn) return <Navigate to="/login" />;

  return (
    <div id="wrap">
      <div id="container">
        <div id="contents">
          <div className="root_width">
            <div className="path">
              <span>Trang Hiện Tại</span>
              <ol>
                <li>
                  <Link to="/">Trang Chủ</Link>
                </li>
                <li title="Current Page">
                  <strong>Đăng Ký</strong>
                </li>
              </ol>
            </div>
            <form
              id="joinForm"
              onSubmit={handleRegister}
              name="joinForm"
              method="post"
              target="_self"
            >
              <div className="xans-element- xans-member xans-member-join">
                <h3 className="join-h3 join-title">Thông Tin Cá Nhân</h3>
                <p className="required">
                  <img
                    src="assets/imgs/ico_required_blue.gif"
                    alt="Required Field"
                  />
                  Mục bắt buộc
                </p>
                <div className="ec-base-table typeWrite">
                  <table border={1}>
                    <caption>Thông Tin Cá Nhân</caption>
                    <colgroup>
                      <col style={{ width: "150px" }} />
                      <col style={{ width: "auto" }} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">
                          Email
                          <img
                            src="assets/imgs/ico_required_blue.gif"
                            alt="Required Field"
                          />
                        </th>
                        <td>
                          <input
                            id="email1"
                            name="email1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                          />
                          <span id="emailMsg" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Mật Khẩu
                          <img
                            src="assets/imgs/ico_required_blue.gif"
                            alt="Required Field"
                          />
                        </th>
                        <td>
                          <div className="eTooltip">
                            <input
                              id="passwd"
                              name="passwd"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              maxLength={16}
                              type="password"
                            />
                            <div className="ec-base-tooltip typeUpper">
                              <div className="content">
                                <strong className="txtWarn">
                                  ※ Quy định đặt mật khẩu
                                </strong>
                                <ul className="ec-base-help typeDash gBlank10 txtWarn">
                                  - (10~16 ký tự bao gồm ít nhất hai trong: chữ
                                  cái viết thường/viết hoa, chữ số và ký tự đặc
                                  biệt)
                                  <br />
                                  - Ký tự đặc biệt có thể nhập
                                  <br />
                                  &nbsp;&nbsp;&nbsp; ~ ` ! @ # $ % ^ ( ) _ - ={" "}
                                  {"{"}
                                  {"}"} [ ] | ; : &lt; &gt; , . ? /<br />- Không
                                  thể nhập dấu cách
                                </ul>
                              </div>
                              <Link to="" className="btnClose">
                                <img
                                  src="assets/imgs/btn_close_tip.gif"
                                  alt="Close"
                                />
                              </Link>
                              <span className="edge" />
                            </div>
                          </div>
                          <p className="eTooltip-p">
                            (10~16 ký tự bao gồm ít nhất hai trong: chữ cái viết
                            thường/viết hoa, chữ số và ký tự đặc biệt)
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          Xác Nhận Mật Khẩu
                          <img
                            src="assets/imgs/ico_required_blue.gif"
                            alt="Required Field"
                          />
                        </th>
                        <td>
                          <input
                            id="user_passwd_confirm"
                            name="user_passwd_confirm"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            maxLength={16}
                            type="password"
                          />
                          <span id="pwConfirmMsg" />
                        </td>
                      </tr>
                      <tr className>
                        <th scope="row">
                          Tên
                          <img
                            src="assets/imgs/ico_required_blue.gif"
                            className
                            alt="Required Field"
                          />
                        </th>
                        <td>
                          <input
                            id="name"
                            name="name"
                            className="ec-member-name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            maxLength={30}
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr className>
                        <th scope="row">
                          Điện Thoại
                          <img
                            src="assets/imgs/ico_required_blue.gif"
                            className
                            alt="Required Field"
                          />
                        </th>
                        <td className="phone-td">
                          <input
                            id="phone2"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            maxLength={15}
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr className>
                        <th scope="row">
                          Địa Chỉ
                          <img
                            src="assets/imgs/ico_required_blue.gif"
                            className="displaynone"
                            alt="Required Field"
                          />
                        </th>
                        <td>
                          <ul className="ec-address">
                            <li id="join_country_wrap">
                              <select
                                id="country"
                                name="country"
                                className="gCheckbox60"
                                style={{ width: "87%" }}
                              >
                                <option value>Vui lòng chọn.</option>
                                <option value="VN" selected>
                                  VIET NAM
                                </option>
                              </select>
                              <span
                                id="join_directInputCheck_wrap"
                                className="ec-base-label"
                              >
                                <input
                                  id="join_directInputCheck"
                                  name="join_directInputCheck"
                                  type="checkbox"
                                />
                                <label
                                  id="join_directInputCheckLabel"
                                  htmlFor="join_directInputCheckLabel"
                                >
                                  Nhập trực tiếp
                                </label>
                              </span>
                            </li>
                            <li id="join_area_wrap" className="ec-address-area">
                              <select id="si_name_addr" name="si_name_addr">
                                <option value>Tỉnh/Thành</option>
                                <option value="TP. Hồ Chí Minh">
                                  TP. Hồ Chí Minh
                                </option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Đà Nẵng">Đà Nẵng</option>
                                <option value="Cần Thơ">Cần Thơ</option>
                                <option value="Hải Phòng">Hải Phòng</option>
                                <option value="An Giang">An Giang</option>
                                <option value="Bà Rịa - Vũng Tàu">
                                  Bà Rịa - Vũng Tàu
                                </option>
                                <option value="Bạc Liêu">Bạc Liêu</option>
                                <option value="Bắc Kạn">Bắc Kạn</option>
                                <option value="Bắc Giang">Bắc Giang</option>
                                <option value="Bắc Ninh">Bắc Ninh</option>
                                <option value="Bến Tre">Bến Tre</option>
                                <option value="Bình Dương">Bình Dương</option>
                                <option value="Bình Định">Bình Định</option>
                                <option value="Bình Phước">Bình Phước</option>
                                <option value="Bình Thuận">Bình Thuận</option>
                                <option value="Cà Mau">Cà Mau</option>
                                <option value="Cao Bằng">Cao Bằng</option>
                                <option value="Đắk Lắk">Đắk Lắk</option>
                                <option value="Đắk Nông">Đắk Nông</option>
                                <option value="Điện Biên">Điện Biên</option>
                                <option value="Đồng Nai">Đồng Nai</option>
                                <option value="Đồng Tháp">Đồng Tháp</option>
                                <option value="Gia Lai">Gia Lai</option>
                                <option value="Hà Giang">Hà Giang</option>
                                <option value="Hà Nam">Hà Nam</option>
                                <option value="Hà Tĩnh">Hà Tĩnh</option>
                                <option value="Hải Dương">Hải Dương</option>
                                <option value="Hậu Giang">Hậu Giang</option>
                                <option value="Hòa Bình">Hòa Bình</option>
                                <option value="Hưng Yên">Hưng Yên</option>
                                <option value="Khánh Hòa">Khánh Hòa</option>
                                <option value="Kiên Giang">Kiên Giang</option>
                                <option value="Kon Tum">Kon Tum</option>
                                <option value="Lai Châu">Lai Châu</option>
                                <option value="Lạng Sơn">Lạng Sơn</option>
                                <option value="Lào Cai">Lào Cai</option>
                                <option value="Lâm Đồng">Lâm Đồng</option>
                                <option value="Long An">Long An</option>
                                <option value="Nam Định">Nam Định</option>
                                <option value="Nghệ An">Nghệ An</option>
                                <option value="Ninh Bình">Ninh Bình</option>
                                <option value="Ninh Thuận">Ninh Thuận</option>
                                <option value="Phú Thọ">Phú Thọ</option>
                                <option value="Phú Yên">Phú Yên</option>
                                <option value="Quảng Bình">Quảng Bình</option>
                                <option value="Quảng Nam">Quảng Nam</option>
                                <option value="Quảng Ngãi">Quảng Ngãi</option>
                                <option value="Quảng Ninh">Quảng Ninh</option>
                                <option value="Quảng Trị">Quảng Trị</option>
                                <option value="Sóc Trăng">Sóc Trăng</option>
                                <option value="Sơn La">Sơn La</option>
                                <option value="Tây Ninh">Tây Ninh</option>
                                <option value="Thái Bình">Thái Bình</option>
                                <option value="Thái Nguyên">Thái Nguyên</option>
                                <option value="Thanh Hóa">Thanh Hóa</option>
                                <option value="Thừa Thiên - Huế">
                                  Thừa Thiên - Huế
                                </option>
                                <option value="Tiền Giang">Tiền Giang</option>
                                <option value="Trà Vinh">Trà Vinh</option>
                                <option value="Tuyên Quang">Tuyên Quang</option>
                                <option value="Vĩnh Long">Vĩnh Long</option>
                                <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                                <option value="Yên Bái">Yên Bái</option>
                              </select>
                              <select id="ci_name_addr" name="ci_name_addr">
                                <option value>Quận/Huyện</option>
                              </select>
                              <select id="gu_name_addr" name="gu_name_addr">
                                <option value>Phường/Xã</option>
                              </select>
                            </li>
                            <li id="join_detailAddr_wrap">
                              <input
                                id="addr2"
                                name="addr2"
                                placeholder="Địa chỉ chi tiết(không bắt buộc)"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="inputTypeText"
                                type="text"
                                size={60}
                                maxLength={255}
                              />
                            </li>
                            <li id="join_street_wrap">
                              <input
                                id="street_name"
                                name="street_name"
                                placeholder="Phường/Xã"
                                className="inputTypeText displaynone"
                                type="text"
                                size={30}
                                maxLength={50}
                                style={{ display: "none" }}
                                disabled
                              />
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="ec-base-button">
                  <button type="submit" className="btnSubmitFix sizeM">
                    Đăng Ký
                  </button>
                </div>
                <div
                  id="ec_shop_member_confirm-infolayer"
                  className="joinConfirm ec-base-layer"
                >
                  <div className="header">
                    <h3>Xác Nhận Thông Tin Đăng Ký</h3>
                  </div>
                  <div className="content">
                    <p>
                      Để hoàn tất đăng ký, vui lòng xác nhận thông tin tài khoản
                      và nhấn “Đăng ký”.
                    </p>
                    <div className="ec-base-table">
                      <table border={1}>
                        <caption>Xác Nhận Thông Tin Đăng Ký</caption>
                        <colgroup>
                          <col style={{ width: "130px" }} />
                          <col style={{ width: "auto" }} />
                        </colgroup>
                        <tbody>
                          <tr>
                            <th scope="row">Email</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-email1" />
                            </td>
                          </tr>
                          <tr className="displaynone">
                            <th scope="row">ID</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-member_id" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Tên</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-name" />
                            </td>
                          </tr>
                          <tr className>
                            <th scope="row">Điện Thoại</th>
                            <td>
                              <span id="ec_shop_member_confirm_field-phone" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="ec-base-button">
                    <a
                      href="#none"
                      className="btnSubmitFix sizeS"
                      id="ec_shop_confirm-checkingjoininfo_action"
                    >
                      Đăng Ký
                    </a>
                    <Link to="" className="btnNormalFix sizeS">
                      Đóng
                    </Link>
                  </div>
                  <Link to="" className="close">
                    <img src="assets/imgs/btn_close.gif" alt="Close" />
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      <div id="quick">
        <div className="xans-element- xans-layout xans-layout-orderbasketcount">
          <strong>Giỏ Hàng</strong>
          <span>
            <Link to="">0</Link> Sản Phẩm
          </span>
        </div>
        <div className="xans-element- xans-layout xans-layout-productrecent">
          <h2>
            <Link to="/seen">Đã Xem Gần Đây</Link>
          </h2>
          <ul>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="about:blank" alt="" />
                <span>##name##</span>
              </Link>
            </li>
            <li className="displaynone xans-record-">
              <Link to="">
                <img src="about:blank" alt="" />
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
      <ToastContainer />
    </div>
  );
};

export default Register;
