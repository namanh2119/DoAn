import classNames from "classnames/bind";
import styles from './Warning.module.scss'

const cx = classNames.bind(styles);

function Add() {
    return ( 
        <div className={cx('warning')}>
            <div className={cx('modal-overlay')}></div>
            <div className={cx('warn-form')}>
                <div className={cx('form-header')}>
                    <span className={cx('title-header')}>
                        Bạn muốn tiếp tục ?
                    </span>
                </div>
                <div className={cx('form-content')}>
                    <button>Thêm</button>
                    <button>Hủy</button>
                </div>
                
            </div>
        </div>
     );
}

export default Add;