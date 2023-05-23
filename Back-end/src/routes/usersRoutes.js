const express = require('express');
const router = express.Router();
const {currentUser, registerUser, loginUser, updateUser, deleteUser} = require('../Controllers/UsersController')

router.route('/register', registerUser);
router.route('/login', loginUser);
router.route('/account', currentUser);

module.exports = router;
