import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        _id: '1',
        name: 'Christina Aguilera',
        email: 'chaste@gmail.com',
        phone: '812 455 9878',
        type: 'personal',
      },
      {
        _id: '2',
        name: 'Charles Atlas',
        email: 'catlas@gmail.com',
        phone: '914 325 2478',
        type: 'personal',
      },
      {
        _id: '3',
        name: 'William Bixpy',
        email: 'bbixpy@gmail.com',
        phone: '914 255 7845',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
