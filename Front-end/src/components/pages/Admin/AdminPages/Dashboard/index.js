import classNames from "classnames/bind";
import styles from './Dashboard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faChartLine, faCoins, faComment, faGlassCheers, faMugHot } from "@fortawesome/free-solid-svg-icons";
import background from './background.jpeg'

const cx = classNames.bind(styles)

function Dashboard() {
    return ( <div className={cx('statistical')}>
        <div className={cx('parameters', 'row', 'col')}>
            <div className={cx('l-3', 'col')}>
                <div className={cx('parameters-item')} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                    <div className={cx('parameters-title')}>
                        <FontAwesomeIcon className={cx('parameters-icon')} icon={faBowlFood}/>
                        <span>Số lượng đồ ăn bán</span>
                    </div>
                    <span className={cx('parameters-val')}>123 lượt</span>
                </div>
            </div>
            <div className={cx('l-3', 'col')}>
                <div className={cx('parameters-item')} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                    <div className={cx('parameters-title')}>
                        <FontAwesomeIcon className={cx('parameters-icon')} icon={faMugHot}/>
                        <span>Số lượng đồ uống bán</span>
                    </div>
                    <span className={cx('parameters-val')}>123 lượt</span>
                </div>
            </div>
            <div className={cx('l-3', 'col')}>
                <div className={cx('parameters-item')} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                    <div className={cx('parameters-title')}>
                        <FontAwesomeIcon className={cx('parameters-icon')} icon={faGlassCheers}/>
                        <span>Tổng số lượng bán</span>
                    </div>
                    <span className={cx('parameters-val')}>123 lượt</span>
                </div>
            </div>
            <div className={cx('l-3', 'col')}>
                <div className={cx('parameters-item')} style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
                    <div className={cx('parameters-title')}>
                        <FontAwesomeIcon className={cx('parameters-icon')} icon={faComment}/>
                        <span>Số lượng đánh giá tốt</span>
                    </div>
                    <span className={cx('parameters-val')}>123 lượt</span>
                </div>
            </div>
        </div>
        <div className={cx('revenue','row', 'col')}>
            <div className={cx('l-7', 'col')}>
                <div className={cx('revenue-result')} style={{backgroundImage: `url(${background})`}}>
                    <div className={cx('revenue-title')}>
                        <FontAwesomeIcon className={cx('revenue-icon')} icon={faCoins}/>
                        <span>Tổng doanh thu bán</span>
                    </div>
                    <span className={cx('revenue-val')}>100000000 VND</span>
                    <div className={cx('revenue-comp')}>
                        <div className={cx('comp-title')}>
                            <FontAwesomeIcon className={cx('parameters-icon')} icon={faBowlFood}/>
                            <span>Doanh thu đồ ăn: </span>
                            <span className={cx('comp-val')}>5000000 VND</span>
                        </div>
                        <p className={cx('comp-title')}>
                            <FontAwesomeIcon className={cx('parameters-icon')} icon={faMugHot}/>
                            <span>Doanh thu đồ uống: </span>
                            <span className={cx('comp-val')}>5000000 VND</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('l-5', 'col')}>
                <div className={cx('revenue-result')}>
                    <div className={cx('revenue-title')}>
                        <FontAwesomeIcon className={cx('revenue-icon')} icon={faChartLine}/>
                        <span>Bảng xếp hạng</span>
                    </div>
                    <div className={cx('list-products')}>
                        <div className={cx('item-products')}>
                            <div className={cx('product')}>
                                <div className={cx('product__image')} style={{ backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`}}></div>
                                <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                            </div>
                            <p className={cx('product__price')}>120000đ</p>
                        </div>
                        <div className={cx('item-products')}>
                            <div className={cx('product')}>
                                <div className={cx('product__image')} style={{ backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`}}></div>
                                <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                            </div>
                            <p className={cx('product__price')}>120000đ</p>
                        </div>
                        <div className={cx('item-products')}>
                            <div className={cx('product')}>
                                <div className={cx('product__image')} style={{ backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`}}></div>
                                <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                            </div>
                            <p className={cx('product__price')}>120000đ</p>
                        </div>
                        <div className={cx('item-products')}>
                            <div className={cx('product')}>
                                <div className={cx('product__image')} style={{ backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`}}></div>
                                <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                            </div>
                            <p className={cx('product__price')}>120000đ</p>
                        </div>
                        <div className={cx('item-products')}>
                            <div className={cx('product')}>
                                <div className={cx('product__image')} style={{ backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`}}></div>
                                <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                            </div>
                            <p className={cx('product__price')}>120000đ</p>
                        </div>
                        <div className={cx('item-products')}>
                            <div className={cx('product')}>
                                <div className={cx('product__image')} style={{ backgroundImage: `url('https://cdn.tgdd.vn/Files/2019/06/05/1171265/cach-lam-com-chien-trung-hat-com-toi-khong-bi-nhao-202203031523399671.jpg'`}}></div>
                                <p className={cx('product__name')}>Suất Cơm sườn nấu niêu</p>
                            </div>
                            <p className={cx('product__price')}>120000đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default Dashboard;