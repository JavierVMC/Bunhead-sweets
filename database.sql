DROP DATABASE bunhead_sweets_db;

CREATE DATABASE bunhead_sweets_db;

use bunhead_sweets_db;

CREATE TABLE `Product_categories` (
  `id` int AUTO_INCREMENT not null,
  `name` varchar(50) not null,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Products` (
  `id` int AUTO_INCREMENT not null,
  `name` varchar(50) not null,
  `category_id` int not null,
  `price` float not null,
  `description` varchar(300) not null,
  `image` varchar(100) not null,
  `is_available` boolean not null,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `Product_categories`(`id`)
);

CREATE TABLE `Carts` (
  `id` int AUTO_INCREMENT not null,
  `user_email` varchar(50) not null,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Users` (
  `user_email` varchar(50) not null,
  `first_name` varchar(50) not null,
  `last_name` varchar(50) not null,
  `phone` varchar(10) not null,
  `password` varchar(100) not null,
  `country` varchar(50) not null,
  `city` varchar(50) not null,
  `street` varchar(50) not null,
  `image` varchar(500),
  `is_admin` boolean not null,
  PRIMARY KEY (`user_email`)
);

CREATE TABLE `Payment_details` (
  `card_number` varchar(20) not null,
  `name` varchar(50) not null,
  `expiry` date not null,
  `network` varchar(50) not null,
  PRIMARY KEY (`card_number`)
);

CREATE TABLE `User_payments` (
  `id` int AUTO_INCREMENT not null,
  `user_email` varchar(50) not null,
  `name` varchar(50) not null,
  `expiry` date not null,
  `network` varchar(50) not null,
  `card_number` varchar(20) not null,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_email`) REFERENCES `Users`(`user_email`)
);

CREATE TABLE `Orders` (
  `id` int AUTO_INCREMENT not null,
  `user_email` varchar(50) not null,
  `country` varchar(50) not null,
  `city` varchar(50) not null,
  `street` varchar(50) not null,
  `date` date not null,
  `total` float not null,
  `card_number` varchar(20) not null,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_email`) REFERENCES `Users`(`user_email`),
  FOREIGN KEY (`card_number`) REFERENCES `Payment_details`(`card_number`)
);

CREATE TABLE `Order_items` (
  `id` int AUTO_INCREMENT not null,
  `product_id` int not null,
  `order_id` int not null,
  `quantity` int not null,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`),
  FOREIGN KEY (`order_id`) REFERENCES `Orders`(`id`)
);

CREATE TABLE `Cart_items` (
  `id` int AUTO_INCREMENT not null,
  `user_email` varchar(50) not null,
  `product_id` int not null,
  `cart_id` int not null,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`product_id`) REFERENCES `Products`(`id`),
  FOREIGN KEY (`cart_id`) REFERENCES `Carts`(`id`)
);




