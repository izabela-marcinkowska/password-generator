# Password Generator

This project features a robust password generator that provides users with two distinct styles of passwords, ensuring versatility and security for various user needs.

## Features

With this password generator, users can create passwords that are both secure and customized to their preferences. The generator offers the following features:

### Random Passwords

The `Random` mode crafts passwords in a non-sequential arrangement, always initiating with an alphabetical character. Users can fine-tune the following settings:

#### Length

- **Default**: 10 characters
- **Options**: Anywhere from 8 to 25 characters. Leaving this field blank defaults to a 10-character password.

#### Character Types

- **Letters**: Passwords will include a mix of random uppercase and lowercase letters. Exclusive selection of either case is not available.
- **Numbers**: Includes random numbers ranging from 0 to 9 interspersed within the password.
- **Special Characters**: Incorporates all permissible ASCII symbols, ensuring the first character is not a special symbol to comply with most website requirements. Cannot be chosen alone. Needs to be together with another option.

### Dash-Separated Passwords

The `Dash-Separated` mode generates passwords that are segmented by dashes, evenly interspersing letters, numbers, and special characters for readability and memorability.

## Getting Started

To generate a password:

1. Choose the desired password style: `Random` or `Dash-Separated`.
2. Specify the password length (8 to 25 characters).
3. Select the types of characters to include (letters, numbers, and/or special characters).
4. Generate your password.
