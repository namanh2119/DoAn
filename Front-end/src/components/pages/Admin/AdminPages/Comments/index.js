import classNames from "classnames/bind";
import styles from './Comments.module.scss'
import Wraning from "../../Warning";

const cx = classNames.bind(styles);


function Comments() {
    return ( <div className={cx('wapper')}>
    <div className={cx('header')}>
        <span>Danh sách Bình Luận</span>
    </div>
    <div className={cx('container')}>
        <div className={cx('col-name', 'row', 'col')}>
            <span className={cx('l-1')}>Mã Cmt</span>
            <span className={cx('l-2')}>Account</span>
            <span className={cx('l-2')}>Sản phẩm</span>
            <span className={cx('l-1')}>Đánh giá</span>
            <span className={cx('l-4')}>Bình luận</span>
            <span className={cx('l-1')}>Trạng thái</span>
        </div>
        <div className={cx('feedback-menu', 'row', 'col')}>
            <span className={cx('l-1')}>1</span>
            <span className={cx('l-2')}>Hoàng Nam</span>
            <span className={cx('l-2')}>0123456789</span>
            <span className={cx('l-1')}>5 sao</span>
            <span className={cx('l-4')}>Đồ ăn ngon, giao hàng nhanh, nhưng đồ ăn hơi nhạt</span>
            <input className={cx('l-1')} value='Chưa trả lời'/>
            <span className={cx('l-1', 'action')}>Xóa</span>
        </div>
    </div>
    <Wraning />
</div> );
}

export default Comments;