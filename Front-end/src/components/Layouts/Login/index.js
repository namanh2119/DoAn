import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import InputPassword from '../Input';

const cx = classNames.bind(styles);

function Login({ form, handleForm }) {
    const [tabLogin, setTabLogin] = useState(1);
    const toggleTab = (index) => {
        setTabLogin(index);
    };

    const handleRegister = () => {
        toggleTab(1);
    };

    return (
        <div className={cx('login', form ? 'open' : '')}>
            <div className={cx('modal-overlay')} onClick={handleForm}></div>
            <div className={cx('login-form')}>
                <div className={cx('form-header')}>
                    <span
                        className={cx('title-header', tabLogin === 1 ? 'form-active' : '')}
                        onClick={() => toggleTab(1)}
                    >
                        Đăng nhập
                    </span>
                    <span
                        className={cx('title-header', tabLogin === 2 ? 'form-active' : '')}
                        onClick={() => toggleTab(2)}
                    >
                        Đăng ký
                    </span>
                </div>
                <div className={cx('form-main', tabLogin === 1 ? 'form-active' : '')}>
                    <div className={cx('form-info')}>
                        <input className={cx('input-login')} type="text" placeholder="Tên đăng nhập" />
                        <InputPassword name="Mật khẩu" />
                        <div className={cx('exten-login')}>
                            <div className={cx('save-login')}>
                                Ghi nhớ đăng nhập
                                <input type="checkbox" />
                            </div>
                        </div>
                        <div className={cx('button-login')}>
                            <button
                                onClick={(e) => {
                                    handleForm();
                                }}
                            >
                                Đăng nhập
                            </button>
                            <button onClick={handleForm}>Hủy</button>
                        </div>
                    </div>
                    <div className={cx('login-social')}>
                        <button>
                            <FontAwesomeIcon className={cx('social-icon')} icon={faGoogle} />
                            <span>Đăng nhập bằng Google</span>
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('social-icon')} icon={faFacebook} />
                            <span>Đăng nhập bằng Facebook</span>
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('social-icon')} icon={faTwitter} />
                            <span>Đăng nhập bằng Twitter</span>
                        </button>
                    </div>
                </div>
                <div className={cx('form-main', tabLogin === 2 ? 'form-active' : '')}>
                    <div className={cx('form-info')}>
                        <input className={cx('input-login')} type="text" placeholder="Tên đăng nhập" />
                        <InputPassword name="Mật khẩu" />
                        <InputPassword name="Nhập lại mật khẩu" />
                        <div className={cx('button-login')}>
                            <button onClick={handleRegister}>Đăng ký</button>
                            <button onClick={handleForm}>Hủy</button>
                        </div>
                    </div>
                    <div className={cx('login-social')}>
                        <button>
                            <FontAwesomeIcon className={cx('social-icon')} icon={faGoogle} />
                            <span> Đăng nhập bằng Google</span>
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('social-icon')} icon={faFacebook} />
                            <span> Đăng nhập bằng Facebook</span>
                        </button>
                        <button>
                            <FontAwesomeIcon className={cx('social-icon')} icon={faTwitter} />
                            <span> Đăng nhập bằng Twitter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
