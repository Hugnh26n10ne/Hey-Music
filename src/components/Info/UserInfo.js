import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function UserInfo({ attrs }) {
    return (
        <div className={cx('content')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
                <div className={cx('menu')}>
                    <Button to="/user" type="icon_text" className={cx('user', 'user-me')}>
                        <img className={cx('avatar')} src={images.avatar} alt="" />
                        <p className={cx('name')}>ShaKaChju</p>
                        <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} />
                    </Button>
                    <div className={cx('menu-items', 'menu-items__me')}>
                        <Button to="/info" type="icon_text" className={cx('menu-item', 'menu-item__me')}>
                            Xem thông tin tài khoản
                        </Button>
                        <Button to="/upload" type="icon_text" className={cx('menu-item', 'menu-item__me')}>
                            Tải lên
                        </Button>
                        <Button to="/changeTheme" type="icon_text" className={cx('menu-item', 'menu-item__me')}>
                            Đổi nền trắng
                        </Button>
                        <Button to="/setting" type="icon_text" className={cx('menu-item', 'menu-item__me')}>
                            Cài đặt
                        </Button>
                    </div>
                    <Button to="/logout" type="icon_text" className="logout">
                        <FontAwesomeIcon icon={faSignOut} className={cx('isLogout')} />
                        <span className={cx('logout-content')}>Đăng xuất</span>
                    </Button>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default UserInfo;
