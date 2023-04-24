import React from 'react';
import "./style.css"
function TvShowDetails() {
    return <div class="main">
        <div class="main-content">
            <h3 class="block-title">Truyền hình</h3>

            <div class="content-block single">
                <iframe width="100%" height="368" src="https://www.youtube.com/embed/qzyE9N6LpBw?autoplay=1&showinfo=0" frameBorder="0" allowFullScreen></iframe>
                <h1 class="single-title">NCHCCCL 163: LÚC NÀO MÌNH CŨNG LÀ NGƯỜI CỦA HỌ MÀ</h1>
                <p class="sub-title">Ngày phát sóng: </p>

                <div id="comments" class="comments-area">

                    <div id="respond" class="comment-respond">
                        <h3 id="reply-title" class="comment-reply-title">Leave a Reply <small><a rel="nofollow" id="cancel-comment-reply-link" href="/tvshow/nchcccl-163-luc-nao-minh-cung-la-nguoi-cua-ho-ma/#respond" style={{display:"none"}}>Cancel reply</a></small></h3><form action="https://haylentieng.vn/wp-comments-post.php" method="post" id="commentform" class="comment-form"><p class="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span></p><p class="comment-form-comment"><label htmlFor="comment">Comment</label> <textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" required="required"></textarea></p><p class="comment-form-author"><label htmlFor="author">Name <span class="required">*</span></label> <input id="author" name="author" type="text" value="" size="30" maxLength="245" required='required' /></p>
                            <p class="comment-form-email"><label htmlFor="email">Email <span class="required">*</span></label> <input id="email" name="email" type="text" value="" size="30" maxLength="100" aria-describedby="email-notes" required='required' /></p>
                            <p class="comment-form-url"><label htmlFor="url">Website</label> <input id="url" name="url" type="text" value="" size="30" maxLength="200" /></p>
                            <p class="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
                            <p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Post Comment" /> <input type='hidden' name='comment_post_ID' value='70721' id='comment_post_ID' />
                                <input type='hidden' name='comment_parent' id='comment_parent' value='0' />
                            </p></form>	</div>
                </div>
            </div>
        </div>

        <div class="main-sidebar">
            <div class="widget-block">
                <h3 class="widget-title">Chuyên mục</h3>
                <ul class="right-menu">
                    <li id="menu-item-66" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-66"><a href="https://haylentieng.vn/ungho/">ỦNG HỘ NHƯ CHƯA HỀ CÓ CUỘC CHIA LY</a></li>
                    <li id="menu-item-67" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"><a href="https://haylentieng.vn/lien-he/">LIÊN HỆ</a></li>
                </ul>
            </div>



            <div class="widget-block">
                <h3 class="widget-title">Liên hệ</h3>
                <div class="widget-content">
                    <ul class="featured-contact">
                        <li class="contact-phone"><a href="tel:02862647777">(028) 6264 7777</a></li>
                        <li class="contact-mail">Hòm thư 005 - Bưu điện trung tâm Sài Gòn, Tp. Hồ Chí Minh</li>
                        <li class="contact-email">Email: <a href="/cdn-cgi/l/email-protection#2b5f4246454c5e44425f434a456b434a52474e455f424e454c055d45"><span class="__cf_email__" data-cfemail="c3b7aaaeada4b6acaab7aba2ad83aba2baafa6adb7aaa6ada4edb5ad">[email&#160;protected]</span></a></li>
                    </ul>
                </div>
            </div>

            <div class="widget-block">
                <h3 class="widget-title">Zalo Official Account</h3>
                <div class="zalo-follow-button" data-oaid="2629363586912501706" data-cover="no" data-article="3" data-width="300" data-height="442"></div>
            </div>
        </div>
    </div>
}

export default TvShowDetails;