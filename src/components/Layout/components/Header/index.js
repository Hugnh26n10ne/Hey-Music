import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <img src={images.logo1} alt="logo" />
                <div className={cx('logo-text')}>Hey Music</div>
            </div>
            <div className={cx('header-center')}>
                <div className={cx('search', '')}>
                    <ion-icon name="search-outline"></ion-icon>
                    <input className={cx('')} placeholder="Tìm kiếm bài hát theo ý thích ..."></input>
                    <span className={cx('btn-close')}>&times;</span>
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
            <div className={cx('header-right')}>
                <i data-count="0" className={cx('notification', 'notify', 'fa fa-bell')} alt="notification"></i>
                <div className={cx('btn-login')}>
                    <button>Đăng nhập</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
