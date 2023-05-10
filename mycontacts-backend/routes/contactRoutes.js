const express = require("express");
const router = express.Router();
const {
    getContact,
    createContact,
    getContactByID,
    updateContact,
    deleteContact,
} = require("../controllers/contactController");

// Using just the Endpoint
// Before
// GET : /api/contacts/
// router.route("/").get(getContact);

// POST : /api/contacts/
// router.route("/").post(createContact);

// GET : /api/contacts/:id
// router.route("/:id").get(getContactByID);

// PUT  : /api/contacts/:id
// router.route("/:id").put(updateContact);

// DELETE : /api/contacts/:id
// router.route("/:id").delete(deleteContact);

// After shorthand
// GET, POST : /api/contacts/
router.route("/").get(getContact).post(createContact);

// GET, PUT, DELETE : /api/contacts/:id
router
    .route("/:id")
    .get(getContactByID)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;
