import classNames from 'classnames/bind';

import styles from './Nav.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Nav({ attrs }) {
    return (
        <div className={cx('nav')} tabIndex={-1} {...attrs}>
            <Button to="/khampha" type="icon_text" className={cx('nav-item')}>
                Khám phá
            </Button>
            <Button to="/talkshow" type="icon_text" className={cx('nav-item')}>
                Talk Show
            </Button>
            <Button to="/karaoke" type="icon_text" className={cx('nav-item')}>
                KARAOKE
            </Button>
            <Button to="/podcast" type="icon_text" className={cx('nav-item')}>
                PodCast
            </Button>
            <Button to="/radio" type="icon_text" className={cx('nav-item')}>
                Radio
            </Button>
            <Button to="/thuvien" type="icon_text" className={cx('nav-item')}>
                Thư viện
            </Button>
        </div>
    );
}

export default Nav;
