import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import InputPassword from '../../Layouts/Input';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('login')}>
            <div className={cx('login-form')}>
                <div className={cx('form-header')}>
                    <span
                        className={cx('title-header')}
                    >
                        Đăng nhập
                    </span>
                </div>
                <div className={cx('form-main')}>
                    <div className={cx('form-info')}>
                        <input className={cx('input-login')} type="text" placeholder="Tên đăng nhập" />
                        <InputPassword name="Mật khẩu" />
                        <div className={cx('button-login')}>
                            <Link to='/'>
                                <button>
                                    Đăng nhập
                                </button>
                            </Link>
                            <Link to='/'>
                                <button>
                                    Hủy
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
