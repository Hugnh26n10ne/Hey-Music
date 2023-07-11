import PropTypes from 'prop-types';
import config from '~/configs';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import * as Icon from '~/components/Icon';
import images from '~/assets/images';

import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function CurrentUserInfo({ attrs }) {
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
        return userMenu.map((data, index) => {
            let isLevel = false;

            if (currentUserInfo?.userLevel === 1) {
                isLevel = true;
            } else if (currentUserInfo?.userLevel === 0) {
                isLevel = currentUserInfo?.userLevel === data?.level;
            }

            if (isLevel) {
                return (
                    <Button to={data?.to} type="icon-text" key={index} className={cx('menu-item', 'action-item')}>
                        {data?.title}
                    </Button>
                );
            } else {
                return <></>;
            }
        });
    };

    const handleIsReal = () =>
        currentUserInfo.isReal ? <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} /> : <></>;

    return (
        <div className={cx('wrapper')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
                <div className={cx('menu')}>
                    <Button to={config.routes.profile} type="icon-text" className={cx('header', 'btn-currentUser')}>
                        <Image className={cx('avatar')} src={currentUserInfo.avatar} alt="" />
                        <span className={cx('titles')}>
                            <span className={cx('title-name')}>
                                <p className={cx('name')}>{currentUserInfo.name}</p>
                                {handleIsReal()}
                            </span>
                        </span>
                    </Button>
                    <div className={cx('menu-items', 'menu-actions')}>{renderCurrentUserInfo()}</div>
                    <Button to={config.routes.logout} type="icon-text" className="logout">
                        <Icon.SignOutIcon className={cx('isLogout')} />
                        <span className={cx('logout-content')}>Đăng xuất</span>
                    </Button>
                </div>
            </PopperWrapper>
        </div>
    );
}

CurrentUserInfo.propTypes = {
    menu: PropTypes.array,
    info: PropTypes.object,
};

export default CurrentUserInfo;
