import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Header from '~/layouts/components/Header';
import Nav from '~/layouts/components/Nav';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function LayoutDefault({ children }) {
    const [activeNav, setActiveNav] = useState(false);

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

    return (
        <div>
            <Header setActiveNav={setActiveNav} activeNav={activeNav} />
            <div className={cx('container')}>
                <Nav activeNav={activeNav} />
                <div className={cx('content', activeNav ? 'active' : '')}>{children}</div>
            </div>
        </div>
    );
}

LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutDefault;
