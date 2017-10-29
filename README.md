## pingen

Let's give this another go.

```javascript
const baseUrl = 'https://k07pffa80g.execute-api.us-east-1.amazonaws.com/dev';
```

### /register

Method: POST

Body: { externalId: String }

Return: User - the return will include a MongoDB `_id` which should be saved as `pingenId` and utlized in later requests.

```javascript
const payload = { externalId: 1 };

axios.post(baseUrl, payload);
```

### /request

Method: POST

Body: { pingenId: String }

Return: User - the return will include a `pin` field which will be utilzied in the /validate method.

```javascript
const payload = { pingenId: '59f55973b9dec57c010244f6' };

axios.post(baseUrl, payload);
```

### /validate

Method: POST

Body: { pingenId: String, pin: String }

Return: 200 with a success message and User.

```javascript
const payload = { pingenId: '59f55973b9dec57c010244f6', pin: 'AB21a' };

axios.post(baseUrl, payload);
```