import express from "express";
const router = express.Router()

import bodyParser from "body-parser";

import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

import {authentication} from "../middleware/basic_auth";
import {
    createAuthor,
    createBook,
    deleteBook,
    showAdminPage
} from "../controllers/admin.controller";

const upload = multer({ storage: storage })
const urlencodedParser = bodyParser.urlencoded({ extended: true })

router.route('/')
    .get(authentication, showAdminPage)
router.route('/:id')
    .delete(authentication, deleteBook)
router.route('/save')
    .post(authentication, upload.single('image'), createBook)
router.route('/saveauthor')
    .post(authentication, urlencodedParser, createAuthor)

export default router