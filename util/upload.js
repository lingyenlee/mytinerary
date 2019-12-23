const multer = require("multer")

// -----------------------configure multer for uploading files------------------
//set destination and filename
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
})

//define filter for multer uploads
const fileFilter = (req, file, cb) => {
    //reject file if not jpeg or png
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false)
    }
}

//apply parameters to upload
const upload = multer({
    storage: storage,
    //set limits on file size
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

module.exports = upload
