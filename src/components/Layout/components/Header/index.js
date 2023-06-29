import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import Account from '~/components/Account';
import Song from '~/components/Song';
import Button from '~/components/Button';
import Notification from '~/components/Notification';
import Message from '~/components/Message';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);
    const [notifyStatus, setNotifyStatus] = useState(false);
    const [messStatus, setMessStatus] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo1} alt="logo" />
                <div className={cx('logo-text')}>Hey Music</div>
            </div>
            <div className={cx('search')}>
                <Tippy
                    interactive={true}
                    visible={searchResults.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <Song />
                                <Song />
                                <Song />
                                <h4 className={cx('search-title')}>Account</h4>
                                <Account />
                                <Account />
                                <Account />
                                <div className={cx('more')}>
                                    <a href="xemthem">Hiện tất cả kết quả "Value"</a>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('box', '')}>
                        <input
                            className={cx('')}
                            placeholder="Tìm kiếm bạn bè hoặc bài hát theo ý thích ..."
                            spellCheck={false}
                        ></input>
                        <button className={cx('search-btn')}>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                        <button className={cx('clear')}>
                            <span className={cx('btn-close')}>&times;</span>
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    </div>
                </Tippy>
            </div>
            <div className={cx('actions')}>
                <Tippy
                    visible={notifyStatus}
                    render={(attrs) => (
                        <div className={cx('notification-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('title')}>Thông báo</h4>
                                <Notification active />
                                <Notification />
                                <div className={cx('more')}>
                                    <a href="xemthem">Xem thêm</a>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div onClick={() => setNotifyStatus(!notifyStatus)}>
                        <Button type="icon" className="notification">
                            <FontAwesomeIcon icon={faBell} className={cx('icon-notification', 'notify')} />
                            <span className={cx('counter', 'show-count')}>2</span>
                        </Button>
                    </div>
                </Tippy>
                <Tippy
                    visible={messStatus}
                    render={(attrs) => (
                        <div className={cx('message-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('title')}>Thông báo</h4>
                                <Message active />
                                <Message />
                                <div className={cx('more')}>
                                    <a href="xemthem">Xem thêm</a>
                                </div>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div onClick={() => setMessStatus(!messStatus)}>
                        <Button type="icon" className="message">
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon-message', 'mess')} />
                            <span className={cx('counter', 'show-count')}>3</span>
                        </Button>
                    </div>
                </Tippy>

                <Button type="icon_text" className="info">
                    <img className={cx('avatar')} src={images.avatar} alt="Avatar" />
                    <span className={cx('name')}>ShaKaChju</span>
                </Button>

                <Button type="primary">Đăng nhập</Button>
            </div>
        </header>
    );
}

export default Header;
