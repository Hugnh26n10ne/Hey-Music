import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Banner from '~/components/Banner';
import Trending from '~/components/Trending';
import Listens from '~/components/Listens';

const cx = classNames.bind(styles);

function Home() {
    return (
        <main className={cx('wrapper')}>
            <Banner />
            <div className={cx('content')}>
                <div className={cx('box-main')}>
                    <Trending />
                    <Listens />
                </div>
                <div></div>
            </div>
        </main>
    );
}

export default Home;
