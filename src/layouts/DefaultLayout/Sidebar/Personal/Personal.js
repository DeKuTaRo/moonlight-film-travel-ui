import PropTypes from 'prop-types';

function Personal({ children }) {
    return <>{children}</>;
}

Personal.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Personal;
