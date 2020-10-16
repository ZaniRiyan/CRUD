const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:admin@localhost:5432/mydb';

const client = new Client({
    connectionString: connectionString
});
  
client.connect()

const query ="UPDATE berita SET kategori='Pendidikan' WHERE kategori='Pendidikan Buruh'";

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data update successful');
    client.end();
});