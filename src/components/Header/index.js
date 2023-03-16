import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

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
                                {list}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('header__right')}></div>
            </div>
        </header>
    );
}

export default Header;
