import classNames from "classnames/bind";
import styles from './HeaderAd.module.scss'
import logo from '../../../assets/logo.png';

const cx = classNames.bind(styles);

function HeaderAd() {
    return ( <header className={cx('header')}>
        <img src={logo} alt="logo" />
        <div className={cx('user')}>
            <h4>Xin chào Nam</h4>
            <img src="" alt="avatar" />
        </div>
    </header> );
}

export default HeaderAd;