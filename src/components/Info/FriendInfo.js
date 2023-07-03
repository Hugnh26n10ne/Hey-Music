import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import routesConfig from '~/config/routes';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Image from '~/components/Image';
import images from '~/assets/images';
import Button from '~/components/Button';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function FriendInfo({ attrs }) {
    return (
        <div className={cx('content', 'content-friend')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
                <div className={cx('menu')}>
                    <Button to={routesConfig.info} type="icon_text" className={cx('user', 'user-friend')}>
                        <Image className={cx('avatar')} src={images.avatarFriend} alt="" />
                        <div className={cx('boxs')}>
                            <span className={cx('box-name')}>
                                <p className={cx('name')}>Quang mất trinh</p>
                                <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} />
                            </span>
                            <span className={cx('box-action')}>
                                <p className={cx('action')}>Đang nghe</p>
                                <p className={cx('nameSound')}>1 2 3 4 Em Yêu Anh!</p>
                            </span>
                        </div>
                    </Button>
                    <div className={cx('menu-items', 'menu-items__friend')}>
                        <Button
                            to={routesConfig.info}
                            type="icon_text"
                            className={cx('menu-item', 'menu-item__friend')}
                        >
                            Xem thông tin tài khoản
                        </Button>
                        <Button
                            to={routesConfig.talkshow}
                            type="icon_text"
                            className={cx('menu-item', 'menu-item__friend')}
                        >
                            Talkshow
                        </Button>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default FriendInfo;
