const jwt = require('jsonwebtoken');
const jwtHelper = {};
const secret = process.env.SECRET;
jwtHelper.GetJwt = function(id,username,type) {
    const token = jwt.sign({id,username,type}, secret, {
        expiresIn: 86400 //24hours,
    });
    return token;
}
jwtHelper.CheckToken = function(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) reject("UnAuthorized");
            else resolve(decoded);
        });
    });
}
jwtHelper.decodeToken=(token)=>{
return jwt.decode(token);
}
module.exports = jwtHelper;