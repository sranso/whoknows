/*
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
function storageAvailable(type) {
  try {
    const storage = window[type],
    x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return false;
  }
}

export default function getState() {
  if (!storageAvailable('localStorage')) {
    alert('We can\'t save your data using this browser. Please try a different one.');
  }
  let state = null;
  const localStorageState = JSON.parse(localStorage.getItem('state'));
  if ( localStorageState ) {
    state = localStorageState;
  } else {
    localStorage.setItem('state', '{}');
    state = {};
  }
  return state;
}
