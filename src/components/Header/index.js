import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header__content')}>
                <div className={cx('header__left')}>
                    <div className={cx('logo')}></div>
                    <ul className={cx('header__list')}></ul>
                </div>
                <div className={cx('header__right')}></div>
            </div>
        </header>
    );
}

export default Header;
