const DB = global.DB


exports.run = function() {
    DB.query(`CREATE TABLE IF NOT EXISTS  users (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        login VARCHAR(30) NOT NULL,
        instagram_username VARCHAR(30) NOT NULL,
        password VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )`)
}