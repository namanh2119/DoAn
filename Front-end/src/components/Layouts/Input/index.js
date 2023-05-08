import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function InputPassword({ name, ref }) {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className={cx('password')}>
            <input
                ref={ref}
                className={cx('input-login')}
                type={values.showPassword ? 'text' : 'password'}
                onChange={handlePasswordChange('password')}
                placeholder={name}
            />
            <div className={cx('show-password')}>
                <FontAwesomeIcon
                    icon={values.showPassword ? faEyeSlash : faEye}
                    onClick={() => {
                        handleClickShowPassword();
                    }}
                    onMouseDown={handleMouseDownPassword}
                    className={cx('show-icon')}
                />
            </div>
        </div>
    );
}

export default InputPassword;
