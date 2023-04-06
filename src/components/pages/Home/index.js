import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import khachhang from '../../../assets/images/khachhang.png';
import sanpham from '../../../assets/images/sanpham.png';
import tuvan from '../../../assets/images/tuvan.png';
import Product from '../../Layouts/Product';

const cx = classNames.bind(styles);
const missions = [
    {
        name: 'Sản phẩm',
        description: 'Mang đến những sản phẩm chất lượng, ngon miệng đến khách hàng sử dụng với mức giá phải chăng.',
        image: sanpham,
    },
    {
        name: 'Khách hàng',
        description:
            'Khách hàng là trọng tâm, phục vụ tận tình, chu đáo, giúp khách hàng lưu lại kỷ niệm tốt khi trải nghiệm.',
        image: khachhang,
    },
    {
        name: 'Dịch vụ',
        description:
            'Tư vấn combo sản phảm vừa ý của khách hàng, giao hàng nhanh khi có khách hàng đặt sản phẩm online.',
        image: tuvan,
    },
];

function Home() {
    return (
        <div>
            <div className={cx('home__content')}>
                <div className={cx('slider')}>
                    <div className={cx('grid', 'wide')}>
                        <div className={cx('row t-1')}>
                            <div className={cx('slider__text', 'col', 'l-6')}>
                                <h2 className={cx('title')}>Đưa nghệ thuật vào trong những món ăn</h2>
                                <p className={cx('text')}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh non egestas neque ante
                                    vitae eu. Amet consequat ipsum mi tempor. Odio nisi, tellus nunc aliquam nullam
                                    faucibus leo. Aliquam feugiat massa morbi viverra quis lectus scelerisque fames
                                    purus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('mission', 'grid', 'wide')}>
                    <h3 className={cx('section-title')}>Định hướng</h3>
                    <div className={cx('mission__list row')}>
                        {missions.map((mission, index) => (
                            <div key={index} className={cx('mission__item col l-4')}>
                                <div className={cx('mission__item')}>
                                    <img className={cx('mission__image')} src={mission.image} />
                                    <div className={cx('mission__content')}>
                                        <div className={cx('mission__content--title')}>{mission.name}</div>
                                        <div className={cx('mission__content--text')}>{mission.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('product__food')}>
                    <div className={cx('product')}>
                        <div className={cx('product', 'grid', 'wide')}>
                            <h3 className={cx('section-title')}>Thức ăn ưa thích</h3>
                            <div className={cx('row', 't-1')}>
                                <div className={cx('col l-4')}>
                                    <Product />
                                </div>
                                <div className={cx('col l-4')}>
                                    <Product />
                                </div>
                                <div className={cx('col l-4')}>
                                    <Product />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('product', 'grid', 'wide')}>
                    <h3 className={cx('section-title')}>Đồ uống nổi bật</h3>
                    <div className={cx('row t-1')}>
                        <div className={cx('col l-4')}>
                            <Product />
                        </div>
                        <div className={cx('col l-4')}>
                            <Product />
                        </div>
                        <div className={cx('col l-4')}>
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
