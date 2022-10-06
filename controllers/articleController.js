import Article from "../models/articles.js"
const getAll = (req,res) =>{

    Article.findAll()

    .then(article =>{
        res.status(200).render('allArticles',{article:article})

    } )
    .catch(error => res.status(500).json(error))
};
const getOne = (req, res) => {
    const {id} = req.body
    Article.findByPk(id)
    .then(article => {
        if (!article)
         return res.status(404).json({msg : "not found"}) 
        // res.status(200).json(article)
        // res.redirect('/getAll');
        res.status(200).render('updateArticle', { article: article });
    })
 };


const createOne = (req,res) =>{
    // destructring
    const {body} = req

   Article.create({...body})
   .then(() => {
    res.redirect('/getAll');   })
   .catch(error => res.status(500).json(error))
};

const updateOne = (req, res) => {
    // const {id} = req.params
    const { body } = req;
    const id = body.id
    Article.findByPk(id).then(article => {
        article.title = body.title
        article.author = body.author
        article.content = body.content
        article.image = body.image
        article.save().then(() => {
        res.redirect('/getAll')
        })
    })
}

// const updateOne = (req,res) =>{
// const {id} = req.params
// const {body} =req;

// Article.findByPk(id)
// .then(article => {
//     if (!article)
//     return res.status(404).json({msg : "not found"}) 
//     article.title = body.title
//     article.content = body.content
//     article.author = body.author


//     article.image = body.image
//     article.save()
//     .then (() => res.status(201).json({msg: "updated"}))
//     .catch((error) => res.status(500).json(error));
// })
// .catch((error) => res.status(500).json(error));
// };



const deleteOne = (req,res) =>{
    const {id} = req.body
    Article.destroy({where : {id : id}})
    .then(() => {
            
        res.redirect('/getAll')
    })
    .catch((error) => res.status(500).json(error));
}
export{getAll,getOne,createOne,updateOne,deleteOne}