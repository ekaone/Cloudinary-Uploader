const { cloudinary } = require("./utils/cloudinary");

export default async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:food")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
};
