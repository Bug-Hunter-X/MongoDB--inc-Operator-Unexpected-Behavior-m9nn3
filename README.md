# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator when used to decrement values. The `$inc` operator, when supplied with a negative value, is expected to reduce the value of the specified field. However, if the field does not exist or is of an inappropriate data type, the update operation will fail or result in unexpected behavior. This is shown in the `bug.js` file, which demonstrates the incorrect usage.

The solution demonstrates how to correctly use the $inc operator in such cases, and is presented in `bugSolution.js`.