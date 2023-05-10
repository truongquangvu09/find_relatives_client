import React from 'react';
import style from './donate-page.module.css';
import Sidebar from '../../../utils/sidebar/index';
import { Margin } from '@mui/icons-material';

function DonatePage() {
    return (
        <div className={style['container']}>
            <div className={style['newsDetail']}>
                <h3 className={style['title-block']}>
                    <a href="">Find Lost Relatives</a>
                </h3>
                <div className={style['main-container-newdetail']}>
                    <div className={style['content-block-newdetail']}>
                        <h1 className={style['title-content']}>
                            ỦNG HỘ FIND LOST RELATIVES
                        </h1>
                        <p className={style['sub-title']}>THƯ NGỎ TỪ CHƯƠNG TRÌNH</p>
                        <p className={style['newDetail-p']}>
                            Thưa Quý Anh/ Chị, những người theo dõi Fanpage NHƯ CHƯA HỀ CÓ CUỘC CHIA LY!
                            <br></br>
                            Chúng ta là một cộng đồng lớn, gồm 407.983 người (followers Fanpage – Facebook.com/NCHCCCL), tính tới thời điểm tôi viết thư này. Quý vị vào Fanpage để theo dõi những chương trình trực tiếp hàng tháng với những câu chuyện chia ly – đoàn tụ, những cuộc tìm kiếm, những thông báo tìm kiếm. Ngay lúc này, xin Quý vị dành 2 phút, để đọc thư ngỏ này ạ! Chúng tôi trân trọng biết ơn.<br></br>
                            <br></br>
                            NHƯ CHƯA HỀ CÓ CUỘC CHIA LY đang kêu gọi Quý vị hành động: Dành “1 ổ bánh mì mỗi tháng”, tương đương 20.000vnđ, để nối thân thương.<br></br>
                            <br></br>
                            Thưa Quý Anh/ Chị,<br></br>
                            <br></br>
                            NCHCCCL vốn chưa từng là 1 hoạt động dùng tiền ngân sách, mà trong 12 năm đầu tiên, Hoạt động tìm kiếm và đoàn tụ người thân không thu phí NCHCCCL tồn tại nhờ tiền tài trợ cho Chương trình truyền hình cùng tên. Cho đến giữa năm ngoái, theo yêu cầu phải tiếp tục hoạt động của đại đa số công chúng, NCHCCCL đã quyết định: chỉ có thể dựa vào chính công chúng mà tiếp tục sứ mệnh tìm người và đoàn tụ.
                        </p>
                        <p className={style['sub-title']}>Ổ BÁNH MÌ LÀM NÊN ĐIỀU KỲ DIỆU</p>
                        <p className={style['newDetail-p']}>
                            20.000 không là 1 số tiền lớn đối với đại đa số Quý vị đang theo dõi NCHCCCL.
                            <br></br>
                            Nhưng, 30.000 người chúng ta cùng có hành động mỗi tháng trích chỉ 1 ổ bánh mì ăn sáng (20.000vnđ) góp cho NCHCCCL, là những cuộc tìm kiếm được xúc tiến, kết nối được thông suốt và đoàn viên hạnh ngộ được diễn ra như trong mơ.<br></br>
                            <br></br>
                            30.000 người là 1 lực lượng đông đảo lắm! NCHCCCL có thể tự hào mà nói rằng Hoạt động nhân đạo này thực sự là của người dân, của xã hội, khi có 30.000 người góp tay nuôi dưỡng nó.<br></br>
                            <br></br>
                            30.000 người lại chẳng phải là nhiều, nếu so với cộng đồng đang theo dõi NCHCCCL, ít nhất là qua Fanpage này. Chúng ta đông gấp hơn chục lần như thế, 407+ ngàn người! Tôi có quyền mong chờ, chính cộng đồng NCHCCCL đây sẽ làm nên điều kỳ diệu, chính chúng ta vận hành được Hoạt động xã hội thân thương này!
                        </p>
                        <p className={style['sub-title']}>ĐÓNG GÓP BẰNG CÁCH NÀO</p>
                        <p className={style['sub-title2']}>
                            1/ Ngân hàng Quân đội MBBank – Số tài khoản thiện nguyện: 2700
                        </p>

                        <div className="newdetail-block-image">
                            <img clasName='img-newsdetail' src="https://haylentieng.vn/wp-content/uploads/2023/03/z4163339796552_4a45b51f7f238d548fac26faedd77c9b-512x512.jpg" alt="" />
                        </div>
                        <p className={style['sub-title2']}>
                            2/ Ủng hộ hàng tháng qua Ví MoMo
                        </p>
                        <p className={style['newDetail-p']}>
                            Bởi vì, chúng ta ai cũng bận rộn, mà làm việc thiện nguyện tuy món tiền không lớn, nhưng cần thuận tiện, MoMo đã vì NCHCCCL mà phát triển tính năng Subscription (trích tiền ủng hộ tự động), giúp Quý Anh/ Chị chỉ 1 lần đăng ký, là đều đặn góp “bánh mì” nuôi NCHCCCL trong 12 tháng.<br></br>
                            <br></br>
                            Ổn định là điều tối quan trọng đối với NCHCCCL, vì mọi cuộc tìm kiếm cũng như chương trình phát sóng không thể vì nguồn tiền lúc dư lúc thiếu mà phải dừng hoặc co hẹp. Vì vậy, chúng tôi trông chờ sự góp tay thường trực của Quý vị.
                        </p>
                        <div className="newdetail-block-image">
                            <img clasName='img-newsdetail' src="https://haylentieng.vn/wp-content/uploads/2021/04/fb-2-512x512.jpg" alt="" />
                        </div>
                        <p className={style['sub-title2']}>
                            3/  Ủng hộ qua ZaloPay
                        </p>
                        <div className="newdetail-block-image">
                            <img clasName='img-newsdetail' src="https://haylentieng.vn/wp-content/uploads/2020/12/adb071bfd8f728a971e6.jpg" alt="" width='70%' />
                        </div>
                        <p className={style['sub-title2']}>
                            Còn bây giờ, xin một lần nữa tha thiết kêu gọi:
                        </p>
                        <p className={style['newDetail-p']}>
                            Hỡi Quý Anh/ Chị đang theo dõi NCHCCCL, hãy tham gia Hoạt động thiện nguyện bằng cách ủng hộ “1 ổ bánh mì/ tháng”, thông qua các cách thức quyên góp nêu trên, đặc biệt là qua Ví điện tử MoMo!<br></br>
                            <br></br>
                            Trân trọng cảm ơn Quý Anh/ Chị đã quan tâm, và cùng chúng tôi tin ở sức mạnh của chúng ta đang làm nên những cuộc đoàn tụ mẹ con, anh em, gia tộc, cội nguồn hạnh phúc nhất!
                        </p>

                        <div className="comment-block">
                            <div id="respond" className="comment-respond">
                                <h3>leave a Reply</h3>
                                <form action="">
                                    <p className="comment-note">
                                        <span>Your email address will not be published.</span>
                                        Required fields are marked
                                        <span>*</span>
                                    </p>
                                    <p className="comment-form">
                                        <label className="title-comment" for="comment">Comment</label>
                                        <textarea name="comment" id="" cols="45" rows="8" maxlength="65525" ></textarea>
                                    </p>
                                    <p className="comment-name">
                                        <label className="title-comment" for="name">Name*</label>
                                        <input className="text" type="text" maxlength="245" />
                                    </p>
                                    <p className="comment-email">
                                        <label className="title-comment" for="Email">Email*</label>
                                        <input className="text" type="text" maxlength="245" />
                                    </p>
                                    <p className="comment-website">
                                        <label className="title-comment" for="website">Website</label>
                                        <input className="text" type="text" maxlength="245" />
                                    </p>
                                    <p className="comment-form-save">
                                        <input type="checkbox" />
                                        <label for="form-save">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                    <p className="form-submit">
                                        <input type="submit" value="Post Comment" />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-newdetail'>
                        <div class="widget-block">
                            <h3 class="widget-title">Các tin đọc nhiều nhất</h3>
                            <ul class="featured-contact">
                                <li class="contact-mail">Thông báo</li>
                                <li class="contact-mail">Hoạt Động</li>
                                <li class="contact-mail">Báo chí</li>
                                <li class="contact-mail">Khán giả</li>
                            </ul>
                        </div>
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DonatePage;
