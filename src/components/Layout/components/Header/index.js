import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Search from '~/components/Search';
import Notification from '~/components/Notification';
import Message from '~/components/Message';
import Menu from '~/components/Menu';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'Menu Item 1',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowAltCircleRight} />,
        title: 'Menu Item 2',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowAltCircleRight} />,
        title: 'Menu Item 3',
        to: '/item3',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowAltCircleRight} />,
        title: 'Menu Item 4',
        href: '/item4',
    },
];

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo1} alt="logo" />
                <div className={cx('logo-text')}>Hey Music</div>
            </div>
            <div className={cx('search')}>
                <Search />
            </div>
            <div className={cx('actions')}>
                <Notification />
                <Message />
                <Menu items={MENU_ITEMS} type="">
                    <div>
                        <Button type="icon_text" className="info" to="/user">
                            <img className={cx('avatar')} src={images.avatar} alt="Avatar" />
                            <span className={cx('name')}>ShaKaChju</span>
                        </Button>
                    </div>
                </Menu>

                <Button type="primary">Đăng nhập</Button>
            </div>
        </header>
    );
}

export default Header;
