import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './Song.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Song({ data = [] }) {
    return (
        <Button type="icon_text" to={data.to} className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('arrow-right')} icon={faChevronRight} />
            <Image className={cx('thumnail')} src={data?.avatar} alt={data?.author} />
            <div className={cx('info')}>
                <h5 className={cx('name')}>{data?.name}</h5>
                <h5 className={cx('author')}>{data?.author}</h5>
            </div>
        </Button>
    );
}

export default Song;
