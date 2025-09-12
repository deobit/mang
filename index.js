const mysql = require('mysql2/promise');

const connection = async () => {
    const conn = await mysql.createConnection({
        user: 'root',
        password: 'root',
        database: 'test_db',
        host: 'localhost',
        port: 3306
    });

    console.log('Connection Object', conn);
}

connection();
