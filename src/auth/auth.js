import { authenticate } from "./api";
import * as jwt from "./jwt";

/**
 * Authenticates against the API with the given credentials.
 * If successful, a JWT token is stored in the browser's local storage.
 */
async function login(username, password) {
  try {
    const token = await authenticate(username, password);
    jwt.save(token);
  } catch (error) {
    jwt.remove();
    throw error;
  }
}

/**
 * Logout means: just remove the JWT token.
 */
function logout() {
  jwt.remove();
}

export { login, logout };
