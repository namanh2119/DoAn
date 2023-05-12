import classNames from "classnames/bind";
import styles from './Oders.module.scss'

const cx = classNames.bind(styles);

function Oders() {
    return ( <div className={cx('wapper')}>
    <div className={cx('header')}>
        <span>Danh sách Đơn Hàng</span>
    </div>
    <div className={cx('container')}>
        <div className={cx('col-name' , 'row', 'col')}>
            <span className={cx('l-1')}>Mã đơn</span>
            <span className={cx('l-2')}>Tên sản phẩm</span>
            <span className={cx('l-1')}>Số lượng</span>
            <span className={cx('l-1')}>Số điện thoại</span>
            <span className={cx('l-3')}>Địa chỉ</span>
            <span className={cx('l-1')}>Tài khoản</span>
            <span className={cx('l-1')}>Đơn giá</span>
            <span className={cx('l-1')}>Trạng thái</span>
        </div>
        <div className={cx('oders-menu')}>
            <span className={cx('l-1')}>1</span>
            <span className={cx('l-2')}>Cơm rang thập cẩm</span>
            <span className={cx('l-1')}>123456@abc</span>
            <span className={cx('l-1')}>0123456789</span>
            <span className={cx('l-3')}>Đức Giang, Long Biên, Hà Nội</span>
            <span className={cx('l-1')}>Hoàng Nam</span>
            <span className={cx('l-1')}>70000</span>
            <input className={cx('l-1')} value='Đang giao'/>
            <span className={cx('l-1', 'action')}>Xóa</span>
        </div>
    </div>
</div> );
}

export default Oders;