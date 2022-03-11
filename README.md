# SwapStation - Server Side

<hr>

<!-- ABOUT THE PROJECT -->

### About

SwapStation is an e-commerce system for gamers who want to avoid the unnecessary expenses for the same game experience (if they don’t want to buy games on retail prices).

Gamers (members) can create accounts and upload their original discs, browse other gamers’ listings and send trade offers each other.

Besides that, they also can buy and sell products on the portal, but the main goal is the swap (pay for the shipping only).

<hr>

<!--USER STORIES-->

### User Stories

#### User Personas

- <b>Leslie:</b> Leslie has a collection of console video games. He wants to refresh his collection with new titles and also gets rid of some games. Leslie is an authenticated <b>member</b>.
- <b>David:</b> David also has some games, and he wants to swap them to new ones. David is an authenticated <b>member</b>.
- <b>Carla:</b> Carla has a son who get bored by his games. Carla wants to share her son's game collection to replace the existing titles with new ones. Carla is also a <b>member</b>. She needs to register to create products.
- <b>Peter:</b> Peter is not registered, so he can see the available products only. Peter is a <b>visitor</b> who is able to visit the website and see the products.

#### User Stories

- As a visitor, I can browse the available games (products) and create user profile.
- As a member, I can log into the system.
- As a member, I can create, edit and delete my products.
- As a member, I can send trade offers to other users.
- As a member, I can report other users’ listings.
- As a super user, I can modify anything on database level.

<hr>

<!--TECHNOLOGIES USED-->

### Technologies used

- [Node.js](https://nodejs.org/)
- [JavaScript](https://www.javascript.com/)
- [npm](https://www.npmjs.com/")

<hr>

<!--MODELS-->

### Models

#### User Model

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
  listOfProducts: [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
  isModerator: Boolean
}
```

#### Product Model

```js
{
  title: String,
  imageUrl: String,
  category: { type: String, enum: ["PS5", "PS4", "PS3", "PS2", "PS1", "PSVita", "PSP"] },
  condition: { type: String, enum: ["new", "usednew", "usedgood", "usedfair"] },
  description: String,
  purchasable: Boolean,
  price: Number,
  reported: Boolean,
  seller: { type: Schema.Types.ObjectId, ref: "User" }
}
```

#### Exchange Model

```js
{
  dateOfSwap: Date,
  seller: { type: Schema.Types.ObjectId, ref: "User" },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
  sellerItem: { type: Schema.Types.ObjectId, ref: "Product" },
  buyerItem: { type: Schema.Types.ObjectId, ref: "Product" },
  comment: String,
  status: { type: String, enum: ["Approved", "Pending", "Rejected"] }
}
```

#### Report Model

```js
{
  dateOfReport: Date,
  reportedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  reportedProduct: { type: Schema.Types.ObjectId, ref: 'Product' },
  status: { type: String, enum: ["Open", "Resolved", "Rejected"] }
}
```

<hr>

<!--SERVER ROUTES-->

### Server routes

| HTTP verb | URL                                      | Request body | Action                                 |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| POST      | `/api/report/:id`                        | JSON         | Posting report                         |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| GET       | `/api/products`                          | (empty)      | Get all products                       |
| POST      | `/api/products`                          | JSON         | Add a new product                      |
| GET       | `/api/products/:productId`               | (empty)      | Get the selected product               |
| PUT       | `/api/products/:productId/edit`          | JSON         | Edit product details                   |
| PATCH     | `/api/products/:productId/exchange`      | (empty)      | Add new trade offer                    |
| DELETE    | `/api/:toolId/delete`                    | (empty)      | Delete the selected product by ID      |
| --------- | ---------------------------------------- | ------------ | -------------------------------------- |
| GET       | `/api/signup`                            | (empty)      | Get signup form                        |
| POST      | `/api/signup`                            | JSON         | Post signup form (registration)        |
| GET       | `/api/login`                             | (empty)      | Get login form                         |

<hr>

<!--Project Link-->

### Link to project

<a href="https://swapstation.netlify.app/">SwapStation</a>

<hr>

<!--Future Work-->

### Future Work

- Bugfixes in the Swap Offer system
- Better way to manage reported products
- Product search
- Messaging system to the users
- Email notification system
- Watchlist / Wishlist

<hr>

<!--RESOURCES-->

### Resources

- <a href="https://www.ironhack.com/">Ironhack Student Portal</a>
- <a href="https://reactjs.org/">ReactJS Documentation</a>
- <a href="https://www.npmjs.com/">npm</a>
- <a href="https://stackoverflow.com/">Stack Overflow</a>

<hr>

<!--TEAM MEMBERS-->

### Team members

- László Tarnai

<hr>

<!-- ACKNOWLEDGMENTS -->

### Acknowledgments

- [Ironhack](https://www.ironhack.com/en)
