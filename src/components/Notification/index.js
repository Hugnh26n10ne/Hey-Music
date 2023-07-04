import config from '~/configs';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import NotificationContent from '~/components/NotificationContent';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification({ items = [], ...passProps }) {
    const renderNotifications = () => {
        return items.map((data, index) => {
            return <NotificationContent key={index} data={data} />;
        });
    };

    return (
        <Button type="icon" to={config.routes.notification} className={cx('btn-notification')}>
            <Tippy
                {...passProps}
                offset={[0, 28]}
                delay={[0, 500]}
                interactive
                render={(attrs) => (
                    <div className={cx('notification-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('title')}>Thông báo</h4>
                            {renderNotifications()}
                            <div className={cx('more')}>
                                <a href="xemthem">Xem thêm</a>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div>
                    <Button type="icon" className="notification">
                        <FontAwesomeIcon icon={faBell} className={cx('icon-notification', 'notify')} />
                        <span className={cx('counter', 'show-count')}>2</span>
                    </Button>
                </div>
            </Tippy>
        </Button>
    );
}

Notification.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Notification;
