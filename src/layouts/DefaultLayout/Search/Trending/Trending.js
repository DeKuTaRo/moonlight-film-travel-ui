import PropTypes from 'prop-types';

function Trending({ children }) {
    return <div>{children}</div>;
}

Trending.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Trending;
