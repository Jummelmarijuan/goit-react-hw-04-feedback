import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className="p-5 border border-gray-300 mb-5 w-full max-w-md text-center">
      <h2 className="text-2xl mb-3">{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;