import classNames from 'classnames/bind';
import styles from './Pay.module.scss';

const cx = classNames.bind(styles);

function Pay() {
    return (
        <div className={cx('pay', 'grid', 'wide')}>
            <div className={cx('pay__content', 'row', 'col')}>
                <div className={cx('pay__title')}>
                    <span className={cx('l-8')}>Sản phẩm</span>
                    <span className={cx('l-2')}>Số lượng</span>
                    <span className={cx('l-2')}>Thành tiền</span>
                </div>
                <div className={cx('pay__products')}>
                    <ul className={cx('pay__list')}>
                        <li className={cx('pay__item', 'row', 'col')}>
                            <div className={cx('pay__product', 'l-8')}>
                                <img className={cx('product__image')}></img>
                                <div className={cx('product__info')}>
                                    <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                                    <p className={cx('product__price')}>120000đ</p>
                                </div>
                            </div>
                            <span className={cx('l-2')}>1</span>
                            <span className={cx('l-2')}>120000đ</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('pay__trans', 'row', 'col')}>
                    <div className={cx('sum__price')}>
                        <span>Tổng số tiền cần thanh toán:</span>
                        <span className={cx('result__price')}>120000đ</span>
                    </div>
                    <button className={cx('l-2')}>Thanh toán</button>
                </div>
            </div>
        </div>
    );
}

export default Pay;
