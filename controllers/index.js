const { Form } = require("../models");

const createPost = async (req, res) => {
  console.log(req);
  try {
    const post = await Form.create(req.body);
    return res.status(201).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Form.findAll();
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = {
  createPost,
  getPost
};
