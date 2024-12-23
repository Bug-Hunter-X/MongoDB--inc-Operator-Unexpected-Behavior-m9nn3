```javascript
const query = { name: 'John Doe' };

// Incorrect usage of $inc operator to decrement a field
db.collection('users').updateOne(query, { $inc: { age: -1 } });
```