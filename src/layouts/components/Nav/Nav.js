import configs from '~/configs';
import classNames from 'classnames/bind';
import { useState } from 'react';

import React, { useContext } from 'react';
import { LayoutContent } from '~/layouts/DefaultLayout';

import Button from '~/components/Button';
import Logo from '~/components/Logo';
import { PlusIcon, HomeIcon, TalkShowIcon, KaraokeIcon, PodCastIcon, RadioIcon, LibraryIcon } from '~/components/Icon';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav() {
    const listNav = [
        {
            name: 'feature',
            icon: PlusIcon,
            type: 'icon',
            stroke: 'white',
        },
        {
            name: 'home',
            icon: HomeIcon,
            title: 'Khám phá',
            type: 'icon-text',
            to: configs.routes.home,
        },
        {
            name: 'talkshow',
            icon: TalkShowIcon,
            title: 'Talk Show',
            type: 'icon-text',
            to: configs.routes.talkshow,
        },
        {
            name: 'karaoke',
            icon: KaraokeIcon,
            title: 'KARAOKE',
            type: 'icon-text',
            to: configs.routes.karaoke,
        },
        {
            name: 'podcast',
            icon: PodCastIcon,
            title: 'PostCast',
            type: 'icon-text',
            to: configs.routes.podcast,
        },
        {
            name: 'radio',
            icon: RadioIcon,
            title: 'Radio',
            type: 'icon-text',
            to: configs.routes.radio,
        },
        {
            name: 'library',
            icon: LibraryIcon,
            title: 'Thư viện',
            type: 'icon-text',
            to: configs.routes.library,
        },
    ];

    const [active, setActive] = useState(1);

    const handleAddActive = (id) => {
        setActive(id);
    };

    const renderNav = () => {
        return listNav.map((nav, index) => (
            <Button
                key={index}
                to={nav?.to}
                type={nav?.type}
                className={cx('btn', `btn-${nav?.name}`, active === index ? 'active' : '')}
                onClick={() => handleAddActive(index)}
            >
                <nav.icon className={cx('icon', `icon-${nav?.name}`)} stroke={nav?.stroke} />
                {nav.title && <span className={cx('title')}>{nav.title}</span>}
                {active === index ? (
                    <div className={cx('bg-active', 'active')}></div>
                ) : (
                    <div className={cx('bg-active')}></div>
                )}
            </Button>
        ));
    };

    const { state } = useContext(LayoutContent);

    return (
        <nav className={cx('wrapper', state.isActive ? 'active' : '')}>
            <div className={cx('nav')}>
                <Logo className="logo-nav" />
                {renderNav()}
            </div>
            <div className={cx('background')}></div>
        </nav>
    );
}

export default Nav;
