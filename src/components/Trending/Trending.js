import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Trending.module.scss';

import Song from '~/components/Song';
import configs from '~/configs';
import images from '~/assets/images';
import audio from '~/assets/audio';

const cx = classNames.bind(styles);

function Trending() {
    const data = [
        {
            id: 1121,
            to: configs.routes.home,
            src: audio.audio1,
            title: 'Making my way',
            artist: 'Sơn Tùng MTP',
            img: images.imgSong,
            time: '1 Giờ Trước',
        },
        {
            id: 1124,
            to: configs.routes.home,
            src: audio.audio1,
            title: 'Making my way',
            artist: 'Sơn Tùng MTP',
            img: images.imgSong,
            time: '1 Giờ Trước',
        },
        {
            id: 11,
            to: configs.routes.home,
            src: audio.audio1,
            title: 'Making my way',
            artist: 'Sơn Tùng MTP',
            img: images.imgSong,
            time: '1 Giờ Trước',
        },
        {
            id: 21,
            to: configs.routes.home,
            src: audio.audio1,
            title: 'Making my way',
            artist: 'Sơn Tùng MTP',
            img: images.imgSong,
            time: '1 Giờ Trước',
        },
        {
            id: 211,
            to: configs.routes.home,
            src: audio.audio1,
            title: 'Making my way',
            artist: 'Sơn Tùng MTP',
            img: images.imgSong,
            time: '1 Giờ Trước',
        },
    ];
    const [selectedSongId, setSelectedSongId] = useState(null);

    const handlePlay = (songId) => {
        if (selectedSongId === songId) {
            setSelectedSongId(null);
        } else {
            setSelectedSongId(songId);
        }
    };

    const renderListSong = () => {
        return data.map((song) => {
            const isPlaying = song.id === selectedSongId;

            return <Song key={song.id} data={song} isPlaying={isPlaying} onClick={() => handlePlay(song.id)} />;
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('trending')}>
                <h4 className={cx('title')}>Top trending</h4>
                <div className={cx('menu')}>{renderListSong()}</div>
            </div>
        </div>
    );
}

export default Trending;
