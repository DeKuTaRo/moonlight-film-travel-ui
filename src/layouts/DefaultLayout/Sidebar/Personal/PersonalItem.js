import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Personal.module.scss';

const cx = classNames.bind(styles);

function PersonalItem({ title, to, icon }) {
    return (
        <NavLink className={() => cx('personal-item')} to={to}>
            {/* <span className={cx('icon')}>{icon}</span> */}
            {icon}
            <p className={cx('title')}>{title}</p>
        </NavLink>
    );
}

PersonalItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default PersonalItem;
