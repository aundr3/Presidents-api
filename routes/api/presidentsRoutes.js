const express = require('express')
const router = express.Router()
const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

// All Cartons
// localhost:3000/presidents
router.get('/', (req, res)=> {
    const URL = 'https://api.sampleapis.com/presidents/presidents'

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/presidents', {
                title: 'All Presidents',
                name: 'Presidents List',
                data
            })
        })
})

module.exports = router