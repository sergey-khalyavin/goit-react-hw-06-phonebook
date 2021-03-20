import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import contactsActions from "../../redux/contacts/contactsActions";

import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);

    this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name:
          <input
            className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter name"
          />
        </label>
        <label className={s.label}>
          Number:
          <input
            className={s.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="Enter number"
          ></input>
        </label>

        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onAddContact: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  onAddContact: contactsActions.addContacts,
};

export default connect(null, mapDispatchToProps)(ContactForm);
