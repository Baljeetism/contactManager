const express = require('express');
const router = express.Router();
const {getContact,newContact,deleteContact,updateContact,indvContact} = require('../contorllers/contactController');
router.route("/").get(getContact).post(newContact);
router.route("/:id").get(indvContact).put(updateContact).delete(deleteContact);
module.exports = router;