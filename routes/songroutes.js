const express = require('express');
const router = express.Router();

//get all songs
router.get('/',(req,res)=>{
    res.status(200).send({
        message:'this is a song route!'
    });
})

//get one song
router.get('/:id', (req, res)=>{
    try{
        const songId = req.params.id;

    }
    catch(e){
        res.status(500).send({error: e.message})
        console.log(e.message)
    }
})

router.post('/new',(req,res)=>{
    try{

    }
    catch(e){
        res.status(500).send({error: e.message})
        console.log(e.message)
    }
})

router.delete('/:id',(req, res)=>{
    try{

    }
    catch(e){
        res.status(500).send({error: e.message})
        console.log(e.message)
    }
})

module.exports = router