import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('product__item')}>
            <img
                src="https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg"
                className={cx('product__image')}
            ></img>
            <div className={cx('product__info')}>
                <div className={cx('product__name')}>Suất Cơm sườn nấu niêu</div>
                <div className={cx('product__price')}>Giá: 120.000đ</div>
                <div className={cx('product__modify')}>
                    <FontAwesomeIcon icon={faStar} className={cx('like')} />
                    <span>4,5</span>
                    <FontAwesomeIcon icon={faCartShopping} className={cx('quality')} />
                    <span>1k2</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
