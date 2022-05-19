const handleError = require('../service/handleError');
const handleSuccess = require('../service/handleSuccess');
const Posts = require('../model/user');

const user = {
  async getUsers(req,res){
    const users = await User.find();
    handleSuccess(res, getPosts);
  }
}
module.exports = user;