import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import Trending, { TrendingItem } from '~/layouts/DefaultLayout/Search/Trending';

const cx = classNames.bind(styles);

const TRENDING_ITEMS = [
    {
        id: 1,
        src: 'https://image.tmdb.org/t/p/w154/ox4goZd956BxqJH6iLwhWPL9ct4.jpg',
        name: 'Lightyear',
        day: '2022-06-15',
        star: '8.6',
    },
    {
        id: 2,
        src: 'https://image.tmdb.org/t/p/w154/p9ZUzCyy9wRTDuuQexkQ78R2BgF.jpg',
        name: 'The black phone',
        day: '2022-06-02',
        star: '8.0',
    },
];

function Search() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search')}>
                <SearchIcon />
                <input placeholder="Search..." className={cx('search-input')} />
            </div>
            <ul className={cx('search-properties')}>
                <li className={cx('mb-4', 'mr-3')}>
                    <a className={cx('search-properties-item')} href="/">
                        Drama
                    </a>
                </li>
                <li className={cx('mb-4', 'mr-3')}>
                    <a className={cx('search-properties-item')} href="/">
                        Comedy
                    </a>
                </li>
                <li className={cx('mb-4', 'mr-3')}>
                    <a className={cx('search-properties-item')} href="/">
                        Talk
                    </a>
                </li>
                <li className={cx('mb-4', 'mr-3')}>
                    <a className={cx('search-properties-item')} href="/">
                        Wars and politics
                    </a>
                </li>
                <li className={cx('mb-4', 'mr-3')}>
                    <a className={cx('search-properties-item')} href="/">
                        Family
                    </a>
                </li>
                <li className={cx('mb-4', 'mr-3')}>
                    <a className={cx('search-properties-item')} href="/">
                        Kids
                    </a>
                </li>
                <li className={cx('mb-4', 'mr-3')}>
                    <a className={cx('search-properties-item')} href="/">
                        Documentary
                    </a>
                </li>
            </ul>
            <div className={cx('trending')}>
                <span>TRENDING</span>
            </div>
            <div className={cx('trending-items')}>
                <Trending>
                    {TRENDING_ITEMS.map((item) => (
                        <TrendingItem key={item.id} item={item} />
                    ))}
                </Trending>
            </div>
            <button className={cx('btn-see-more')}>See more</button>
        </div>
    );
}

export default Search;
