import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
    ({ to, href, type = '', children, className = '', onClick, leftIcon, rightIcon, ...passProps }, ref) => {
        // Default is button
        let Comp = 'button';

        const props = {
            onClick,
            ...passProps,
        };

        // If props is the path, change the tag
        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
            Comp = 'a';
        }

        // Get all classes and type passed from props
        const classes = cx('wrapper', {
            [className]: className,
            [type]: type,
        });

        const renderLeftIcon = () => {
            if (leftIcon) {
                return leftIcon;
            } else {
                return <></>;
            }
        };

        const renderItem = () => {
            if (type === 'icon') {
                return children;
            } else if (type === 'icon-text') {
                return children;
            } else {
                return <span>{children}</span>;
            }
        };

        const renderRightIcon = () => {
            if (rightIcon) {
                return rightIcon;
            } else {
                return <></>;
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

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
