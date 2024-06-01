const mysql = require('mysql2');

/*
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Javier117',
  database: 'SegucomDB',
  port: 3306
});
*/

const connection = mysql.createPool({
  host: 'mx90.hostgator.mx',
  user: 'segucomm_admin',
  password: 's3GuC0m@',
  database: 'segucomm_db',
  port: 3306
});


// Verificar la conexión
connection.getConnection((err, conn) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
    console.log('\n---------------------💻 Segucom Running API 💻---------------');
    conn.release(); // Liberar la conexión cuando no se necesita
  }
});

module.exports = connection;
