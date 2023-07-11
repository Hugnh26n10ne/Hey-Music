import classNames from 'classnames/bind';
import NavItem from './NavItem';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav() {
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('nav')}>
                <NavItem />
                <div className={cx('bg-active')}></div>
            </div>
            <div className={cx('background')}></div>
        </nav>
    );
}

export default Nav;
