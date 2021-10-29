# ecommerce-backend
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  This project implements an ecommerce backend using Express.js. The app relates products, tags, and categories together in a MySQL database. CRUD operations can be performed on the /api/products, /api/categories, and /api/tags routes.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contribution](#contribution)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  Create a .env file with properties `DB_USER`, `DB_PW`, and `DB_NAME` for the MySQL database login information. If needed, seed the MySQL database by running `npm run seed` before running `npm start` to start the application.

  ## Usage

  When performing CRUD operations, the format should adhere to the model definition:
  * `Category`

    * `id`

      * Integer.
    
      * Doesn't allow null values.
    
      * Set as primary key.
    
      * Uses auto increment.

    * `category_name`
    
      * String.
    
      * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

  ## Contribution

  Email me!

  ## Questions

  [My GitHub](https://github.com/jwhector)

  For further inquiry, contact me at: jared.hector@gmail.com
  
  ## License

  [MIT License](https://choosealicense.com/licenses/mit/)