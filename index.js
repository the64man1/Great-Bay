const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port, if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'Bootcamp2021',
    database: 'greatbay',
  });
  
  const readUsers = () => {
      console.log('Selecting all users...\n');
      connection.query('SELECT * FROM users', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
      });
    };
  
    const readItems = () => {
      console.log('Selecting all items...\n');
      connection.query('SELECT * FROM items', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
      });
    };
  
    const readBids = () => {
      console.log('Selecting all bids...\n');
      connection.query('SELECT * FROM bids', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
      });
    };
  
    
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    readUsers();
    readItems();
    readBids();
    connection.end();
  });
  