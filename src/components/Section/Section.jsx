import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
