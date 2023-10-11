const { ArticlesModel } = require('../models/models');
const ApiError = require('../error/ApiError')
class ArticleController {
    async createArticle(req,res,next) {
        const { name, text } = req.body;
        try {
            let article = await ArticlesModel.create({name,text});
            return res.json(article);
        } catch (e)
        {
            next(ApiError.badRequest(e.message));
        }

    }
    async getArticle(req,res, next) {
        try {
            const articles = await ArticlesModel.findAll({});
            return res.json(articles);
        }
        catch (e)
        {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOneArticle(req,res, next) {
        try
        {
            const { articleId } = req.params;
            const article = await ArticlesModel.findOne({
                where: {
                    id: articleId
                }
            });
            return res.json(article);
        } catch (e)
        {
            next(ApiError.badRequest(e.message));
        }
    }
    async updateArticle(req,res, next) {
        const { articleId } = req.params;
        await ArticlesModel.update({
            where: {
                id: articleId
            }
        }).then((updArticle) => {
            return res.json(updArticle);
        }).catch((err) => {
            return next(ApiError.badRequest(err.message));
        })
    }

    async deleteArticle(req,res, next) {
        const { articleId } = req.params;
        await ArticlesModel.destroy({
            where: {
                id: articleId
            }
        }).then((delArticle)=> {
            return res.json(delArticle);
        }).catch((err) => {
            return next(ApiError.badRequest(err.message));
        })
    }
}

module.exports = new ArticleController();
