# Vue Router Exercises for Ecommerce App

This module includes practical exercises focused on Vue Router features within the context of an e-commerce application. You’ll apply dynamic routes, nested routes, route guards, and lazy loading to simulate real-world functionality.

---

## 🛍️ Project Setup

Before starting:

1. Make sure you have the project set up.
2. Install Vue Router if you haven’t already:
   ```bash
   npm install vue-router
   ```
3. Validate `router/index.js` file to initialize the router.
4. Add the `router` to the `app` in `main.ts`.
5. Add the `app.use(router)` to the `main.ts` file.

**Note:** You can use this credentials for Login  user: admin password: admin

---

## 📦 Exercise 1: Dynamic Product Pages

**Objective:** Implement dynamic routing to display individual product details.

### Steps:

1. Define a route `/product/:id`.
2. Create a `ProductDetail.vue` component.
3. Use the `id` from `route.params` to fetch or display product information.

```js
{
  path: '/product/:id',
  component: ProductDetail
}
```

```vue
<template>
  <div>
    <h2>Product ID: {{ productId }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const productId = route.params.id
</script>
```

✅ **Bonus:** Watch the `id` param to fetch updated info when navigating between products.

---

## 🧩 Exercise 2: Nested Routes for Account Section

**Objective:** Add nested routes to handle user account sections like orders and addresses.

### Steps:

1. Define a parent route `/account` with child routes:
   - `/account/profile`
   - `/account/addresses`

2. Create a `UserAccount.vue` parent and the respective child views.

3. Use `<router-view>` in the `UserAccount.vue` layout.

```js
{
  path: '/account',
  component: UserAccount,
  children: [
    { path: 'profile', component: UserProfile },
    { path: 'addresses', component: SavedAddresses }
  ]
}
```

✅ **Bonus:** Add a sidebar inside `UserAccount.vue` to navigate to each section.

---

## 🔒 Exercise 3: Route Guard for Checkout

**Objective:** Protect the `/` route from unauthorized access.

### Steps:

1. Create a mock `isAuthenticated` boolean or function.
2. Add a `beforeEnter` guard to the `/` route.
3. Redirect to `/login` if not authenticated.

```javascript
function isAuthenticated() {
    // For demonstration, replace with actual authentication logic
    return localStorage.getItem('isAuthenticated') === 'true';
}
```

```js
{
  path: '/',
  component: Home,
  beforeEnter: (to, from, next) => {
     if (isAuthenticated()) {
          next(); // Allow access to the route
      } else {
          next({ name: 'Home' }); // Redirect to the login page
      }
  }
}
```

✅ **Bonus:** Implement a logout feature to allow users to log out and clear their authentication state. Additionally, ensure that the authentication state persists even after a page reload by using localStorage, sessionStorage, or a similar mechanism.

---

## 🛡️ Exercise 4: Global Guard for Admin Routes

**Objective:** Use global guards to protect admin routes like `/admin` and `/admin/products`.

### Steps:

1. Create a new `/admin` route.
2. Create a global `beforeEach` guard in your router setup.
3. Check if the user is an admin when accessing admin routes.

```js
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/admin') && !isAdminUser()) {
    next('/not-authorized')
  } else {
    next()
  }
})
```

✅ **Bonus:** Use route `meta` fields like `meta.requiresAdmin = true`.

---

## 🧊 Exercise 5: Lazy Load Product Categories

**Objective:** Use lazy loading for routes like `/product/:id`.

### Steps:

1. Create a route for product categories:
   ```js
   {
     path: '/product/:id',
     component: () => import('../views/Product.vue') // lazy-loaded
   }
   ```

2. Test navigation to see if the component is loaded only on demand.

✅ **Bonus:** Show a loader/spinner while the category component is loading.

---

## ✅ Summary of Exercises

Build out an e-commerce site with:

- `/product/:id` for product details (dynamic route)
- `/account` with  `profile` and `addresses` (nested routes)
- Route guard for `/` (user must be logged in)
- Global guard for `/admin` (admin-only access)
- Lazy-loaded routes for `/product/:id`

---

Happy coding and keep your routes clean! 🚀