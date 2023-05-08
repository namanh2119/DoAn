import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

const Sidebar = () => {
    return (
        <div className={cx("sidebar-wrapper")}>
            <nav id="sidebar">
                <ul className={cx("list-unstyled components")}>
                    <li>
                        <Link to="/admin">Tổng quan</Link>
                    </li>
                    <li>
                        <Link to="/admin/foods">Quản lý Món Ăn</Link>
                    </li>
                    <li>
                        <Link to="/admin/drinks">Quản lý Đồ Uống</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">Quản lý đơn hàng</Link>
                    </li>
                    <li>
                        <Link to="/admin/users">Quản lý người dùng</Link>
                    </li>
                    <li>
                        <Link to="/admin/feedback">Quản lý bình luận</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar