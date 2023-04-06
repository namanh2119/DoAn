import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Food.module.scss';
import Product from '../../../components/Layouts/Product';

const cx = classNames.bind(styles);
const lists = ['Tất cả', 'Cơm', 'Phở, bún', 'Bánh mì', 'Đồ ăn vặt'];
const prices = ['Thấp đến cao', 'Cao đến thấp', 'Dưới 50k', '50k -> 100k', '100k -> 150k', 'Trên 150k'];

function Food() {
    return (
        <div className={cx('products', 'grid', 'wide')}>
            <div className={cx('row', 'col', 'l-12', 't-1')}>
                <div className={cx('filter')}>
                    {lists.map((list, index) => (
                        <button key={index} className={cx('btn--filter')}>
                            {list}
                        </button>
                    ))}

                    <div className={cx('select')}>
                        <span className={cx('select-label')}>Mức Giá</span>
                        <FontAwesomeIcon icon={faAngleDown} />

                        <ul className={cx('option')}>
                            {prices.map((price, index) => (
                                <li key={index} className={cx('item')}>
                                    <a href="" className={cx('option--link')}>
                                        {price}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx('row')}>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
                <div className={cx('col l-3 t-3')}>
                    <Product />
                </div>
            </div>

            <ul className={cx('pagination')}>
                <li className={cx('pagination-item')}>
                    <a href="#" className={cx('pagination-item__link')}>
                        <FontAwesomeIcon className={cx('pagination-item__link--icon')} icon={faAngleLeft} />
                    </a>
                </li>
                <li className={cx('pagination-item pagination-item__active')}>
                    <a href="#" className={cx('pagination-item__link')}>
                        1
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="#" className={cx('pagination-item__link')}>
                        2
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="#" className={cx('pagination-item__link')}>
                        3
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="#" className={cx('pagination-item__link')}>
                        ...
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="#" className={cx('pagination-item__link')}>
                        14
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="#" className={cx('pagination-item__link')}>
                        <FontAwesomeIcon className={cx('pagination-item__link--icon')} icon={faAngleRight} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Food;
