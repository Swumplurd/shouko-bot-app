const {Router} = require('express');
const getUsuarios = require('../controllers/user');
const router = Router();

router.get(
    '/get-users',
    getUsuarios
);

module.exports = router;