import React from 'react';
import './style.css';

function SearchRegistration() {
  return <div>
    <div class="main">
      <div class="main-content">
        <h1 class="block-title">đăng kí tìm người thân</h1>
        <form class="content-block submit-profile" method="POST" enctype="multipart/form-data" novalidate="novalidate">
          <h2>A. Thông tin người đăng ký</h2>
          <div>
            <p class="half">
              <label for="seeker_name">Họ và tên:</label>
              <input name="seeker_name" id="seeker_name" />
            </p>
            <p class="quarter">
              <label for="seeker_name">Năm sinh:</label>
              <input name="seeker_name" id="seeker_name" />
            </p>
            <p class="quarter form-radio">
              <label for="seeker_gender">Giới tính:</label>
              <input name="seeker_gender" id="seeker_gender_1" type="radio" checked value="Nam" />
              <label for="seeker_gender_1">Nam</label>
              <input name="seeker_gender" id="seeker_gender_1" type="radio" checked value="Nữ" />
              <label for="seeker_gender_1">Nữ</label>
            </p>
          </div>
          <div>
            <p class="full">
              <label for="seeker_adds">Địa chỉ:</label>
              <input name="seeker_adds" id="seeker_adds" />
            </p>
          </div>
          <div>
            <p class="full">
              <label for="seeker_email">Email:</label>
              <input name="email" id="seeker_email" />
            </p>
          </div>
          <div>
            <p class="half">
              <label for="seeker_phone">Điện thoại:</label>
              <input name="seeker_phone" id="seeker_phone" />
            </p>
            <p class="half">
              <label for="seeker_pass">Số CMND:</label>
              <input name="seeker_pass" id="seeker_pass" />
            </p>
          </div>
          <h2>B. Thông tin người thất lạc</h2>
          <div>
            <p class="half">
              <label for="seeker_name">Họ và tên:</label>
              <input name="seeker_name" id="seeker_name" />
            </p>
            <p class="quarter">
              <label for="seeker_name">Năm sinh:</label>
              <input name="seeker_name" id="seeker_name" />
            </p>
            <p class="quarter form-radio">
              <label for="seeker_gender">Giới tính:</label>
              <input name="seeker_gender" id="seeker_gender_1" type="radio" checked value="Nam" />
              <label for="seeker_gender_1">Nam</label>
              <input name="seeker_gender" id="seeker_gender_1" type="radio" checked value="Nữ" />
              <label for="seeker_gender_1">Nữ</label>
            </p>
          </div>
          <div>
            <p class="full">
              <label for="seeker_adds">Quê quán:</label>
              <input name="seeker_adds" id="seeker_adds" />
            </p>
          </div>
          <div>
            <p class="half">
              <label for="seeker_father">Tên cha:</label>
              <input name="seeker_father" id="seeker_father" />
            </p>
            <p class="half">
              <label for="seeker_mother">Tên mẹ:</label>
              <input name="seeker_mother" id="seeker_mother" />
            </p>
          </div>
          <div>
            <p class="full">
              <label for="seeker_sibling">Tên anh chị em:</label>
              <input name="seeker_sibling" id="seeker_sibling" />
            </p>
          </div>
          <div>
            <p class="full">
              <label for="seeker_sibling">Tiểu sử:</label>
              <textarea name="beseek_bio" id="beseek_bio" placeholder="Những kỷ niệm sâu sắc khi chưa chia ly - hãy kể thật chi tiết để người thân có thể nhận ra..."></textarea>
            </p>
          </div>
          <h2>C. Hoàn cảnh thất lạc</h2>
          <div>
            <p class="half">
              <label for="losing_year">Năm:</label>
              <input name="losing_year" id="losing_year" />
            </p>
          </div>
          <div>
            <p class="half">
              <label for="losing_place">Địa điểm:</label>
              <input name="losing_place" id="losing_place" />
            </p>
          </div>
          <div>
            <p class="full">
              <label for="losing_reason">Địa điểm:</label>
              <textarea name="losing_reason" id="losing_reason"></textarea>
            </p>
          </div>
          <h2>D. Tìm kiếm</h2>
          <div>
            <p class="full">
              <label for="seek_status">Quá trình tìm kiếm:</label>
              <textarea name="seek_status" id="seek_status" placeholder="Anh/chị đã đi tìm kiếm ở những nơi nào, hỏi ai? Thông tin cụ thể...?"></textarea>
            </p>
          </div>
          <h2>E. Ảnh/tài liệu kèm theo</h2>
          <div class="from-file">
            <label for="profile_file_1">Chọn file:</label>
            <p class="from_file_list">
              <input class="profile_file" name="profile_file_1" for="1" type="file" size="20" />
              <input class="profile_desc" name="profile_desc_1" for="1" placeholder="Ghi chú..." />
              <span class="more_file"> Thêm file:</span>
            </p>
          </div>
          <h2>F. Cam kết</h2>
          <div>
            <p class="full">
              "Tôi xin cam kết nguyện vọng gặp lại người thân là tha thiết, chính đáng. Tôi cam kết cung cấp đầy đủ và chi tiết tất cả tư liệu có liên quan đến người cần tìm, cũng như hình ảnh, thông tin cá nhân của tôi cho chương trình theo bản đăng ký gửi kèm. Tôi đồng ý để chương trình được sử dụng những hình ảnh, thông tin cá nhân và tư liệu nói trên vào những mục đích tìm kiếm và giới thiệu, cụ thể như đăng tin trên báo, phát trên đài phát thanh, truyền hình, trên mạng internet. Tôi ý thức rằng quá trình tìm kiếm là lâu dài và khó khăn, có thể không đạt kết quả mong muốn. Tôi ( và gia đình ) cam kết chủ động tham gia các buổi ghi hình khi có lời mời, nhằm mục đích tìm ra thân nhân nhanh chóng hơn, hoặc để được đoàn tụ với thân nhân trên truyền hình."
            </p>
          </div>
          <div>
            <p class="full form-radio form-submit">
              <input name="rule_profile" id="rule_profile" value="rule_profile" type="checkbox" />
              <label for="rule_profile">Đồng ý</label>
              <input name="submit_profile" id="submit_profile" type="submit" value="Gửi đi" />
            </p>
          </div>
          <div>
            <p class="form-note">(*) Để hoàn tất việc đăng ký với Chương trình Như chưa hề có cuộc chia ly… Anh / Chị hãy in bản đăng ký này (hoặc viết lại bằng thư tay), ký tên, gửi về: Chương trình Như chưa hề có cuộc chia ly... Hòm thư 005, Bưu điện Trung tâm Sài Gòn, TP.HCM</p>
          </div>
        </form>
      </div>
      <div class="main-sidebar">
	<h3 class="large-button"><a href="http://localhost:3000/searchRegistration">Đăng ký tìm người thân</a></h3>
      <div class="widget-block">
        <h3 class="widget-title">Tìm kiếm nâng cao</h3>
        <form class="advanced-search" action="/profiles">
          <p>Có thể bạn đang được ai đó mong gặp lại, hoặc người bạn cần tìm đã đăng ký với NCHCCCL. Hãy kiểm tra!</p>
          <input name="n" placeholder="Họ tên người cần tìm" value="" />
          <input name="y" placeholder="Năm sinh" value="" />
          <input name="a" placeholder="Quê quán" value="" />
          <input name="s" placeholder="Tên cha, mẹ, anh, chị em" value="" />
          <p>(*) Nhập thông tin bằng Tiếng Việt có dấu, nhập số cho năm sinh và năm thất lạc, quê quán, nhập tên địa danh cũ nếu nhớ</p>
          <input class="submit" type="submit" value="Tìm kiếm" />
        </form>
      </div>
    </div>
    </div>
  </div>;
}

export default SearchRegistration;

