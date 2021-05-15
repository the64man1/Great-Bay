const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'greatbay',
  });


// takes table from DB and reads it
function readDB (table) {
    console.log('Selecting all Items...\n');
    connection.query(`SELECT * FROM ${table}`, (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  };
  


  const readItems = () => {
    console.log('Selecting all Items...\n');
    connection.query('SELECT * FROM Bids', (err, res) => {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  };
  


const returnAuctionItems = async() => 
  {
      return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM Items', (err, res) => 
      {
        if(err) throw err;
        itemMap = res.map(item => item["name"])
        resolve(itemMap);
        connection.end();
      });
    });
  }



// item parameter is the object returned from the inquirer prompt
const postItem = (item)=> 
{
    connection.query("INSERT INTO Items SET ?", 
    {
        name: item.name,
        bid: item.bid || 0,
        description: item.description || ' '
    },

    (err, res)=> {
        if(err) {
            console.log(err.message);
            connection.end();
            return;
        };
        console.log(`${res.affectedRows} item(s) inserted`);
        res.json();
    });
}




module.exports = {readItems, readDB, returnAuctionItems, postItem, connection}

// import statement:

// const {readItems, readDB, returnAuctionItems, postItem, connection} = require('./queries)