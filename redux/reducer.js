import { findIndex } from 'lodash';
import update from 'react-addons-update';

import { ADD_CONVERSATION } from './actions';

export const initialState = {
  contacts: [
    {
      firstName: 'xavier',
      lastName: 'lopez',
      conversations: [
        { date: '12/12/15', method: 'phone' },
        { date: '09/13/15', method: 'irl' },
      ]
    },
    {
      firstName: 'ricardo',
      lastName: 'vazquez',
      conversations: [
        { date: '05/18/15', method: 'phone' },
      ]
    },
    {
      firstName: 'margo',
      lastName: 'smith',
      conversations: [
        { date: '12/02/15', method: 'gchat' },
        { date: '09/20/14', method: 'gchat' },
        { date: '10/07/15', method: 'email' },
        { date: '12/02/15', method: 'slack' },
      ]
    },
    {
      firstName: 'lindsay',
      lastName: 'levine',
      conversations: [
        { date: '10/19/15', method: 'phone' },
        { date: '02/22/13', method: 'irl' },
      ]
    },
  ],
  user: {
    firstName: 'sarah',
    lastName: 'ransohoff',
  }
};

function findMatchingContact(state, contact) {
  return findIndex(state.contacts, (user) => {
    return user.firstName === contact.firstName && user.lastName === contact.lastName;
  });
}

function handleAddConversation(state, conversation) {
  const contactIndex = findMatchingContact(state, conversation);
  let newContacts;
  if (contactIndex >= 0) {
    newContacts = update(state.contacts, {[contactIndex]: {conversations: {$push: [conversation]}}});
  } else {
    const newContact = {
      firstName: conversation.firstName,
      lastName: conversation.lastName,
      conversations: [
        {
          date: conversation.date,
          method: conversation.method
        }
      ]
    };
    newContacts = update(state.contacts, {$push: [newContact]});
  }
  return Object.assign({}, state, { contacts: newContacts });
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONVERSATION:
      return handleAddConversation(state, payload);
    default:
      return state;
  }
};
