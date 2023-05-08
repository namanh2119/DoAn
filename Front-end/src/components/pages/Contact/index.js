import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('contact__content', 'grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('col l-6 t-1')}>
                    <div className={cx('form')}>
                        <div className={cx('form__input')}>
                            <p className={cx('title')}>Họ và tên:</p>
                            <input type="text" />
                        </div>
                        <div className={cx('form__input')}>
                            <p className={cx('title')}>Số điện thoại:</p>
                            <input type="text" />
                        </div>
                        <div className={cx('form__input')}>
                            <p className={cx('title')}>Mail:</p>
                            <input type="text" />
                        </div>
                        <div className={cx('form__input')}>
                            <p className={cx('title')}>Địa chỉ:</p>
                            <input type="text" />
                        </div>
                        <div className="form__input feedback">
                            <p className={cx('title')}>Ý kiến phản hồi:</p>
                            <textarea name="" cols={30} rows={20}></textarea>
                        </div>

                        <button className={cx('button')}>Gửi</button>
                    </div>
                </div>
                <div className={cx('col l-6 t-1')}>
                    <div className={cx('map')}>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5043321826743!2d105.88728148906797!3d21.052509982579306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9061ed78511%3A0x7798ca50c379c9ef!2sCT1A%20Homeland%20Long%20Bi%C3%AAn!5e0!3m2!1svi!2s!4v1675000874253!5m2!1svi!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
