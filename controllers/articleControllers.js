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

    async getOneArticle(req,res, next) {
        try
        {
            const { articleId } = req.params;
            const article = await Article.findOne({
                where: {
                    id: articleId
                }
            });
            return res.json(article);
        } catch (e)
        {
            next(new ApiError.badRequest(e.message));
        }
    }
    async updateArticle(req,res, next) {
        const { articleId } = req.params;
        await Article.update({
            where: {
                id: articleId
            }
        }).then((updArticle) => {
            return res.json(updArticle);
        }).catch((err) => {
            return next(new ApiError.badRequest(err.message));
        })
    }

    async deleteArticle(req,res, next) {
        const { articleId } = req.params;
        await Article.destroy({
            where: {
                id: articleId
            }
        }).then((delArticle)=> {
            return res.json(delArticle);
        }).catch((err) => {
            return next(new ApiError.badRequest(err.message));
        })
    }
}

module.exports = new ArticleController();
