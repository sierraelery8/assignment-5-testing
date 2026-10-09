# ComponentCorner: Marie Maison Interiors

A React-based storefront application built with reusable components, props, React Router navigation, and cart state management.

This project expands the original ComponentCorner storefront concept into a luxury interior design collection. The application demonstrates component-based architecture, page routing, dynamic product details, reusable product cards, persistent shopping cart functionality, and automated testing.

## Features

- Responsive header navigation using React Router
- Home page with a customizable hero banner
- Products page displaying reusable product cards
- Dynamic product detail pages using URL parameters
- Add-to-cart functionality
- Shopping cart page with item removal and total calculation
- Cart data persistence using localStorage
- Reusable components with props for dynamic content
- Footer with store information and contact details
- Automated testing for components, pages, and cart functionality
- Production build support using Vite

## Featured Products

- Designer Pendant Light
- Brass Floor Mirror
- Linen Sofa Throw

## Technologies Used

- React
- React Router DOM
- Vite
- JavaScript
- CSS
- LocalStorage
- Vitest
- React Testing Library
- Testing Library User Event
- Testing Library Jest DOM
- jsdom

## Project Structure

### Components

Reusable UI components used throughout the application.

### Header.jsx

Displays the store branding, navigation links, and shopping cart count.

### Hero.jsx

Displays the promotional banner using customizable props.

### ProductCard.jsx

Reusable product display component that accepts:

- Product name
- Price
- Image
- Description

Includes links to individual product detail pages and add-to-cart functionality.

### CartItem.jsx

Displays individual cart items, their prices, and functionality for removing products from the cart.

### Footer.jsx

Displays store information, email contact, and location details.

---

## Pages

### HomePage.jsx

Displays the main landing page content and hero section.

### ProductsPage.jsx

Displays all available products using reusable ProductCard components.

### ProductDetailsPage.jsx

Displays individual product information using a dynamic route:

`/product/:id`

### CartPage.jsx

Displays items added to the shopping cart, allows users to remove items, and calculates the cart total.

---

## Routing

The application uses React Router DOM for navigation between pages.

| Route | Description |
|---|---|
| `/` | Home page |
| `/products` | Product collection |
| `/product/:id` | Individual product details |
| `/cart` | Shopping cart |

## Shopping Cart Functionality

The application uses React state to manage shopping cart contents.

- Users can add products to their cart.
- Users can remove products from their cart.
- The header displays the current cart item count.
- Cart contents are saved in localStorage.
- Saved cart data is loaded when the application starts.

## Automated Testing

The project uses Vitest and React Testing Library to verify component rendering, user interactions, and application behavior.

The test suite covers:

- Home page rendering and hero content
- Product card rendering and functionality
- Cart item rendering and removal
- Application rendering
- Loading saved cart data from localStorage
- Saving cart changes to localStorage

### Running Tests

Run the test suite with:

```bash
npm test
````

The current test suite has successfully passed:

* 4 test files
* 12 tests

Vitest runs in watch mode by default. Press `q` in the Vitest terminal to quit watch mode, or press `Ctrl + C` to stop it.

## Running the Application Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/sierraelery8/assignment-5-testing.git
   ```

2. Navigate to the application directory:

   ```bash
   cd assignment-5-testing/componentcorner-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Production Build

To create an optimized production build, run:

```bash
npm run build
```

Vite generates the production files in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## Deployment

The application can be deployed using Vercel by connecting the GitHub repository.

Recommended Vercel build settings:

* Framework Preset: Vite
* Build Command: `npm run build`
* Output Directory: `dist`

After deployment, visit the generated URL and verify that navigation, product details, and shopping cart functionality work correctly.
