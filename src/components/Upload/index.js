import config from '~/configs';

import classNames from 'classnames/bind';
import { forwardRef } from 'react';

import { UploadIcon } from '~/components/Icon';
import Button from '~/components/Button';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <Button to={config.routes.upload} type="icon" className={cx('upload')}>
            <UploadIcon className={cx('icon')} width="40px" height="40px" />
        </Button>
    );
}

export default forwardRef(Upload);
