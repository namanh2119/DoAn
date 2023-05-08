import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

function Sidebar({ className }) {
    const cx = classNames.bind(styles)
    const [pageAd, setPageAd] = useState(1);
    const togglePageAd = (index) => {
        setPageAd(index);
    };

    return (
        <div className={className}>
            <nav className={cx("sidebar")}>
                <ul className={cx("list-categorys")}>
                    <span>Danh Mục</span>
                    <li>
                        <NavLink to="/admin"
                        className={cx('item__category', pageAd === 1 ? 'active' : '')}
                        onClick={() => togglePageAd(1)}>Tổng quan</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/foods" 
                        className={cx('item__category', pageAd === 2 ? 'active' : '')}
                        onClick={() => togglePageAd(2)}>Quản lý Món Ăn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/drinks" 
                        className={cx('item__category', pageAd === 3 ? 'active' : '')}
                        onClick={() => togglePageAd(3)}>Quản lý Đồ Uống</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/orders" 
                        className={cx('item__category', pageAd === 4 ? 'active' : '')}
                        onClick={() => togglePageAd(4)}>Quản lý đơn hàng</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/users" 
                        className={cx('item__category', pageAd === 5 ? 'active' : '')}
                        onClick={() => togglePageAd(5)}>Quản lý người dùng</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/feedback" 
                        className={cx('item__category', pageAd === 6 ? 'active' : '')}
                        onClick={() => togglePageAd(6)}>Quản lý phản hồi</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar