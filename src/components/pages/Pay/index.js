import classNames from 'classnames/bind';
import styles from './Pay.module.scss';
import Bill from '../../Layouts/Bill';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Pay() {
    const [bill, setBill] = useState(false);
    const handleBill = () => {
        setBill((curr) => !curr);
    };

    return (
        <div className={cx('pay', 'grid', 'wide')}>
            <div className={cx('pay__content', 'row', 'col')}>
                <div className={cx('pay__title')}>
                    <span className={cx('l-6')}>Sản phẩm</span>
                    <span className={cx('l-2')}>Số lượng</span>
                    <span className={cx('l-2')}>Thành tiền</span>
                    <span className={cx('l-2')}></span>
                </div>
                <div className={cx('pay__products')}>
                    <ul className={cx('pay__list')}>
                        <li className={cx('pay__item', 'row', 'col')}>
                            <div className={cx('pay__product', 'l-6')}>
                                <div
                                    className={cx('product__image')}
                                    style={{
                                        backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`,
                                    }}
                                ></div>
                                <div className={cx('product__info')}>
                                    <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                                    <p className={cx('product__price')}>120000đ</p>
                                </div>
                            </div>
                            <span className={cx('l-2')}>1</span>
                            <span className={cx('l-2')}>120000đ</span>
                            <div className={cx('delete-btn', 'l-2')}>Xóa</div>
                        </li>
                    </ul>
                </div>
                <div className={cx('pay__trans', 'row', 'col')}>
                    <div className={cx('sum__price')}>
                        <span>Tổng số tiền cần thanh toán:</span>
                        <span className={cx('result__price')}>120000đ</span>
                    </div>
                    <button className={cx('l-2')} onClick={handleBill}>
                        Thanh toán
                    </button>
                </div>
            </div>
            <Bill bill={bill} handleBill={handleBill} />
        </div>
    );
}

export default Pay;
