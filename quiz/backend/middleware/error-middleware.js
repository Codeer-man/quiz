const errorhandling = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "backend error";
  const sucess = err.sucess || "false";

  return res.status(status).json({ message: message, sucess: sucess });
};

module.exports = errorhandling;
