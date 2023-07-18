import classNames from 'classnames/bind';

import configs from '~/configs';
import * as Icon from '~/components/Icon';
import NavItem from './NavItem';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav() {
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

    const renderNavItem = () => {
        return listNav.map((nav, index) => {
            return <NavItem key={index} id={index} data={nav} />;
        });
    };

    return (
        <nav className={cx('wrapper')}>
            <div className={cx('nav')}>
                {renderNavItem()}
                <div className={cx('bg-active')}></div>
            </div>
            <div className={cx('background')}></div>
        </nav>
    );
}

export default Nav;
