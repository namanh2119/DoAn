import classNames from "classnames/bind";
import styles from './Comments.module.scss'

const cx = classNames.bind(styles);


function Comments() {
    return ( <div className={cx('wapper')}>
    <div className={cx('header')}>
        <span>Danh sách Comments</span>
    </div>
    <div className={cx('container')}>
        <div className={cx('col-name' , 'row', 'col')}>
            <span className={cx('l-1')}>ID</span>
            <span className={cx('l-2')}>Tài khoản</span>
            <span className={cx('l-3')}>Bình luận</span>
            <span className={cx('l-1')}>ID sản phẩm</span>
            <span className={cx('l-3')}>Tên sản phẩm</span>
        </div>
        <div className={cx('user-menu')}>
            <span className={cx('l-1')}>1</span>
            <div className={cx('image','l-2')}>
                <div
                    className={cx('user-image')}
                    style={{
                        backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`,
                    }}
                ></div>
            </div>
            <span className={cx('l-3')}>namhoang</span>
            <span className={cx('l-2')}>123456@abc</span>
            <span className={cx('l-2')}>quản lý</span>
            <span className={cx('l-1', 'action')}>Chi tiết</span>
            <span className={cx('l-1', 'action')}>Xóa</span>
        </div>
    </div>
</div> );
}

export default Comments;