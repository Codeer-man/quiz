const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads");
  },
  filename: function (req, res, cb) {
    cd(
      null,
      file.filename + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const checkFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Not a image please upload a image"));
  }
};

module.exports = multer({
  storage: storage,
  fileFilter: checkFileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, //5 mb
  },
});
