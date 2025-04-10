const role = async (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "Only admin are allowed in this page" });
  }
};

module.exports = role;
