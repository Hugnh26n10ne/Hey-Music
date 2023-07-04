import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Nav from '~/layouts/components/Nav';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function LayoutDefault({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <Nav />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutDefault;
