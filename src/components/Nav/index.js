import config from '~/configs';

import classNames from 'classnames/bind';

import styles from './Nav.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Nav({ attrs }) {
    return (
        <div className={cx('nav')} tabIndex={-1} {...attrs}>
            <Button to={config.routes.home} type="icon_text" className={cx('nav-item')}>
                Khám phá
            </Button>
            <Button to={config.routes.talkshow} type="icon_text" className={cx('nav-item')}>
                Talk Show
            </Button>
            <Button to={config.routes.karaoke} type="icon_text" className={cx('nav-item')}>
                KARAOKE
            </Button>
            <Button to={config.routes.podcast} type="icon_text" className={cx('nav-item')}>
                PodCast
            </Button>
            <Button to={config.routes.radio} type="icon_text" className={cx('nav-item')}>
                Radio
            </Button>
            <Button to={config.routes.library} type="icon_text" className={cx('nav-item')}>
                Thư viện
            </Button>
        </div>
    );
}

export default Nav;
