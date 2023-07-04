import config from '~/configs';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import styles from './Info.module.scss';
import { SignOutIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function UserInfo({ attrs, data = [], info = [] }) {
    const renderUserInfo = () => {
        return data.map((data, index) => {
            let isLevel = false;

            if (info?.userLevel === 1) {
                isLevel = true;
            } else if (info?.userLevel === 0) {
                isLevel = info?.userLevel === data?.level;
            }

            if (isLevel) {
                return (
                    <Button to={data?.to} type="icon_text" key={index} className={cx('menu-item', 'menu-item__me')}>
                        {data?.title}
                    </Button>
                );
            } else {
                return <></>;
            }
        });
    };

    return (
        <div className={cx('content')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
                <div className={cx('menu')}>
                    <Button to={config.routes.profile} type="icon_text" className={cx('user', 'user-me')}>
                        <Image className={cx('avatar')} src={info.avatar} alt="" />
                        <p className={cx('name')}>{info.name}</p>
                        {info.isReal ? <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} /> : <></>}
                    </Button>
                    <div className={cx('menu-items', 'menu-items__me')}>{renderUserInfo()}</div>
                    <Button to={config.routes.logout} type="icon_text" className="logout">
                        <SignOutIcon className={cx('isLogout')} />
                        <span className={cx('logout-content')}>Đăng xuất</span>
                    </Button>
                </div>
            </PopperWrapper>
        </div>
    );
}

UserInfo.propTypes = {
    data: PropTypes.array,
    info: PropTypes.object,
};

export default UserInfo;
