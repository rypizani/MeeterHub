const jwt = require('jsonwebtoken');

exports.JWTController = {

    createToken(payload, refresh = false) {
        const accessToken = jwt.sign(payload, process.env.SECRET, {
          expiresIn: "1h",
        });
        return {
          access_token: accessToken,
          refresh_token: refresh
            ? jwt.sign(payload,process.env.SECRET, {
                expiresIn:"1h",
              })
            : null,
        };
    },
}