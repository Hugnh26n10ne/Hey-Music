import classNames from 'classnames/bind';

import configs from '~/configs';
import * as Icon from '~/components/Icon';
import Button from '~/components/Button';

import styles from './NavMobile.module.scss';

const cx = classNames.bind(styles);

function NavMobileItem({ setActiveNav }) {
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
            title: 'Thư viện',
            type: 'icon-text',
            to: configs.routes.library,
        },
    ];
    const renderNavMobile = () => {
        return listNav.map((nav, index) => (
            <Button
                key={index}
                to={nav?.to}
                type={nav?.type}
                className={cx('btnMobile', `btnMobile-${nav?.name}`, 'nav-item')}
                onClick={(e) => setActiveNav(false)}
            >
                {nav.title && <span className={cx('title')}>{nav.title}</span>}
            </Button>
        ));
    };

    return renderNavMobile();
}

export default NavMobileItem;
