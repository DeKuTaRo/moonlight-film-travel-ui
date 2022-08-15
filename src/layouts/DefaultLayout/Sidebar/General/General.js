import PropTypes from 'prop-types';

function General({ children }) {
    return <>{children}</>;
}

General.propTypes = {
    children: PropTypes.node.isRequired,
};
export default General;
