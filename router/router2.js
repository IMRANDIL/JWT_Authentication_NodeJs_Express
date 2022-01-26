const router = require('express').Router();



const jwt = require('jsonwebtoken');




router.post('/login', (req, res) => {
    //Authenticate User....

    const userName = req.body.userName;
    const user = { name: userName }

    const access_token = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN)

    res.json({ accessToken: access_token, refreshToken: refreshToken })

})






function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '15s' });
}















module.exports = router;