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
