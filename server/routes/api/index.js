const router = require('express').Router();
const registrationRoutes = require('./registration');
const scheduleRoutes = require('./schedule.js');

router.use('/registration', registrationRoutes);
router.use('/schedule', scheduleRoutes);

module.exports = router;
