import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Account.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Account({ data = {} }) {
    return (
        <Button type="icon_text" to={data.to} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data?.avatar} alt="" />
            <div className={cx('info')}>
                <h5 className={cx('name')}>{data?.name}</h5>
                {data.isReal ? <FontAwesomeIcon className={cx('isCheck')} icon={faCheckCircle} /> : <></>}
            </div>
        </Button>
    );
}

Account.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Account;
