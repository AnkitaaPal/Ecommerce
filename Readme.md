### **Project Overview**

A **React** frontend with a **C# .NET backend**, enabling users to browse products, add them to a cart, and place orders.

---

### **Core Features & User Stories**

1. **User Authentication**

   - _User Story:_ As a user, I want to register, log in, and manage my account so that I can securely access my profile.
   - **Validations:** Require strong passwords, prevent duplicate emails, and validate login inputs.

2. **Product Listing & Search**

   - _User Story:_ As a user, I want to browse and search for products so that I can find what I need.
   - **Validations:** Ensure product descriptions aren’t empty, filter search queries properly, and prevent SQL injection.

3. **Shopping Cart**

   - _User Story:_ As a user, I want to add, update, and remove products from my cart so that I can manage my purchases.
   - **Validations:** Prevent negative quantities, ensure stock availability before adding items.

4. **Checkout & Payments**

   - _User Story:_ As a user, I want to enter my payment details and confirm my order so that I can complete my purchase.
   - **Validations:** Validate card details, ensure correct total amount, verify payment success before confirming orders.

5. **Order History & Tracking**
   - _User Story:_ As a user, I want to see my past orders and their status so that I can track my deliveries.
   - **Validations:** Ensure correct order retrieval and prevent unauthorized access to order details.

---

### **UI Design Mockups**

1. **Home Page** – Clean UI with a product grid and a search bar.
2. **Product Page** – Detailed view of a product with an "Add to Cart" button.
3. **Cart Page** – Summary of selected products, quantity management, and checkout option.
4. **Checkout Page** – Secure payment form with address and order summary.
5. **Order History Page** – Past orders listed with status updates.

---

### **Technology Stack**

- **Frontend:** React with Bootstrap/Tailwind for styling
- **Backend:** .NET Core Web API
- **Database:** SQL Server or MongoDB
- **Authentication:** JWT-based authentication
- **Payment Integration:** Stripe or PayPal sandbox

Absolutely! Here’s a well-structured **API Endpoint design** along with a **database schema** for your eCommerce project.

---

## **API Endpoints (RESTful)**

These endpoints follow **best practices** for a React frontend consuming a .NET Core Web API backend.

### **User Authentication**

| Method | Endpoint                   | Description                          |
| ------ | -------------------------- | ------------------------------------ |
| `POST` | `/api/auth/register`       | Register a new user                  |
| `POST` | `/api/auth/login`          | Authenticate user & return JWT token |
| `GET`  | `/api/auth/me`             | Get current user profile (protected) |
| `PUT`  | `/api/auth/update-profile` | Update user details                  |

### **Product Management**

| Method   | Endpoint                         | Description                                    |
| -------- | -------------------------------- | ---------------------------------------------- |
| `GET`    | `/api/products`                  | Get list of all products (supports pagination) |
| `GET`    | `/api/products/{id}`             | Get product details by ID                      |
| `GET`    | `/api/products/search?q={query}` | Search for products                            |
| `POST`   | `/api/products`                  | Add a new product (Admin only)                 |
| `PUT`    | `/api/products/{id}`             | Update product details (Admin only)            |
| `DELETE` | `/api/products/{id}`             | Delete a product (Admin only)                  |

### **Shopping Cart**

| Method   | Endpoint                        | Description                  |
| -------- | ------------------------------- | ---------------------------- |
| `POST`   | `/api/cart/add`                 | Add product to cart          |
| `GET`    | `/api/cart`                     | Get cart items               |
| `PUT`    | `/api/cart/update/{cartItemId}` | Update item quantity in cart |
| `DELETE` | `/api/cart/remove/{cartItemId}` | Remove item from cart        |

### **Checkout & Orders**

| Method | Endpoint               | Description                               |
| ------ | ---------------------- | ----------------------------------------- |
| `POST` | `/api/orders/checkout` | Checkout & create order                   |
| `GET`  | `/api/orders`          | Get user’s past orders                    |
| `GET`  | `/api/orders/{id}`     | Get order details                         |
| `POST` | `/api/orders/payment`  | Process payment (integrate Stripe/PayPal) |

### **Admin Dashboard (Optional)**

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| `GET`  | `/api/admin/orders`  | View all orders       |
| `GET`  | `/api/admin/users`   | Manage users          |
| `POST` | `/api/admin/reports` | Generate sales report |

---

## **Database Schema (SQL)**

Here's a **relational database design** using SQL Server:

### **Users Table**

```sql
CREATE TABLE Users (
    UserId INT PRIMARY KEY IDENTITY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    Role VARCHAR(50) DEFAULT 'User', -- Admin/User
    CreatedAt DATETIME DEFAULT GETDATE()
);
```

### **Products Table**

```sql
CREATE TABLE Products (
    ProductId INT PRIMARY KEY IDENTITY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Price DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL,
    ImageUrl VARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);
```

### **Cart Table**

```sql
CREATE TABLE Cart (
    CartId INT PRIMARY KEY IDENTITY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    ProductId INT FOREIGN KEY REFERENCES Products(ProductId),
    Quantity INT NOT NULL,
    AddedAt DATETIME DEFAULT GETDATE()
);
```

### **Orders Table**

```sql
CREATE TABLE Orders (
    OrderId INT PRIMARY KEY IDENTITY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    TotalAmount DECIMAL(10,2) NOT NULL,
    PaymentStatus VARCHAR(50) DEFAULT 'Pending',
    OrderStatus VARCHAR(50) DEFAULT 'Processing',
    CreatedAt DATETIME DEFAULT GETDATE()
);
```

### **Order Items Table**

```sql
CREATE TABLE OrderItems (
    OrderItemId INT PRIMARY KEY IDENTITY,
    OrderId INT FOREIGN KEY REFERENCES Orders(OrderId),
    ProductId INT FOREIGN KEY REFERENCES Products(ProductId),
    Quantity INT NOT NULL,
    Price DECIMAL(10,2) NOT NULL
);
```

---

## **Extra Considerations**

- **Use Entity Framework** in `.NET Core` to handle ORM (Object-Relational Mapping).
- **Data Validation** in API:
  - Ensure passwords are **hashed** before storing.
  - Prevent negative stock values.
  - Validate email format before inserting users.
- **Security:** Implement **JWT authentication** for protected routes.

## 📄 Pages to Generate:
**Landing Page**
- Hero banner with product highlights
- Featured categories and products
- Testimonials or offers section

**Product Details Page**
- Product images carousel
- Title, description, price
- Add to cart button, reviews section

**Cart Page**
- List of items added
- Quantity selector, price, remove button
- Total cost, proceed to checkout button

**Checkout Page**
- Shipping address form
- Summary of order
- Continue to payment button

**Payment Page**
- Card or UPI payment option
- Order summary
- Place order button

**User Account Page**
- Profile info
- Order history
- Address management, logout button

**Order Confirmation Page**
- Thank you message
- Order summary and delivery details
- Continue shopping button
