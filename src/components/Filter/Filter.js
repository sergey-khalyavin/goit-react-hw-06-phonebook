import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import contactsActions from "../../redux/contacts/contactsActions";
import s from "./Filter.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      <label className={s.label}>
        Find contacts by name:
        <input
          className={s.filter}
          placeholder="Enter name"
          type="text"
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
