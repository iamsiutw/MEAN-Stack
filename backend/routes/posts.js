const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extraceFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, extraceFile, PostController.createPost);

router.put("/:id", checkAuth, extraceFile, PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
