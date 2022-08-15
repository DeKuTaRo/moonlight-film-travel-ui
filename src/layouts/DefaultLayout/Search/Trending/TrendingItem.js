import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './Trending.module.scss';

const cx = classNames.bind(styles);

function TrendingItem({ item }) {
    return (
        <div className={cx('trending-item')}>
            <div className={cx('image')}>
                <img src={item.src} alt="Film" className={cx('trending-film-image')} />
            </div>
            <a className={cx('film-item', 'd-flex', 'flex-column')} href="/">
                <h5 className={cx('film-name')}>{item.name}</h5>
                <span className={cx('film-day')}>{item.day}</span>
                <div className={cx('film-rate')}>
                    <span className={cx('number-rate')}>{item.star}</span>
                    <FontAwesomeIcon icon={faStar} />
                </div>
            </a>
        </div>
    );
}

// TrendingItem.propTypes = {
//     item: PropTypes.node,
// };
export default TrendingItem;
