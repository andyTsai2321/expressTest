const handleSuccess = require('../service/handleSuccess');
const User = require('../model/user');

const user = {
  async getUsers(req, res) {
    const getAllUsers = await User.find();
    handleSuccess(res, getAllUsers);
  }
}
module.exports = user;
