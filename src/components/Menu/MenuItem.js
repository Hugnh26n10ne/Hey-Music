import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ attrs, items = [] }) {
    return (
        <div className={cx('nav')} tabIndex={-1} {...attrs}>
            {items.map((item, index) => (
                <Button key={index} to={item?.to} type="icon_text">
                    <span className={cx('title')}>{item?.title}</span>
                    {item?.icon}
                </Button>
            ))}
        </div>
    );
}

export default MenuItem;
