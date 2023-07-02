import classNames from 'classnames/bind';

import Header from '~/components/Layout/components/Header';
import Nav from '~/components/Layout/components/Nav';
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

export default LayoutDefault;
