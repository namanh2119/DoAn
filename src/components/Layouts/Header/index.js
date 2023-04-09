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

    const [page, setPage] = useState(1);
    const togglePage = (index) => {
        setPage(index);
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
                                <NavLink
                                    to="/"
                                    className={cx('item__link', page === 1 ? 'active' : '')}
                                    onClick={() => togglePage(1)}
                                >
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink
                                    to="/food"
                                    className={cx('item__link', page === 2 ? 'active' : '')}
                                    onClick={() => togglePage(2)}
                                >
                                    Món ăn
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink
                                    to="/drink"
                                    className={cx('item__link', page === 3 ? 'active' : '')}
                                    onClick={() => togglePage(3)}
                                >
                                    Đồ uống
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink
                                    to="/contact"
                                    className={cx('item__link', page === 4 ? 'active' : '')}
                                    onClick={() => togglePage(4)}
                                >
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('header__right')}>
                        <Link to="/pay" className={cx('link')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                        <button className={cx('user')} onClick={handleLogin}>
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                        <div className={cx('user__login')}>
                            <img src="" className={cx('avatar', 'open')} />
                            <div className={cx('user__info')}>
                                <span>Hoàng Nam</span>
                                <button>Đăng xuất</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Login login={login} handleLogin={handleLogin} />
        </header>
    );
}

export default Header;
