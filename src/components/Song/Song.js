import PropTypes from 'prop-types';

import SongSearch from '~/components/Song/SongSearch';
import SongList from '~/components/Song/SongList';

function Song({ search = false, data = {}, play, ...passProp }) {
    let Cmp = SongList;

    if (search) {
        Cmp = SongSearch;
    } else {
        Cmp = SongList;
    }

    return <Cmp data={data} play={play} {...passProp} />;
}

Song.propTypes = {
    search: PropTypes.bool,
    data: PropTypes.object,
};

export default Song;
