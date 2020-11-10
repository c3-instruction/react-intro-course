# installation instructions
```
npm install
npm test
```
# selecting which tests to run
In order to avoid overwhelming the user with errors, tests must be turned on one by one. Tests can
be activated by removing the `.skip` from the test file.

# process
Each function has instructions for how you are supposed to implement it. Let's say we wanted to work on the `arrayCopy`
exercise. Follow the instructions in the comment above the function. To test your solution, go into `index.text.js` and
find `describe.skip('arrayCopy',` remove the .skip i.e. `describe('arrayCopy',)` then type npm test in the terminal. The
selected tests will now run.