const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/sign-up', (req, res) => {
    console.log(req.body);
    let user = req.body;

    query = "select email, password, role, status from Users where email = ?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) { 
            if (results.length > 0) {
                return res.status(400).json({message: "Email already in use"});
            }
            if (results.length <= 0) {
                query = "insert into Users (Name, ContactNumber, Email, Password, Status, Role) values (?, ?, ?, ?, 'false', 'user')";
                connection.query(query, [user.name, user.contactNumber, user.email, user.password], (err, res) => {
                    if (!err) {
                        return res.status(200).json({message: "Successfully registered"})
                    }
                    else {
                        return res.status(500).json(err);
                    }
                })
            }
        }
        else {
            return res.status(500).json(err);
        }
    });
})

module.exports = router;