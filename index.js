const mysql = require('mysql2/promise');

const connection = async () => {
    const conn = await mysql.createConnection({
        user: 'root',
        password: 'root',
        database: 'test_auth',
        host: 'mysql',
        port: 3306
    });

    const result = await conn.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT PRIMARY KEY,
            fulname VARCHAR(255) NOT NULL
        );
    `);
}

connection();
