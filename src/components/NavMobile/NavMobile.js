import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import Logo from '~/components/Logo';
import NavMobileItem from '~/components/NavMobile/NavMobileItem';

import styles from './NavMobile.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function NavMobile() {
    const [activeNav, setActiveNav] = useState(false);

    const handleClick = () => {
        setActiveNav(!activeNav);
    };

    useEffect(() => {
        if (activeNav) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }

        return () => {
            document.body.classList.remove('disable-scroll');
        };
    }, [activeNav]);

    const classesLogo = ['logo-nav', cx('nav-item')];

    return (
        <div className={cx('navWrapper')}>
            <Button type="icon-text" className="btn-nav">
                <input
                    type="checkbox"
                    onChange={handleClick}
                    checked={activeNav}
                    className={cx('menu-input')}
                    id="active"
                />
                <label htmlFor="active" className={cx('menu-btn')}>
                    <span></span>
                </label>
            </Button>
            <nav className={cx('wrapper', activeNav ? 'active' : '')}>
                <div className={cx('nav')}>
                    <Logo className={classesLogo} />
                    <NavMobileItem setActiveNav={setActiveNav} />
                </div>
                <div className={cx('background', activeNav ? 'active' : '')}></div>
            </nav>
        </div>
    );
}

export default NavMobile;
