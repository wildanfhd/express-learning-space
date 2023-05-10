// *@desc : Get all contacts
// GET : /api/contacts
// @access public
const getContact = (req, res) => {
    // res.send("Get all Contacts");                       // Regular Response Type
    res.status(200).json({ message: "Get All Contacts" }); // JSON Type Response
};

// *@desc : Create New contact
// POST : /api/contacts
// @access public
const createContact = (req, res) => {
    console.log("The request body is ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({ message: "Create Contact" });
};

// *@desc : Get contact with id
// GET : /api/contacts/:id
// @access public
const getContactByID = (req, res) => {
    res.status(200).json({
        message: `Get Contact for id: ${req.params.id}`,
    });
};

// *@desc : Update contact with id
// PUT : /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(200).json({
        message: `Update Contact for id: ${req.params.id}`,
    });
};

// *@desc : Delete contact with id
// DELETE : /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(200).json({
        message: `Delete Contact for id: ${req.params.id}`,
    });
};

module.exports = {
    getContact,
    createContact,
    getContactByID,
    updateContact,
    deleteContact,
};
