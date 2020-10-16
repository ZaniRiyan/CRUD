const {Pool, Client} = require('pg');
const connectionString = 'postgressql://postgres:admin@localhost:5432/mydb';

const client = new Client({
    connectionString: connectionString
});
  
client.connect()

const query ="INSERT INTO public.berita (id_berita, judul_berita, konten, kategori) VALUES('5','Usaha','Usaha tidak akan menghianati hasil, tetap santuy. Jalanin aja dulu','Pendidikan')";

client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data insert successful');
    client.end();
});
