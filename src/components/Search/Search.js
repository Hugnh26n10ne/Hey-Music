import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { useState, useEffect, useRef } from 'react';
import { useDebounce } from '~/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { searchService } from '~/services';
import Account from '~/components/Account';
import Song from '~/components/Song';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ items = [] }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const debouncedInput = useDebounce(searchValue, 500);

    const inputRef = useRef();
    const boxSearchRef = useRef();

    const [isActive, setIsActive] = useState('');

    useEffect(() => {
        if (!debouncedInput.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debouncedInput);

            setSearchResults(result);

            setLoading(false);
        };
        fetchApi();
    }, [debouncedInput]);

    const handleActiveMobile = () => {
        if (window.matchMedia(`(max-width: 768px)`).matches) {
            setIsActive('active');
        } else {
            setIsActive('');
        }
    };

    const handleChangeInput = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ')) {
            return;
        }
        setSearchValue(searchValue);
    };

    const handleSearchOnBlur = (e) => {
        const currentTarget = e.currentTarget;
        setTimeout(function () {
            if (!currentTarget.contains(document.activeElement)) {
                setIsActive('');
            }
        }, 0);
    };

    const handleSearchOnClick = (e) => {
        const currentTarget = e.currentTarget;
        setTimeout(function () {
            if (currentTarget.contains(document.activeElement)) {
                setShowResults(true);
            }
        }, 0);
    };

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };

    const renderSongResults = () => {
        const data = items[0];
        return data.song.map((data, index) => {
            return <Song key={index} data={data} />;
        });
    };
    const renderAccountResults = () => {
        const data = searchResults;
        return data.map((data, index) => {
            return <Account key={index} data={data} />;
        });
    };

    const renderMoreSearch = () => {
        return `Hiện tất cả kết quả "${searchValue}"`;
    };

    return (
        <Tippy
            interactive={true}
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        {renderSongResults()}
                        <h4 className={cx('search-title')}>Account</h4>
                        {renderAccountResults()}
                        <div className={cx('more')}>
                            <a href="xemthem">{renderMoreSearch()}</a>
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div ref={boxSearchRef} className={cx('box', isActive)} onBlur={handleSearchOnBlur}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Tìm kiếm bạn bè hoặc bài hát theo ý thích ..."
                    onChange={handleChangeInput}
                    onFocus={handleSearchOnClick}
                    spellCheck={false}
                ></input>
                <button className={cx('search-btn')} onClick={handleActiveMobile}>
                    <ion-icon name="search-outline"></ion-icon>
                </button>
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <span className={cx('btn-close')}>&times;</span>
                    </button>
                )}

                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            </div>
        </Tippy>
    );
}

export default Search;
