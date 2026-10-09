# ComponentCorner: Marie Maison Interiors

A React-based storefront application built with reusable components, props, React Router navigation, and cart state management.

This project expands the original ComponentCorner storefront concept into a luxury interior design collection. The application demonstrates component-based architecture, page routing, dynamic product details, reusable product cards, and persistent shopping cart functionality.

## Features

- Responsive header navigation using React Router
- Home page with customizable hero banner
- Products page displaying reusable product cards
- Dynamic product details pages using URL parameters
- Add-to-cart functionality
- Shopping cart page with item removal and total calculation
- Cart data persistence using localStorage
- Reusable components with props for dynamic content
- Footer with store information and contact details

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

## Project Structure

### Components

Reusable UI components used throughout the application.

### Header.jsx

Displays the store branding, navigation links, and shopping cart count.

### Hero.jsx

Displays the promotional banner using customizable props.

### ProductCard.jsx

Reusable product display component that accepts:

- product name
- price
- image
- description

Includes links to individual product detail pages and add-to-cart functionality.

### CartItem.jsx

Displays individual cart items and provides functionality for removing products from the cart.

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
