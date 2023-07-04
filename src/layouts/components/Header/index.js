import config from '~/configs';

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Search from '~/components/Search';
import Notification from '~/components/Notification';
import Upload from '~/components/Upload';
import Menu from '~/components/Menu';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const userMenu = [
        { title: 'Xem thông tin tài khoản', to: '/info', level: 0 },
        { title: 'Tải lên', to: '/upload', level: 0 },
        { title: 'Đổi nền trắng', level: 0 },
        { title: 'Cài đặt', to: '/setting', level: 0 },
        { title: 'Update Pro', to: '/updatepro', level: 1 },
    ];

    const currentUserInfo = {
        avatar: images.avatar,
        name: 'ShaKaChju',
        userLevel: 1,
        isReal: true,
    };

    const renderCurrentUserInfo = () => {
        return (
            <Button type="icon_text" className="info" to="/@ShaKaChju">
                <Image className={cx('avatar')} src={currentUserInfo?.avatar} alt="Avatar" fallback={images.noImage1} />
                <span className={cx('name')}>{currentUserInfo?.name}</span>
            </Button>
        );
    };

    const time = `${15} p`;

    const notificationItems = [
        {
            content: 'Sơn Tùng MTP vừa ra bài hát mới : “Making My Way”',
            time: time,
            to: '/notifi_1',
            isSeen: true,
        },
        {
            content: 'Sơn Tùng MTP tung lyric bài : “Making My Way”',
            time: time,
            to: '/notifi_2',
            isSeen: false,
        },
    ];

    const searchResults = [
        {
            song: [
                {
                    avatar: images.avatar,
                    name: 'Making My Way',
                    author: 'Sơn Tùng MTP',
                    to: '/@sontungmtp',
                },
                {
                    avatar: images.avatar,
                    name: 'Making My Way',
                    author: 'Sơn Tùng MTP',
                    to: '/@sontungmtp',
                },
                {
                    avatar: images.avatar,
                    name: 'Making My Way',
                    author: 'Sơn Tùng MTP',
                    to: '/@sontungmtp',
                },
            ],
        },
        {
            user: [
                {
                    avatar: images.avatar,
                    name: 'ShaKaChju',
                    isReal: true,
                    to: '/@shakachju',
                },
                {
                    avatar: images.avatar,
                    name: 'Thư Sex',
                    isReal: false,
                    to: '/@thusex',
                },
                {
                    avatar: images.avatar,
                    name: 'Quang mất trinh',
                    isReal: false,
                    to: '/@quangmattrinh',
                },
            ],
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <Button to={config.routes.home} type="icon_text" className={cx('logo')}>
                <Image src={images.logo1} alt="logo" />
                <div className={cx('logo-text')}>Hey Music</div>
            </Button>
            <div className={cx('search')}>
                <Search items={searchResults} />
            </div>
            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Notification items={notificationItems} />
                        <Tippy content="Upload" placement="bottom">
                            <Upload />
                        </Tippy>
                        <Menu
                            type="user"
                            items={userMenu}
                            currentUser={currentUserInfo}
                            delay={[0, 500]}
                            hideOnClick={false}
                        >
                            <div>{renderCurrentUserInfo()}</div>
                        </Menu>

                        <Button type="icon_text" className="btn-nav">
                            <FontAwesomeIcon icon={faBars} />
                        </Button>
                    </>
                ) : (
                    <>
                        <Upload />
                        <Button type="primary" to={config.routes.login} className={cx('btn-login')}>
                            Đăng nhập
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
