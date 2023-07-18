import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

import Button from '~/components/Button';
import Image from '~/components/Image';
import * as Icon from '~/components/Icon';
import configs from '~/configs';

const cx = classNames.bind(styles);

function Dashboard({ data = {} }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('media-left')}>
                <Button className={cx('info')} type="icon-text" to={configs.routes.home}>
                    <div className={cx('imgs')}>
                        <Image src={data.img} className={cx('img')} />
                    </div>
                    <div className={cx('content')}>
                        <div>
                            <div className={cx('name')}>
                                <h3 className={cx('title')}>{data.title}</h3>
                            </div>
                            <div className={cx('box')}>
                                <div className={cx('author')}>
                                    <Icon.ArrowIcon className={cx('play')} width={20} height={20} />
                                    <span className={cx('artist')}>{data.artist}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Button>
                <div className={cx('others')}>
                    <Button className={cx('other')}>
                        <Icon.HeartIcon width={28.88} height={26} />
                    </Button>
                    <Button className={cx('other')}>
                        <Icon.OtherIcon width={24.22} height={7.03} />
                    </Button>
                </div>
            </div>
            <div className={cx('controls')}>
                <div className={cx('timeline')}>
                    <span className={cx('time left')}>01:10</span>
                    <div className={cx('duration-bar')}>
                        <div className={cx('slider-bar')}>
                            <div className={cx('knot')} draggable="false"></div>
                        </div>
                    </div>
                    <span className={cx('time right')}>03:33</span>
                </div>
                <div className={cx('control')}>
                    <div className={cx('actions')}>
                        <Button className={cx('media', 'is-hover-media')}>
                            <Icon.ShuffleTrack className={cx('icon')} width={27.2} height={27.2} />
                        </Button>
                        <Button className={cx('media', 'is-hover-media')}>
                            <Icon.MediaStepBackward className={cx('icon')} width={22} height={22} />
                        </Button>
                        <Button className={cx('media', 'is-hover-media')}>
                            <Icon.MusicPlayButton className={cx('icon')} width={43} height={43} />
                        </Button>
                        <Button className={cx('media', 'is-hover-media')}>
                            <Icon.MediaStepForward className={cx('icon')} width={22} height={22} />
                        </Button>
                        <Button className={cx('media', 'is-hover-media')}>
                            <Icon.RepeatTrack className={cx('icon')} width={27.2} height={27.2} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('media-right')}></div>
        </div>
    );
}

Dashboard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Dashboard;
