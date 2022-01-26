const router = require('express').Router();



const jwt = require('jsonwebtoken');

let refreshTokenn = []

router.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokenn.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.name });
        res.json({ accessToken: accessToken })
    })
});




//delete token....


router.delete('/logout', (req, res) => {
    refreshTokenn = refreshTokenn.filter(token => token !== req.body.token);

    res.sendStatus(204)
})


router.post('/login', (req, res) => {
    //Authenticate User....

    const userName = req.body.userName;
    const user = { name: userName }

    const access_token = generateAccessToken(user)
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN);
    refreshTokenn.push(refreshToken)

    res.json({ accessToken: access_token, refreshToken: refreshToken })

})






function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '15s' });
}















module.exports = router;