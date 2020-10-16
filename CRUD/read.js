const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:admin@localhost:5432/mydb';

const client = new Client({
    connectionString: connectionString
});
  
client.connect()

const query ="SELECT * FROM Berita WHERE judul_berita='Usaha'";

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for (let row of res.rows) {
        console.log(row);
    }
    client.end();
});