const employeeService = require('./employee.service');
const { successHandler } = require('../common/handlers');

const getEmployeeList = async (req, res) => {
  const data = await employeeService.getEmployeeList();
  return successHandler({ data }, req, res);
};

module.exports = {
  getEmployeeList,
};
