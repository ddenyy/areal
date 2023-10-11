const {CommentsModel, ArticlesModel} = require("../models/models");
const ApiError = require("../error/ApiError");

class CommentsControllers {
    async createComments(req,res, next) {
        const { text } = req.body;
        try {
            let article = await CommentsModel.create({text});
            return res.json(article);
        } catch (e)
        {
            next(ApiError.badRequest(e.message));
        }
    }
    async getComments(req,res, next) {
        try {
            const { _articleId } = req.params;
            const comments = await CommentsModel.findAll({
                where: {
                    articleId: _articleId
                }
            });
            return res.json(comments);
        }
        catch (e)
        {
            next(ApiError.badRequest(e.message));
        }
    }

    async getOneComments(req,res, next) {
        try
        {
            const { commentId } = req.params;
            const article = await CommentsModel.findOne({
                where: {
                    id: commentId
                }
            });
            return res.json(article);
        } catch (e)
        {
            next(ApiError.badRequest(e.message));
        }
    }
    async updateComments(req,res, next) {
        const { commentId } = req.params;
        await CommentsModel.update({
            where: {
                id: commentId
            }
        }).then((updComment) => {
            return res.json(updComment);
        }).catch((err) => {
            return next(ApiError.badRequest(err.message));
        })
    }

    async deleteComments(req,res, next) {
        const { commentId } = req.params;
        await ArticlesModel.destroy({
            where: {
                id: commentId
            }
        }).then((delComment)=> {
            return res.json(delComment);
        }).catch((err) => {
            return next(ApiError.badRequest(err.message));
        })
    }
}

module.exports = new CommentsControllers();
