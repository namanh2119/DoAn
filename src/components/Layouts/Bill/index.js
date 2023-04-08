import styles from './Bill.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Bill() {
    return (
        <div className={cx('bill')}>
            <div className={cx('modal-overlay')}></div>
            <div className={cx('bill-form')}>
                <div className={cx('form-header')}>
                    <span className={cx('title-header')}>Thông tin người nhận</span>
                </div>
                <div className={cx('form-info')}>
                    <span className={cx('title-bill')}>Tên người nhận:</span>
                    <input className={cx('input-bill')} type="text" />
                    <span className={cx('title-bill')}>Địa chỉ:</span>
                    <input className={cx('input-bill')} type="text" />
                    <span className={cx('title-bill')}>Số điện thoại:</span>
                    <input className={cx('input-bill')} type="text" />
                    <p>Thanh toán bằng</p>
                    <div className={cx('button-bill')}>
                        <button>Tài khoản ngân hàng</button>
                        <button>Bằng tiền mặt khi nhận hàng</button>
                        <button>Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bill;
