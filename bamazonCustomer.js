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
// Confirming valid Item ID's
function validateInput(value) {
	let integer = Number.isInteger(parseFloat(value));
	let sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Item IDs are in # or ## format';
	}
}
// Open the store
function openStore() {
	queryStr = 'SELECT * FROM products';
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('.,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,.\n');
		console.log('BAM-a-zon: ');
        console.table(data);
		
	  	console.log(".,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,..,;:~^`^~:;,.\n");

	  	//Prompt the user for item/quantity they would like to purchase
	  	// promptUserPurchase();
	})
}

// // Beginning of User Interaction
// function start() {
// 	inquirer.prompt([
// 		{
// 			type: 'input',
// 			name: 'item_id',
// 			message: 'Please enter the 1 or 2 digit ID of the Item you wish to purchase.',
//             validate: validateInput,
// 			filter: Number
// 		},
// 		{
// 			type: 'input',
// 			name: 'quantity',
// 			message: 'How many of this item do you wish to purchase?',
// 			validate: validateInput,
// 			filter: Number
//         }


// Ain't no calla back y'all
function runBamazon() {
	openStore();
}
runBamazon();