import configs from '~/configs';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import NotificationContent from '~/components/NotificationContent';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Notification.module.scss';

const cx = classNames.bind(styles);

function Notification({ ...passProps }) {
    const time = `${15} p`;

    const notificationItems = [
        {
            content: 'Sơn Tùng MTP vừa ra bài hát mới : “Making My Way”',
            time: time,
            to: '/notifi_1',
            isSeen: true,
        },
        {
            content: 'Sơn Tùng MTP tung lyric bài : “Making My Way”',
            time: time,
            to: '/notifi_2',
            isSeen: false,
        },
    ];

    const renderNotifications = () => {
        return notificationItems.map((data, index) => {
            return <NotificationContent key={index} data={data} />;
        });
    };

    return (
        <div className={cx('btn-notification')}>
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
                                <Button type="text" to={configs.routes.notification}>
                                    Xem thêm
                                </Button>
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
