const express = require("express");
const ReclamationConrollers = require("../Controllers/reclamation");
const router = express.Router();

router.get("/", ReclamationConrollers.getReclamation);

router.post("/", ReclamationConrollers.postReclamation);
router.delete("/:id", ReclamationConrollers.deleteReclamation);

module.exports = router;
