const pool = require('../db')
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getUserById, [id], (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

const addUser = (req, res) => {
    const { user_name, email, phone, birth, account_id } = req.body

    pool.query(queries.checkPhoneExists, [phone], (error, result) => {
        if (result.rows.length) {
            res.send('Phone already exists')
            return
        }
        pool.query(queries.checkEmailExists, [email], (error, result) => {
            if (result.rows.length) {
                res.send('Email already exists')
                return
            }
            pool.query(queries.addUser, [user_name, email, phone, birth, account_id], (error, result) => {
                if (error) throw error
                res.status(201).send("User Added Successfully")
            })
        })
    })
}


const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { user_name } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { birth } = req.body;

    pool.query(queries.getUserById, [id], (error, result) => {
        const noUserFound = !result.rows.length;
        if (noUserFound) {
            res.send('User does not exist')
            return
        }

        pool.query(queries.updateUser, [user_name, email, phone, birth, id], (error, result) => {
            if (error) throw error
            res.status(200).send("User updated")
        })
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
}