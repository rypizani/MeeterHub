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

    verifyToken(token){
      try {
        const validando  =  jwt.verify(token, process.env.SECRET);      
        return validando;  
      } catch (error) {
        return false
      }
    },

    verifyAccessToken(req, res , next){
      const headers = req.headers;
      if (!headers || !headers['authorization']) {
        return res.status(405).json({ message: "Token não autorizado" });
      }

      const token = headers['authorization'].split(' ')[1];
      if(!this.verifyToken(token)){
        res.status(403).send("Acesso negado");
      } else {   
        next();
      }

    }
}