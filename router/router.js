const router = require('express').Router();

const posts = require('../data/data');

const jwt = require('jsonwebtoken');

//get....

router.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.userName === req.user.name))
});



//login route....


//middleware....

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    if (token === null) {
        return res.sendStatus(401)
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next()
    })

}







router.post('/login', (req, res) => {
    //Authenticate User....

    const userName = req.body.userName;
    const user = { name: userName }

    const access_token = jwt.sign(user, process.env.ACCESS_TOKEN);


    res.json({ accessToken: access_token })

})







module.exports = router;