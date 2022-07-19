const getAccounts = `SELECT * FROM account`
const getAccountById = `SELECT * FROM account WHERE account_id = $1`;
const checkUsernameExists = `SELECT s FROM account s WHERE s.username = $1`;
const addAccount = `INSERT INTO account (username, password, role_id) VALUES ($1, $2, $3)`;
const updatePassword = `UPDATE account SET password = $1 WHERE account_id = $2`;

module.exports = {
    getAccounts,
    checkUsernameExists,
    addAccount,
    getAccountById,
    updatePassword,
}