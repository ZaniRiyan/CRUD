const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:admin@localhost:5432/mydb';

const client = new Client({
    connectionString: connectionString
});
  
client.connect()

const query ="DELETE FROM berita WHERE id_berita ='4' ";

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data update successful');
    client.end();
});