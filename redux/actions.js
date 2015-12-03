/*
 * action types
 */

/*
 * action creators
 */

/*
 * initial state
 */

const initialState = {
  pendingConvo: {
    contact: {},
    conversation: {},
    isAdding: false
  },
  contacts: [
    {
      firstName: 'xavier',
      lastName: 'lopez',
      conversations: [
        { date: '12/12/15', method: 'phone' },
        { date: '12/02/15', method: 'irl' }
      ]
    },
    {
      firstName: 'ricardo',
      lastName: 'vazquez',
      conversations: [
        { date: '', method: '' },
      ]
    },
    {
      firstName: 'margo',
      lastName: 'smith',
      conversations: [
        { date: '', method: '' },
        { date: '', method: '' },
      ]
    },
    {
      firstName: 'lindsay',
      lastName: 'levine',
      conversations: [
        { date: '', method: '' },
      ]
    },
  ],
  user: {
    firstName: 'sarah',
    lastName: 'ransohoff'
  }
};

/*
 * reducer
 */

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

/*
 * switch handler
 */
