import config from '~/configs';

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Search from '~/components/Search/Search';
import Notification from '~/components/Notification/Notification';
import Upload from '~/components/Upload/Upload';
import Menu from '~/components/Menu/Menu';
import Logo from '~/components/Logo';
import NavMobile from '~/components/NavMobile';
import CurrentUser from '~/components/Info/CurrenUser';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

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
            <Logo />
            <div className={cx('search')}>
                <Search items={searchResults} />
            </div>
            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Notification hideOnClick={false} />
                        <Tippy content="Upload" placement="bottom">
                            <Upload />
                        </Tippy>
                        <Menu type="user" delay={[0, 500]} hideOnClick={false}>
                            <div>
                                <CurrentUser />
                            </div>
                        </Menu>

                        <NavMobile />
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
