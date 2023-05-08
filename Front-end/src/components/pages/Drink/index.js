import styles from './Drink.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Product from '../../../components/Layouts/Product';

const cx = classNames.bind(styles);
const lists = ['Tất cả', 'Sinh tố', 'Trà', 'Cà phê', 'Chè'];
const prices = ['Thấp đến cao', 'Cao đến thấp', 'Dưới 15k', '15k -> 25k', 'Trên 25k'];

function Drink() {
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
                                    <a href="/" className={cx('option--link')}>
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
        </div>
    );
}

export default Drink;
