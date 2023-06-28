import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faBell } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo1} alt="logo" />
                <div className={cx('logo-text')}>Hey Music</div>
            </div>
            <div className={cx('search')}>
                <div className={cx('box', '')}>
                    <input
                        className={cx('')}
                        placeholder="Tìm kiếm bài hát theo ý thích ..."
                        spellCheck={false}
                    ></input>
                    <Tippy content="Tìm kiếm">
                        <button className={cx('search-btn')}>
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </Tippy>
                    <Tippy content="Xóa">
                        <button className={cx('clear')}>
                            <span className={cx('btn-close')}>&times;</span>
                        </button>
                    </Tippy>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                </div>
                <ul className={cx('dropdown')}>
                    <li className={cx('dropdown-item')}>
                        <h4 className={cx('dropdown_1-title')}>Trending</h4>
                        <ul className={cx('dropdown_1')}>
                            <li className={cx('dropdown_1-item')}>
                                <div className={cx('item-name')}>
                                    <ion-icon name="chevron-forward-outline" className={cx('item-icon')}></ion-icon>
                                    <span className={cx('item-title')}>Making My Way</span>
                                </div>
                                <span className={cx('item-author')}>Sơn Tùng MTP</span>
                            </li>
                            <li className={cx('dropdown_1-item')}>
                                <div className={cx('item-name')}>
                                    <ion-icon name="chevron-forward-outline" className={cx('item-icon')}></ion-icon>
                                    <span className={cx('item-title')}>Making My Way</span>
                                </div>
                                <span className={cx('item-author')}>Sơn Tùng MTP</span>
                            </li>
                            <li className={cx('dropdown_1-item')}>
                                <div className={cx('item-name')}>
                                    <ion-icon name="chevron-forward-outline" className={cx('item-icon')}></ion-icon>
                                    <span className={cx('item-title')}>Making My Way</span>
                                </div>
                                <span className={cx('item-author')}>Sơn Tùng MTP</span>
                            </li>
                        </ul>
                    </li>
                    <li className={cx('dropdown-item')}>
                        <h4 className={cx('dropdown_1-title')}>Trending</h4>
                        <ul className={cx('dropdown_1')}>
                            <li className={cx('dropdown_1-item')}>
                                <div className={cx('item-name')}>
                                    <ion-icon name="chevron-forward-outline" className={cx('item-icon')}></ion-icon>
                                    <span className={cx('item-title')}>Making My Way</span>
                                </div>
                                <span className={cx('item-author')}>Sơn Tùng MTP</span>
                            </li>
                            <li className={cx('dropdown_1-item')}>
                                <div className={cx('item-name')}>
                                    <ion-icon name="chevron-forward-outline" className={cx('item-icon')}></ion-icon>
                                    <span className={cx('item-title')}>Making My Way</span>
                                </div>
                                <span className={cx('item-author')}>Sơn Tùng MTP</span>
                            </li>
                            <li className={cx('dropdown_1-item')}>
                                <div className={cx('item-name')}>
                                    <ion-icon name="chevron-forward-outline" className={cx('item-icon')}></ion-icon>
                                    <span className={cx('item-title')}>Making My Way</span>
                                </div>
                                <span className={cx('item-author')}>Sơn Tùng MTP</span>
                            </li>
                        </ul>
                    </li>
                    <div className={cx('more')}>
                        <a href="xemthem">Xem thêm</a>
                    </div>
                </ul>
            </div>
            <div className={cx('actions')}>
                <FontAwesomeIcon icon={faBell} className={cx('notification', 'notify', 'show-count')} data-count="0" />
                {/* <img src={images.notification} alt="notification" /> */}
                <div className={cx('btn-login')}>
                    <button>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
