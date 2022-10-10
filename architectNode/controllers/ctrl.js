// import { response } from "express";
// import { json } from "sequelize";
const { databaseVersion } = require("../db/db.js");
const Categorie = require("../models/categorie.js");
const categorieValidation = require("../validation/categorieValidation.js");


// ! all functions CRUD 

const getAll = (req, res) => {
    Categorie.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })
        .then(categorie => {
            res.status(200).render('categorie', { categorie: categorie })

            // res.render('/product',{products: products})
        })
        .catch((error) => res.status(500).json(error))
};


// ! insert row in table 
const createOne = (req, res) => {
    const { body } = req
    //   const article=body.title
    const { error } = categorieValidation(body)
    if (error) return res.status(401).json(error.details[0].message)

    Categorie.create({ ...body })
        .then(categorie => {
            // res.status(201).render('categorie',{categorie:categorie})
            res.redirect('/getAll');
        })
        .catch(error => res.status(500).json(error))
};
// ! return one row from table 

const getOne = (req, res) => {
    const { id } = req.body
    Categorie.findByPk(id)
        .then(categorie => {
            if (!categorie) return res.status(404).json({ msg: 'not found' })
            res.status(200).render('updateForm', { categorie: categorie });
        })
}

// ! update 
const updateOne = (req, res) => {
    // const {id} = req.params
    const { body } = req;
    const id = body.id
    Categorie.findByPk(id).then(categorie => {
        categorie.title = body.title
        categorie.description = body.description
        categorie.save().then(() => {
            res.redirect('/getAll')
        })
    })
}



// ! delete 
const deleteOne = (req, res) => {
    const { id } = req.body
    Categorie.destroy({ where: { id: id } })
        .then(() => {
            res.redirect('/getAll')
        })
        .catch((error) => res.status(500).json(error));
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne };

