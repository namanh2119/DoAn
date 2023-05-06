import { Link } from 'react-router-dom';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Account() {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.click();
    };
    const handleFileChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }
        console.log('fileObj is', fileObj);

        // 👇️ reset file input
        event.target.value = null;

        // 👇️ is now empty
        console.log(event.target.files);

        // 👇️ can still access file object here
        console.log(fileObj);
        console.log(fileObj.name);
    };

    return (
        <div className={cx('account', 'grid', 'wide')}>
            <div className={cx('account__content', 'row')}>
                <div className={cx('avatar', 'l-5', 'col')}>
                    <input
                        className={cx('avatar-user')}
                        style={{ backgroundImage: `url('')` }}
                        ref={inputRef}
                        onChange={handleFileChange}
                    />
                    <button className={cx('btn')} onClick={handleClick}>
                        Thay đổi Avatar
                    </button>
                </div>
                <div className={cx('infomation', 'l-7', 'col')}>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Họ và tên:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Số điện thoại:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Mail:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('address', 'row', 'col')}>
                        <div className={cx('form-user', 'l-6', 'col')}>
                            <p className={cx('title-user')}>Tỉnh/Thành Phố:</p>
                            <input type="text" />
                        </div>
                        <div className={cx('form-user', 'l-6', 'col')}>
                            <p className={cx('title-user')}>Quận/Huyện:</p>
                            <input type="text" />
                        </div>
                        <div className={cx('form-user', 'l-6', 'col')}>
                            <p className={cx('title-user')}>Xã/Phường:</p>
                            <input type="text" />
                        </div>
                        <div className={cx('form-user', 'l-6', 'col')}>
                            <p className={cx('title-user')}>Số nhà/Ngõ:</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className={cx('button')}>
                        <button className={cx('btn')}>Cập nhật</button>
                        <Link to="/" className={cx('btn')}>
                            Đăng xuất
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
