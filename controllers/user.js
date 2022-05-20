const handleError = require('../service/handleError');
const handleSuccess = require('../service/handleSuccess');
const User = require('../model/user');

const user = {
  async getUsers(req,res){
    const users = await User.find();
    handleSuccess(res, users);
  }
}
module.exports = user;