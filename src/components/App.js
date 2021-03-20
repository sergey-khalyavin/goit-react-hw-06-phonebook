import React from 'react';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.box}>
      <CSSTransition
        in={true}
        appear
        timeout={500}
        classNames={styles}
        unmountOnExit
      >
        <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <CSSTransition
        in={true}
        timeout={250}
        classNames={styles.filter}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </div>
  );
}
