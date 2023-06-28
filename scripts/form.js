/**
 * validateFirst - validated user first name entry through registration form
 *
 * @param {string} first
 * @returns html element for error message
 */
export function validateFirst(first) {
  if (first.length < 2) {
    return '<div class="alert alert-danger">You have entered a first name that is too short.</div>';
  } else {
    return "";
  }
}

/**
 * validateLast- validated user last name entry through registration form
 *
 * @param {string} last
 * @returns html element for error message
 */
export function validateLast(last) {
  if (last.length < 2) {
    return '<div class="alert alert-danger">You have entered a last name that is too short.</div>';
  } else {
    return "";
  }
}

/**
 * validateUsername- validated user username entry through registration form
 *
 * @param {string} username
 * @returns html element for error message
 */
export function validateUsername(username) {
  if (username.length < 2) {
    return '<div class="alert alert-danger">You have entered a username that is too short.</div>';
  } else {
    return "";
  }
}

/**
 * validateEmail- validated user email entry through registration form
 *
 * @param {string} email
 * @returns html element for error message
 */
export function validateEmail(email) {
  if (email.length < 8) {
    return '<div class="alert alert-danger">Your email should have at least 8 characters.</div>';
  }

  const atSymbol = email.indexOf("@");
  if (atSymbol < 1) {
    return '<div class="alert alert-danger">Your email is invalid.</div>';
  }

  const dot = email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return '<div class="alert alert-danger">Your email is invalid.</div>';
  }

  if (dot === email.length - 1) {
    return '<div class="alert alert-danger">Your email is invalid.</div>';
  } else {
    return "";
  }
}

/**
 * validatePassword- validated user password entries 1 and 2 are the same through ristration form
 *
 * @param {string} pass1
 * @param {string} pass2
 * @returns html element for error message
 */
export function validatePassword(pass1, pass2) {
  if (pass1.length < 6) {
    return '<div class="alert alert-danger">Your password must be at least 6 characters long.</div>';
  } else if (pass1 != pass2) {
    return '<div class="alert alert-danger">Your passwords do not match.</div>';
  } else {
    return "";
  }
}
