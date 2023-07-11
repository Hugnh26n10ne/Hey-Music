import configs from '~/configs';
import classNames from 'classnames/bind';
import { useState } from 'react';

import Button from '~/components/Button';

import images from '~/assets/images';
import * as Icon from '~/components/Icon';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function NavItem() {
    const listNav = [
        {
            name: 'feature',
            icon: Icon.FeatureIcon,
            type: 'icon',
            stroke: 'white',
        },
        {
            name: 'home',
            icon: Icon.HomeIcon,
            title: 'Khám phá',
            type: 'icon-text',
            to: configs.routes.home,
        },
        {
            name: 'talkshow',
            icon: Icon.TalkShowIcon,
            title: 'Talk Show',
            type: 'icon-text',
            to: configs.routes.talkshow,
        },
        {
            name: 'karaoke',
            icon: Icon.KaraokeIcon,
            title: 'KARAOKE',
            type: 'icon-text',
            to: configs.routes.karaoke,
        },
        {
            name: 'podcast',
            icon: Icon.PodCastIcon,
            title: 'PostCast',
            type: 'icon-text',
            to: configs.routes.podcast,
        },
        {
            name: 'radio',
            icon: Icon.RadioIcon,
            title: 'Radio',
            type: 'icon-text',
            to: configs.routes.radio,
        },
        {
            name: 'library',
            icon: Icon.LibraryIcon,
            title: 'Thư viện',
            type: 'icon-text',
            to: configs.routes.library,
        },
        {
            name: 'Game',
            icon: Icon.GameIcon,
            title: 'Game',
            type: 'icon-text',
            to: configs.routes.library,
        },
    ];

    const [active, setActive] = useState(1);

    const handleAddActive = (id) => {
        if (id === 0) {
            hanleImageClick();
        } else {
            setActive(id);
        }
    };

    const [src, setSrc] = useState(images.feature1);

    const hanleImageClick = () => {
        let idImage = Math.ceil(Math.random() * 4);
        let image = images[`feature${idImage}`];
        setSrc(image);
    };

    const renderNav = () => {
        return listNav.map((nav, index) => (
            <Button
                key={index}
                to={nav?.to}
                type={nav?.type}
                className={cx('btn', `btn-${nav?.name}`, 'nav-item', active === index ? 'active' : '')}
                onClick={() => handleAddActive(index)}
            >
                <nav.icon src={src} className={cx('icon', `icon-${nav?.name}`)} stroke={nav?.stroke} />
                {nav.title && <span className={cx('title')}>{nav.title}</span>}
            </Button>
        ));
    };

    return renderNav();
}

export default NavItem;
