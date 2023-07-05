import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './NotificationContent.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function NotificationContent({ data = {} }) {
    const classes = cx('wrapper', { active: data.isSeen ? true : false });

    return (
        <Button type="icon-text" to={data?.to} className={cx(classes)}>
            <span className={cx('content')}>{data?.content}</span>
            <span className={cx('time')}>{data?.time}</span>
            {data.isSeen ? (
                <FontAwesomeIcon className={cx('seen')} icon={faCircle} />
            ) : (
                <div className={cx('noSeen')}></div>
            )}
        </Button>
    );
}

NotificationContent.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NotificationContent;
