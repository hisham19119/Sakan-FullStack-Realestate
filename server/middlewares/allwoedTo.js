// const httpStatusText = require("../utils/httpStatusText");

// module.exports = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({
//         status: httpStatusText.FAIL,
//         message: "This role is not authorized",
//       });
//     }
//     next();
//   };
// };

const httpStatusText = require("../utils/httpStatusText");

module.exports = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        status: httpStatusText.FAIL,
        message: "Unauthorized: User not found",
      });
    }

    if (!roles.includes(req.user.role)) {
      // ✅ استخدم `req.user.role`
      return res.status(403).json({
        status: httpStatusText.FAIL,
        message: "This role is not authorized",
      });
    }

    next();
  };
};
