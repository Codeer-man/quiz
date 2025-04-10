const cloudinary = require("cloudinary");

const uploadToCloudinary = async (filepath) => {
  try {
    const result = await cloudinary.UploadStream.upload(filepath);

    return {
      url: result.url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("not able to upload to cloudinary");
    throw new Error(error);
  }
};

module.exports = { uploadToCloudinary };
