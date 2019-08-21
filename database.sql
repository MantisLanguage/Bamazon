-- DROP DATABASE IF EXISTS bamazon; <=reset key
CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products(
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL (10,2) NOT NULL, 
stock_quantity INTEGER(11) NOT NULL,
PRIMARY KEY (item_id)
-- SELECT	FORMAT(price, '###,###,###') AS 'FormattedNumber'
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Giordanos Pizza', 'Food', '29.99', '33'),
('Retro Jordan I', 'Sports', '99.99', '999'),
('Nintendo 64', 'Gaming', '149.99', '64'),
('Yoshi Costume Adult', 'Gaming', '36.00', '41'),
('AVP Official Ball', 'Sports', '49.99', '12000'),
('Macbook Pro 15 inch', 'Technology', '1499.99', '100000'),
('Holographic Shadowless Charizard First Edition BGS10', 'Collectors', '55000.00', '1'),
('Arnold Schwarzenegger Clone', 'Collectors', '9999999.99', '2'),
('Ben and Jerrys Mix and Match 6 pack', 'Food', '23.00', '1000'),
('Aqua Teen Hunger Force Box Set', 'Videos', '11.99', '100'),
('Kill Bill I & II', 'Videos', '79.99', '323');