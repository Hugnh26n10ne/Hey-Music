import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem() {
    const menu = [];

    const renderMenu = () => {
        return menu.map((data, index) => (
            <Button key={index} to={data?.to} type="icon-text" rightIcon={data?.icon} className={cx('item-title')}>
                <span className={cx('title')}>{data?.title}</span>
            </Button>
        ));
    };

    return (
        <div className={cx('menu-list')} tabIndex={-1}>
            <div className={cx('content')}>{renderMenu()}</div>
        </div>
    );
}

MenuItem.propTypes = {
    menu: PropTypes.object.isRequired,
};

export default MenuItem;
