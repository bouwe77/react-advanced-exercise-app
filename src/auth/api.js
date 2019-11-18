/**
 * This code is fake/stub instead of a real API.
 */

const users = [
  {
    username: "a",
    password: "a",
    token: "h2h2783yui3hdjkehdu3hiuhdjwhed"
  }
];

/**
 * Simulates an authentication call.
 */
export async function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        user =>
          user.username.toUpperCase() === username.toUpperCase() &&
          user.password.toUpperCase() === password.toUpperCase()
      );

      if (user) {
        resolve(user.token);
      } else {
        reject(Error("Unauthorized"));
      }
    }, 1000);
  });
}

/**
 * Simulates a get user by token call.
 */
export async function getCurrentLoggedInUser(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.token === token);

      if (user) {
        resolve(user);
      } else {
        reject(Error("User not found"));
      }
    }, 1000);
  });
}
