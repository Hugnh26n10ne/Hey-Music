import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Song.module.scss';

import * as Icon from '~/components/Icon';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Dashboard from '~/components/Dashboard';

const cx = classNames.bind(styles);

function SongList({ data = {}, isPlaying = false, ...passProp }) {
    const renderPlayIcon = () => {
        if (isPlaying) {
            return <Icon.PauseIcon className={cx('play-img')} width={15} height={15} />;
        } else {
            return <Icon.PlayIcon className={cx('play-img')} width={15} height={15} />;
        }
    };

    return (
        <div>
            <Button type="icon-text" to={data.to} className={cx('contents')} {...passProp}>
                <div className={cx('imgs')}>
                    <Image src={data.img} className={cx('img')} />
                    <div className={cx('cricle')}></div>
                    {renderPlayIcon()}
                </div>
                <div className={cx('content')}>
                    <div className={cx('name')}>
                        <h3 className={cx('title')}>{data.title}</h3>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('author')}>
                            <Icon.ArrowIcon className={cx('play')} width={20} height={20} />
                            <span className={cx('artist')}>{data.artist}</span>
                        </div>
                        <div className={cx('actions')}>
                            <Icon.DoubleArrowIcon className={cx('double-play')} width={20} height={20} />
                            <span className={cx('time')}>{data.time}</span>
                        </div>
                    </div>
                </div>
            </Button>
            {isPlaying ? (
                <div className={cx('dashboard')}>
                    <Dashboard data={data} />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

SongList.propTypes = {
    data: PropTypes.object.isRequired,
    isPlaying: PropTypes.bool.isRequired,
};

export default SongList;
