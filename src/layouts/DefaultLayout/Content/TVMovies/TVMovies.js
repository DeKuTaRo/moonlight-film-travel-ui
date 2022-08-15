import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './TVMovies.module.scss';

const cx = classNames.bind(styles);

function TVMovies({ title, to }) {
    return (
        <NavLink className={(nav) => cx('content-types', { active: nav.isActive })} to={to}>
            {/* <p className={cx('content-type')}> */}
                {title}
            {/* </p> */}
        </NavLink>
    );
}

TVMovies.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.node.isRequired,
};

export default TVMovies;
