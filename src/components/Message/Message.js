import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import MessageContent from '~/components/MessageContent';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);

// Functions is not used now

function Message() {
    return (
        <div>
            <Tippy
                interactive
                visible={false}
                render={(attrs) => (
                    <div className={cx('message-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('title')}>Thông báo</h4>
                            <MessageContent active />
                            <MessageContent />
                            <div className={cx('more')}>
                                <a href="xemthem">Xem thêm</a>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            >
                <div>
                    <Button type="icon" className="message">
                        <FontAwesomeIcon icon={faEnvelope} className={cx('icon-message', 'mess')} />
                        <span className={cx('counter', 'show-count')}>3</span>
                    </Button>
                </div>
            </Tippy>
        </div>
    );
}

export default Message;
