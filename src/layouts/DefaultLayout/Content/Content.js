import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import images from '~/assets/images';
import config from '~/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import TVMovies from './TVMovies';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content-header')}>
                <div className={cx('d-flex', 'align-items-center')}>
                    <TVMovies title="TV Show" to="/"/>
                    <TVMovies title="Movies" to="/search"/>
                </div>
                <div>
                    <span>Anonymous</span>
                    <img src={images.avatar} alt="Anonymous" className={cx('avatar', 'ml-5')} />
                </div>
            </div>
            <div className={cx('banner')}>
                <img
                    src="https://image.tmdb.org/t/p/w1280/28T1Ec3ija6E7KQbUJNHiSYkUnL.jpg"
                    className={cx('banner-image')}
                    alt="film"
                />
            </div>
            <ul className={cx('banner-list')}>
                <li>
                    <h2 className={cx('banner-list-title')}>Popular</h2>
                    <div>
                        <div className={cx('banner-list-film')}>
                            <div className={cx('banner-icons')}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>

                            <div className={cx('d-flex')}>
                                {/* List film swiper*/}
                                <div className={cx('banner-film-items')}>
                                    <span>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </span>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                                <div className={cx('banner-film-items')}>
                                    <span>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </span>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <h2 className={cx('banner-list-item')}>Top rated</h2>
                    <div>
                        <div className={cx('banner-list-film')}>
                            <div className={cx('banner-icons')}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>

                            <div className={cx('d-flex')}>
                                <div className={cx('banner-film-items')}>
                                    <span>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </span>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                                <div className={cx('banner-film-items')}>
                                    <span>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </span>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <h2 className={cx('banner-list-item')}>Hot</h2>
                    <div>
                        <div className={cx('banner-list-film')}>
                            <div className={cx('banner-icons')}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>

                            <div className={cx('d-flex')}>
                                <div className={cx('banner-film-items')}>
                                    <span>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </span>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                                <div className={cx('banner-film-items')}>
                                    <span>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </span>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <h2 className={cx('banner-list-item')}>On the air</h2>
                    <div>
                        <div className={cx('banner-list-film')}>
                            <div className={cx('banner-icons')}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>

                            <div className={cx('d-flex')}>
                                {/* <div className={cx('banner-film-items')}>
                                    <div>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </div>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                                <div className={cx('banner-film-items')}>
                                    <div>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </div>
                                    <div className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div>
                                <div className={cx('banner-film-items')}>
                                    <span>
                                        <img
                                            src="https://image.tmdb.org/t/p/w342/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
                                            alt="Film"
                                            className={cx('banner-image-film')}
                                        />
                                    </span>
                                    <p className={cx('banner-rate-film')}>
                                        <p className={cx('number-rate')}>8.6</p>
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <p className={cx('banner-title-film')}>Peaky Blinders</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Content;
