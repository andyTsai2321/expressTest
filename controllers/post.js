const handleError = require('../service/handleError');
const handleSuccess = require('../service/handleSuccess');
const Posts = require('../model/post');

const posts = {
  async getPosts(req,res){
    const getPosts = await Posts.find();
    handleSuccess(res, getPosts);
  },  
  async createPosts(req,res){
      try {
        const {body}=req;
        const newPost = await Posts.create(
          {
            name: body.name,
            tags: body.tags,
            image: body.image,
            createAt: body.createAt,
            content: body.content,
            likes: body.likes,
            comments: body.comments,
          }
        )
        handleSuccess(res, newPost);
      } catch (e) {
        console.log(e)
        handleError(res, e)
      }
  },
  async deleteAllPosts(req,res){
    await Posts.deleteMany({})
    handleSuccess(res);
  },
  async deletePost(req,res){
      try {
        const id = req.params.id;
        await Posts.findByIdAndDelete(id)
        const getPosts = await Posts.find();
        handleSuccess(res, getPosts);
      } catch (e) {
        // console.log(e)
        handleError(res)
      }
  },
  async updatePost(req,res){
    try {
      const id = req.params.id;
      const {body}=req;
      await Posts.findByIdAndUpdate(id, body)
      const getPosts = await Posts.find();
      handleSuccess(res, getPosts);
    } catch (e) {
      console.log(e)
      handleError(res, e)
    }
  },
}
module.exports = posts;