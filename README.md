# 🍔 Foodie Place — React Food Ordering App

Foodie Place is a production-style food ordering and restaurant discovery web application inspired by platforms like Swiggy and Zomato.

The project focuses on reusable React components, scalable application architecture, centralized state management, custom hooks, Firebase integration, responsive UI, and a clean data flow.

## 🚀 Project Evolution

Foodie Place was originally developed using **Parcel** as the bundler.

As the project evolved, it was migrated from **Parcel to Vite** to improve the development experience, build performance, and modern tooling.

### Migration

Original Project
↓
React + Parcel
↓
Project Architecture & Feature Development
↓
Parcel → Vite Migration
↓
React + Vite

This Project Uses The Redux

🍔 Foodie Place

A modern, responsive restaurant discovery and food-ordering web application built with React, Redux Toolkit, Firebase Firestore, React Router, and Tailwind CSS.

Foodie Place lets users discover restaurants, search and filter restaurants, open restaurant-specific menus, add food items to a cart, manage quantities, and navigate through a multi-page food platform experience.

Project: Foodie Place
Author: Yogesh Kumar
Frontend: React + Vite
Data Layer: Firebase Firestore
State Management: Redux Toolkit
Styling: Tailwind CSS

📌 Table of Contents

Overview

Features

Tech Stack

Application Architecture

Project Structure

Application Flow

Pages and Routes

State Management

Firebase Integration

Custom Hooks

Reusable Components

Restaurant Data Model

Cart Data Model

Performance and UX

Responsive Design

Environment Variables

Getting Started

Available Scripts

Important Implementation Notes

Current Limitations

Future Improvements

Learning Outcomes

Author

🎯 Overview

Foodie Place is a React-based restaurant discovery and ordering interface inspired by modern food-delivery platforms.

The application follows a component-based architecture where:

React Router handles page navigation.

Firebase Firestore provides restaurant and menu data.

Custom React Hooks isolate data-fetching and reusable business logic.

Redux Toolkit manages the global shopping cart.

React Context provides lightweight user state.

Tailwind CSS provides responsive styling.

Lazy loading and Suspense are used for the Grocery page and application loading states.

Online/offline detection provides network-awareness to the application.

The project is primarily a frontend application with a Firebase backend/data service, rather than a traditional custom Node/Express backend.

✨ Features

🍽️ Restaurant Discovery

Fetches restaurant data from Firebase Firestore.

Displays restaurants in a responsive grid.

Restaurant cards show:

Restaurant name

Cuisine

Rating

Price

Restaurant image

Clicking a restaurant opens its dedicated menu page.

🔎 Restaurant Search

Users can search restaurants by name.

The search logic performs a case-insensitive match:

item.name.toLowerCase().includes(searchText.toLowerCase())

Search state is maintained inside the useRestaurantList custom hook.

⭐ Top-Rated Filter

The home page provides a Top Rated filter.

Restaurants with:

rating >= 4.0

are included in the filtered result.

📋 Restaurant Menu

Each restaurant has its own route:

/Restaurants/:resId

The restaurant ID is obtained using React Router's useParams() hook.

The menu is then fetched from Firestore using the restaurant document ID.

🛒 Shopping Cart

The cart is implemented using Redux Toolkit.

Users can:

Add items.

Increase quantity.

Decrease quantity.

Remove an item when quantity reaches zero.

Clear the entire cart.

View the total cart price.

See the current cart count in the header.

📱 Responsive Navigation

The header provides:

Desktop navigation.

Mobile navigation drawer.

Active route highlighting.

Cart item count.

Online/offline indicator.

Simple login/logout demo state.

🌐 Online/Offline Detection

The application listens to browser network events:

window.addEventListener("online", ...)
window.addEventListener("offline", ...)

When the application detects an offline state, the root application displays an offline screen.

⏳ Loading / Shimmer UI

While restaurant or menu data is loading, the application displays a skeleton-style shimmer card instead of leaving the page blank.

🔄 Scroll To Top

The ScrollToTop component watches the current pathname and automatically scrolls the window to the top whenever the route changes.

📄 Informational Pages

The application includes:

About Us

Services

Contact Us

Grocery

Error page

📦 Lazy Loading

The Grocery page is dynamically imported:

const Grocery = lazy(() => import("./pages/Grocery"));

This allows the Grocery page code to be loaded separately instead of being included in the initial route bundle.

🧰 Tech Stack

Technology

Purpose

React

UI development

Vite

Development server and build tool

React Router DOM

Client-side routing

Redux Toolkit

Global cart state

React Redux

React bindings for Redux

Firebase

Backend/data service

Firebase Firestore

Restaurant and menu data

Tailwind CSS

Responsive styling

ESLint

Code quality/linting

React Hooks

Local state and reusable logic

Main Dependencies

{
"@reduxjs/toolkit": "^2.12.0",
"@tailwindcss/vite": "^4.3.3",
"firebase": "^12.17.1",
"react": "^19.2.8",
"react-dom": "^19.2.8",
"react-redux": "^9.3.0",
"react-router-dom": "^6.30.2",
"tailwindcss": "^4.3.3"
}

🏗️ Application Architecture

The application follows a layered React frontend architecture:

                    ┌─────────────────────┐
                    │      Browser        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      main.jsx       │
                    │ React + Redux +     │
                    │ Router Providers    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       App.jsx       │
                    │ Header / Outlet /   │
                    │ Footer / Context   │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼───────────────┐
                ▼              ▼               ▼
        ┌────────────┐ ┌─────────────┐ ┌─────────────┐
        │   Pages    │ │ Components  │ │   Hooks     │
        └─────┬──────┘ └─────────────┘ └──────┬──────┘
              │                               │
              │                               ▼
              │                       ┌──────────────┐
              │                       │  Firestore   │
              │                       └──────────────┘
              │
              ▼
       ┌────────────────┐
       │ Redux Cart     │
       │ Store / Slice  │
       └────────────────┘

📁 Project Structure

Foodie-Placee/
│
├── public/
│ ├── Favicon.png
│ └── thumbnail.png
│
├── src/
│ │
│ ├── app/
│ │ ├── store.js
│ │ └── slices/
│ │ └── cartSlice.jsx
│ │
│ ├── Assets/
│ │ └── images/
│ │ └── Logo.js
│ │
│ ├── components/
│ │ ├── Accordion.jsx
│ │ ├── CardItem.jsx
│ │ ├── Footer.jsx
│ │ ├── Header.jsx
│ │ ├── HeaderNav.jsx
│ │ ├── OnlineIndicator.jsx
│ │ ├── ScrollToTop.jsx
│ │ └── ShimmerUI.jsx
│ │
│ ├── hooks/
│ │ ├── useAddToCart.jsx
│ │ ├── useOnlineStatus.jsx
│ │ ├── useRestaurantMenu.jsx
│ │ └── useRestaurantlist.jsx
│ │
│ ├── pages/
│ │ ├── AboutUs.jsx
│ │ ├── Body.jsx
│ │ ├── Cart.jsx
│ │ ├── ContactUs.jsx
│ │ ├── Error.jsx
│ │ ├── Grocery.jsx
│ │ ├── RestoMenuPage.jsx
│ │ └── Service.jsx
│ │
│ ├── utils/
│ │ ├── MOCKDATA.jsx
│ │ ├── UserContext.jsx
│ │ ├── fireBase.jsx
│ │ └── withPromotedLabel.jsx
│ │
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ └── router.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

🧭 Pages and Routes

Route

Component

Purpose

/

Body

Restaurant discovery/home page

/AboutUs

AboutUs

About Foodie Place

/Service

Service

Service information

/ContactUs

ContactUs

Contact form

/Restaurants/:resId

RestoMenuPage

Restaurant-specific menu

/Grocery

Grocery

Grocery landing page

/Cart

Cart

Shopping cart

Invalid route

Error

Error UI

The routes are created with:

createBrowserRouter()

and rendered through:

<RouterProvider router={AppRouter} />

🔄 Application Flow

1. Application Bootstrap

main.jsx creates the React root and wraps the application with:

<React.StrictMode>
<Provider store={store}>
<RouterProvider router={AppRouter} />
</Provider>
</React.StrictMode>

This makes:

Redux available globally.

React Router available globally.

Strict Mode enabled during development.

2. Root Layout

App.jsx acts as the main layout.

It contains:

Header
↓
Outlet
↓
Footer

The <Outlet /> is where the currently matched child route is rendered.

App.jsx also provides:

User Context

Online/offline detection

Suspense fallback

Scroll restoration

3. Restaurant List Flow

The home page uses:

useRestaurantList()

The hook:

Fetches the restaurants Firestore collection.

Converts Firestore documents into JavaScript objects.

Stores the complete restaurant list.

Stores a filtered restaurant list.

Provides search functionality.

Provides top-rated filtering.

The flow is:

Firestore
↓
useRestaurantList()
↓
restaurants
↓
filteredRestaurants
↓
Body.jsx
↓
CardItem.jsx

🔥 Firebase Integration

Firebase is initialized in:

src/utils/fireBase.jsx

Firestore is obtained using:

getFirestore(app)

The application currently uses the Firestore collection:

restaurants

Restaurant List Query

getDocs(collection(db, "restaurants"))

Individual Restaurant Query

doc(db, "restaurants", resId)

followed by:

getDoc(docRef)

Therefore, the expected Firestore structure is approximately:

restaurants/
│
├── restaurantId1/
│ ├── name
│ ├── description
│ ├── rating
│ ├── cuisine
│ └── menu
│
├── restaurantId2/
│ ├── name
│ ├── description
│ ├── rating
│ ├── cuisine
│ └── menu

🪝 Custom Hooks

useRestaurantList

Location:

src/hooks/useRestaurantlist.jsx

Responsibilities:

Fetch restaurants.

Store restaurants.

Store filtered restaurants.

Handle search text.

Search restaurants.

Filter top-rated restaurants.

Returns:

{
filteredRestaurants,
searchText,
setSearchText,
handleSearch,
filterTopRated,
restaurants
}

useRestaurantMenu

Location:

src/hooks/useRestaurantMenu.jsx

Responsibilities:

Receive a restaurant ID.

Fetch that restaurant from Firestore.

Extract restaurant information.

Extract menu items.

Returns:

{
menu,
info
}

useAddToCart

Location:

src/hooks/useAddToCart.jsx

This hook abstracts Redux cart dispatching.

It converts incoming restaurant menu item data into the cart structure:

{
id,
name,
description,
price,
imageId
}

and dispatches:

addToCart(...)

useOnlineStatus

Location:

src/hooks/useOnlineStatus.jsx

Uses browser network events to track:

online
offline

It also removes the event listeners during cleanup.

🛒 Redux State Management

Redux is used specifically for global cart state.

Store

src/app/store.js

The store contains:

{
cart: cartReducer
}

Cart Slice

src/app/slices/cartSlice.jsx

Initial state:

{
items: []
}

Cart Actions

addToCart

If an item already exists:

existingItem.quantity += 1

Otherwise:

state.items.push({
...item,
quantity: 1
})

removeFromCart

If quantity is greater than one:

quantity -= 1

Otherwise, the item is removed completely.

clearCart

Empties the cart:

state.items.length = 0

Redux Toolkit uses Immer, so these mutation-style statements are safely converted into immutable state updates internally.

🧠 React Context

The project also contains:

src/utils/UserContext.jsx

App.jsx provides:

<UserContext.Provider value={{ user, setUser }}>

The Header consumes this context to display a simple login/logout experience.

The current authentication behavior is a demo/local state implementation rather than Firebase Authentication.

🧩 Reusable Components

Header

Provides:

Logo

Navigation

Cart count

Online status

Login/logout demo

Responsive mobile menu

HeaderNav

Reusable navigation component used by both desktop and mobile header layouts.

It also displays the cart count.

Footer

Contains:

Branding

Navigation links

Support links

Contact information

Copyright information

CardItem

Reusable restaurant card showing:

Image

Name

Cuisine

Rating

Price

Buy Now button

Accordion

Reusable expandable/collapsible content component.

Used on the About Us page.

ShimmerUI

Provides loading skeleton UI while data is being fetched.

OnlineIndicator

Displays the current network state:

Online
Offline

ScrollToTop

Automatically resets the browser scroll position when the route changes.

🧱 Restaurant Data Model

The Firestore restaurant documents are expected to expose fields similar to:

{
id: "restaurant-id",
name: "Restaurant Name",
description: "Restaurant description",
rating: 4.5,
cuisine: "Indian, Chinese",
menu: [
{
id: "item-1",
name: "Food Item",
description: "Food description",
price: 299,
imageId: "image-id"
}
]
}

The exact document structure is determined by the Firestore data because the frontend reads the fields dynamically.

🛍️ Cart Data Model

Items stored inside Redux are normalized by useAddToCart.

Example:

{
id: "item-1",
name: "Burger",
description: "Cheesy burger",
price: 199,
imageId: "image-id",
quantity: 2
}

The cart total is calculated using:

cartItems.reduce(
(sum, item) => sum + item.price \* item.quantity,
0
)

⚡ Performance and UX

The project includes several frontend performance and UX techniques.

Lazy Loading

The Grocery route is lazy-loaded:

const Grocery = lazy(() => import("./pages/Grocery"));

Suspense

The application provides a fallback:

<Suspense fallback={<ShimmerCard />}>

Shimmer Loading

Restaurant and menu loading states use skeleton cards instead of an empty screen.

Responsive Rendering

Tailwind responsive breakpoints are used extensively:

sm:
md:
lg:
xl:

Route-Based Rendering

React Router renders only the component associated with the current route.

📱 Responsive Design

The UI is designed for:

Mobile

Tablet

Desktop

Large desktop screens

The Header has separate desktop and mobile navigation behavior.

Restaurant cards use responsive grid columns:

Mobile → 1 column
Small → 2 columns
Medium → 3 columns
Large → 4 columns
Extra Large → 5 columns

🔐 Environment Variables

Firebase API configuration uses Vite environment variables.

The project expects:

VITE_FIREBASE_API_KEY=your_firebase_api_key

The Firebase project ID and other configuration values are currently defined in fireBase.jsx.

Create a local .env file:

VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY

Never commit private credentials or secrets to a public repository.

🚀 Getting Started

Prerequisites

Make sure you have installed:

Node.js

npm

Git

1. Clone the Repository

git clone https://github.com/Yogeshkumar4451/Foodie-Placee.git

Then:

cd Foodie-Placee

2. Install Dependencies

npm install

3. Configure Firebase

Create:

.env

and add:

VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY

Make sure the Firebase project and Firestore database are configured correctly.

4. Start Development Server

npm run dev

Vite will provide the local development URL in the terminal.

5. Create Production Build

npm run build

6. Preview Production Build

npm run preview

7. Run ESLint

npm run lint

📜 Available Scripts

Command

Purpose

npm run dev

Start Vite development server

npm start

Start Vite development server

npm run build

Build production bundle

npm run preview

Preview production build

npm run lint

Run ESLint

npm run clean

Remove dist on Windows

npm run deploy

Clean, build and run Firebase deployment

⚠️ Important Implementation Notes

This README documents the current repository implementation, not an imagined production backend.

Several parts of the UI are currently demonstration/placeholder functionality.

Authentication

The Header's Login button currently changes React Context state:

setUser({ name: "Yogesh Sahu" })

There is no complete user authentication flow implemented in the inspected code.

Contact Form

The Contact Us form currently prevents the default browser submission but does not send the message to a backend or Firestore collection.

Grocery

The Grocery page is currently a static landing page. The "Start Shopping" button does not currently implement a grocery shopping workflow.

Restaurant Card Buy Now

The CardItem Buy Now button is currently visual UI and does not itself dispatch a cart action. Restaurant navigation is handled by the surrounding Link.

Payment

There is currently no real payment gateway or checkout/payment processing implementation in the inspected frontend.

Orders

There is no complete order creation, order history, delivery tracking, or order management workflow currently implemented.

🧹 Additional Project Files

MOCKDATA.jsx

The repository contains a large restaurant dataset in:

src/utils/MOCKDATA.jsx

This data resembles restaurant information sourced from a Swiggy-style API response.

The current main restaurant-list implementation uses Firestore, so this mock dataset is not the primary data source for the current flow.

withPromotedLabel.jsx

This higher-order component adds a promotion/discount label when:

aggregatedDiscountInfoV3

exists.

Conceptually:

Restaurant Data
↓
withPromotedLabel()
↓
Discount Label +
Restaurant Card

It is present as reusable infrastructure, although the current main Body rendering path uses CardItem directly.

⚠️ Current Limitations

The current implementation can be extended significantly.

Backend / Business Logic

No custom Node.js/Express backend.

No order API.

No payment API.

No delivery tracking backend.

No restaurant owner dashboard.

Authentication

No Firebase Auth workflow.

No registration.

No persistent user sessions.

No protected routes.

Cart

Cart is stored only in Redux memory.

Refreshing the browser resets the Redux state unless persistence is added.

Search

Search currently operates on the restaurant name only.

Filtering

Only a Top Rated filter is implemented.

Contact

Contact form submission is not connected to a backend.

Grocery

Grocery is currently a presentation page rather than a functional grocery marketplace.

Error Handling

Firestore errors are logged to the console. The UI could be improved with dedicated error states.

🔮 Future Improvements

Possible next development steps include:

🔐 Authentication

Integrate Firebase Authentication:

Email/password login

Google login

Persistent sessions

Protected routes

User profile

🛒 Persistent Cart

Use:

Redux Persist

LocalStorage

Firestore user cart

so cart data survives page refreshes.

💳 Checkout

Add:

Delivery address

Order summary

Taxes

Delivery fee

Coupon system

Payment gateway

📦 Orders

Create an order system with:

Cart
↓
Checkout
↓
Order Creation
↓
Order Confirmation
↓
Order History

🔎 Advanced Search

Support:

Restaurant name

Cuisine

Dish name

Price

Rating

Vegetarian filter

📍 Location

Add:

Geolocation

Nearby restaurants

Distance calculation

Location-based restaurant filtering

🏪 Restaurant Dashboard

Allow restaurant owners to:

Add restaurants

Add menu items

Update prices

Manage availability

Manage orders

📊 Admin Dashboard

Add:

User management

Restaurant management

Order analytics

Revenue analytics

Platform statistics

🧪 Testing

Add:

Unit tests

Component tests

Redux tests

Hook tests

End-to-end tests

🎓 Learning Outcomes

This project demonstrates practical understanding of several important frontend concepts:

React

Functional components

Props

State

Context API

Hooks

useEffect

useState

useRef

Suspense

Lazy loading

React Router

Nested routes

Dynamic routes

Outlet

NavLink

Link

useParams

Route error handling

Redux Toolkit

Store configuration

Slices

Reducers

Actions

useSelector

useDispatch

Global state management

Immer-based immutable updates

Firebase

Firebase initialization

Firestore collections

Firestore documents

getDocs

getDoc

Custom Hooks

Business/data logic has been separated from UI components using custom hooks.

Responsive UI

Tailwind CSS responsive utilities are used throughout the application.

Frontend Architecture

The project demonstrates separation between:

Pages
Components
Hooks
State
Utilities
Data Layer

👨‍💻 Author

Yogesh Kumar

Frontend Developer focused on React and modern JavaScript development.

Project

Foodie Place

A React-based restaurant discovery and food-ordering application built to practice and demonstrate modern frontend development concepts.

⭐ Final Architecture Summary

                    FOODIE PLACE
                         │
                         ▼
                  React + Vite
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
       Router         Components       Hooks
          │              │              │
          │              │              ▼
          │              │          Firebase
          │              │          Firestore
          │              │              │
          │              └──────────────┘
          │
          ▼
        Pages
          │
          ▼
     Restaurant Menu
          │
          ▼
     Redux Toolkit
          │
          ▼
         Cart

Foodie Place combines React component architecture, client-side routing, Firebase Firestore data fetching, custom hooks, Redux Toolkit state management, responsive Tailwind styling, lazy loading, and practical UX patterns into a single frontend application
