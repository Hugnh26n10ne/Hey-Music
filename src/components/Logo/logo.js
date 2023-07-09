import config from '~/configs';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import images from '~/assets/images';
import Image from '~/components/Image';

import styles from './Logo.module.scss';

const cx = classNames.bind(styles);

function Logo({ className }) {
    return (
        <Button to={config.routes.home} type="icon-text" className={cx('logo', className)}>
            <Image src={images.logo1} alt="logo" />
            <div className={cx('logo-text')}>Hey Music</div>
        </Button>
    );
}

Logo.propTypes = {
    className: PropTypes.array.isRequired,
};

export default Logo;
