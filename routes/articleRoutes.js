
const Router = require('express');
const router = new Router();
const ArticleControllers = require('../controllers/articleControllers');

router.post('/article', ArticleControllers.createArticle);
router.get('/article', ArticleControllers.getArticle);
router.get('/article/:articleId', ArticleControllers.getOneArticle);
router.patch('/article/:articleId', ArticleControllers.updateArticle);
router.delete('/article/:articleId', ArticleControllers.deleteArticle);

module.exports = router;
