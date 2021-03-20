import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactsActions from '../../../redux/contacts/contactsActions';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, id, number, onRemove }) => {
  return (
    <li key={id} className={styles.item}>
      <p>{name}:</p>
      <p>{number}</p>
      <section className={styles.section__btn}>
        <button className={styles.btn} type="button" onClick={onRemove}>
          Delete
        </button>
      </section>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsActions.removeContacts(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
