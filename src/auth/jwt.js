const localStorageKey = "auth_token";

/**
 * Saves the JWT token to local storage.
 */
function save(token) {
  return window.localStorage.setItem(localStorageKey, token);
}

/**
 * Removes the JWT token from local storage.
 */
function remove() {
  return window.localStorage.removeItem(localStorageKey);
}

/**
 * Gets the JWT token from local storage.
 */
function get() {
  return window.localStorage.getItem(localStorageKey);
}

export { save, remove, get };
