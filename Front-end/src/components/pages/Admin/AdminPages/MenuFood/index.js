import classNames from "classnames/bind";
import styles from './MenuFood.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function MenuFood() {

    useEffect(() => {
        fetch(`http://localhost:4000/foods`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }, []);

    return ( 
    <div className={cx('wapper')}>
        <div className={cx('header')}>
            <span>Danh sách Món Ăn</span>
            <button><FontAwesomeIcon icon={faPlus}/> Thêm mới</button>
        </div>
        <div className={cx('container')}>
            <div className={cx('col-name' , 'row', 'col')}>
                <span className={cx('l-1')}>Mã SP</span>
                <span className={cx('l-2')}>Ảnh</span>
                <span className={cx('l-2')}>Tên</span>
                <span className={cx('l-2')}>Giá</span>
                <span className={cx('l-1')}>Loại</span>
                <span className={cx('l-2')}>Trạng thái</span>
            </div>
            <div className={cx('products-menu')}>
                <span className={cx('l-1')}>1</span>
                <div
                    className={cx('product-image', 'l-2')}
                    style={{
                        backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`,
                }}
                />
                <input type="text" className={cx('l-2')} defaultValue='Suất Cơm sườn nấu niêu'/>
                <input type="text" className={cx('l-2')} defaultValue='120000'/>
                <input type="text" className={cx('l-1')} defaultValue='Cơm'/>
                <input type="text" className={cx('l-2')} defaultValue='Còn hàng'/>
                <span className={cx('l-1', 'action')}>Cập nhật</span>
                <span className={cx('l-1', 'action')}>Xóa</span>
            </div>
        </div>
    </div> );
}

export default MenuFood;