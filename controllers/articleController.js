import Article from "../models/articles.js"
const getAll = (req,res) =>{

    Article.findAll()
    .then(articles =>{
        res.status(200).json(articles)
    } )
    .catch(error => res.status(500).json(error))
};
const getOne = (req, res) => {
    const {id} = req.params
    Article.findByPk(id)
    .then(article => {
        if (!article)
         return res.status(404).json({msg : "not found"}) 
        res.status(200).json(article)
    })
    .catch((error) => res.status(500).json(error));
 };

const createOne = (req,res) =>{
    // destructring
    const {body} = req

   Article.create({...body})
   .then(() => {
    res.status(201).json({msg: "created"})
   })
   .catch(error => res.status(500).json(error))
};

const updateOne = (req,res) =>{
const {id} = req.params
const {body} =req;

Article.findByPk(id)
.then(article => {
    if (!article)
    return res.status(404).json({msg : "not found"}) 
    article.title = body.title
    article.content = body.content
    article.author = body.author


    article.image = body.image
    article.save()
    .then (() => res.status(201).json({msg: "updated"}))
    .catch((error) => res.status(500).json(error));
})
.catch((error) => res.status(500).json(error));
};

const deleteOne = (req,res) =>{
    const {id} = req.params
    Article.destroy({where : {id : id}})
    .then(ressource => {
        if (ressource == 0) return res.status(404).json({msg : "not found"}) 
            
        res.status(200).json({msg : "deleted "})
    })
    .catch((error) => res.status(500).json(error));
}
export{getAll,getOne,createOne,updateOne,deleteOne}