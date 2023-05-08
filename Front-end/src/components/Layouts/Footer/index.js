import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

function Footer() {
    const cx = classNames.bind(styles);

    return (
        <footer className={cx('footer')}>
            <div className={cx('grid wide')}>
                <div className={cx('footer__content')}>
                    <h3>thegioianvat</h3>
                    <p className={cx('footer__text')}>
                        Mang đến cho bạn những món ăn chất lượng
                        <br />
                        Địa chỉ: Số 345, ngõ 336/64, Ngô Gia Tự, Long Biên, Hà Nội
                        <br />
                        Số điện thoại: 0975663322
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
