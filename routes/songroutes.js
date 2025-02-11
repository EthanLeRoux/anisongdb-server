const express = require('express');
const router = express.Router();
const pool = require('../db');

//get all songs
router.get('/',async (req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM song');
            if(rows.length > 0){
                res.status(200).json(rows);
            }
            else{
                console.error("Database error when trying to select all songs: " + error);
            }
    }
    catch(e){

        console.error(e.message);
    }
})

//get one song
router.get('/:id',async (req, res)=>{
    const songId = req.params.id;
    try{
        if(isNaN(songId)){
            res.status(400).json({error: 'Invalid song id'});
        }
        else{
            const [rows] = await pool.query('SELECT * FROM song WHERE song_id = ?', songId);
            if(rows.length > 0){
                res.status(200).json(rows);
            }
            else{
                res.status(404).json({error: 'No song with this id'});
            }
        }
    }
    catch(e){
        res.status(500).send({error: e.message})
        console.log(e.message)
    }
})

router.post('/',async (req,res)=>{
    try{
        const{title, engtitle, lyrics} = req.body;
        pool.query('INSERT INTO song (song_title, eng_title, song_lyrics) VALUES (?,?,?)',[title, engtitle,lyrics]);
        res.status(200).json({
            message: 'New Song created.'
        })
    }
    catch(e){
        res.status(500).send({error: e.message})
        console.log(e.message)
    }
})

router.delete('/:id',async (req, res)=>{
    const songId = req.params.id;
    try{
        if(isNaN(songId)){
            res.status(400).json({error: 'Invalid song id'});
        }
        else{
            const [rows] = await pool.query('DELETE FROM song WHERE song_id = ?', songId);

            if(rows.affectedRows > 1){
                res.status(200).json({message:"Successfully deleted song"});
            }
            else{
                res.status(404).json({error: 'No song with this id'});
            }
        }
    }
    catch(e){
        res.status(500).send({error: e.message})
        console.log(e.message)
    }
})

module.exports = router