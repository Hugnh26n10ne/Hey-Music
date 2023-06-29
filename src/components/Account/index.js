import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Account.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar} alt="" />
            <div className={cx('info')}>
                <h5 className={cx('name')}>ShaKaChju</h5>
                <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} />
            </div>
        </div>
    );
}

export default Account;
