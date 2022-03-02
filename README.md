### SwapStation - Server Side

#### Routes

##### User routes

| HTTP verb | URL                  | Request body | Action                     |
| --------- | -------------------- | ------------ | -------------------------- |
| GET       | `/api/users`         | (empty)      | Returns all the users      |
| POST      | `/api/users`         | (empty)      | Adds a new users           |
| GET       | `/api/users/:userId` | (empty)      | Returns the specified user |
| POST      | `/api/users/:userId` | (empty)      | Edits the specified user   |
| DELETE    | `/api/users/:userId` | (empty)      | Deletes the specified user |

##### Product routes

| HTTP verb | URL                  | Request body | Action                        |
| --------- | -------------------- | ------------ | ----------------------------- |
| GET       | `/api/games`         | (empty)      | Returns all the products      |
| POST      | `/api/games`         | (empty)      | Adds a new product            |
| GET       | `/api/games/:gameId` | (empty)      | Returns the specified product |
| POST      | `/api/games/:gameId` | (empty)      | Edits the specified product   |
| DELETE    | `/api/games/:gameId` | (empty)      | Deletes the specified product |

##### Exchange routes

| HTTP verb | URL              | Request body | Action                    |
| --------- | ---------------- | ------------ | ------------------------- |
| GET       | `/api/exchanges` | (empty)      | Returns all the exchanges |

##### Report routes

| HTTP verb | URL            | Request body | Action                  |
| --------- | -------------- | ------------ | ----------------------- |
| GET       | `/api/reports` | (empty)      | Returns all the reports |

<hr>

#### Models

##### User Model

```js
{
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  zipCode: Number,
  phoneNumber: Number,
  dateOfBirth: Date,
  listOfProducts: [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
  isModerator: Boolean
}
```

##### Product Model

```js
{
  title: String,
  category: enum ['PS1', 'PS2', 'PS3', 'PS4', 'PS5', 'PSP', 'PSVita'],
  condition: enum ['new', 'used – like new', 'used – good', 'used - fair'],
  description: String,
  isPurchasable: Boolean,
  purchasePrice: Number,
  isReported: Boolean,
  seller: [ { type: Schema.Types.ObjectId, ref: 'User' } ]
}
```

##### Exchange Model

```js
{
  dateOfSwap: Date,
  seller: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
  buyer: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
  product: [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
  status: enum ['Approved', 'Pending', 'Rejected']
}
```

##### Report Model

```js
{
  dateOfReport: Date,
  reportedBy: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
  reportedProduct: [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
  status: enum ['Open', 'Resolved', 'Rejected']
}
```
