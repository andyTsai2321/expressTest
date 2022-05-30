const mongoose = require("mongoose");
const handleSuccess = require('../service/handleSuccess');
const Posts = require('../model/post');
const User = require('../model/user');
const appError = require('../service/appError');

const posts = {
  async getPosts(req, res) {
    const { sort, keyword } = req.query;
    const timeSort = sort === 'asc' ? 'createdAt' : '-createdAt';

    const getPosts = await Posts.find().sort(timeSort).populate({
      path: 'user',
      select: 'name photo'
    });
    handleSuccess(res, getPosts);
  },
  async createPosts(req, res, next) {
    const { body } = req;
    if (!body.content) {
      return appError(400, "缺少content", next)
    }
    if (!body.user) {
      return appError(400, "缺少user id", next)
    }
    const newPost = await Posts.create(
      {
        user: "5cabe64dcf0d4447fa60f5e1",
        image: body.image,
        createAt: body.createAt,
        content: body.content,
      }
    )
    handleSuccess(res, newPost);
  },
  async deleteAllPosts(req, res) {
    await Posts.deleteMany({})
    handleSuccess(res);
  },
  async deletePost(req, res, next) {
    const id = req.params.id;
    
    if (!mongoose.isValidObjectId(id)) {
      return appError(400, "id格式錯誤", next);
    }

    await Posts.findByIdAndDelete(id)
    const getPosts = await Posts.find();
    handleSuccess(res, getPosts);
  },
  async updatePost(req, res) {
    const id = req.params.id;
    const { body } = req;
    await Posts.findByIdAndUpdate(id, body)
    const getPosts = await Posts.find();
    handleSuccess(res, getPosts);
  },
}
module.exports = posts;
