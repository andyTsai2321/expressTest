var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/post')
const handleErrorAsync = require('../service/handleErrorAsync');

router.get('/', handleErrorAsync(PostsControllers.getPosts));
router.post('/', handleErrorAsync(PostsControllers.createPosts));
router.delete('/', handleErrorAsync(PostsControllers.deleteAllPosts));
router.delete('/:id', handleErrorAsync(PostsControllers.deletePost));
router.patch('/:id', handleErrorAsync(PostsControllers.updatePost));
module.exports = router;
