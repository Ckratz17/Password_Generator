# Password_Generator

## Work_Done

Defined variables for all the characters that would be used in a password.
Defined the minimum length of the password in a variable.
Created a function for the prompts with an isNaN (not a number) to give a prompt telling the user to select a proper length for the password.
Created a function for the new password to be generated by adding a for loop with math.floor and math.random to the length of the users choice.

### Behavior
When the user hits the generate password button, the user is then greeted with a prompt asking how many characters they want their password to be.
If the user selects a number less than 8 or more than 128, or selects anything other than a number, the user is greeted with a prompt telling them they need to select a proper number.
If the user selects a proper length for their password, the user is then greeted with multiple prompts asking what characters they want in their password.
When the user goes through all the prompts, they are shown their generated password in the textarea.