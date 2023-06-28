/**
 * This class represents a user.
 */
export default class User {
  /**
   * User parameterized constructor
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} username
   * @param {string} email
   * @param {string} password
   */
  constructor(firstName, lastName, username, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  /** Gets the firstName */
  get firstName() {
    return this._firstName;
  }

  /** Sets the firstName */
  set firstName(firstName) {
    this._firstName = firstName;
  }

  /** Gets the lastName */
  get lastName() {
    return this._lastName;
  }

  /** Sets the lastName */
  set lastName(lastName) {
    this._lastName = lastName;
  }

  /** Gets the username */
  get username() {
    return this._username;
  }

  /** Sets the username */
  set username(username) {
    this._username = username;
  }

  /** Gets the email */
  get email() {
    return this._email;
  }

  /** Sets the email */
  set email(email) {
    this._email = email;
  }

  /** Gets the password */
  get password() {
    return this._password;
  }

  /** Sets the password */
  set password(password) {
    this._password = password;
  }

  /**
   * Returns a string representing the user attributes
   */
  toString() {
    return `User:\n
    First name: ${this.firstName}\n
    Last name: ${this.lastName}\n
    Username: ${this.username}\n
    Email${this.email}\n
    Password: ${this.password}\n`;
  }
}
