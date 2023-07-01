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

function Search() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    }, []);

    return (
        <Tippy
            interactive={true}
            visible={searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        <Song />
                        <Song />
                        <Song />
                        <h4 className={cx('search-title')}>Account</h4>
                        <Account />
                        <Account />
                        <Account />
                        <div className={cx('more')}>
                            <a href="xemthem">Hiện tất cả kết quả "Value"</a>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('box', '')}>
                <input
                    className={cx('')}
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
