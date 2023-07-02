import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
    ({ to, href, type = '', children, className, onClick, leftIcon = [], rightIcon = [], ...passProps }, ref) => {
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

        const renderLeftIcon = () => {
            if (leftIcon) {
                return leftIcon;
            } else {
                return '';
            }
        };
        const renderRightIcon = () => {
            if (rightIcon) {
                return rightIcon;
            } else {
                return '';
            }
        };

        const renderItem = () => {
            if (type === 'icon') {
                return children;
            } else if (type === 'icon_text') {
                return children;
            } else {
                return <span>{children}</span>;
            }
        };
        return (
            <Comp ref={ref} className={classes} {...props}>
                {renderLeftIcon()}
                {renderItem()}
                {renderRightIcon()}
            </Comp>
        );
    },
);

export default Button;
