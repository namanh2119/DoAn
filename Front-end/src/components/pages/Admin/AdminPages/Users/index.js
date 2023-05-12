import classNames from "classnames/bind";
import styles from './User.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Users() {
    return ( <div className={cx('wapper')}>
    <div className={cx('header')}>
        <span>Danh sách Tài Khoản</span>
        <button><FontAwesomeIcon icon={faPlus}/> Thêm mới</button>
    </div>
    <div className={cx('container')}>
        <div className={cx('col-name' , 'row', 'col')}>
            <span className={cx('l-1')}>Mã User</span>
            <span className={cx('l-1')}>Avatar</span>
            <span className={cx('l-1')}>Tài khoản</span>
            <span className={cx('l-1')}>Mật khẩu</span>
            <span className={cx('l-1')}>Số điện thoại</span>
            <span className={cx('l-2')}>Email</span>
            <span className={cx('l-2')}>Địa chỉ</span>
            <span className={cx('l-1')}>Quyền</span>
        </div>
        <div className={cx('user-menu')}>
            <span className={cx('l-1')}>1</span>
            <div className={cx('image','l-1')}>
                <div
                    className={cx('user-image')}
                    style={{
                        backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`,
                    }}
                ></div>
            </div>
            <span className={cx('l-1')}>namhoang</span>
            <input type="text" className={cx('l-1')} defaultValue='123456@abc'/>
            <span className={cx('l-1')}>0123456789</span>
            <span className={cx('l-2')}>namkaka@gmail.com</span>
            <span className={cx('l-2')}>Đức Giang, Long Biên, Hà Nội</span>
            <input type="text" className={cx('l-1')} defaultValue='true'/>
            <span className={cx('l-1', 'action')}>Cập nhật</span>
            <span className={cx('l-1', 'action')}>Xóa</span>
        </div>
    </div>
</div> );
}

export default Users;