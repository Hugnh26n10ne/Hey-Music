import classNames from 'classnames/bind';

import Image from '~/components/Image';
import Button from '~/components/Button';
import images from '~/assets/images';
import styles from './Info.module.scss';

const cx = classNames.bind(styles);

function CurrentUser() {
    const currentUserInfo = {
        avatar: images.avatar,
        name: 'ShaKaChju',
        userLevel: 1,
        isReal: true,
    };
    const renderCurrentUserInfo = () => {
        return (
            <Button type="icon-text" className="info">
                <Image className={cx('avatar')} src={currentUserInfo?.avatar} alt="Avatar" fallback={images.noImage1} />
                <span className={cx('name')}>{currentUserInfo?.name}</span>
            </Button>
        );
    };
    return renderCurrentUserInfo();
}

export default CurrentUser;
