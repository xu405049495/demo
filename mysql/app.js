const mysql = require('mysql2/promise');

// create the connection to database
/* const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test',
    database: 'shopmanagement',
    password: '123',
});
 */
async function  getMySQL_connection(){

    return  await mysql.createConnection({
        host: 'localhost',
        user: 'test',
        database: 'shopmanagement',
        password: '123',
    });
}

function getLastRecord(name)
{
    return new Promise(function(resolve, reject) {
       
     
        var connection =getMySQL_connection();
        console.log("connection"+connection);
        //resolve(11);
        connection.query('select  *  from todos', function (err, rows, fields) {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

getLastRecord().then((aa)=>{
   console.log(aa);
})



/* new Promise(function (resolve, reject) {
        let ct = connection.query('SELECT * FROM `todos`');
        resolve(ct);
    }
).then((dass) => {
    console.log(dass)
}) */
/* connection.query('SELECT * FROM `todos`').then((dd)=>{
   console.log(dd);
}) */
console.log(111);


// simple query