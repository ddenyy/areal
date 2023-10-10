const { Article } = require('../models/models');
class ArticleController {
    async createArticle(req,res,next) {
        const { name, text } = req.body;
        try {
            const article = await Article.create({name, text});
            return res.json(article);
        } catch (e)
        {
            next(new ApiError.badRequest(e.message));
        }


    }
    async getArticle(req,res, next) {
        try {
            const articles = await Article.findAll({});
            return res.json(articles);
        }
        catch (e)
        {
            next(new ApiError.badRequest(e.message));
        }
    }

    async getOneArticle(req,res) {

    }
    async updateArticle(req,res) {

    }

    async deleteArticle(req,res) {

    }
}

module.exports = new ArticleController();
