import classNames from "classnames/bind";
import styles from './HeaderAd.module.scss'
import logo from '../../../../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function HeaderAd() {
    return ( <header className={cx('header')}>
        <img className={cx('logo')} src={logo} alt="logo" />
        <div className={cx('user')}>
            <div className={cx('search')}>
                <input type="text" name="search" placeholder="Nhập từ khóa"/>
                <FontAwesomeIcon className={cx('icon-header')} icon={faSearch}/>
            </div>
            <div className={cx('notity')}>
                <FontAwesomeIcon className={cx('icon-header')} icon={faBell}/>
                <span className={cx('num-notify')}>4</span>
            </div>
            <span>Xin chào Nam</span>
            <div className={cx('user__login')}>
                <img src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/302746894_779700056428676_8587639890060082689_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W3kEv5YLSIQAX9C_1cC&_nc_ht=scontent.fhan5-9.fna&oh=00_AfA8nJ_xiLbX3XjJ5qJo3C0aWKMFQAD7vyv52C286p8Fhw&oe=645D5DC8" alt="avatar" />
                <div className={cx('extend-account')}>
                    <Link className={cx('user__ad')} to='/'>Client</Link>
                    <Link className={cx('user__ad')} to='/'>Đăng xuất</Link>
                </div>
            </div>
        </div>
    </header> );
}

export default HeaderAd;