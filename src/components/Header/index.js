import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    const lists = ['Trang chủ', 'Món ăn', 'Đồ uống', 'Liên hệ'];

    return (
        <header className={cx('header')}>
            <div className={cx('header__content')}>
                <div className={cx('header__left')}>
                    <div className={cx('logo')}></div>
                    <ul className={cx('header__list')}>
                        {lists.map((list, index) => (
                            <li key={index} className={cx('header__list-item')}>
                                <a href="" className={cx('item__link')}>
                                    {list}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('header__right')}>
                    <a className={cx('link')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </a>
                    <a className={cx('link')}>
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
