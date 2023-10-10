
const Router = require('express');
const router = new Router();
const CommentsControllers = require('../controllers/commentsControllers');

router.post('/comment', CommentsControllers.createComments);
router.get('/comment', CommentsControllers.getComments);
router.get('/comment/:commentId', CommentsControllers.getOneComments);
router.patch('/comment/:commentId', CommentsControllers.updateComments);
router.delete('/comment/:commentId', CommentsControllers.deleteComments);

module.exports = router;

