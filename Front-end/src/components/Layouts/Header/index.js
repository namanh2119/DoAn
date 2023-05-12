import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { useState } from 'react';

const menus = [{name: 'Trang chủ', path: '/'}, {name: 'Món ăn', path: '/food'}, {name: 'Đồ uống', path: '/drink'}, {name: 'Liên hệ', path: '/contact'}]

function Header() {
    const cx = classNames.bind(styles);

    const [page, setPage] = useState(0);
    const togglePage = (index) => {
        setPage(index);
    };

    const currentHeader = false;

    return (
        <header className={cx('header')}>
            <div className={cx('grid wide')}>
                <div className={cx('header__content')}>
                    <div className={cx('header__left')}>
                        <Link to="/" className={cx('logo')}>
                            <img src={logo} alt="logo" />
                        </Link>
                        <ul className={cx('header__list')}>
                            {menus.map((menu, index) => 
                                (<li className={cx('header__list-item')} 
                                key={index}>
                                <NavLink
                                    to={menu.path}
                                    className={cx('item__link', page === index ? 'active' : '')}
                                    onClick={() => togglePage(index)}
                                >
                                    {menu.name}
                                </NavLink>
                            </li>)
                            )}
                        </ul>
                    </div>
                    <div className={cx('header__right')}>
                        <div className={cx('carts')}>
                            <Link to="/pay" className={cx('link')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            <span className={cx('num-carts')}>4</span>
                        </div>
                        {currentHeader ? (
                            <div className={cx('user__login')}>
                                <Link to="/account">
                                    <div style={{
                                        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTY3dnw818v42oQ4urql3cTcRi-_2w6SYJg&usqp=CAU')`,
                                    }}
                                    className={cx('avatar')}>
                                    </div>
                                </Link>
                                <div className={cx('extend-account')}>
                                    <span>Hello HoangNam</span>
                                    <Link className={cx('user__ad')} to='/admin'>Admin</Link>
                                </div>
                            </div>
                        ) : (
                            <button className={cx('user')}>
                                <Link to='/login'><FontAwesomeIcon icon={faUser} /></Link>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
