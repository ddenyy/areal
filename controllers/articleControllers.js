// const db = require('../database/db')
// class ArticleController {
//     async createArticle(req,res) {
//         const { name, text } = req.body;
//         console.log(name, text);
//
//         const newArticle = await db.query(`INSERT INTO articles (name, text) values ($1, $2) RETURNING *`, [name, text]);
//
//         res.json(newArticle.rows[0]);
//
//     }
//     async getArticle(req,res) {
//         const articles = await db.query(`SELECT * FROM articles`);
//         res.json(articles.rows);
//     }
//
//     async getOneArticle(req,res) {
//         const { id } = req.params;
//         const article = await db.query(`SELECT * FROM articles WHERE id=${id} `);
//         res.json(article.rows);
//     }
//     async updateArticle(req,res) {
//
//     }
//
//     async deleteArticle(req,res) {
//         const { id } = req.params;
//
//         const ArticleDeleted = await db.query(
//             'DELETE FROM articles WHERE id=$1',
//             [id]
//         )
//         res.json(ArticleDeleted.rows[0]);
//     }
// }
//
// module.exports = new ArticleController();
