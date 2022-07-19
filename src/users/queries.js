const getUsers = `SELECT * FROM users`
const getUserById = `SELECT * FROM users WHERE user_id = $1`;
const checkEmailExists = `SELECT s FROM users s WHERE s.email = $1`;
const checkPhoneExists = `SELECT s FROM users s WHERE s.phone = $1`;
const addUser = `INSERT INTO users (user_name, email, phone, birth, account_id) VALUES ($1, $2, $3, $4, $5)`;
const updateUser = `UPDATE users SET user_name = $1, email = $2 ,phone = $3 ,birth = $4 WHERE user_id = $5`;

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    updateUser,
    checkPhoneExists,
}