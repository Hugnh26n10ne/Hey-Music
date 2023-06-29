import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification({ active = false }) {
    const classes = cx('wrapper', {
        active,
    });

    return (
        <div className={cx(classes)}>
            <span className={cx('content')}>Sơn Tùng MTP vừa ra bài hát mới : “Making My Way”</span>
            <span className={cx('time')}>15p</span>
            {active ? <FontAwesomeIcon className={cx('seen')} icon={faCircle} /> : <div className={cx('noSeen')}></div>}
        </div>
    );
}

export default Notification;
