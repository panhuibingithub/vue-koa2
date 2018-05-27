const Article = require('../models/article.js');

class ArticleController{
    //创建文章
    static async createArticle(ctx, next){
        const { title, content, publish, tags, abstract } = ctx.request.body;
        const createTime = new Date();
        const lastEditTime = new Date();
        if(!title){
            ctx.throw(400, '标题不能为空!');
        }
        if(!content){
            ctx.throw(400, '内容不能为空!');
        }
        if(!abstract){
            ctx.throw(400, '摘要不能为空!');
        }
        const article = new Article({
            title,
            content,
            abstract,
            publish,
            createTime,
            lastEditTime,
            tags
        });
        //article.save()返回promise
        let result = await article.save().catch((err) => {
            ctx.throw(500, '服务器内部错误-数据存储错误！');
        });
        //http://mongoosejs.com/docs/api.html#document_Document-execPopulate
        //populate传入的为字段名，只需要保证schema声明的时候ref指向的model是正确的就行
        //populate('tags')表示把tags字段里面的id替换成真正的对象，可直接加回调，也可以通过execPopulate()返回promise
        await result.populate('tags').execPopulate().catch((err) => {
            ctx.throw(500, '服务器内部错误-数据populate错误！');
        });
        //文章发布成功，顺便也把存储结果返回
        ctx.success({
            msg: '文章创建成功！',
            data: result
        });
    }
}

exports = module.exports = ArticleController;