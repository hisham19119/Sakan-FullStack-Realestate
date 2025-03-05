// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   const authHeader =
//     req.headers["Authorization"] || req.headers["authorization"];
//   if (!authHeader) {
//     return res.status(401).json(" token is required");
//   }
//   const token = authHeader.split(" ")[1];
//   try {
//     const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     req.currentUser = currentUser;
//     next();
//   } catch (err) {
//     return res.status(401).json("invalid token");
//   }
// };

// module.exports = verifyToken;

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
