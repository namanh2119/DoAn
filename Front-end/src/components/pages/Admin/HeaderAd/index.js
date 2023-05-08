import classNames from "classnames/bind";
import styles from './HeaderAd.module.scss'
import logo from '../../../../assets/logo.png';

const cx = classNames.bind(styles);

function HeaderAd() {
    return ( <header className={cx('header')}>
        <img className={cx('logo')} src={logo} alt="logo" />
        <div className={cx('user')}>
            <h4>Xin chào Nam</h4>
            <img src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/302746894_779700056428676_8587639890060082689_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W3kEv5YLSIQAX9C_1cC&_nc_ht=scontent.fhan5-9.fna&oh=00_AfA8nJ_xiLbX3XjJ5qJo3C0aWKMFQAD7vyv52C286p8Fhw&oe=645D5DC8" alt="avatar" />
        </div>
    </header> );
}

export default HeaderAd;