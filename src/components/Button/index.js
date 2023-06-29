import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, type = '', children, className, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        [type]: type,
    });

    return (
        <Comp className={classes} {...props}>
            {type !== 'icon' ? type !== 'icon_text' ? <span>{children}</span> : children : children}
        </Comp>
    );
}

export default Button;
