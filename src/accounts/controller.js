const pool = require("../db");
const queries = require("./queries");

const getAccounts = (req, res) => {
    pool.query(queries.getAccounts, (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const getAccountById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getAccountById, [id], (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const addAccount = (req, res) => {
    const { username, password, role_id } = req.body;
    pool.query(queries.checkUsernameExists, [username], (error, result) => {
        if (result.rows.length) {
            res.send('Username already exists');
            return;
        }

        pool.query(queries.addAccount, [username, password, role_id], (error, result) => {
            if (error) throw error;
            res.status(201).send("Account Created Successfully");
        })
    })
}

const updatePassword = (req, res) => {
    const id = parseInt(req.params.id);
    const { password } = req.body;

    pool.query(queries.getAccountById, [id], (error, result) => {
        const noAccountFound = !result.rows.length;
        if (noAccountFound) {
            res.send('Account does not exist');
            return;
        }

        pool.query(queries.updatePassword, [password, id], (error, result) => {
            if (error) throw error
            res.status(200).send("Password updated")
        })
    });
};

module.exports = {
    getAccounts,
    getAccountById,
    addAccount,
    updatePassword,

}