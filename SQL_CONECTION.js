const mysql = require('mysql2');


const connection = mysql.createPool({
  host: 'localhost',
  user: 'server_user',
  password: '6L@11Sk32gA#',
  database: 'segucomm_db',
  port: 3306
});


/* CONEXION A LA BASE DE DATOS DE PRODUCCION EN SERVER HOSTGATOR
const connection = mysql.createPool({
  host: 'mx90.hostgator.mx',
  user: 'segucomm_admin',
  password: 's3GuC0m@',
  database: 'segucomm_db',
  port: 3306
});
*/

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
