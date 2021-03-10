const { cloudinary } = require("./utils/cloudinary");

export default async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "food",
    });
    console.log(uploadResponse);
    res.send(200).json({ msg: "yoyo" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
};
