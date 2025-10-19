const { Router } = require('express');
const { AuthRouters } = require('./auth.routes');
const { checkAuth } = require('../middleware/check-auth');
const { ProfileRoutes } = require('./profile.routes');

const router = Router();
router.use('/auth', AuthRouters);
router.use('/user', checkAuth, ProfileRoutes);

module.exports = {
    AllRouters: router
}