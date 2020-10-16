const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:admin@localhost:5432/mydb';

const client = new Client({
    connectionString: connectionString
});
  
client.connect()

client.query("SELECT * FROM berita", (err, res) =>{
    console.log(err, res);
    client.end();
});