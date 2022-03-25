const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    //console.log('test 5', req.headers);
    try {
        if(!req.headers.authorization || !req.headers.authorization.split(" ")[0] === "Bearer"){
            res.status(401).send("Unauthorized")
        }
        const token = req.headers.authorization.split(" ")[1];
        //console.log('test 4', token);
        const {userId} = jwt.verify(token, process.env.JWT_SECRET)
        //console.log('test 6', userId);
        req.userId = userId
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).send("Server Error in auth middleware")
    }
}

module.exports = {auth}