const router = require('express').Router()
const  userController = require('../controller/user')

router.post('/registrasi', (req, res)=>{
    userController.registrasi(req.body)
        .then((result)=> res.json(result))
        .catch((er)=> res.json(err))
})
router.post('/auth/login', (req, res) => {
    userController.login(req.body)
        .then((result) => res.json(result))
        .catch((err)=> res.json(err))
})

router.get("/datakacamata", (req, res) => {
    kacamata.lihatDataKacamata()
        .then((result) => res.json(result))
        .catch((err)=> res.json(err))
})


module.exports = router

