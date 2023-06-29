import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Song.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Song() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('arrow-right')} icon={faChevronRight} />
            <img className={cx('thumnail')} src={images.avatar} alt="" />
            <div className={cx('info')}>
                <h5 className={cx('name')}>Making My Way</h5>
                <h5 className={cx('author')}>Sơn Tùng MTP</h5>
            </div>
        </div>
    );
}

export default Song;
