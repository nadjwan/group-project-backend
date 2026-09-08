const express = require("express");
const {
  getAllItems,
  getItemById,
  insertItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", insertItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
module.exports = router;
