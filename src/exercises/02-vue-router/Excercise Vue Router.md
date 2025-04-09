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


## 📦 Exercise 6: Dinamyc Routing (addRoute)

**Objective:** Create a Vue application with Vue Router and try to dynamically add a /profile route that loads a Profile.vue component.

### Steps:

1. Define the router with a static route for /dashboard.
2. Use router.addRoute() to add the /profile route at runtime.
3. Create the component for Profile.
4. Test navigation to /profile

```js
{
  path: "/dashboard",
  component: Dashboard,
}
```

```vue
<template>
  <div>
    Dashboard
  </div>
</template>

<script setup>
  import router from '../router'
  import Profile from '../views/Profile.vue'

  router.addRoute({ path: '/profile', name: 'profile', component: Profile });
  console.log('Route /profile added dynamically');

  setTimeout(() => {
    router.push('/profile');
  }, 2000);
</script>
```

```vue
<template>
  <div>
    Profile
  </div>
</template>
```

---

## 🧩 Exercise 7: Dinamyc Routing (removeRoute)

**Objective:** Use the Dashboard component to test a new dynamic route and then remove it.

### Steps:

1. Create the component for Admin.
2. Dynamically add a /admin route in the Dashboard component.
3. Use router.hasRoute('admin') to check if it exists.
4. If the route exists, remove it with router.removeRoute('admin').
5. Use router.push() to return to Dashboard.

```vue
<template>
  <div>
    Admin
  </div>
</template>
```

```vue
<template>
  <div>
    Dashboard
  </div>
</template>

<script setup>
  import router from '../router'
  import Admin from '../views/Admin.vue'

  router.addRoute({ path: '/admin', name: 'admin', component: Admin });
  console.log('Route /admin added dynamically');

  setTimeout(() => {
    router.push('/admin');

    if (router.hasRoute('admin')) {
      console.log('Removing route /admin...');
      router.removeRoute('admin');      
    }
  }, 2000);
</script>
```

---

## 🔒 Exercise 8: Route Meta Fields (meta.requiresAuth)

**Objective:** Use meta.requiresAuth to restrict access.

### Steps:

1. Create the component for Contacts.
2. Define a /contacts route with { meta: { requiresAuth: true } }, in the Dashboard component.
3. Add a navigation guard (beforeEach) in the router that redirects to /login if the user is not authenticated.

```vue
<template>
  <div>
    Contacts
  </div>
</template>
```

```vue
<template>
  <div>
    Dashboard
  </div>
</template>

<script setup>
  import router from '../router'
  import Contacts from '../views/Contacts.vue'

  router.addRoute({ path: '/contacts', name: 'contacts', component: Contacts, meta: { requiresAuth: true } });
  console.log('Route /contacts added dynamically');

  setTimeout(() => {
    router.push('/contacts');
  }, 2000);
</script>
```

```js
const routes = [
 ...
]

router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Simula autenticación

  if (to.meta.requiresAuth && !isAuthenticated) {
    console.log('Access restricted, redirecting to Login');
    next({ name: 'Login' })
  } else {
    next();
  }
});
```

---

## 🛡️ Exercise 9: Route Meta Fields (meta.title)

**Objective:** Update the page title using meta.title

### Steps:

1. Create the component for About.
2. Define a /about route with a meta.title field, in the Dashboard component.
3. Use afterEach to update the tab title on navigation.

```vue
<template>
  <div>
    About
  </div>
</template>
```

```vue
<template>
  <div>
    Dashboard
  </div>
</template>

<script setup>
  import router from '../router'
  import About from '../views/About.vue'

  router.addRoute({ path: '/about', component: About, meta: { title: 'About Accenture' } });
  console.log('Route /about added dynamically');

  setTimeout(() => {
    router.push('/about');

    router.afterEach((to) => {
      document.title = to.meta.title || 'About Us';
    });
  }, 2000);
</script>
```

✅ **Quiz:** What value will be used if a route doesn't have meta.title?

---

## 🧊 Exercise 10: Typed Routes

**Objective:** Define and use typed routes.

### Steps:

1. Create the component for User. 
2. Add the User route in the index.ts file
3. Use router.push() from any component.

```vue
<template>
  <div>
    User ID: {{ $route.params.id }}
  </div>
</template>
```

```js
{
  path: '/user/:id',
  name: 'User',
  component: User
},
```

```vue
<script setup>
  router.push({ path: '/user/3' });
  // router.push({ name: 'User', params: { id: '123' } });
</script>
```

---

## 🧊 Exercise 11: Type Routes (useRoute)

**Objective:** Access route parameters with types

### Steps:

1. Use the User component.
2. Apply useRoute() to get the id parameter in User.vue.
3. Navigate to the URL /user/123.

```vue
<template>
  <div>User ID: {{ userId }}</div>
</template>

<script setup>
  import { useRoute } from 'vue-router';

  const route = useRoute()
  const userId = route.params.id
</script>
```

```js
{
  path: '/user/:id',
  name: 'User',
  component: User
},
```

---

## ✅ Summary of Exercises

Build out an e-commerce site with:

- `/product/:id` for product details (dynamic route)
- `/account` with  `profile` and `addresses` (nested routes)
- Route guard for `/` (user must be logged in)
- Global guard for `/admin` (admin-only access)
- Lazy-loaded routes for `/product/:id`

- Add and remove dynamic routes using `addRoute()` and `removeRoute()` (Dynamic Routing)
- `/contacts` route protected by a navigation guard using `meta.requiresAuth` (Route Meta Fields)
- `/about` route added dynamically and updates the tab title using `meta.title` (Route Meta Fields)
- `/user/:id` demonstrating the use of typed route parameters using `router.push()` with `name` and `params`
- User.vue component using `useRoute()` to access typed route parameters

---

Happy coding and keep your routes clean! 🚀