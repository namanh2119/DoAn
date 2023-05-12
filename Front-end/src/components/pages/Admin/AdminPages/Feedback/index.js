import classNames from "classnames/bind";
import styles from './Feedback.module.scss'
const cx = classNames.bind(styles);

function Feedback() {
    return ( <div className={cx('wapper')}>
    <div className={cx('header')}>
        <span>Danh sách Phản Hồi</span>
    </div>
    <div className={cx('container')}>
        <div className={cx('col-name', 'row', 'col')}>
            <span className={cx('l-1')}>Mã feecback</span>
            <span className={cx('l-1')}>Họ tên</span>
            <span className={cx('l-1')}>Số điện thoại</span>
            <span className={cx('l-2')}>Email</span>
            <span className={cx('l-2')}>Địa chỉ</span>
            <span className={cx('l-2')}>Phản hồi</span>
            <span className={cx('l-1')}>Thời gian</span>
            <span className={cx('l-1')}>Trạng thái</span>
        </div>
        <div className={cx('feedback-menu', 'row', 'col')}>
            <span className={cx('l-1')}>1</span>
            <span className={cx('l-1')}>Hoàng Nam</span>
            <span className={cx('l-1')}>0123456789</span>
            <span className={cx('l-2')}>namkaka123@gmail.com</span>
            <span className={cx('l-2')}>Đức Giang, Long Biên, Hà Nội</span>
            <span className={cx('l-2')}>Đồ ăn ngon, giao hàng nhanh, nhưng đồ ăn hơi nhạt</span>
            <span className={cx('l-1')}>3.30 am</span>
            <input className={cx('l-1')} defaultValue='Chưa trả lời'/>
            <span className={cx('l-1', 'action')}>Xóa</span>
        </div>
    </div>
</div> );
}

export default Feedback;