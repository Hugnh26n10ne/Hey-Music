import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './MessageContent.module.scss';

const cx = classNames.bind(styles);

// Functions is not used now

function MessageContent({ active = false }) {
    const classes = cx('wrapper', {
        active,
    });

    return (
        <div className={cx(classes)}>
            <span className={cx('name')}>Sơn Tùng MTP</span>
            <span className={cx('couter')}>{active ? '(1)' : ''}</span>
            {active ? <FontAwesomeIcon className={cx('seen')} icon={faCircle} /> : <div className={cx('noSeen')}></div>}
        </div>
    );
}

export default MessageContent;
