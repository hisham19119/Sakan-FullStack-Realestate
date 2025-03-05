const httpStatusText = require("../utils/httpStatusText");
const Property = require("../models/property.model");
const createOne = async (req, res) => {
  const {
    title,
    description,
    price,
    location,
    image,
    images,
    rooms,
    phone,
    bathrooms,
    area,
    garages,
    type,
  } = req.body;
  console.log(req.body);
  const newProperty = new Property({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    type: req.body.type,
    rooms: req.body.rooms,
    phone: req.body.phone,
    bathrooms: req.body.bathrooms,
    area: req.body.area,
    garages: req.body.garages,
    image: req.files.image ? req.files.image[0] : undefined,
    images: req.files.images || [],
    user: req.user.id,
  });
  await newProperty.save();
  res.json({ status: httpStatusText.SUCCESS, data: { newProperty } });
};

const getAll = async (req, res) => {
  const query = req.query;
  const limit = query.limit || 9;
  const page = query.page || 1;
  const skip = (page - 1) * limit;
  const properties = await Property.find({}, { __v: false })
    .populate({
      path: "location",
      select: "location -_id",
    })
    .populate({
      path: "type",
      select: "type -_id",
    })
    .limit(limit)
    .skip(skip);
  res.json({ status: httpStatusText.SUCCESS, data: { properties } });
};

const getUserProperties = async (req, res) => {
  try {
    console.log("Requested User ID:", req.params.id);
    console.log("Authenticated User ID:", req.user.id);

    if (req.user.id !== req.params.id && req.user.role !== "المالك") {
      return res.status(403).json({ error: "Unauthorized Access" });
    }

    const properties = await Property.find({
      user: req.params.id,
    }).populate("location type");

    console.log("Fetched Properties:", properties);

    res.json({ status: "SUCCESS", data: { properties } });
  } catch (error) {
    res.status(500).json({
      status: "FAIL",
      message: "Error fetching properties",
      error: error.message,
    });
  }
};

const getOne = async (req, res) => {
  try {
    console.log("Requested ID:", req.params.id);

    const property = await Property.findById(req.params.id)
      .populate({
        path: "location",
        select: "location -_id",
      })
      .populate({
        path: "type",
        select: "type -_id",
      });

    if (!property) {
      return res.status(404).json({
        status: httpStatusText.FAIL,
        data: { message: "هذه الوحدة غير موجودة" },
      });
    }

    return res.json({
      status: httpStatusText.SUCCESS,
      data: { property },
    });
  } catch (err) {
    return res.status(500).json({
      status: httpStatusText.FAIL,
      message: "حدث خطأ أثناء جلب البيانات",
      error: err.message,
    });
  }
};

const updateOne = async (req, res) => {
  const propertyId = req.params.id;
  let updatedProperty;
  try {
    updatedProperty = await Property.updateOne(
      { _id: propertyId },
      { $set: { ...req.body } }
    );

    if (!updatedProperty) {
      res.status(404).json({
        status: httpStatusText.FAIL,
        data: { Property: "هذه الوحدة غير موجودة" },
      });
    }

    res.status(201).json({
      status: httpStatusText.SUCCESS,
      data: { updatedProperty },
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteOne = async (req, res) => {
  const propertyId = req.params.id;
  let deletedProperty;
  try {
    deletedProperty = await Property.deleteOne({ _id: propertyId });
    if (deletedProperty.deletedCount === 1) {
      const properties = await Property.find({}, { __v: false });
      res.status(200).json({
        status: httpStatusText.SUCCESS,
        data: { properties },
      });
    } else {
      res.status(404).json({
        status: httpStatusText.FAIL,
        data: { property: "هناك خطأ، لم يتم الحذف" },
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "لم يتم الحذف",
    });
  }
};

module.exports = {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne,
  getUserProperties,
};
