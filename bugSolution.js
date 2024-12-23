```javascript
const query = { name: 'John Doe' };

// Correct usage of $inc operator to decrement a field. Handles cases where age is undefined
db.collection('users').updateOne(query, { $inc: { age: -1 } }, { upsert: true });
```