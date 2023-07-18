import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.scss';

import styles from './Banner.module.scss';
import Image from '~/components/Image';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Banner() {
    const bannerList = [
        {
            style: 'style--1',
            data: [
                {
                    name: 'img--1',
                    src: images.banner1,
                },
            ],
        },
        {
            style: 'style--2',
            data: [
                {
                    name: 'img--1',
                    src: images.banner1,
                },
                {
                    name: 'img--2',
                    src: images.banner2,
                },
            ],
        },
        {
            style: 'style--3',
            data: [
                {
                    name: 'img--1',
                    src: images.banner1,
                },
                {
                    name: 'img--2',
                    src: images.banner2,
                },
                {
                    name: 'img--3',
                    src: images.banner3,
                },
            ],
        },
        {
            style: 'style--4',
            data: [
                {
                    name: 'img--1',
                    src: images.banner1,
                },
                {
                    name: 'img--2',
                    src: images.banner2,
                },
                {
                    name: 'img--3',
                    src: images.banner3,
                },
                {
                    name: 'img--4',
                    src: images.banner1,
                },
            ],
        },
    ];

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderBanner = () => {
        return bannerList.map((banner, index) => {
            const renderBannerItem = () => {
                return banner.data.map((data, index) => (
                    <Image key={index} className={cx('img', data.name)} src={data.src} />
                ));
            };
            return (
                <div key={index} className={cx(banner.style)}>
                    {renderBannerItem()}
                </div>
            );
        });
    };
    return (
        <div className={cx('wrapper')}>
            <Slider className={cx('banner')} {...settings}>
                {renderBanner()}
            </Slider>
        </div>
    );
}

export default Banner;
