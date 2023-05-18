import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function SearchRegistration() {
  const { id } = useSelector((state) => state.user.userData);
  console.log('id', id);

  const [infoSearch, setInfoSearch] = useState({
    report_name: '',
    report_birthday: '',
    report_gender: '',
    report_address: '',
    email: '',
    phone: '',
    cccd: '',
    date_report: Date.now(),
    people_name: '',
    people_birthday: '',
    people_gender: '',
    people_address: '',
    dad_name: '',
    mom_name: '',
    coal_people_name: '',
    brief_biography: '',
    people_image: '',
    searching_process: '',
    date_missing: '',
    last_seen: '',
    lost_reason: '',
    status: 'chưa xác nhận',
    report_id: id,
  });

  console.log({ infoSearch });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfoSearch({
      ...infoSearch,
      [name]: value,
    });
  };

  const handleReportGenderChange = (event) => {
    const value = event.target.value;
    setInfoSearch((prevState) => ({
      ...prevState,
      report_gender: value,
    }));
  };
  const handlePeopleGenderChange = (event) => {
    const value = event.target.value;
    setInfoSearch((prevState) => ({
      ...prevState,
      people_gender: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setInfoSearch((prevState) => ({
      ...prevState,
      people_image: file,
    }));
  };

  const [checkbot, setCheckbot] = useState(false);
  console.log({ checkbot });

  const handleCheckboxClick = (event) => {
    setCheckbot(event.target.checked);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('report_name', infoSearch.report_name);
    formData.append('report_birthday', infoSearch.report_birthday);
    formData.append('report_gender', infoSearch.report_gender);
    formData.append('report_address', infoSearch.report_address);
    formData.append('email', infoSearch.email);
    formData.append('phone', infoSearch.phone);
    formData.append('cccd', infoSearch.cccd);
    formData.append('date_report', infoSearch.date_report);
    formData.append('people_name', infoSearch.people_name);
    formData.append('people_birthday', infoSearch.people_birthday);
    formData.append('people_gender', infoSearch.people_gender);
    formData.append('people_address', infoSearch.people_address);
    formData.append('dad_name', infoSearch.dad_name);
    formData.append('mom_name', infoSearch.mom_name);
    formData.append('coal_people_name', infoSearch.coal_people_name);
    formData.append('brief_biography', infoSearch.brief_biography);
    formData.append('people_image', infoSearch.people_image);
    formData.append('searching_process', infoSearch.searching_process);
    formData.append('date_missing', infoSearch.date_missing);
    formData.append('last_seen', infoSearch.last_seen);
    formData.append('lost_reason', infoSearch.lost_reason);
    formData.append('status', infoSearch.status);
    formData.append('report_id', infoSearch.report_id);
    try {
      if (checkbot === true) {
        const searchRegistration = await axios.post(
          'http://localhost:8080/api/v1/searchRegistrations/searchRegistrations-create',
          formData
        );
        console.log({ searchRegistration });
        if (searchRegistration.status === 200) {
          toast.success('Đăng kí đơn tìm kiếm thành công');
          setTimeout(() => {
            navigate('/profile');
          }, 1000);
        } else {
          toast.error('Đăng kí đơn tìm kiếm không thành công');
        }
      } else {
        toast.error('Đồng ý cam kết để đăng kí');
      }
    } catch (error) {
      toast.error('Đăng kí đơn tìm kiếm không thành công');
    }
  };

  return (
    <>
      <div>
        <div class="main">
          <div class="main-content">
            <h1 class="block-title">đăng kí tìm người thân</h1>
            <form
              class="content-block submit-profile"
              enctype="multipart/form-data"
              novalidate="novalidate"
              onSubmit={handleSubmit}
            >
              <h2>A. Thông tin người đăng ký</h2>
              <div>
                <p class="half">
                  <label for="report_name">Họ và tên:</label>
                  <input
                    name="report_name"
                    id="report_name"
                    value={infoSearch.report_name}
                    onChange={handleChange}
                  />
                </p>
                <p class="quarter">
                  <label for="report_birthday">Năm sinh:</label>
                  <input
                    name="report_birthday"
                    id="report_birthday"
                    value={infoSearch.report_birthday}
                    onChange={handleChange}
                  />
                </p>
                <p class="quarter form-radio">
                  <label for="report_gender">Giới tính:</label>
                  <input
                    name="report_gender"
                    id="report_gender_1"
                    type="radio"
                    value="Nam"
                    checked={infoSearch.report_gender === 'Nam'}
                    onChange={handleReportGenderChange}
                  />
                  <label for="report_gender">Nam</label>
                  <input
                    name="report_gender"
                    id="report_gender_2"
                    type="radio"
                    value="Nữ"
                    checked={infoSearch.report_gender === 'Nữ'}
                    onChange={handleReportGenderChange}
                  />
                  <label for="report_gender">Nữ</label>
                </p>
              </div>
              <div>
                <p class="full">
                  <label for="report_address">Địa chỉ:</label>
                  <input
                    name="report_address"
                    id="report_address"
                    value={infoSearch.report_address}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div>
                <p class="full">
                  <label for="email">Email:</label>
                  <input
                    name="email"
                    id="email"
                    value={infoSearch.email}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div>
                <p class="half">
                  <label for="phone">Điện thoại:</label>
                  <input
                    name="phone"
                    id="phone"
                    value={infoSearch.phone}
                    onChange={handleChange}
                  />
                </p>
                <p class="half">
                  <label for="cccd">Số CCCD:</label>
                  <input
                    name="cccd"
                    id="cccd"
                    value={infoSearch.cccd}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <h2>B. Thông tin người thất lạc</h2>
              <div>
                <p class="half">
                  <label for="people_name">Họ và tên:</label>
                  <input
                    name="people_name"
                    id="people_name"
                    value={infoSearch.people_name}
                    onChange={handleChange}
                  />
                </p>
                <p class="quarter">
                  <label for="people_birthday">Năm sinh:</label>
                  <input
                    name="people_birthday"
                    id="people_birthday"
                    value={infoSearch.people_birthday}
                    onChange={handleChange}
                  />
                </p>
                <p class="quarter form-radio">
                  <label for="people_gender">Giới tính:</label>
                  <input
                    name="people_gender"
                    id="people_gender_1"
                    type="radio"
                    value="Nam"
                    checked={infoSearch.people_gender === 'Nam'}
                    onChange={handlePeopleGenderChange}
                  />
                  <label for="people_gender">Nam</label>
                  <input
                    name="people_gender"
                    id="people_gender_2"
                    type="radio"
                    value="Nữ"
                    checked={infoSearch.people_gender === 'Nữ'}
                    onChange={handlePeopleGenderChange}
                  />
                  <label for="people_gender">Nữ</label>
                </p>
              </div>
              <div>
                <p class="full">
                  <label for="people_address">Quê quán:</label>
                  <input
                    name="people_address"
                    id="people_address"
                    value={infoSearch.people_address}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div>
                <p class="half">
                  <label for="dad_name">Tên cha:</label>
                  <input
                    name="dad_name"
                    id="dad_name"
                    value={infoSearch.dad_name}
                    onChange={handleChange}
                  />
                </p>
                <p class="half">
                  <label for="mom_name">Tên mẹ:</label>
                  <input
                    name="mom_name"
                    id="mom_name"
                    value={infoSearch.mom_name}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div>
                <p class="full">
                  <label for="coal_people_name">Tên anh chị em:</label>
                  <input
                    name="coal_people_name"
                    id="coal_people_name"
                    value={infoSearch.coal_people_name}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div>
                <p class="full">
                  <label for="brief_biography">Tiểu sử:</label>
                  <textarea
                    name="brief_biography"
                    id="brief_biography"
                    placeholder="Những kỷ niệm sâu sắc khi chưa chia ly - hãy kể thật chi tiết để người thân có thể nhận ra..."
                    value={infoSearch.brief_biography}
                    onChange={handleChange}
                  ></textarea>
                </p>
              </div>
              <h2>C. Hoàn cảnh thất lạc</h2>
              <div>
                <p class="half">
                  <label for="date_missing">Năm:</label>
                  <input
                    name="date_missing"
                    id="date_missing"
                    value={infoSearch.date_missing}
                    onChange={handleChange}
                  />
                </p>
                <p class="half">
                  <label for="last_seen">Địa điểm:</label>
                  <input
                    name="last_seen"
                    id="last_seen"
                    value={infoSearch.last_seen}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div>
                <p class="full">
                  <label for="lost_reason">Lý do thất lạc:</label>
                  <textarea
                    name="lost_reason"
                    id="lost_reason"
                    value={infoSearch.lost_reason}
                    onChange={handleChange}
                  ></textarea>
                </p>
              </div>
              <h2>D. Tìm kiếm</h2>
              <div>
                <p class="full">
                  <label for="searching_process">Quá trình tìm kiếm:</label>
                  <textarea
                    name="searching_process"
                    id="searching_process"
                    placeholder="Anh/chị đã đi tìm kiếm ở những nơi nào, hỏi ai? Thông tin cụ thể...?"
                    value={infoSearch.searching_process}
                    onChange={handleChange}
                  ></textarea>
                </p>
              </div>
              <h2>E. Ảnh/tài liệu kèm theo</h2>
              <div class="form-file">
                <label for="people_image">Chọn file:</label>
                <p class="from_file_list">
                  <input
                    class="people_image"
                    name="people_image"
                    id="people_image"
                    for="1"
                    type="file"
                    size="20"
                    onChange={handleFileChange}
                  />
                  <input
                    class="profile_desc"
                    name="profile_desc_1"
                    for="1"
                    placeholder="Ghi chú..."
                  />
                  <span class="more_file"> Thêm file:</span>
                </p>
              </div>
              <h2>F. Cam kết</h2>
              <div>
                <p class="full">
                  "Tôi xin cam kết nguyện vọng gặp lại người thân là tha thiết,
                  chính đáng. Tôi cam kết cung cấp đầy đủ và chi tiết tất cả tư
                  liệu có liên quan đến người cần tìm, cũng như hình ảnh, thông
                  tin cá nhân của tôi cho chương trình theo bản đăng ký gửi kèm.
                  Tôi đồng ý để chương trình được sử dụng những hình ảnh, thông
                  tin cá nhân và tư liệu nói trên vào những mục đích tìm kiếm và
                  giới thiệu, cụ thể như đăng tin trên báo, phát trên đài phát
                  thanh, truyền hình, trên mạng internet. Tôi ý thức rằng quá
                  trình tìm kiếm là lâu dài và khó khăn, có thể không đạt kết
                  quả mong muốn. Tôi ( và gia đình ) cam kết chủ động tham gia
                  các buổi ghi hình khi có lời mời, nhằm mục đích tìm ra thân
                  nhân nhanh chóng hơn, hoặc để được đoàn tụ với thân nhân trên
                  truyền hình."
                </p>
              </div>
              <div>
                <p class="full form-radio form-submit">
                  <input
                    name="rule_profile"
                    id="rule_profile"
                    value="rule_profile"
                    type="checkbox"
                    checked={checkbot}
                    onClick={handleCheckboxClick}
                  />
                  <label for="rule_profile">Đồng ý</label>
                  <input
                    name="submit_profile"
                    id="submit_profile"
                    type="submit"
                    value="Gửi đi"
                  />
                </p>
              </div>
              <div>
                <p class="form-note">
                  (*) Để hoàn tất việc đăng ký với Chương trình Như chưa hề có
                  cuộc chia ly… Anh / Chị hãy in bản đăng ký này (hoặc viết lại
                  bằng thư tay), ký tên, gửi về: Chương trình Như chưa hề có
                  cuộc chia ly... Hòm thư 005, Bưu điện Trung tâm Sài Gòn,
                  TP.HCM
                </p>
              </div>
            </form>
          </div>
          <div class="main-sidebar">
            <h2 class="large-button">
              <a href="http://localhost:3000/searchRegistration">
                Đăng ký tìm người thân
              </a>
            </h2>
            <div class="widget-block">
              <h3 class="widget-title">Tìm kiếm nâng cao</h3>
              <form class="advanced-search" action="/profiles">
                <p>
                  Có thể bạn đang được ai đó mong gặp lại, hoặc người bạn cần
                  tìm đã đăng ký với NCHCCCL. Hãy kiểm tra!
                </p>
                <input name="n" placeholder="Họ tên người cần tìm" value="" />
                <input name="y" placeholder="Năm sinh" value="" />
                <input name="a" placeholder="Quê quán" value="" />
                <input
                  name="s"
                  placeholder="Tên cha, mẹ, anh, chị em"
                  value=""
                />
                <p>
                  (*) Nhập thông tin bằng Tiếng Việt có dấu, nhập số cho năm
                  sinh và năm thất lạc, quê quán, nhập tên địa danh cũ nếu nhớ
                </p>
                <input class="submit" type="submit" value="Tìm kiếm" />
              </form>
            </div>
          </div>
          <div className="search-cir"></div>
        </div>
      </div>
    </>
  );
}

export default SearchRegistration;
