const mysql = require('mysql2/promise');

const connection = async () => {
    const conn = await mysql.createConnection({
        user: 'root',
        password: 'root',
        database: 'test_auth',
        host: 'mysql',
        port: 3306
    });

    await conn.query(`
        CREATE TABLE IF NOT EXISTS users (
            id INT PRIMARY KEY,
            fulname VARCHAR(255) NOT NULL
        );
    `);

    await conn.query(`INSERT INTO users VALUES (0, 'test')`);

    const result = await conn.query('SELECT * FROM users');
    console.log('Result', result);

    console.log(await conn.query('SELECT * FROM information_schema.tables WHERE table_schema=\'test_auth\' AND table_name=\'users\''));
}

connection();
