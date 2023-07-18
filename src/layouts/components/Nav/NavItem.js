import classNames from 'classnames/bind';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function NavItem({ data = {}, id }) {
    const location = useLocation();

    const isActive = location.pathname === data.to;

    const btnClass = isActive ? 'active' : '';

    const [src, setSrc] = useState(images.feature1);

    const handleAddActive = (id) => {
        if (id === 0) {
            hanleImageClick();
        }
    };

    const hanleImageClick = () => {
        let idImage = Math.ceil(Math.random() * 4);
        let image = images[`feature${idImage}`];
        setSrc(image);
    };

    const renderNav = () => {
        return (
            <Button
                to={data?.to}
                type={data?.type}
                className={cx('btn', `btn-${data?.name}`, 'nav-item', btnClass)}
                onClick={() => handleAddActive(id)}
            >
                <data.icon src={src} className={cx('icon', `icon-${data?.name}`)} stroke={data?.stroke} />
                {data.title && <span className={cx('title')}>{data.title}</span>}
            </Button>
        );
    };

    return renderNav();
}

export default NavItem;
