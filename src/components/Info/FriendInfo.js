import config from '~/configs';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function FriendInfo({ attrs }) {
    return (
        <div className={cx('wrapper', 'friendInfo')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
                <div className={cx('menu')}>
                    <Button to={config.routes.info} type="icon-text" className={cx('header', 'btn-friend')}>
                        <Image className={cx('avatar')} src={images.avatarFriend} alt="" />
                        <div className={cx('titles')}>
                            <span className={cx('title-name')}>
                                <p className={cx('name')}>Quang mất trinh</p>
                                <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} />
                            </span>
                            <span className={cx('title-action')}>
                                <p className={cx('play')}>Đang nghe</p>
                                <p className={cx('nameSound')}>1 2 3 4 Em Yêu Anh!</p>
                            </span>
                        </div>
                    </Button>
                    <div className={cx('menu-items', 'menu-actions')}>
                        <Button to={config.routes.info} type="icon-text" className={cx('menu-item', 'action-item')}>
                            Xem thông tin tài khoản
                        </Button>
                        <Button to={config.routes.talkshow} type="icon-text" className={cx('menu-item', 'action-item')}>
                            Talkshow
                        </Button>
                    </div>
                </div>
            </PopperWrapper>
        </div>
    );
}

export default FriendInfo;
