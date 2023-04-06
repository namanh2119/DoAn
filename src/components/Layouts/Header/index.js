import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Login from '../Login';
import { useState } from 'react';

function Header() {
    const cx = classNames.bind(styles);

    const [login, setLogin] = useState(false);
    const handleLogin = () => {
        setLogin((curr) => !curr);
    };

    return (
        <header className={cx('header')}>
            <div className={cx('grid wide')}>
                <div className={cx('header__content')}>
                    <div className={cx('header__left')}>
                        <Link to="/" className={cx('logo')}>
                            <img src={logo} />
                        </Link>
                        <ul className={cx('header__list')}>
                            <li className={cx('header__list-item')}>
                                <NavLink to="/" className={cx('item__link')}>
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink to="/food" className={cx('item__link')}>
                                    Món ăn
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink to="/drink" className={cx('item__link')}>
                                    Đồ uống
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink to="/contact" className={cx('item__link')}>
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('header__right')}>
                        <Link to="/pay" className={cx('link')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                        <button className={cx('link')} onClick={handleLogin}>
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                    </div>
                </div>
            </div>
            <Login login={login} handleLogin={handleLogin} />
        </header>
    );
}

export default Header;
