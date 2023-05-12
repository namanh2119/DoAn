import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import InputPassword from '../../Layouts/Input';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('login')}>
            <div className={cx('login-form')}>
                <div className={cx('form-header')}>
                    <span
                        className={cx('title-header')}
                    >
                        Đăng ký
                    </span>
                </div>
                <div className={cx('form-main')}>
                    <div className={cx('form-info')}>
                        <input className={cx('input-login')} type="text" placeholder="Tên đăng nhập" />
                        <InputPassword name="Mật khẩu" />
                        <InputPassword name="Nhập lại mật khẩu" />
                        <input className={cx('input-login')} type="text" placeholder="Số điện thoại" />
                        <input className={cx('input-login')} type="text" placeholder="Email" />
                        <input className={cx('input-login')} type="text" placeholder="Địa chỉ" />
                        <div className={cx('button-login')}>
                            <Link to='/login'><button>Đăng ký</button></Link>
                            <Link to='/'><button>Hủy</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
