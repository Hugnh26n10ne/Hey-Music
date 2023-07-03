import classNames from 'classnames/bind';

import styles from './Nav.module.scss';
import Button from '~/components/Button';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);

function Nav({ attrs }) {
    return (
        <div className={cx('nav')} tabIndex={-1} {...attrs}>
            <Button to={routesConfig.home} type="icon_text" className={cx('nav-item')}>
                Khám phá
            </Button>
            <Button to={routesConfig.talkshow} type="icon_text" className={cx('nav-item')}>
                Talk Show
            </Button>
            <Button to={routesConfig.karaoke} type="icon_text" className={cx('nav-item')}>
                KARAOKE
            </Button>
            <Button to={routesConfig.podcast} type="icon_text" className={cx('nav-item')}>
                PodCast
            </Button>
            <Button to={routesConfig.radio} type="icon_text" className={cx('nav-item')}>
                Radio
            </Button>
            <Button to={routesConfig.library} type="icon_text" className={cx('nav-item')}>
                Thư viện
            </Button>
        </div>
    );
}

export default Nav;
