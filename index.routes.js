const express = require('express');
const { employeeRoutes } = require('./employee');

const apiRoutes = express.Router({ mergeParams: true });

apiRoutes.use('/employee', employeeRoutes);

module.exports = apiRoutes;
