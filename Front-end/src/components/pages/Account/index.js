import { Link } from 'react-router-dom';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Account() {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.click();
    };
    const [updateBtn, setUpdateBtn] = useState(true)
    const handleUpdateBtn = () => {
        setUpdateBtn(res => !res)
    }
    const handleFileChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return; 
        }
    };

    return (
        <div className={cx('account', 'grid', 'wide')}>
            <div className={cx('account__content', 'row')}>
                <div className={cx('avatar', 'l-5', 'col')}>
                    <input
                        className={cx('avatar-user')}
                        style={{ backgroundImage: `url('https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/302746894_779700056428676_8587639890060082689_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W3kEv5YLSIQAX9C_1cC&_nc_ht=scontent.fhan5-9.fna&oh=00_AfA8nJ_xiLbX3XjJ5qJo3C0aWKMFQAD7vyv52C286p8Fhw&oe=645D5DC8')`, backgroundSize:'cover' }}
                        ref={inputRef}
                        onChange={handleFileChange}
                    />
                    {updateBtn ? (<></>) : (
                        <button className={cx('btn')} onClick={handleClick}>
                        Thay đổi Avatar
                        </button>
                    )}
                </div>
                <div className={cx('infomation', 'l-7', 'col')}>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Tài khoản:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Mật khẩu:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Số điện thoại:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Email:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('form-user')}>
                        <p className={cx('title-user')}>Địa chỉ:</p>
                        <input type="text" />
                    </div>
                    <div className={cx('button')}>
                        {updateBtn ? 
                        (<div className={cx('action')}>
                            <button className={cx('btn')} onClick={handleUpdateBtn}>Cập nhật</button>
                            <Link to="/" className={cx('btn')}>
                                Đăng xuất
                            </Link>
                        </div>) : 
                        (<div className={cx('update-info')}>
                            <button className={cx('btn')}>Lưu</button>
                            <button className={cx('btn')} onClick={handleUpdateBtn}>Hủy</button>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Account;
