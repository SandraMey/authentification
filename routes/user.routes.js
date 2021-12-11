const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

router.post("/register", authController.signUp);
router.post('/login', authController.signIn);
router.get('/users', userController.getAllUsers);


module.exports = router;