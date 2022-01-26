const router = require('express').Router();

const posts = require('../data/data');

const jwt = require('jsonwebtoken');

//get....

router.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.userName === req.user.name))
});






//middleware....

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next()
    })

}














module.exports = router;