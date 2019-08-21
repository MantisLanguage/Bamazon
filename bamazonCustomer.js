// Requires first
const inquirer = require('inquirer');
const mysql = require('mysql');
// connect to host
let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'Bamazon'
});
// Open the store
function openStore() {
    let queryStr = 'SELECT * FROM products';
    connection.query(queryStr, function (err, data) {
        if (err) throw err;

        console.log('\n.,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,.\n');
        console.log('BAM-a-zon: ');
        console.table(data);

        console.log(".,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,.\n");
    })
}
// Confirming valid Item ID prior to moving on
function validateInput(value) {
    let integer = Number.isInteger(parseFloat(value));
    let sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Item IDs are in # or ## format';
    }
}
// // Beginning of User Interaction
function start() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter the 1 or 2 digit ID of the Item you wish to purchase.',
            validate: validateInput,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many of this item do you wish to purchase?',
            validate: validateInput,
            filter: Number
        }]).then(function (input) {

            let item = input.item_id;
            let quantity = input.quantity;


            let queryStr = 'SELECT * FROM products WHERE ?';

            connection.query(queryStr, { item_id: item }, function (err, data) {
                if (err) throw err;


                if (data.length === 0) {
                    console.log('Please pick an item ID that exists within the Bamazon universe.');
                    connection.end();

                } else {
                    var productData = data[0];


                    if (quantity <= productData.stock_quantity) {
                        console.log('Wise choice my friend, BAM!');


                        var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

                        connection.query(updateQueryStr, function (err, data) {
                            if (err) throw err;

                            console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
                            console.log('Thank you for your patronage, you will not regret returning.');
                            console.log("\n.,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,.\n");
                            connection.end();
                        })
                    } else {
                        console.log('Sorry, that quantity does not exist within the Bamazon universe.');
                        console.log('Please be realistic with your order.');
                        console.log("\n.,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,.\n");
                        connection.end();
                    }
                }
            })
        })
}
// Ain't no calla back y'all
function runBamazon() {
    openStore();
    start();
}
runBamazon();