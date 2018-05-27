const Article = require('../models/article.js');

class ArticleService{
    //创建文章
    async createArticle(model){
        const article = new Article(model);
        //article.save()返回promise
        let result = await article.save();
        //http://mongoosejs.com/docs/api.html#document_Document-execPopulate
        //populate传入的为字段名，只需要保证schema声明的时候ref指向的model是正确的就行
        //populate('tags')表示把tags字段里面的id替换成真正的对象，可直接加回调，也可以通过execPopulate()返回promise
        let result2 = await result.populate('tags').execPopulate();
        return result;
    }
}

exports = module.exports = ArticleService;