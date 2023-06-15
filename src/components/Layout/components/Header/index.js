import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <logo className={cx('logo')}>
                    <img src={images.logo1} alt="logo" />
                    Hey Music
                </logo>
            </div>
            <div className={cx('header-center')}>
                <search className={cx('search')}>
                    <ion-icon name="search-outline"></ion-icon>
                    <span>Tìm kiếm bài hát theo ý thích ...</span>
                </search>
            </div>
            <div className={cx('header-right')}>
                <notification className={cx('notification')}>
                    <img data-index="0" src={images.notification} alt="notification" />
                </notification>
                <login className={cx('btn-login')}>
                    <button>Đăng nhập</button>
                </login>
            </div>
        </header>
    );
}

export default Header;
