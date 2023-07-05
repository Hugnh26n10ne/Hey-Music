import PropTypes from 'prop-types';
import config from '~/configs';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SignOutIcon } from '~/components/Icon';

import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function CurrentUserInfo({ attrs, menu = [], info = {} }) {
    const renderCurrentUserInfo = () => {
        return menu.map((data, index) => {
            let isLevel = false;

            if (info?.userLevel === 1) {
                isLevel = true;
            } else if (info?.userLevel === 0) {
                isLevel = info?.userLevel === data?.level;
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
        info.isReal ? <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} /> : <></>;

    return (
        <div className={cx('wrapper')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
                <div className={cx('menu')}>
                    <Button to={config.routes.profile} type="icon-text" className={cx('header', 'btn-currentUser')}>
                        <Image className={cx('avatar')} src={info.avatar} alt="" />
                        <span className={cx('titles')}>
                            <span className={cx('title-name')}>
                                <p className={cx('name')}>{info.name}</p>
                                {handleIsReal()}
                            </span>
                        </span>
                    </Button>
                    <div className={cx('menu-items', 'menu-actions')}>{renderCurrentUserInfo()}</div>
                    <Button to={config.routes.logout} type="icon-text" className="logout">
                        <SignOutIcon className={cx('isLogout')} />
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
