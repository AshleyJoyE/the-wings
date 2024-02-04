
const express = require('express');

const router = express.Router()

module.exports = router;
const Model = require('../model/model');


//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        company: req.body.company,
        street: req.body.street,
        city: req.body.city,
        zipCode: req.body.zipCode,
        state: req.body.state,
        country: req.body.country,
        isInvestment: req.body.isInvestment,
        isSaving: req.body.isSaving,
        isTax: req.body.isTax,
        logo: req.body.logo
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
