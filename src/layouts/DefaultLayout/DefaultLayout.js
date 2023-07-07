import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';

import Header from '~/layouts/components/Header';
import Nav from '~/layouts/components/Nav';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function LayoutDefault({ children }) {
    const [activeNav, setActiveNav] = useState(false);

    return (
        <div>
            <Header setActiveNav={setActiveNav} activeNav={activeNav} />
            <div className={cx('container')}>
                <Nav activeNav={activeNav} />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutDefault;
