import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './General.module.scss';

const cx = classNames.bind(styles);

function General({ title, to, icon }) {
    return (
        <NavLink className={() => cx('general-item')} to={to}>
            {icon}
            <p className={cx('title')}>{title}</p>
        </NavLink>
    );
}

General.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default General;
