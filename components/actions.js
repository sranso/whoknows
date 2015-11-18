/*
 * action types
 */

const GIVE_HIGH_FIVE = 'GIVE_HIGH_FIVE';
const UPDATE_EXCLAMATION = 'UPDATE_EXCLAMATION';
const FADE_HIGH_FIVE = 'FADE_HIGH_FIVE';

/*
 * action creators
 */

export function giveHighFive() {
  return { type: GIVE_HIGH_FIVE };
}

export function updateExclamation(exclamation) {
  return { type: UPDATE_EXCLAMATION, exclamation };
}

export function fadeHighFive() {
  return { type: FADE_HIGH_FIVE };
}

/*
 * initial state
 */

const initialState = {
  highFiveIsVisible: false,
  exclamation: ''
};

/*
 * reducer
 */

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GIVE_HIGH_FIVE:
      return handleGiveHighFive(state);

    case UPDATE_EXCLAMATION:
      return handleExclamationChange(state, action);

    case FADE_HIGH_FIVE:
      return handleFadeHighFive(state);

    default:
      return state;
  }
}

/*
 * switch handler
 */

function handleGiveHighFive(state) {
  const newState = { highFiveIsVisible: true };
  return Object.assign({}, state, newState);
}

function handleExclamationChange(state, action) {
  const newState = { exclamation: action.exclamation };
  return Object.assign({}, state, newState);
}

function handleFadeHighFive(state) {
  const newState = { highFiveIsVisible: false };
  return Object.assign({}, state, newState);
}
