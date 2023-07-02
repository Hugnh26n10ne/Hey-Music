import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Account from '~/components/Account';
import Song from '~/components/Song';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ items = [] }) {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([1, 2, 3]);
        }, 0);
    }, []);

    const renderSongResults = () => {
        const data = items[0];
        return data.song.map((data, index) => {
            return <Song key={index} data={data} />;
        });
    };
    const renderAccountResults = () => {
        const data = items[1];
        return data.user.map((data, index) => {
            return <Account key={index} data={data} />;
        });
    };

    return (
        <Tippy
            interactive={true}
            visible={searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        {renderSongResults()}
                        <h4 className={cx('search-title')}>Account</h4>
                        {renderAccountResults()}
                        <div className={cx('more')}>
                            <a href="xemthem">Hiện tất cả kết quả "Value"</a>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('box')}>
                <input
                    className={cx('search-input')}
                    placeholder="Tìm kiếm bạn bè hoặc bài hát theo ý thích ..."
                    spellCheck={false}
                ></input>
                <button className={cx('search-btn')}>
                    <ion-icon name="search-outline"></ion-icon>
                </button>
                <button className={cx('clear')}>
                    <span className={cx('btn-close')}>&times;</span>
                </button>

                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            </div>
        </Tippy>
    );
}

export default Search;
