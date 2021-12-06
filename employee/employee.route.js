const express = require('express');

const routes = express.Router({ mergeParams: true });

const employeeController = require('./employee.controller');

routes.get('/', employeeController.getEmployeeList);

module.exports = routes;
