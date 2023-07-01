import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import NotificationContent from '~/components/NotificationContent';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification() {
    return (
        <div>
            <Tippy
                interactive
                visible={false}
                render={(attrs) => (
                    <div className={cx('notification-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('title')}>Thông báo</h4>
                            <NotificationContent active />
                            <NotificationContent />
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
        </div>
    );
}

export default Notification;
