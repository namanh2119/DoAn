import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login({ form, handleForm, handleLogin }) {
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
                        <span className={cx('title-login')}>Tên đăng nhập:</span>
                        <input className={cx('input-login')} type="text" />
                        <span className={cx('title-login')}>Mật khẩu:</span>
                        <input className={cx('input-login')} type="password" />
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
                                    handleLogin();
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
                        <span className={cx('title-login')}>Tên đăng nhập:</span>
                        <input className={cx('input-login')} type="text" />
                        <span className={cx('title-login')}>Mật khẩu:</span>
                        <input className={cx('input-login')} type="text" />
                        <span className={cx('title-login')}>Nhập lại mật khẩu:</span>
                        <input className={cx('input-login')} type="text" />
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
